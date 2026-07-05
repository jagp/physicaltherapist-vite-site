// RGS Image Generator — programmatic replacement for the "RGS Image Generator" custom GPT.
// Generates website images via the OpenAI Images API, attaching the same fixed set of
// reference photos of Dr. Stephenson to every call (the persistence the custom GPT can't give:
// GPT knowledge files are text-retrieval only and never reach the image model as pixels).
//
// Zero npm dependencies — Node >= 20 (global fetch / FormData / Blob).
//
// Usage:
//   node generate-images.mjs --list                          (mirror of the GPT's /list)
//   node generate-images.mjs --generate SCENE-01             (mirror of /generate SCENE-01)
//   node generate-images.mjs --generate SCENE-01,SCENE-03 -n 2
//   node generate-images.mjs --all-set-a                     ("6 sets": hero+inset x 6 services, Set A)
//   node generate-images.mjs --generate SCENE-01 --dry-run   (show assembled prompt, no API call)
// Options:
//   --quality low|medium|high   (default medium; use high for final picks)
//   --model gpt-image-2|gpt-image-1.5|gpt-image-1   (default: try in that order)
//   --moderation auto|low       (default auto)
//   -n <count>                  variants per scene (default 1)
//
// API key: env OPENAI_API_KEY, or a .env file next to this script with OPENAI_API_KEY=sk-...
//
// Reference images (checked in this order; all matches are attached to every call):
//   1. preferred-reference-headshot.(png|jpg|jpeg|webp) in this folder   <- the canonical headshot
//   2. any .png/.jpg/.jpeg/.webp inside reference/                        <- interim face crops etc.
// If none exist, falls back to text-only generation using the identity codex.

