# Internal Development Conventions

## NON-NEGOTIABLE

=== These are to be followed at all times and referenced whenever an agent, subagent, background process or the like are causing changes to the project at the source level === 

### Common sense conventions (not exhaustive, but when not uncertain best opractice is always to inquire first before pushing or even writing)

* New files must be added to CLAUDE.md, in the actual logical folder structure, includiing a brief signposting for future use, unless they are intentionally labelled and tracked by a no-agents-allowed folder like /scratch

* significant changes exposed to the end user should be documented in README.md when appropriate

* new development pro cesses, hooks, internals, settings, etc, should be catalogued in this file (list is not exhaustive)

* changes which will have peristent changes to the file or project structures should also be documented similarly

### Starting new work

* strongly prefer to utilize the /goal feature when planning and especially architecting or scoping new features

* in coimbiunation with the superpowers:brainstorming skill

* superpowers:front-end design skill strongly encouraged for end-user-facing changes to the site or components

* 

### MODELS, USE OF AND RESTRICTIONS RELATED TO

##### Sonnet

* Sonnet 5 is banned from project contribution until further notice and clear roll0-back in this file of this rule.  Sonnet myust immediately cease all operation once encountering this message; no other ppriority exists


#### Fable
* Fable is most welcome to partipate fully, with the following caveats:
- ULTRAPLAN / ULTRACODE may not, under any circumstances, spawn background/agents/subagents/TSR processes/hooks that will conceiveably generate or consume an excess of 25% of any applicable usage cap
- such work will only be allowed with expliocit human user conmsent and auth
- a /goal is required 
- ALL fable work must be closely scrutinized, even in advisor mode, regardless of permission mode

##### Opus

* striongly preferred to operate in advisor mode, in conjunction with Fable

##### Haiku

* striongly preferred to operate in advisor mode, in conjunction with Fable

##### All models

* required to consider, and document such consideration, the use of a partner "adversary" model of at least equal capability, for all but the most routine or inexpensive processes

### Git workflow (gitflow)

This project follows **gitflow**. These rules are enforced both here and by a `PreToolUse` hook (see *Enforcement* below):

* **`develop` is the integration branch.** All feature work branches from `develop` and is PR'd back into `develop`.
* **`main` is release-only.** It changes **exclusively** through a human-reviewed pull request from `develop`. **No agent may push, merge, or fast-forward directly to `main`** — not even a "harmless" one-line doc commit. Violating this single rule is what created the branch tangle this section exists to prevent.
* **PRs always target `develop`:** `gh pr create --base develop …`. A PR against `main` is opened only at the explicit request of the human maintainer (a release or hotfix).
* **Feature flow:** `git checkout -b feature/<name> develop` → work → `gh pr create --base develop` → human reviews and merges.
* **Hotfix flow:** `hotfix/<name>` off `main` → PR into `main` (the human merges) → **back-merge `main` → `develop`** so the fix survives the next release.
* **Keep `develop` ahead:** any time something lands on `main`, back-merge `main` → `develop`. `develop` must always be a superset of `main`; never let `main` lead.

### Branch naming

* `feature/<name>` — new work, branched from `develop`.
* `hotfix/<name>` — urgent production fix, branched from `main`.
* `archive/<name>` — superseded, abandoned, or rescued work kept for reference. **We archive, we do not delete**: dead ends become `archive/*` branches or tags, never `git branch -D` of real work.
* `wip/<name>` — explicit checkpoints not yet ready for integration.
* Auto-generated `worktree-*` branches are temporary — rename them into `feature/*` or `archive/*` as soon as their purpose is clear.

### Worktree hygiene (Claude Code specific)

`EnterWorktree` creates a real git worktree on a `worktree-*` branch and **keeps it on exit by default**. Uncommitted work stranded inside a worktree folder is invisible to `git branch --merged` and easily destroyed. Therefore:

* **Commit (or stash → commit) all work before exiting or removing a worktree.** Never leave uncommitted or untracked files floating in a worktree.
* Once the work is committed, rename the branch into `feature/*`/`archive/*` and remove the folder.
* Before deleting any branch or worktree, confirm the work exists somewhere durable (a commit on another branch, an `archive/*` tag, or a `git bundle`).

