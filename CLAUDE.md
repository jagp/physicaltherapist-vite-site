# CLAUDE.md

**Physical Therapist Vite Site** — the buildable implementation of the Stephenson Physical Therapy website.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — typecheck (`tsc -b`) then **static-render** the site with `vite-react-ssg` (each route → flat `dist/*.html` + `sitemap.xml`)
- `npm run lint` — lint with oxlint (not eslint)
- `npm run preview` — preview the production build
- **Install note:** deps require `npm install --legacy-peer-deps` (pinned in `.npmrc`) — `vite-react-ssg@0.9.1-beta.1` declares a `vite ≤7` peer range but is build-verified on Vite 8. See `docs/development.md`.

## Git workflow (critical)

This repo uses **gitflow** — full rules in `docs/development.md`. Non-negotiables:

- **`develop` is the integration branch.** Branch features off `develop`; PR them back into `develop` (`gh pr create --base develop`).
- **Never push or merge directly to `main`.** `main` changes *only* via a human-reviewed PR from `develop`. A `PreToolUse` hook enforces this.
- **Commit all worktree work before exiting a worktree** — never strand uncommitted files in a `worktree-*` folder.
- **Archive, don't delete:** superseded work → `archive/*` branch or tag.

## Project Mapping

- Consult this table before choosing a powersearch of the local filesystem \*

```md
physicaltherapist-vite-site/
- CLAUDE.md
- README.md
- docs →
- - scratch → X (IGNORE THIS & CONTENTS) 
- - design-philosophy.md
- - key-facts.md
- - development.md (internal dev conventions + gitflow)
- - dalle-queue.md
- - copy → (client-facing copy; formerly 'content')
- - - bio → about-page, awards-and-more, scholarship
- - - faq-copy, new-patients, service-pages-source, what-to-expect
- - superpowers →
- - - mocks → (incl. responsive/ — Gate B mockups)
- - - plans → (implementation plans; 2026-07-04-responsive-refactor)
- - - specs
- src →
- - App (route table as vite-react-ssg RouteRecord[]), main (ViteReactSSG bootstrap)
- - assets → images, icons, service-page-images
- - components →
- - - core → Badge, Button, Card, Input, ResponsiveImage (AVIF/WebP srcset <picture>; one `priority` LCP per page)
- - - marketing →
- - - - CTABand
- - - - CredentialBand
- - - - ServiceCard
- - - - StatCard
- - - - Testimonial
- - - - CareerTimeline
- - - - ServiceHero, ServiceArticle (service-page hero + editorial body)
- - - - ConditionsSection, ExpectSteps, ServiceFaq, ServiceFeature, RelatedServices (composable service sections)
- - - - SectionEyebrow, Breadcrumb
- - - PageHeader
- - - PageSeo, ServiceSeo (per-page <head> tags + JSON-LD; React 19 head hoisting)
- - data → services.ts (services + SEO content schema), service-slugs.ts (asset-free slug source, shared with vite.config)
- - lib → serviceJsonLd.ts (structured-data builders)
- - hooks {}
- - layout → Layout, Footer, Nav
- - pages →
- - - About
- - - Contact
- - - FAQ
- - - Home
- - - ServiceDetail (full template when service.content present; else "coming soon")
- - - Services
- - styles →
- - - tokens → colors, typography (FLUID clamp scale), spacing (fluid rhythm), fonts (self-hosted @font-face), base
- - - global.css
- - - grids.css (container-query card grid, shared by pages)
- - - service-page.css (service-page layout classes)
- - types → imagetools.d.ts (ambient types for image query imports)
```

**Styling:** CSS Modules co-located per component (`X.module.css`); responsive = media queries (1199/991/767/599) + container queries + fluid rem clamp() tokens (≤1.5× — WCAG 1.4.4). Full conventions in `docs/development.md`.

## Canonical project docs

- `docs/key-facts.md` — client, URL, site structure, scope, breakpoints, launch date (source of truth; handed off from rgspt-site 7/1/26)
- `docs/design-philosophy.md` — foundational look-and-feel directives

## Upstream design context (rgspt-site)

The design system, mockups, copy, and inspiration docs that inform this site live at:

`C:\Users\jared\Projects\rgspt-site`

This directory is granted as an additional working directory (see `.claude/settings.local.json`), so files there can be read directly.

- **Start with** `project-structure.md` in that root — it is an attention-routing table; use it to find only what the current task needs.
- **Relevant:** `pages/` (service page sources), `components/` + `COMPONENTS.md`, `design/`, and most of `guidance/` (inspiration docs, services copy template). Upstream `key-facts.md` and `design-philosophy.md` are superseded by the copies in `docs/` here.
- **Ignore:** `guidance/administrative/`, `guidance/post-mortem.md`, and other process/meeting artifacts — not relevant to work in this repo.
- Treat upstream files as **read-only reference**: never edit files in rgspt-site from this project.
- **Tailwind is entirely obviated.** Some upstream material (e.g. the about-page timeline mockup) was built with Tailwind by accident — do not carry Tailwind classes, utilities, or conventions into this project. Translate any Tailwind-based reference into this project's own styling approach.
- **Nothing in rgspt-site is canon.** If any conflict or priority question arises between upstream material and this project, this project always wins. The upstream content is good to be aware of — especially the services snippets — but it exists ultimately in service of this main website project, never as an authority over it.
