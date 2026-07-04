// Builds website_scene_manifesto.txt from dalle-queue.md (single source of truth).
// Re-run whenever dalle-queue.md is revised:  node build-manifesto.mjs
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const md = await readFile(path.join(dir, 'dalle-queue.md'), 'utf8');

const lines = md.split(/\r?\n/);
const scenes = [];
let service = null, slug = null, files = {}, current = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  const svc = line.match(/^## \d+\. (.+?) — `(.+?)`/);
  if (svc) { service = svc[1]; slug = svc[2]; files = {}; continue; }

  const f = line.match(/^Files: `(.+?)`, `(.+?)`/);
  if (f) { files = { hero: f[1], inset: f[2] }; continue; }

  const slot = line.match(/^### (Hero|Inset) — Set ([AB])/);
  if (slot && service) {
    current = {
      service, slug,
      slot: slot[1].toLowerCase(),
      set: slot[2],
      size: slot[1] === 'Hero' ? '1536x1024' : '1024x1024',
      note: slot[1] === 'Hero' ? 'wide landscape' : 'square, crop to 4:3 after selection',
      output: files[slot[1].toLowerCase()] ?? `${slug}-${slot[1].toLowerCase()}.png`,
      prompt: '', alt: '',
    };
    scenes.push(current);
    continue;
  }

  if (line.startsWith('```') && current && !current.prompt) {
    const buf = [];
    while (++i < lines.length && !lines[i].startsWith('```')) buf.push(lines[i]);
    current.prompt = buf.join('\n').trim();
    continue;
  }

  const alt = line.match(/^Alt text: `(.+?)`/);
  if (alt && current) { current.alt = alt[1]; current = null; }
}

const blocks = scenes.map((s, idx) => {
  const id = `SCENE-${String(idx + 1).padStart(2, '0')}`;
  const alias = `${s.slug}--${s.slot}-${s.set}`;
  return [
    `=== ${id} ===`,
    `Alias: ${alias}`,
    `Service: ${s.service} (${s.slug})`,
    `Slot: ${s.slot} | Set: ${s.set} | Size: ${s.size} (${s.note})`,
    `Output: ${s.output}`,
    `Status: TODO`,
    `Alt: ${s.alt}`,
    `Prompt:`,
    s.prompt,
    '',
  ].join('\n');
});

const header = `WEBSITE SCENE MANIFESTO — Stephenson Physical Therapy
Generated from dalle-queue.md — do not hand-edit; re-run build-manifesto.mjs after queue revisions.
${scenes.length} scenes: 6 services x (hero + inset) x (Set A / Set B).
Scene prompts already embed the studio world, style guardrails, and the verbatim
text identity anchor for the therapist. The identity codex lives in
rgspt-identiy-reference.txt and is merged at generation time.

`;

await writeFile(path.join(dir, 'website_scene_manifesto.txt'), header + blocks.join('\n'), 'utf8');
console.log(`wrote website_scene_manifesto.txt with ${scenes.length} scenes`);
for (const [i, s] of scenes.entries())
  console.log(`SCENE-${String(i + 1).padStart(2, '0')}  ${s.slug}  ${s.slot}-${s.set}`);
