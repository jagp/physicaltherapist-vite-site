# Responsive Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the whole site fluidly responsive (device-agnostic), accessible (WCAG 2.2 AA / 1.4.4 zoom-safe), and fast (self-hosted fonts, responsive images, speculative loading) — per `docs/superpowers/specs/2026-07-04-responsive-refactor-design.md`.

**Architecture:** Three-layer responsive model: (1) canonical media-query breakpoints for page structure, (2) container queries for component adaptation, (3) fluid `clamp()` rem tokens for type/space. Styling migrates from inline React `style={{}}` objects to **co-located CSS Modules** (`Name.module.css`). The site is SSG (`vite-react-ssg`) — every page is static HTML, so font preloads, `fetchpriority`, and Speculation Rules all pay off.

**Tech Stack:** Vite 8 + React 19 + TS 6, CSS Modules (built into Vite), `@fontsource-variable` fonts, `vite-imagetools` (build-time AVIF/WebP/srcset), Playwright MCP for verification. No Tailwind. No runtime CSS-in-JS.

## Global Constraints

- **Breakpoints (canonical, from `docs/key-facts.md`):** 1200 / 992 / 768 / 600. In CSS use max-width form: `1199px`, `991px`, `767px`, `599px` (matches `CareerTimeline.css` precedent).
- **Fluid type tokens:** every `clamp()` font-size is **rem-anchored** (min, max, AND intercept in rem) with **max ≤ 1.5 × min**. Never a bare-`vw` font-size (WCAG F94). Space tokens may exceed 1.5× (1.4.4 covers text only).
- **Fluid anchors:** 360px→1200px = **22.5rem→75rem**. Formulas: `slope_vw = 1.9048 × (max−min)`, `intercept = min − 0.42857 × (max−min)` (rem).
- **Install:** always `npm install --legacy-peer-deps` (pinned in `.npmrc`; `vite-react-ssg` beta vs Vite 8).
- **Verify per task:** `npm run build` (tsc + SSG renders 11 pages) and `npm run lint` must pass before each commit.
- **Branch:** all work on `feature/responsive-refactor`; commit per task; PR targets `develop` (never `main`).
- **No Tailwind. No `useMediaQuery`/`isMobile` JS layout flags.** Zero-JS responsiveness (the mobile-nav toggle is the one legitimate interactive state).
- **Don't touch:** `CareerTimeline.*` (already responsive), `service-page.css` semantics (extend only), anything in `C:\Users\jared\Projects\rgspt-site` (read-only upstream).
- **Preserve SEO:** `PageSeo`/`ServiceSeo`/JSON-LD/canonicals must appear unchanged in `dist/*.html` after every task.

---

### Task 1: Fluid type & space tokens + base hygiene

**Files:**
- Modify: `src/styles/tokens/typography.css` (replace fixed `--fs-*` values)
- Modify: `src/styles/tokens/spacing.css` (fluid section/gutter + fluid pairs)
- Modify: `src/styles/tokens/base.css` (root font-size, img rule, text-wrap, reduced-motion)

**Interfaces:**
- Produces: fluid `--fs-eyebrow…--fs-display`, `--gutter`, `--section-pad`, `--section-pad-sm`, `--space-s-m`, `--space-m-l`, `--space-l-xl`. All later tasks consume these names. Existing `--space-1…32`, radii, shadows stay unchanged.

- [ ] **Step 1: Replace the type scale values** in `src/styles/tokens/typography.css` (keep weights/line-heights/letter-spacing blocks as-is):

```css
  /* Type scale — FLUID (Utopia-style), anchors 360px→1200px (22.5rem→75rem).
     Every step is rem-anchored and max ≤ 1.5×min → WCAG 1.4.4-safe by construction.
     slope_vw = 1.9048×(max−min); intercept = min − 0.42857×(max−min). */
  --fs-eyebrow: clamp(0.78rem, 0.7629rem + 0.0762vw, 0.82rem);
  --fs-caption: clamp(0.82rem, 0.8029rem + 0.0762vw, 0.86rem);
  --fs-small:   clamp(0.9rem, 0.8786rem + 0.0952vw, 0.95rem);
  --fs-body:    clamp(1.0625rem, 0.9821rem + 0.3571vw, 1.25rem);  /* 17→20px */
  --fs-lead:    clamp(1.15rem, 1.0643rem + 0.381vw, 1.35rem);
  --fs-h6:      clamp(1.1rem, 1.0486rem + 0.2286vw, 1.22rem);
  --fs-h5:      clamp(1.22rem, 1.1214rem + 0.4381vw, 1.45rem);
  --fs-h4:      clamp(1.35rem, 1.1786rem + 0.7619vw, 1.75rem);
  --fs-h3:      clamp(1.55rem, 1.3143rem + 1.0476vw, 2.1rem);
  --fs-h2:      clamp(1.8rem, 1.4571rem + 1.5238vw, 2.6rem);      /* ratio 1.44 */
  --fs-h1:      clamp(2.25rem, 1.7679rem + 2.1429vw, 3.375rem);   /* 36→54px, ratio 1.50 */
  --fs-display: clamp(2.8rem, 2.2rem + 2.6667vw, 4.2rem);         /* ratio 1.50 */
```

