# Physical Therapy Practice — Website Template

A marketing site for a physical-therapy / allied-health practice, built as a
single-page React application with client-side routing, a data-driven services
section, and a CSS design-token system. It's structured to be reusable: content
lives in data and design tokens, so you can adapt it to a practice by editing
data and styles rather than rewriting components.

## Tech stack

| Concern        | Choice                                          |
| -------------- | ----------------------------------------------- |
| UI library     | React 19                                        |
| Routing        | React Router 6 (`react-router-dom`)             |
| Build / dev    | Vite 8 (`@vitejs/plugin-react`, Oxc under the hood) |
| Language       | TypeScript 6                                    |
| Linting        | oxlint                                          |
| Styling        | Plain CSS with layered custom-property tokens   |

## Getting started

### Prerequisites

- **Node.js 18+** (Vite 8 requires a current LTS)
- **npm** (the repo tracks a lockfile; other package managers work but aren't tracked)

### Install

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

This starts Vite with hot-module replacement. By default it serves at:

```
http://localhost:5173/
```

To expose it on your local network, run `npm run dev -- --host`.

## Available scripts

| Command           | What it does                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR at `http://localhost:5173/`.     |
| `npm run build`   | Type-check the project (`tsc -b`) then produce a production build.  |
| `npm run preview` | Serve the production build locally to sanity-check `dist/`.         |
| `npm run lint`    | Run `oxlint` across the codebase.                                   |

> `build` runs `tsc -b` **before** `vite build`, so a type error fails the
> build. Keep the types green.

## Project structure

```
index.html              # Vite entry HTML; mounts #root and loads src/main.tsx
vite.config.ts          # Vite config (just the React plugin)
tsconfig*.json          # Split TS config: app + node project references
src/
├── main.tsx            # App bootstrap: createRoot + <BrowserRouter> + global.css
├── App.tsx             # Route table (all routes live here)
├── layout/             # Page chrome shared across routes
│   ├── Layout.tsx      #   Nav + <Outlet/> + Footer wrapper
│   ├── Nav.tsx
│   └── Footer.tsx
├── pages/              # One component per route (Home, About, Services, …)
│   └── ServiceDetail.tsx   # Renders a single service from its slug
├── components/
│   ├── core/           # Reusable primitives (Button, Card, Badge, Input)
│   └── marketing/      # Higher-level marketing sections (heroes, cards, bands)
├── data/
│   └── services.ts     # Source of truth for the services section (see below)
├── hooks/              # Custom React hooks (e.g. useMediaQuery)
├── styles/
│   ├── global.css      # Entry stylesheet: @imports the token layers in order
│   └── tokens/         # fonts → colors → typography → spacing → base
└── assets/             # Icons and imagery, imported directly into modules
```

## How routing works

All routes are declared in `src/App.tsx`. Every page renders inside a shared
`Layout` (nav + footer) via React Router's nested `<Route element={<Layout/>}>`
and `<Outlet/>` pattern:

| Path                 | Page             |
| -------------------- | ---------------- |
| `/`                  | `Home`           |
| `/about`             | `About`          |
| `/services`          | `Services`       |
| `/services/:slug`    | `ServiceDetail`  |
| `/faq`               | `Faq`            |
| `/contact`           | `Contact`        |

`main.tsx` wraps the app in `<BrowserRouter>`, so this uses real history-API
URLs (not hash routing). When deploying, configure the host to fall back to
`index.html` for unknown paths so deep links like `/services/<slug>` resolve.

## The services data model

The services section is **data-driven**: pages come from `src/data/services.ts`,
not from bespoke per-service components.

- `services` is a `ServiceInfo[]`. Each entry always has a `slug`, `icon`,
  `title`, and `desc` (used by the services grid and cards).
- An entry may *optionally* include a rich `content: ServiceContent` object
  (headline, hero image, intro, specialized treatments, CTA, etc.).
  - **With `content`** → `ServiceDetail` renders the full marketing template.
  - **Without `content`** → it renders a "coming soon" fallback.

To ship a new full service page, add the `content` block to that service's
entry — no new routes or components required. Marketing copy is written in the
practitioner's first-person voice; use an existing fully-populated entry in
`services.ts` as the reference for the shape and tone.

## Styling and design tokens

`src/styles/global.css` is intentionally thin — it only `@import`s the token
layers, **in order**:

```
fonts.css → colors.css → typography.css → spacing.css → base.css
```

Order matters: the token files define CSS custom properties
(`--color-*`, `--space-*`, …) that `base.css` and component styles consume, so
they must load first. Add or rebrand design tokens in the relevant file under
`src/styles/tokens/` rather than hardcoding values in components.

## Adapting this template to a practice

The content and branding surfaces are deliberately isolated:

- **Services & copy** — edit `src/data/services.ts`.
- **Branding (colors, fonts, spacing, type scale)** — edit `src/styles/tokens/`.
- **Imagery & icons** — replace files under `src/assets/`.
- **Site title / metadata** — edit `index.html`.
- **Nav, footer, and per-page structure** — edit `src/layout/` and `src/pages/`.

## Linting

```bash
npm run lint
```

Linting uses [oxlint](https://oxc.rs) (fast, Rust-based). For a production
build you can enable type-aware rules by installing `oxlint-tsgolint` and
turning on `typeAware` in `.oxlintrc.json`; see the
[oxlint rules docs](https://oxc.rs/docs/guide/usage/linter/rules).

## Building for production

```bash
npm run build     # type-check + bundle into dist/
npm run preview   # serve dist/ locally to verify
```

The output in `dist/` is a static site — deploy it to any static host (with the
SPA fallback to `index.html` noted above).
