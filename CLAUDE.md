# CLAUDE.md

**Physical Therapist Vite Site** — the buildable Vite/TS implementation of the Stephenson Therapy website. Content, design lineage, and planning live upstream in the RGSPT project (see below); this repo is where the real site gets built.

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