- [ ] **Step 2: Make section rhythm fluid** in `src/styles/tokens/spacing.css` — replace only the "Section rhythm" block; keep the 4px `--space-N` scale, radii, borders, shadows, motion untouched:

```css
  /* Section rhythm — FLUID (anchors 360→1200px; rem-anchored) */
  --gutter:         clamp(1rem, 0.3571rem + 2.8571vw, 2.5rem);      /* 16→40px */
  --section-pad:    clamp(3.5rem, 2.2143rem + 5.7143vw, 6.5rem);    /* 56→104px */
  --section-pad-sm: clamp(2.5rem, 1.8571rem + 2.8571vw, 4rem);      /* 40→64px */
  --maxw: 1180px;
  --maxw-narrow: 820px;

  /* Fluid space pairs — for gaps/margins that should contract hard on mobile */
  --space-s-m: clamp(1.125rem, 0.8036rem + 1.4286vw, 1.875rem);     /* 18→30px */
  --space-m-l: clamp(1.5rem, 0.8571rem + 2.8571vw, 3rem);           /* 24→48px */
  --space-l-xl: clamp(2rem, 1.1429rem + 3.8095vw, 4rem);            /* 32→64px */
```

- [ ] **Step 3: Base hygiene** in `src/styles/tokens/base.css` — add at the top (after the box-sizing rule) and bottom:

```css
/* Inherit the user's browser font-size preference — never a px root. */
:root { font-size: 100%; }

/* Media are fluid by default; attributes still reserve aspect-ratio (CLS). */
img, svg, video { max-width: 100%; height: auto; }
```

and append after the `::selection` rule:

```css
/* Headlines never strand a single word; prose gets nicer rag where supported. */
h1, h2, h3, h4 { text-wrap: balance; }
p { text-wrap: pretty; }

/* Reduced-motion kill-switch (0.01ms so animationend still fires). */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 4: Build + lint**

Run: `npm run build && npm run lint`
Expected: SSG renders all 11 pages; lint clean. (Pages consume the tokens via `var()`, so heading/body sizes are now fluid site-wide with zero component edits.)

- [ ] **Step 5: Spot-check fluidity** — open `npm run dev`, in DevTools set viewport 360 then 1200; computed `font-size` of `<h2>` should go ~28.8px → ~41.6px smoothly (no step).

- [ ] **Step 6: Commit**

```bash
git add src/styles/tokens/
git commit -m "feat(tokens): fluid rem-anchored type+space scale (360-1200 anchors, <=1.5x), base hygiene"
```

---

### Task 2: Self-hosted fonts (kill the Google @import chain)

**Files:**
- Modify: `package.json` (+`@fontsource-variable/fraunces`, `@fontsource-variable/work-sans`)
- Create: `public/fonts/` (two woff2 files copied from the packages)
- Modify: `src/styles/tokens/fonts.css` (delete `@import`, add `@font-face`)
- Modify: `index.html` (two `<link rel="preload">`)

**Interfaces:**
- Produces: same family names `'Fraunces'` / `'Work Sans'` — token stacks in `typography.css` keep working unchanged.

- [ ] **Step 1: Install** — `npm install --legacy-peer-deps @fontsource-variable/fraunces @fontsource-variable/work-sans`

- [ ] **Step 2: Copy the latin variable woff2 files to stable public paths.** First list real filenames:

Run: `ls node_modules/@fontsource-variable/fraunces/files/ | grep -E 'latin(-opsz)?-wght|latin-wght'` and same for `work-sans`.
Expected: names like `fraunces-latin-opsz-normal.woff2` / `fraunces-latin-wght-normal.woff2` and `work-sans-latin-wght-normal.woff2`. For Fraunces **prefer the file carrying the `opsz` axis if present** (optical sizing is part of the brand look); otherwise the `wght` file.

```bash
mkdir -p public/fonts
cp node_modules/@fontsource-variable/fraunces/files/<CHOSEN-FRAUNCES>.woff2 public/fonts/fraunces-latin-var.woff2
cp node_modules/@fontsource-variable/work-sans/files/work-sans-latin-wght-normal.woff2 public/fonts/work-sans-latin-var.woff2
```

- [ ] **Step 3: Replace `src/styles/tokens/fonts.css` entirely:**

```css
/* Stephenson Physical Therapy — Webfonts (SELF-HOSTED)
   Variable latin-subset woff2, served same-origin from /fonts/ (stable
   filenames → preloadable from index.html). Replaces the Google Fonts
   @import chain (4 serial hops). font-display:swap + preload ≈ no visible
   swap on same-origin; revisit metric-matched fallbacks only if CLS shows. */