import { readFile, writeFile, mkdir, readdir, appendFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(DIR, 'generated');
const MODELS = ['gpt-image-2', 'gpt-image-1.5', 'gpt-image-1'];

// gpt-image-2 per-image cost by quality/size (USD) — for the pre-flight estimate only.
const COST = {
  low: { '1024x1024': 0.006, '1536x1024': 0.005 },
  medium: { '1024x1024': 0.053, '1536x1024': 0.041 },
  high: { '1024x1024': 0.211, '1536x1024': 0.165 },
};

// ---------- args ----------
const args = process.argv.slice(2);
const has = (f) => args.includes(f);
const val = (f, d) => { const i = args.indexOf(f); return i >= 0 && args[i + 1] ? args[i + 1] : d; };

const quality = val('--quality', 'medium');
const forcedModel = val('--model', null);
const moderation = val('--moderation', 'auto');
const variants = parseInt(val('-n', '1'), 10);
const dryRun = has('--dry-run');

// ---------- manifesto ----------
function parseManifesto(text) {
  const scenes = [];
  const blocks = text.split(/^=== (SCENE-\d+) ===$/m).slice(1);
  for (let i = 0; i < blocks.length; i += 2) {
    const id = blocks[i];
    const body = blocks[i + 1];
    const field = (name) => (body.match(new RegExp(`^${name}: (.*)$`, 'm')) || [])[1]?.trim();
    const prompt = body.split(/^Prompt:$/m)[1]?.trim();
    const slotLine = field('Slot') || '';
    const m = slotLine.match(/^(\w+) \| Set: (\w) \| Size: (\S+)/);
    scenes.push({
      id,
      alias: field('Alias'),
      service: field('Service'),
      slot: m?.[1], set: m?.[2], size: m?.[3],
      output: field('Output'),
      alt: field('Alt'),
      prompt,
    });
  }
  return scenes;
}

// ---------- identity ----------
async function identityAnchors() {
  const txt = await readFile(path.join(DIR, 'rgspt-identiy-reference.txt'), 'utf8');
  const m = txt.match(/Doctor Appearance Codex:\r?\n([\s\S]*?)\r?\n\r?\n/);
  return m ? m[1].trim() : '';
}

async function findReferenceImages() {
  const exts = /\.(png|jpe?g|webp)$/i;
  const refs = [];
  for (const f of await readdir(DIR)) {
    if (/^preferred-reference-headshot\./i.test(f) && exts.test(f)) refs.push(path.join(DIR, f));
  }
  const refDir = path.join(DIR, 'reference');
  if (existsSync(refDir)) {
    for (const f of await readdir(refDir)) if (exts.test(f)) refs.push(path.join(refDir, f));
  }
  return refs;
}

function buildPrompt(scene, anchors, withRefs) {
  const identityHeader = withRefs
    ? `IDENTITY REFERENCE: The physical therapist in this scene must be the exact woman shown in the attached reference photo(s) — preserve her precise facial identity, bone structure, hairstyle, and glasses. Do not invent a new face and do not idealize or de-age her.`
    : `IDENTITY (no photo reference available — follow this codex exactly):`;
  return [
    identityHeader,
    anchors,
    '',
    'SCENE:',
    scene.prompt,
    '',
    'STYLE: high-end commercial photography for a healthcare website, shot on a 35mm lens, clean and professional, authentic candid feel. No cartoonish or hyper-stylized AI artifacts, no text, no logos, no watermark.',
  ].join('\n');
}

// ---------- api ----------
async function apiKey() {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY;
  const repoRoot = path.join(DIR, '..', '..');
  const candidates = [
    path.join(DIR, '.env'),
    path.join(repoRoot, '.git', '.env'),
    path.join(repoRoot, '.github', 'workflows', '.env'),
  ];
  for (const envFile of candidates) {
    if (!existsSync(envFile)) continue;
    // tolerate OPENAI_API_KEY / OPEN_API_KEY, spaces around '=', quotes, trailing ';'
    const m = (await readFile(envFile, 'utf8')).match(
      /OPEN(?:AI)?_API_KEY\s*=\s*["']?(sk-[A-Za-z0-9_-]+)/,
    );
    if (m) return m[1];
  }
  return null;
}

async function callImagesApi({ key, model, prompt, size, refs, n }) {
  const endpoint = refs.length ? 'edits' : 'generations';
  const url = `https://api.openai.com/v1/images/${endpoint}`;
  let res;
  if (refs.length) {
    const form = new FormData();
    form.append('model', model);
    form.append('prompt', prompt);
    form.append('size', size);
    form.append('quality', quality);
    form.append('n', String(n));
    if (moderation !== 'auto') form.append('moderation', moderation);
    // gpt-image-2 runs high input fidelity automatically and rejects the param
    if (model !== 'gpt-image-2') form.append('input_fidelity', 'high');
    for (const ref of refs) {
      const buf = await readFile(ref);
      const type = /\.png$/i.test(ref) ? 'image/png' : /\.webp$/i.test(ref) ? 'image/webp' : 'image/jpeg';
      form.append('image[]', new Blob([buf], { type }), path.basename(ref));
    }
    res = await fetch(url, { method: 'POST', headers: { Authorization: `Bearer ${key}` }, body: form });
  } else {
    const body = { model, prompt, size, quality, n };
    if (moderation !== 'auto') body.moderation = moderation;
    res = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  }
  const json = await res.json();
  if (!res.ok) {
    const err = new Error(json.error?.message || `HTTP ${res.status}`);
    err.status = res.status;
    err.code = json.error?.code;
    throw err;
  }
  return json;
}

// model fallback: unknown-model errors move down the chain; anything else surfaces
async function generateScene({ key, scene, refs, anchors }) {
  const prompt = buildPrompt(scene, anchors, refs.length > 0);
  const chain = forcedModel ? [forcedModel] : MODELS;
  let lastErr;
  for (const model of chain) {
    try {
      const json = await callImagesApi({ key, model, prompt, size: scene.size, refs, n: variants });
      return { json, model, prompt };
    } catch (e) {
      lastErr = e;
      const modelMissing = /model|not found|does not exist|invalid/i.test(e.message) && (e.status === 404 || e.status === 400);
      if (!modelMissing) throw e;
      console.warn(`  model ${model} unavailable (${e.message}) — trying next`);
    }
  }
  throw lastErr;
}

// ---------- main ----------
const manifesto = await readFile(path.join(DIR, 'website_scene_manifesto.txt'), 'utf8');
const scenes = parseManifesto(manifesto);

async function doneVariants(scene) {
  if (!existsSync(OUT_DIR)) return 0;
  return (await readdir(OUT_DIR)).filter((f) => f.startsWith(`${scene.id}--`)).length;
}

if (has('--list')) {
  console.log('ID        Slot   Set  Size       Done  Service');
  for (const s of scenes) {
    const done = await doneVariants(s);
    console.log(
      `${s.id}  ${s.slot.padEnd(5)}  ${s.set}    ${s.size.padEnd(9)}  ${String(done).padEnd(4)}  ${s.service}`,
    );
  }
  process.exit(0);
}

let selected = [];
if (has('--all-set-a')) selected = scenes.filter((s) => s.set === 'A');
else if (has('--all-set-b')) selected = scenes.filter((s) => s.set === 'B');
else if (has('--generate')) {
  const ids = val('--generate', '').split(',').map((x) => x.trim()).filter(Boolean);
  selected = ids.map((id) => {
    const s = scenes.find((sc) => sc.id === id.toUpperCase() || sc.alias === id);
    if (!s) { console.error(`unknown scene: ${id} (use --list)`); process.exit(1); }
    return s;
  });
} else {
  console.log('nothing to do — pass --list, --generate <ID[,ID...]>, or --all-set-a');
  process.exit(0);
}

const anchors = await identityAnchors();
const refs = await findReferenceImages();
const est = selected.reduce((sum, s) => sum + (COST[quality]?.[s.size] ?? 0) * variants, 0);

console.log(`scenes: ${selected.map((s) => s.id).join(', ')}`);
console.log(`variants per scene: ${variants} | quality: ${quality} | moderation: ${moderation}`);
console.log(refs.length
  ? `reference images (attached to every call):\n${refs.map((r) => `  - ${path.relative(DIR, r)}`).join('\n')}`
  : 'NO reference images found — falling back to text-only identity codex');
console.log(`estimated cost (gpt-image-2 rates): ~$${est.toFixed(2)}`);

if (dryRun) {
  console.log('\n--- DRY RUN: assembled prompt for first scene ---\n');
  console.log(buildPrompt(selected[0], anchors, refs.length > 0));
  process.exit(0);
}

const key = await apiKey();
if (!key) {
  console.error('\nOPENAI_API_KEY not set. Set it in the environment or in a .env file next to this script.');
  process.exit(1);
}

await mkdir(OUT_DIR, { recursive: true });
let failures = 0;
for (const scene of selected) {
  const startAt = await doneVariants(scene);
  console.log(`\n${scene.id} (${scene.alias}) — generating ${variants} variant(s)...`);
  try {
    const { json, model, prompt } = await generateScene({ key, scene, refs, anchors });
    for (const [i, img] of (json.data ?? []).entries()) {
      const file = path.join(OUT_DIR, `${scene.id}--${scene.alias}--v${startAt + i + 1}.png`);
      await writeFile(file, Buffer.from(img.b64_json, 'base64'));
      console.log(`  saved ${path.relative(DIR, file)}`);
    }
    await appendFile(
      path.join(OUT_DIR, 'run-log.jsonl'),
      JSON.stringify({ at: new Date().toISOString(), scene: scene.id, model, quality, variants, refs: refs.map((r) => path.basename(r)), prompt }) + '\n',
    );
  } catch (e) {
    failures++;
    console.error(`  FAILED: ${e.message}`);
    if (/billing|quota|insufficient/i.test(e.message)) {
      console.error('\naccount-level billing error — aborting batch (fix at platform.openai.com -> Settings -> Billing/Limits)');
      break;
    }
  }
}
console.log(`\ndone — ${selected.length - failures}/${selected.length} scenes succeeded. Output: ${OUT_DIR}`);
if (failures) process.exit(1);
