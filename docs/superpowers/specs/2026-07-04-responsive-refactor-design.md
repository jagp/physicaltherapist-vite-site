# Responsive Refactor — Design Spec

**Date:** 2026-07-04
**Status:** Draft for review (brainstorm) — pending Jared approval, then mockups (Gate B) → implementation plan
**Base:** builds on top of the SSG/services integration (PR #25 → develop). Implementation branches off `feature/ssg-services-integration` / `develop` once #25 lands.
**Research:** `4b3e0d0b-…/tasks/wom79nhpi.output` (6 primary sources, adversarially verified; all load-bearing techniques Baseline **Widely** available as of July 2026).

## 1. Goal & principles

Make the site consumable on **any** device with no degradation of experience — *device-agnostic*, not per-device. Priorities, all held simultaneously:

- **Fluid, not stepped.** Content scales continuously; breakpoints handle only structural shifts.
- **Accessibility is a guardrail, not a feature.** WCAG 2.2 AA; text resizable to 200% (verified at 500% zoom); `prefers-reduced-motion` honored.
- **SEO foundations intact.** SSG static HTML, semantic markup, canonicals, JSON-LD (from PR #25) are preserved and never regressed.
- **Performance.** Core Web Vitals: kill font-swap CLS, prioritize the LCP hero, ship modern image formats, exploit the new SSG for speculative loading.
- **Beautiful & intentional.** No templated defaults; the existing plum/cream editorial identity is enhanced, not flattened.
- **No fragile/experimental deps.** Everything load-bearing is Baseline Widely available; enhancements degrade gracefully.

## 2. The forced migration (why this touches everything)

The site is styled with **inline React `style={{}}` objects** (182 across 19 files). Inline styles **cannot hold `@media` or `@container` rules** — the only CSS mechanisms for breakpoints. Real responsiveness is therefore impossible without moving styling into CSS.

**Decision (Jared): CSS Modules, co-located per component.** Each component gets a `Name.module.css`: locally-scoped class names, media + container queries beside the component, zero runtime. This modernizes the `CareerTimeline.css` / `service-page.css` precedent. Vite supports `*.module.css` natively; no new dependency.

Migration rule: inline px values become `rem`-based token references as they move to CSS — never a straight px→px copy (px font sizes ignore user font-size preferences; see §5).

## 3. Three-layer responsive model

1. **Page layout** — the canonical **1200 / 992 / 768 / 600** media-query breakpoints (per `key-facts.md`). Structural only: nav swap, page grids stacking, section reflow.
2. **Component adaptation** — **container queries** (`@container … / inline-size`). `ServiceCard`, `StatCard`, `Testimonial`, service sections adapt to their *slot*, so the same component works in a 1-up, 2-up, or 3-up grid without viewport-coupling.
3. **Fluid scale** — `clamp()` on **rem** tokens for type and space (§4), plus `cqi` inside components where a heading should track its container width.

This is the "Bootstrap breakpoints, not JS flags" approach, upgraded: **zero JavaScript** for layout. No `useMediaQuery`/`isMobile`.

## 4. Token layer — fluid type & space

New `src/styles/tokens/fluid.css` (generated via the Utopia method), anchored **360px → 1200px**:

- **Type scale** — replace the fixed `--fs-*` values with `clamp()` steps. Body ~18→20px (audience skews older), modular ratio ~1.2→1.25. Every step `rem`-anchored (min, max, **and** the intercept), so browser zoom + user font-size preferences scale it.
- **Space scale** — Utopia t-shirt tokens + one-up/custom pairs replace hard-coded px margins (`--section-pad`, `--gutter`, card gaps). Steep space pairs are fine (WCAG 1.4.4 covers text, not spacing).
- Keep the px annotations as comments; author in `rem`. Store the Utopia permalink in a header comment for regen.

**Accessibility guardrail (hard constraint):** every fluid **type** token keeps `max ≤ 1.5 × min` (well inside the 2.5× WCAG-1.4.4 zoom-safety ceiling; 1.5× stays safe even under a 300%-zoom-capped browser). Display/hero type that wants a wilder swing uses a media-query step at 768px instead of fluid scaling.

## 5. Fonts (self-host; highest-confidence perf win)

Current anti-pattern: Google Fonts `@import` inside the bundled CSS = a 4-hop serial request chain. Replace with:

- **Self-hosted variable woff2** (Fraunces + Work Sans, latin subset) in `public/fonts/`, `@font-face` in `tokens/fonts.css`, `font-display: swap`.
- **Preload** both woff2 in `index.html` (`crossorigin`), so the SSG preload scanner fetches them early.
- **Metric-matched fallbacks** (`size-adjust` + `ascent/descent/line-gap-override`, values from `khempenius/font-fallbacks-dataset` or `fontaine`) wired into the `--font-display`/`--font-body` stacks → ~zero swap-CLS. `size-adjust` works in Safari; the override descriptors degrade gracefully where unsupported.

## 6. Images (responsive pipeline + fresh crops)

- **`vite-imagetools`** (sharp-based, dev-dep) generates an **AVIF → WebP → JPEG** × ~3-width matrix at build time.
- One **`<ResponsiveImage>`** component (`components/core`) encapsulates the `<picture>` cascade + `srcset`/`sizes` + `width`/`height` (CLS) + `loading`/`fetchpriority` rules, so pages never hand-write it.
- **LCP hero:** real `<img>`, `fetchpriority="high"`, never `loading="lazy"`. Everything below the fold: `loading="lazy"` + explicit dimensions. `sizes` written against the real 1200/992/768/600 layout.
- **`sizes`/`srcset`** also shrink the current 2 MB service images dramatically on mobile.
- **Fresh crops (Jared approved):** art-direct the Home hero (and any wide hero) with a **portrait/alt mobile crop** via `<picture media>`. Consult `docs/copy/service-pages-source.md` + the SEO spec — where an extra inset/graphic strengthens a page's SEO/scannability, add it now (flagged per-page in the plan). `img { max-width:100%; height:auto }` global rule.

## 7. Layout & component specifics

- **Nav (the currently-broken piece):** desktop is a fixed-px horizontal bar that overflows on phones. Add a **CSS-first mobile nav** — a hamburger toggling a panel below ~768px; prefer a `<details>`/checkbox or minimal state, `:has()`/`aria-expanded` for styling, focus-trap + `Esc`, reduced-motion-aware. Logo scales down.
- **Hero:** `min-height: 100svh` (fallback `100vh`) so mobile browser chrome never hides content or causes jump.
- **Card rows:** `grid-template-rows: subgrid` for equal-height `ServiceCard`/`StatCard` internals (title/body/CTA align across a row) — no min-height hacks.
- **Headings:** `text-wrap: balance` globally on h1–h4/titles; `text-wrap: pretty` on body copy (enhancement-only, no Firefox — degrades to normal wrapping).
- **Motion:** author reveals inside `@media (prefers-reduced-motion: no-preference)`; ship the reduce kill-switch safety net.

## 8. Speculative loading (now that SSG exists)

SSG makes Speculation Rules useful (they don't work on SPAs). Add a shared `<script type="speculationrules">` (or `Speculation-Rules` header via CF `_headers`): **prefetch all internal links (immediate)** + **prerender on `moderate` eagerness**. 6 tiny static pages = cheap. Chromium-only, silent no-op in Safari/Firefox — a top-up, never the strategy. Gate any on-load side effects on `document.prerendering`.

## 9. Phasing & gates

1. **Spec approval** (this doc) — Jared.
2. **Mockups (Gate B):** a few dedicated subagents produce responsive mockups → `docs/superpowers/mocks/`; Jared reviews before implementation. Cover: mobile nav, Home hero (+ mobile crop), service-page hero/article reflow, card grids at 360/768/1200.
3. **Implementation plan** (writing-plans skill).
4. **Build order:** fonts + fluid tokens → global/base CSS → Nav (mobile) → core/marketing components (CSS Modules + container queries) → pages → images/`ResponsiveImage` → speculation rules.
5. **Verify** (§10).

Fresh-image requests to Jared are batched at Gate B (which crops/insets, per page).

## 10. Verification

- `npm run build` (tsc + SSG render all 11 pages) + `oxlint` clean.
- **Viewport sweep** (Playwright): 360 / 600 / 768 / 992 / 1200 / 1440 — no horizontal scroll, nav usable, images sized.
- **WCAG 1.4.4:** 500%-zoom spot-check on h1/h2/body (`5·f(v/5) ≥ 2·f(v)`) + one real-browser zoom pass; the ≤1.5× token rule makes this pass by construction.
- **A11y:** focus-visible, reduced-motion, contrast, keyboard nav (esp. mobile menu).
- **SEO/perf:** canonicals + JSON-LD unchanged; LCP hero prioritized; CLS ~0 (font fallbacks + image dimensions); confirm CWV measured against `activationStart` if prerendered.

## 11. Open items

- Confirm exact fluid anchors/ratios (360→1200, 18→20, 1.2→1.25) at token generation.
- Which pages get new insets/graphics for SEO (decide at Gate B against the services content spec).
- Mobile-nav interaction pattern (details/checkbox vs minimal React state) — finalize in the plan.
