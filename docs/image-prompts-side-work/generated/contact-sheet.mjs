import { readdirSync, statSync } from 'fs';
import path from 'path';
import { writeFileSync } from 'fs';

const dir = '.';
const pngs = readdirSync(dir)
  .filter(f => f.endsWith('.png'))
  .sort();

const sceneMap = {};
for (const png of pngs) {
  const m = png.match(/^(SCENE-\d{2})--([\w-]+)--v(\d+)\.png$/);
  if (!m) continue;
  const [, scene, alias, variant] = m;
  if (!sceneMap[scene]) sceneMap[scene] = [];
  sceneMap[scene].push({ png, alias, variant: parseInt(variant) });
}

// Sort each scene's variants by variant number
Object.values(sceneMap).forEach(v => v.sort((a, b) => a.variant - b.variant));

let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Set-A Contact Sheet</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: #f5f5f5;
      padding: 20px;
      line-height: 1.5;
    }
    .container { max-width: 1400px; margin: 0 auto; }
    h1 { margin-bottom: 10px; font-size: 28px; color: #333; }
    .meta { font-size: 13px; color: #666; margin-bottom: 30px; }
    .scene-group { background: white; margin-bottom: 40px; border-radius: 4px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .scene-header { background: #f9f9f9; padding: 16px; border-bottom: 1px solid #e5e5e5; }
    .scene-header h2 { font-size: 16px; font-weight: 600; color: #222; margin: 0; }
    .scene-header p { font-size: 12px; color: #666; margin: 4px 0 0; }
    .variants { display: flex; gap: 20px; padding: 20px; flex-wrap: wrap; }
    .variant { flex: 0 1 calc(33.333% - 14px); }
    @media (max-width: 1000px) { .variant { flex: 0 1 calc(50% - 10px); } }
    @media (max-width: 600px) { .variant { flex: 0 1 100%; } }
    .variant img { width: 100%; height: auto; border-radius: 2px; display: block; }
    .variant-label { font-size: 11px; color: #666; margin-top: 8px; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Set-A Contact Sheet — Stephenson PT Service Pages</h1>
    <div class="meta">
      6 services × (hero landscape 1536×1024 + inset square 1024×1024) × 2 variants each = 24 images.
      Identity reference: interim-rebecca-face-IMG_6163.jpg (replace with preferred-reference-headshot.png when ready).
      Quality: medium (re-run at high for final picks). Prompt log: run-log.jsonl.
    </div>
`;

const sceneOrder = Object.keys(sceneMap).sort();
for (const scene of sceneOrder) {
  const variants = sceneMap[scene];
  if (variants.length === 0) continue;
  const alias = variants[0].alias;
  const m = alias.match(/^(.+?)--(hero|inset)-([AB])$/);
  const [, service, slot, set] = m || ['', alias, '', ''];

  html += `
    <div class="scene-group">
      <div class="scene-header">
        <h2>${scene} — ${service}</h2>
        <p>${slot.toUpperCase()} · Set ${set}</p>
      </div>
      <div class="variants">
`;
  for (const v of variants) {
    html += `        <div class="variant">
          <img src="${v.png}" alt="${scene} variant ${v.variant}">
          <div class="variant-label">v${v.variant}</div>
        </div>\n`;
  }
  html += `      </div>
    </div>\n`;
}

html += `
  </div>
</body>
</html>
`;

writeFileSync('contact-sheet.html', html);
console.log('wrote contact-sheet.html');
