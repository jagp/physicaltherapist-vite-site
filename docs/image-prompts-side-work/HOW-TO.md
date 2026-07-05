# Programmatic image generation (replaces the "RGS Image Generator" custom GPT)

Why this exists: custom-GPT **knowledge files never reach the image model as pixels** — they're
text-retrieval only, so the GPT could never truly "see" the headshots. The OpenAI Images API
`edits` endpoint takes reference images as first-class inputs, and `generate-images.mjs` attaches
the same fixed reference set to **every** call automatically. No ChatGPT interaction, no manual
attaching, ever.

## One-time setup

1. Get an API key at <https://platform.openai.com/api-keys> (separate billing from ChatGPT Plus;
   if `gpt-image-*` models 404, complete organization verification at
   platform.openai.com → Settings → Organization → Verify — the script auto-falls back
   `gpt-image-2 → 1.5 → 1` in the meantime).
2. Provide the key either way:
   - `setx OPENAI_API_KEY "sk-..."` (new shells), or
   - create `.env` next to the scripts: `OPENAI_API_KEY=sk-...` (git-ignored here).

## Reference images (the "unchanging headshot set")

Attached to every generation call, discovered in this order:

1. `preferred-reference-headshot.png|jpg|jpeg|webp` in this folder — **drop Rebecca's chosen
   headshot here with exactly that name and it wins automatically.**
2. Anything in `reference/` — currently `interim-rebecca-face-IMG_6163.jpg`, a face crop from
   the clinic candids (converted from HEIC in `pre-assets/converted/`).

If neither exists, the script falls back to text-only generation using the identity codex
(`rgspt-identiy-reference.txt`) — the same fidelity level the custom GPT was capped at.

## Commands

```powershell
node generate-images.mjs --list                      # scene table + done counts (GPT's /list)
node generate-images.mjs --generate SCENE-01         # one scene (GPT's /generate SCENE-01)
node generate-images.mjs --generate SCENE-01 -n 3    # 3 variants (hands/glasses re-roll insurance)
node generate-images.mjs --all-set-a                 # the "6 sets" batch: hero+inset × 6 services, Set A
node generate-images.mjs --generate SCENE-01 --dry-run   # print assembled prompt, no spend
```

Options: `--quality low|medium|high` (default **medium** for proofing; re-run winners at `high`),
`--model` to pin a model, `--moderation low` if a scene gets over-flagged, `-n <variants>`.

Outputs land in `generated/` (git-ignored) as `SCENE-XX--<service>--<slot>-<set>--vN.png`, with
every prompt/model/reference logged to `generated/run-log.jsonl`. Promote winners to
`src/assets/service-page-images/` (insets: crop 1024×1024 → 4:3 to match existing assets).

## Cost (gpt-image-2 rates, per image)

| Quality | Hero 1536×1024 | Inset 1024×1024 |
|---------|----------------|-----------------|
| low     | $0.005         | $0.006          |
| medium  | $0.041         | $0.053          |
| high    | $0.165         | $0.211          |

Full Set A batch (12 images): ~$0.56 at medium, ~$2.26 at high.

## After the SEO revision of dalle-queue.md

```powershell
node build-manifesto.mjs    # regenerates website_scene_manifesto.txt from dalle-queue.md
```

The manifesto is derived — never hand-edit it. (It also doubles as the second knowledge file
for the custom GPT if you keep it around, but the script path makes the GPT unnecessary.)

## Size note vs the queue doc

`dalle-queue.md` says heroes are 1792×1024 — that was DALL·E 3's landscape size. The gpt-image
models use **1536×1024**; the manifesto already maps hero scenes to it. Same aspect intent, and
`ServiceHero` fades the image edge anyway.