@font-face {
  font-family: 'Fraunces';
  src: url('/fonts/fraunces-latin-var.woff2') format('woff2');
  font-weight: 400 700;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Work Sans';
  src: url('/fonts/work-sans-latin-var.woff2') format('woff2');
  font-weight: 400 700;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```

- [ ] **Step 4: Preload in `index.html`** — add inside `<head>`, ABOVE the module script line (`crossorigin` is mandatory even same-origin):

```html
    <link rel="preload" href="/fonts/work-sans-latin-var.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="/fonts/fraunces-latin-var.woff2" as="font" type="font/woff2" crossorigin />
```

- [ ] **Step 5: Verify the chain is gone**

Run: `npm run build && grep -r "fonts.googleapis" dist/ | wc -l`
Expected: `0`. Then `grep -c "rel=\"preload\"" dist/index.html` → `2` (SSG stamps the template head into every page). Load `npm run preview` with DevTools Network: both woff2 load same-origin, status 200.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json public/fonts src/styles/tokens/fonts.css index.html
git commit -m "feat(fonts): self-host Fraunces+Work Sans variable woff2 with preload; drop Google @import chain"
```

---

### Task 3: Responsive Nav (CSS Module + hamburger)

**Files:**
- Create: `src/layout/Nav.module.css`
- Modify: `src/layout/Nav.tsx` (full rewrite below)

**Interfaces:**
- Consumes: `Button` (unchanged API), token vars.
- Produces: same `<Nav />` export; no prop changes.

- [ ] **Step 1: Create `src/layout/Nav.module.css`:**

```css
/* Header/nav — desktop bar ≥768px, <details> hamburger below.
   One structural breakpoint (767px); everything else fluid. */
.hdr {
  background: var(--bg);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.08);
}
.row {
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 4px var(--gutter);
}
.brand { display: flex; align-items: center; text-decoration: none; }
.brand img { height: clamp(56px, 40px + 3.5vw, 80px); display: block; width: auto; }

.links { display: flex; gap: 26px; align-items: center; margin-left: auto; }
.link {
  font-family: var(--font-ui);
  font-size: var(--fs-small);
  font-weight: 500;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  border-bottom: 2px solid transparent;
  padding-bottom: 3px;
  transition: color var(--dur) var(--ease-soft);
}
.link:hover { color: var(--text-light); text-decoration: none; }
.linkActive { color: var(--text-light); border-bottom-color: var(--accent); }

/* ---- mobile disclosure (hidden ≥768) ---- */
.mnav { display: none; margin-left: auto; position: relative; }
.mnav summary {
  list-style: none;
  display: grid;
  place-items: center;
  width: 44px;              /* touch target */
  height: 44px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  color: var(--text-light);
}
.mnav summary::-webkit-details-marker { display: none; }
.burger, .burger::before, .burger::after {
  content: '';
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  position: relative;
  transition: transform var(--dur) var(--ease-out), opacity var(--dur) var(--ease-soft);
}
.burger::before { position: absolute; top: -7px; }
.burger::after { position: absolute; top: 7px; }
.mnav[open] .burger { transform: rotate(45deg); }
.mnav[open] .burger::before { transform: rotate(90deg); top: 0; }
.mnav[open] .burger::after { opacity: 0; }

.panel {
  position: fixed;
  left: 0; right: 0;
  top: var(--nav-h, 64px);
  background: var(--bg);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow-md);
  padding: 10px 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.panelLink {
  padding: 13px 10px;
  border-radius: var(--radius-sm);
  text-decoration: none;
  color: rgba(255, 255, 255, 0.72);
  font-family: var(--font-ui);
  font-size: 1.02rem;
  font-weight: 500;
}
.panelLink:hover { background: rgba(255, 255, 255, 0.07); color: var(--text-light); text-decoration: none; }
.panelLinkActive {
  color: var(--text-light);
  box-shadow: inset 3px 0 0 var(--accent);
  background: rgba(255, 255, 255, 0.05);
}
.panelCta { margin: 12px 10px 0; }

@media (prefers-reduced-motion: no-preference) {
  .panel { transform-origin: top; animation: navDrop 0.25s var(--ease-out); }
  @keyframes navDrop { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
}

@media (max-width: 767px) {
  .links, .desktopCta { display: none; }
  .mnav { display: block; }
}
```

- [ ] **Step 2: Rewrite `src/layout/Nav.tsx`:**

```tsx
import { useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/core/Button';
import logo from '../assets/logo_white_text_transparent_v2.png';
import s from './Nav.module.css';

const links: Array<[string, string]> = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
];

export function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef<HTMLDetailsElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  /* Close the mobile panel on route change, Escape, or outside click.
     The <details> element is the state — no isMobile/useMediaQuery flags. */
  useEffect(() => {
    menuRef.current?.removeAttribute('open');
  }, [location.pathname]);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') menu.removeAttribute('open');
    };
    const onClick = (e: MouseEvent) => {
      if (menu.open && !menu.contains(e.target as Node)) menu.removeAttribute('open');
    };
    const syncHeight = () => {
      const h = headerRef.current?.offsetHeight;
      if (h) headerRef.current?.style.setProperty('--nav-h', `${h}px`);
    };
    syncHeight();
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    window.addEventListener('resize', syncHeight);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
      window.removeEventListener('resize', syncHeight);
    };
  }, []);

  return (
    <header className={s.hdr} ref={headerRef}>
      <div className={s.row}>
        <Link to="/" className={s.brand}>
          <img src={logo} alt="Stephenson Physical Therapy" width={247} height={80} />
        </Link>

        <nav className={s.links} aria-label="Primary">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? `${s.link} ${s.linkActive}` : s.link)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <span className={s.desktopCta}>
          <Button variant="gradient" size="sm" onClick={() => navigate('/contact')}>
            Book a Consultation
          </Button>
        </span>

        <details className={s.mnav} ref={menuRef}>
          <summary aria-label="Menu">
            <span className={s.burger} />
          </summary>
          <nav className={s.panel} aria-label="Primary mobile">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive ? `${s.panelLink} ${s.panelLinkActive}` : s.panelLink
                }
              >
                {label}
              </NavLink>
            ))}
            <span className={s.panelCta}>
              <Button variant="gradient" size="md" fullWidth onClick={() => navigate('/contact')}>
                Book a Consultation
              </Button>
            </span>
          </nav>
        </details>
      </div>
    </header>
  );
}
```

Note: `width={247} height={80}` = the logo file's intrinsic ratio at 80px tall — check the real PNG dimensions (`npx image-size src/assets/logo_white_text_transparent_v2.png` or open it) and use the true pair; CSS controls display size.

- [ ] **Step 3: Build + manual check**

Run: `npm run build && npm run lint` → pass. `npm run dev`: at ≥768 identical to before (bar + CTA); at <768 hamburger opens/closes (route change, Esc, outside click all close it); tab order reaches every link; focus ring visible.

- [ ] **Step 4: Commit** — `git add src/layout/ && git commit -m "feat(nav): responsive CSS-module nav with <details> hamburger, zero-JS layout"`

---

### Task 4: Button → CSS Module (the worked migration pattern)

This task is the **template** for every remaining component migration: inline style objects → classes; injected `<style>` string → the same CSS in the module; variants → class map.

**Files:**
- Create: `src/components/core/Button.module.css`
- Modify: `src/components/core/Button.tsx`

**Interfaces:**
- Produces: identical `ButtonProps` API (`variant`, `size`, `href`, `iconLeft/Right`, `fullWidth`, `style` passthrough stays supported).

- [ ] **Step 1: Create `Button.module.css`.** Content = (a) the `base` style object translated to `.btn`, (b) the `sizes`/`variantStyles` maps as `.sm/.md/.lg` and `.primary/.gradient/...`, (c) the existing `hoverCSS` template string **moved verbatim** (it is already plain CSS — rename `.spt-btn-*` selectors to the module classes, e.g. `.spt-btn-primary:hover` → `.primary:hover`), plus:

```css
.btn {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-ui);
  font-weight: var(--fw-semibold);
  line-height: 1.1;
  border-radius: var(--radius-sm);
  border: 1.5px solid transparent;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-soft),
    background var(--dur) var(--ease-soft), border-color var(--dur) var(--ease-soft),
    color var(--dur) var(--ease-soft);
  -webkit-tap-highlight-color: transparent;
}
.fullWidth { display: flex; width: 100%; }
.disabled { cursor: not-allowed; opacity: 0.5; }
.sm { padding: 8px 16px; font-size: var(--fs-small); }
.md { padding: 12px 22px; font-size: 0.95rem; }
.lg { padding: 15px 28px; font-size: 1rem; }
/* variants: copy each variantStyles entry, then the hoverCSS rules renamed */
.primary { background: var(--brand); color: var(--text-on-brand); box-shadow: var(--shadow-brand); }
/* …gradient, secondary, ghost, onBand, link — copy values verbatim from Button.tsx maps… */

/* Comfortable touch targets on coarse pointers — no layout flag, a media feature */
@media (pointer: coarse) {
  .sm { padding: 10px 18px; }
  .md { padding: 13px 24px; }
}
```

- [ ] **Step 2: Rewrite `Button.tsx`** to compose classes; DELETE `hoverCSS`, `ensureHoverCSS`, `sizes`, `variantStyles`:

```tsx
const cls = [
  s.btn, s[size], s[variant],
  fullWidth && s.fullWidth,
  disabled && s.disabled,
].filter(Boolean).join(' ');
```

Keep the `style` prop passthrough (`<button className={cls} style={style} …>`) so existing one-off overrides (e.g. Home's transparent phone button) keep working. Keep the inner `<span>` wrapper as `s.inner` (`position:relative; z-index:1; display:inline-flex; align-items:center; gap:8px`).

- [ ] **Step 3: Verify** — `npm run build && npm run lint`; in dev, hover/active/focus states on all six variants match pre-migration (shine sweep, lift, link underline grow). `grep -n "ensureHoverCSS\|document.createElement('style')" src/components/core/Button.tsx` → no matches.

- [ ] **Step 4: Commit** — `git add src/components/core/Button.* && git commit -m "refactor(button): migrate to CSS Module, drop runtime style injection"`

---

### Task 5: Core + simple marketing components → CSS Modules

Apply the Task 4 pattern to each. One commit per component. For each: create `X.module.css` beside `X.tsx`; move inline objects to classes; move any injected CSS string verbatim (renaming selectors); delete the `ensure*CSS` helper; keep public props identical; `npm run build && npm run lint` between each.

**Files (Create module / Modify tsx):**
- `src/components/core/Card.*`, `src/components/core/Badge.*`, `src/components/core/Input.*`
- `src/components/PageHeader.*`
- `src/components/marketing/Testimonial.*`, `StatCard.*`, `CTABand.*`, `CredentialBand.*` (CredentialBand: keep its `.data.tsx` untouched)
- `src/components/marketing/SectionEyebrow.*`, `Breadcrumb.*` (only if they carry inline styles — check first)

**Responsive additions while migrating (the point of the exercise):**

- [ ] `Input`: full-width by default; `font-size: max(16px, var(--fs-small))` on the control (prevents iOS zoom-on-focus).
- [ ] `PageHeader`: padding `var(--section-pad-sm) 0`; inner wrap `padding: 0 var(--gutter)`; title uses `--fs-h1` token (no inline clamp).
- [ ] `CTABand`: root `container: ctaband / inline-size;` and

```css
.inner { display: flex; flex-wrap: wrap; gap: var(--space-m-l); align-items: center; justify-content: space-between; padding: var(--space-l-xl) var(--gutter); }
@container ctaband (width <= 600px) {
  .inner { justify-content: stretch; }
  .inner :global(.btnSlot) { flex: 1 1 100%; }
  .leaf { display: none; }   /* decorative leaf yields space on phones */
}
```

- [ ] `Testimonial`/`StatCard`: internal grid `grid-template-rows: subgrid; grid-row: span 3;` ready (activates under the page grids in Task 6/7).
- [ ] `CredentialBand`: items row becomes `display:flex; flex-wrap:wrap; gap:var(--space-s-m) var(--space-l-xl); justify-content:center;` (wraps to 2×2 on phones instead of crushing).
- [ ] **Commit after each component** (8 commits): `refactor(<name>): CSS Module migration + container-aware layout`

---

### Task 6: ServiceCard + the grid pattern (container queries + subgrid)

**Files:**
- Create: `src/components/marketing/ServiceCard.module.css`
- Modify: `src/components/marketing/ServiceCard.tsx`
- Create: `src/styles/grids.css` (shared page-level grid classes, imported by `global.css`)
- Modify: `src/styles/global.css` (add `@import './grids.css';`)

**Interfaces:**
- Produces: global classes `card-grid` (wrapper, the container) and `card-grid__list` consumed by Home/Services/About pages in Task 7. ServiceCard keeps its `dark` prop; the Home dark-overrides CSS moves here as a `.dark` variant (deleting Home's `svcDarkCSS` injection in Task 7).

- [ ] **Step 1: `src/styles/grids.css`:**

```css
/* Shared responsive card grids — the wrapper is the container; cards
   respond to their SLOT, not the viewport. (Baseline Widely available.) */
.card-grid { container: cards / inline-size; }
.card-grid__list {
  list-style: none; margin: 0; padding: 0;
  display: grid; grid-template-columns: 1fr; gap: var(--space-s-m);
}
@container cards (width > 560px) { .card-grid__list { grid-template-columns: repeat(2, 1fr); } }
@container cards (width > 900px) { .card-grid__list { grid-template-columns: repeat(3, 1fr); } }
/* subgrid alignment: any direct child that opts in aligns its rows across the track */
.card-grid__list > * { display: grid; grid-row: span 3; grid-template-rows: subgrid; row-gap: 10px; }
```

- [ ] **Step 2: ServiceCard module** — migrate per Task 4 pattern; its three internal blocks (icon, title+desc, link) become the three subgrid rows; add the `.dark` variant translating the `svc-dark` `!important` overrides from `Home.tsx`'s `svcDarkCSS` string into normal-specificity module rules (`.dark { background: color-mix(in srgb, var(--bg) 58%, var(--brand)); … }` etc. — copy each value, drop every `!important`).

- [ ] **Step 3: Verify + commit** — build/lint; `git commit -m "feat(cards): container-query card grid + subgrid alignment; ServiceCard module with dark variant"`

---

### Task 7: Page migrations (Home, then the rest)

One commit per page. Pattern per page: create `PageName.module.css`; every `style={{…}}` moves to a class; hard-coded px paddings/gaps → tokens (`var(--gutter)`, `var(--section-pad)`, `--space-*` pairs); every desktop-only grid gets its collapse; inline `clamp(…px…)` font-sizes are DELETED in favor of the token the element already inherits (h1→`--fs-h1` etc.). Wrappers: `.section { padding: var(--section-pad) 0; }` `.wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 var(--gutter); }`.

**Files:** `src/pages/Home.tsx` + `Home.module.css`, `About.*`, `Services.*`, `Contact.*`, `Faq.*`, `ServiceDetail.*` (ServiceHero/ServiceArticle keep using `service-page.css`, already responsive — only touch if an inline style blocks reflow).

- [ ] **Step 1 — `Home.module.css` structural rules (the load-bearing ones):**

```css
/* HERO — svh-safe, collapses at 767 with image first */
.hero { position: relative; overflow: hidden; background: var(--cream); }
.heroWrap {
  max-width: var(--maxw); margin: 0 auto;
  padding: var(--space-l-xl) var(--gutter) var(--section-pad-sm);
  display: grid; grid-template-columns: 1.05fr 0.95fr;
  gap: var(--space-m-l); align-items: center;
  min-height: min(88svh, 900px);
}
.heroMedia { position: relative; aspect-ratio: 4 / 4.4; min-height: 380px;
  border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg); }
.heroMedia img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 20%; }
.heroCtas { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
@media (max-width: 767px) {
  .heroWrap { grid-template-columns: 1fr; min-height: auto; gap: var(--space-s-m); }
  .heroMedia { order: -1; aspect-ratio: 4 / 3; min-height: 0; max-height: 46svh; }
  .heroCtas > * { flex: 1 1 100%; }
}

/* BIO split (.85/1.15) and WCS callout (auto 1fr) — same collapse */
.bioGrid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: var(--space-m-l); align-items: center; }
.wcsGrid { display: grid; grid-template-columns: auto 1fr; gap: var(--space-m-l); align-items: center; }
.bookGrid { display: grid; grid-template-columns: auto 1fr; gap: var(--space-m-l); align-items: center; }
@media (max-width: 767px) {
  .bioGrid, .wcsGrid, .bookGrid { grid-template-columns: 1fr; }
  .wcsGrid { text-align: left; }
}

/* PHILOSOPHY — decorative leaf hides on phones */
.philosophy { display: flex; align-items: center; gap: var(--space-l-xl); }
@media (max-width: 599px) { .philosophy img { display: none; } }
```

- [ ] **Step 2 — `Home.tsx` mechanics:** delete `svcDarkCSS`/`ensureSvcDarkCSS`/`factCSS`/`ensureBioCSS`; services grid becomes `<div className="card-grid"><ul className="card-grid__list">…` with `ServiceCard dark` (Task 6 variant). Testimonials grid → same `card-grid` classes. `SectionHead` component keeps its API, drops inline clamp (h2 inherits the token).

- [ ] **Step 3 — remaining pages:** `About` (`.8fr/1.2fr` grid → stack at 767), `Contact` (form grid → stack; inputs full-width), `Faq` (already narrow column — tokens only), `Services` + `ServiceDetail` (wrap sections in `.section/.wrap`; grids → `card-grid`).

- [ ] **Per page:** `npm run build && npm run lint`; dev-check at 360/768/1200 — **no horizontal scrollbar** (DevTools: `document.documentElement.scrollWidth <= window.innerWidth`).

- [ ] **Commits:** `refactor(home): responsive CSS-module migration` … one per page (6 commits).

---

### Task 8: Responsive images (vite-imagetools + ResponsiveImage)

**Files:**
- Modify: `package.json` (+`vite-imagetools` devDep), `vite.config.ts`
- Create: `src/types/imagetools.d.ts`, `src/components/core/ResponsiveImage.tsx`
- Modify: `src/pages/Home.tsx` (hero, bio, book images), `src/components/marketing/ServiceHero.tsx` + `ServiceArticle.tsx` (the 2MB pregnancy PNGs — biggest win)

- [ ] **Step 1:** `npm install --legacy-peer-deps -D vite-imagetools`; in `vite.config.ts` add `import { imagetools } from 'vite-imagetools'` and `plugins: [react(), imagetools(), sitemapPlugin()]`.

- [ ] **Step 2: `src/types/imagetools.d.ts`:**

```ts
declare module '*&as=srcset' { const srcset: string; export default srcset; }
declare module '*&format=jpeg' { const src: string; export default src; }
declare module '*&format=webp' { const src: string; export default src; }
```

- [ ] **Step 3: `ResponsiveImage.tsx`:**

```tsx
interface ResponsiveImageProps {
  avifSrcSet: string;
  webpSrcSet: string;
  src: string;                 /* jpeg fallback URL */
  sizes: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;          /* LCP image: fetchpriority=high, never lazy */
  className?: string;
}

export function ResponsiveImage({
  avifSrcSet, webpSrcSet, src, sizes, alt, width, height, priority = false, className,
}: ResponsiveImageProps) {
  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={src} sizes={sizes} alt={alt} width={width} height={height}
        fetchPriority={priority ? 'high' : undefined}
        loading={priority ? undefined : 'lazy'}
        decoding={priority ? undefined : 'async'}
        className={className}
      />
    </picture>
  );
}
```

- [ ] **Step 4: swap the heavy images.** Example (Home hero — the LCP):

```tsx
import heroAvif from '../assets/headshot-2.jpg?w=480;960;1440&format=avif&as=srcset';
import heroWebp from '../assets/headshot-2.jpg?w=480;960;1440&format=webp&as=srcset';
import heroJpg from '../assets/headshot-2.jpg?w=960&format=jpeg';

<ResponsiveImage
  avifSrcSet={heroAvif} webpSrcSet={heroWebp} src={heroJpg}
  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 48vw, 566px"
  alt="Dr. Rebecca Stephenson" width={960} height={1056} priority
/>
```

Repeat for `headshot-3` (bio, `priority` **absent**), book cover, `pregnancy-landscape.png` + `pregnancy-inset.png` (in ServiceHero/ServiceArticle — convert `format=avif;webp;jpeg`; PNG sources still emit photographic AVIF/WebP fine). `width/height` = real intrinsic px of the largest emitted width (check the numbers the build prints, or the source file dims).

- [ ] **Step 5: Verify** — `npm run build`; expected: dist/assets gains `*-480.avif` etc.; `dist/services/pregnancy-postpartum.html` contains `<source type="image/avif"`; total image bytes for that page drop from ~4MB to well under 1MB. Lighthouse quick pass in dev optional.

- [ ] **Step 6: Commit** — `git add -A && git commit -m "feat(images): vite-imagetools AVIF/WebP srcset pipeline behind ResponsiveImage; hero fetchpriority"`

---

### Task 9: Speculation Rules (SSG payoff)

**Files:** Modify: `index.html`

- [ ] **Step 1:** add before `</head>` (single template head → stamped into all 11 static pages):

```html
    <script type="speculationrules">
    {
      "prefetch": [{ "where": { "href_matches": "/*" }, "eagerness": "immediate" }],
      "prerender": [{ "where": { "href_matches": "/*" }, "eagerness": "moderate" }]
    }
    </script>
```

- [ ] **Step 2: Verify** — `npm run build && grep -c speculationrules dist/about.html` → `1`. In Chrome (preview): DevTools → Application → Speculative loads shows rules parsed; hovering a nav link 200ms triggers a prerender entry. Safari/Firefox: no-op (expected).

- [ ] **Step 3: Commit** — `git commit -am "feat(perf): speculation rules — prefetch immediate + prerender moderate (Chromium progressive enhancement)"`

---

### Task 10: Docs + map + README

**Files:** Modify: `CLAUDE.md` (map: `+ plans/`, `mocks/responsive/`, `ResponsiveImage`, `Nav.module.css`, fonts note), `docs/development.md` (CSS conventions section below), `README.md` (user-visible: responsive + perf features).

- [ ] Add to `development.md`:

```md
### Styling conventions (post responsive-refactor)

* **CSS Modules, co-located** (`Component.module.css`). No runtime style injection; no Tailwind.
* **Three responsive layers:** media queries at 1199/991/767/599 (structure) → container queries (components) → fluid rem `clamp()` tokens (type/space).
* **Fluid type rule:** every font-size clamp is rem-anchored with max ≤ 1.5×min (WCAG 1.4.4). Bare-vw font sizes are banned (F94).
* Fonts are self-hosted in `public/fonts/` (preloaded in `index.html`); never reintroduce Google Fonts `@import`.
* Images go through `<ResponsiveImage>` (AVIF/WebP/JPEG srcset via vite-imagetools). The LCP image per page gets `priority`; everything below the fold lazy-loads with width/height set.
```

- [ ] Commit: `docs: responsive conventions + map updates`

---

### Task 11: Verification suite (evidence before completion)

- [ ] **Step 1: Build + lint final** — `npm run build && npm run lint` → clean; 11 pages rendered.
- [ ] **Step 2: Viewport sweep (Playwright MCP)** — for each of `/`, `/services`, `/services/pregnancy-postpartum`, `/about`, `/contact`, `/faq` at widths 360, 600, 768, 992, 1200, 1440 (against `npm run preview`):
  - `browser_resize` → `browser_evaluate`: `document.documentElement.scrollWidth <= window.innerWidth` → must be `true` (no horizontal scroll);
  - snapshot: nav present/usable (hamburger < 768), hero image visible, no overlapping text.
- [ ] **Step 3: WCAG 1.4.4 zoom model check** — on `/` at 1050px: read `getComputedStyle` font-size of `h1, h2, body`; resize to 210px; assert `5 × f(210) ≥ 2 × f(1050)` for each. Then one real `Ctrl +` 500% zoom screenshot in the report. (Passes by construction — ≤1.5× ratios — this is the evidence record.)
- [ ] **Step 4: SEO regression** — `grep -c "application/ld+json" dist/index.html` ≥ 1; `grep -c "rel=\"canonical\"" dist/services/pregnancy-postpartum.html` = 1; sitemap present.
- [ ] **Step 5: Perf spot-check** — preview + DevTools: fonts same-origin (2 requests), hero `fetchpriority=high`, below-fold images lazy, page images served as AVIF in Chrome.
- [ ] **Step 6: Screenshots to Desktop preview folder** (per Jared's preference) — 360/768/1200 of Home + pregnancy service page.
- [ ] **Step 7: Final commit + PR** — `gh pr create --base develop` titled `feat: responsive refactor — fluid tokens, CSS modules, container queries, fonts/images/speculation`; body lists evidence from steps 1-6.

---

## Self-Review (done)

- **Spec coverage:** tokens §4→T1; fonts §5→T2; nav/svh §7→T3/T7; CSS-Modules migration §2→T4-T7; container queries+subgrid §3/§7→T5/T6/T7; images+art direction §6→T8 (mobile hero crop lands when client supplies the asset — plumbing is in T8); speculation §8→T9; docs (dev-conventions requirement)→T10; verification §10→T11. Gap check: `text-wrap`/reduced-motion §7→T1 base. ✔
- **Placeholders:** none — every step has code or an exact command+expected. The two "check the real value" steps (logo intrinsic size, fontsource filename) are observation steps with the command to observe, not TBDs. ✔
- **Type consistency:** `ResponsiveImage` props used in T8 match its definition; grid class names `card-grid`/`card-grid__list` consistent T6↔T7; token names T1 ↔ consumers. ✔