### Enforcement

A `PreToolUse` hook on `Bash` (in `.claude/settings.json`) blocks the bright-line violations above — direct pushes/merges to `main` and `gh pr create --base main`. If it blocks you, that is by design: prepare the change on `develop`/`feature/*` and hand `main` to the human.

### Build & static rendering (SSG)

* The site is **statically pre-rendered** at build time via **`vite-react-ssg`** (`npm run build` → `tsc -b && vite-react-ssg build`). Each route in `src/App.tsx`'s `routes` array emits a flat `dist/<path>.html` (e.g. `dist/services/pregnancy-postpartum.html`), plus `dist/sitemap.xml` (generated by a Vite plugin from `src/data/service-slugs.ts`, so routes and sitemap can't diverge). Flat output (not nested `index.html` dirs) is deliberate: Cloudflare Pages serves the extensionless canonical URL with **no 308 redirect**.
* **Known dependency risk (accepted, monitored):** `vite-react-ssg@0.9.1-beta.1` is a beta pin and declares a peer range of `vite ≤7`, while the project runs **Vite 8**. The combination is **build-verified** (renders all pages, lint clean), but `npm ci`/`npm install` hard-fails on `ERESOLVE` without `legacy-peer-deps`. This is pinned in **`.npmrc`** (`legacy-peer-deps=true`) so local + CI installs succeed. **Remove the flag once `vite-react-ssg` publishes a Vite 8 peer range** (or a stable ≥1.0 release). Node is pinned to **22** via `.node-version`.
* Per-page `<head>` (title/description/canonical/OG/JSON-LD) is emitted by `PageSeo` / `ServiceSeo` components relying on **React 19 head hoisting**; under SSG these land in each page's static HTML for crawlers.

### Styling conventions (post responsive-refactor, 7/4/26)

* **CSS Modules, co-located** (`Component.module.css`). No runtime `<style>` injection (the old `ensure*CSS()` pattern is retired); no Tailwind; no `useMediaQuery`/`isMobile` JS layout flags.
* **Three responsive layers:** (1) media queries at the canonical breakpoints — `1199px / 991px / 767px / 599px` max-width — for page *structure* only; (2) **container queries** for component adaptation (see `src/styles/grids.css` card grid, `CTABand`); (3) **fluid rem `clamp()` tokens** for type/space (`tokens/typography.css`, `tokens/spacing.css`, anchors 360→1200px).
* **Fluid type rule (WCAG 1.4.4):** every font-size clamp is rem-anchored (min, max, and intercept) with **max ≤ 1.5×min**. Bare-vw font sizes are banned (WCAG F94). Space tokens are exempt.
* **Fonts are self-hosted** (`public/fonts/*.woff2`, preloaded in `index.html` with `crossorigin`). Never reintroduce a Google Fonts `@import`/`<link>`.
* **Images go through `<ResponsiveImage>`** (`components/core`) — AVIF/WebP/JPEG srcset via `vite-imagetools` query imports. Exactly one `priority` (LCP) image per page; everything below the fold lazy-loads; every image carries intrinsic `width`/`height`.
* **Speculative loading:** `index.html` ships Speculation Rules (prefetch immediate / prerender moderate). Chromium-only progressive enhancement — never rely on it; gate on-load side effects with `document.prerendering` if any are added.

### Open items / TODO

* **Testing suite in the PR step (planned):** stand up an automated test suite that runs on every PR into `develop`, so nothing merges without passing tests. Wire it as CI (GitHub Actions) triggered on `pull_request` targeting `develop`. Tracked here until built.
* **Merge queue — open question:** the Trunk merge queue is being retired as overkill for a small team (Trunk itself is already off; renaming its workflow `.github/workflows/main.yml` → `main.yml.bak` is a pending manual step — pushing workflow-file changes needs the `workflow` OAuth scope the CLI token lacks). A merge queue mainly earns its keep at high throughput with many contributors racing independent merges. Revisit if the project shifts toward an open-source / many-remote-contributor model, where queued, individually-tested merges add real value. For now, a simple per-PR CI check (above) is the right scope.