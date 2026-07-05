vv# Internal Development Conventions

## Rules for humans & agents

** These are to be followed at all times and referenced whenever an agent, subagent, background process or the like are causing changes to the project at the source level **

### Starting new work

- /goal: always set one, if the convo will last 3>= turns
- superpowers:front-end design sets up success for anything relying on taste
- superpowers:brainstorming skill a more common way to bgegin and

### Git workflow (gitflow)

This project follows **gitflow**. These rules are enforced both here and by a `PreToolUse` hook (see _Enforcement_ below):

- **`develop` is the integration branch.** All feature work branches from `develop` and is PR'd back into `develop`.
- **`main` is release-only.** It changes **exclusively** through a human-reviewed pull request from `develop`. **No agent may push, merge, or fast-forward directly to `main`** — not even a "harmless" one-line doc commit. Violating this single rule is what created the branch tangle this section exists to prevent.
- **PRs always target `develop`:** `gh pr create --base develop …`. A PR against `main` is opened only at the explicit request of the human maintainer (a release or hotfix).
- **Feature flow:** `git checkout -b feature/<name> develop` → work → `gh pr create --base develop` → human reviews and merges.
- **Hotfix flow:** `hotfix/<name>` off `main` → PR into `main` (the human merges) → **back-merge `main` → `develop`** so the fix survives the next release.
- **Keep `develop` ahead:** any time something lands on `main`, back-merge `main` → `develop`. `develop` must always be a superset of `main`; never let `main` lead

### Token considerations

- subagents PREVENT CONTEXT BLOAT by keeping output for 1-off taskls out of the main conversation thread
- utilize hooks to reduce overhead
- especially for routine testing, filterdown to the actual ERROR, WARNING, or PASS messages for brevity:

  '''bash
  npm test 2>&1 | tee /tmp/test.log | grep -A 8 -B 3 -E "FAIL|ERROR|Error|Expected|Received" | head -200
  '''

- When running tests, do not stream full output into context.
- Save full logs to a temp file.
- Read only the first 200 relevant failure lines unless I ask for more.

### Branch naming

- `feature/<name>` — new work, branched from `develop`.
- `hotfix/<name>` — urgent production fix, branched from `main`.
- `archive/<name>` — superseded, abandoned, or rescued work kept for reference. **We archive, we do not delete**: dead ends become `archive/*` branches or tags, never `git branch -D` of real work.
- `wip/<name>` — explicit checkpoints not yet ready for integration. Only use with explicit permission

### Enforcement

- A `PreToolUse` hook on `Bash` (in `.claude/settings.json`) blocks the bright-line violations above
  direct pushes/merges to `main` and `gh pr create --base main`. If it blocks you, that is by design: prepare the change on `develop`/`feature/*` and submit a PR with the key info

### Cleanup / documentation

- add new files to CLAUDE.md attention routing
- new development processes, hooks, internals, settings, applicable to all committers belong in this file

### Styling conventions

- Compomnent-based styling
  - No runtime `<style>` injection
  - CSS Modules (`Component.module.css`)

- **Three responsive layers:**

1. media queries at the canonical breakpoints
   lg: 1199px
   md: 991px
   sm: 767px
   xs: 599px

2. container queries:
   max-width for page structure only
   for component adaptation, `src/styles/grids.css`
3. Typography:
   - **fluid rem `clamp()` tokens** for type/space (`tokens/typography.css`, `tokens/spacing.css`, anchors 360→1200px).
   - **Fluid type rule (WCAG 1.4.4):** every font-size clamp is rem-anchored (min, max, and intercept) with **max ≤ 1.5×min**. Bare-vw font sizes are banned (WCAG F94). Space tokens are exempt.
   - **Fonts are self-hosted** (`public/fonts/*.woff2`, preloaded in `index.html` with `crossorigin`). Never reintroduce a Google Fonts `@import`/`<link>`.

- Responsive Imagery
  - **Images go through `<ResponsiveImage>`** (`components/core`)
  - AVIF/WebP/JPEG srcset via `vite-imagetools` query imports.
  - Exactly one `priority` (LCP) image per page
  - everything below the fold lazy-loads
  - every image carries intrinsic `width`/`height`
- **Speculative loading:** `index.html` ships Speculation Rules (prefetch immediate / prerender moderate). Chromium-only progressive enhancement — never rely on it; gate on-load side effects with `document.prerendering` if any are added.
