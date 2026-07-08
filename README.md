# Physical Therapy Practice

v1.0.0

A marketing site for a physical-therapy / allied-health practice — statically
pre-rendered React with a data-driven services section and a CSS design-token
system. It's structured to be reusable.

## Tech stack

| Concern     | Choice                                               |
| ----------- | ---------------------------------------------------- |
| UI library  | React 19                                             |
| Routing     | React Router 6 (`react-router-dom`)                  |
| Rendering   | `vite-react-ssg` — static HTML per route (+ sitemap) |
| Build / dev | Vite 8 (`@vitejs/plugin-react`, Oxc under the hood)  |
| Language    | TypeScript 6                                         |
| Linting     | oxlint                                               |
| Styling     | CSS Modules + custom-prop tokens (fluid clamp scale) |
| Images      | `vite-imagetools` (AVIF/WebP/JPEG srcset at build)   |
| Deploy      | via cloudflare Pages on passing dev/main build       |

## Quick Start

| Command           | What it does                                                       |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Start the Vite dev server with HMR at `http://localhost:5173/`.    |
| `npm run build`   | Type-check the project (`tsc -b`) then produce a production build. |
| `npm run preview` | Serve the production build locally to sanity-check `dist/`.        |
| `npm run lint`    | Run `oxlint` across the codebase.                                  |

> `build` runs `tsc -b` **before** `vite build`, so a type error fails the
> build. If the dev server runs but the build fails, run `npx tsc -b` to see the
> type errors Vite's transform skips.

## Project structure

see CLAUDE.MD

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
│   ├── Services.tsx        # Services grid
│   └── ServiceDetail.tsx   # Single service, looked up by :slug
├── components/
│   ├── core/           # Reusable primitives (Button, Card, Badge, Input)
│   └── marketing/      # Higher-level sections (ServiceCard, CredentialBand,
│                       #   Testimonial, CTABand, StatCard)
├── data/
│   └── services.ts     # Source of truth for the services section (see below)
├── styles/
│   ├── global.css      # Entry stylesheet: @imports the token layers in order
│   └── tokens/         # fonts → colors → typography → spacing → base
└── assets/             # Icons and imagery, imported directly into modules
```

## How routing works

All routes are declared in `src/App.tsx`. Every page renders inside a shared
`Layout` (nav + footer) via React Router's nested `<Route element={<Layout/>}>`
and `<Outlet/>` pattern:

| Path              | Page            |
| ----------------- | --------------- |
| `/`               | `Home`          |
| `/about`          | `About`         |
| `/services`       | `Services`      |
| `/services/:slug` | `ServiceDetail` |
| `/faq`            | `Faq`           |
| `/contact`        | `Contact`       |

`main.tsx` wraps the app in `<BrowserRouter>`, so this uses real history-API
URLs (not hash routing). When deploying, configure the host to fall back to
`index.html` for unknown paths so deep links like `/services/<slug>` resolve.

## Development

See docs/development.md
