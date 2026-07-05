# SEO-Focused Service Page Template — Design Spec

**Date:** 2026-07-02
**Status:** Approved (brainstorm + plan) — implementation pending
**Supersedes:** [`2026-06-25-service-page-template-design.md`](./2026-06-25-service-page-template-design.md)
**Source content:** [`docs/copy/service-pages-source.md`](../../copy/service-pages-source.md);
upstream service copy in `rgspt-site/pages/services/*`
**Design language:** `docs/design-philosophy.md` + rgspt `design/design-guidance.md`
("calm authority" / warm minimalism), executed in this repo's purple token system.
**Branch:** `feature/seo-service-template` (off `feature/new_service_page_layout`).

---

## 1. Context & goal

The service **detail** pages (`/services/:slug`) are the site's booking funnel and its
biggest untapped SEO surface. Today `src/pages/ServiceDetail.tsx` is effectively a stub
(`PageHeader` + "coming soon" card). A first pass on branch
`feature/new_service_page_layout` built a working template — `ServiceHero` +
`ServiceArticle` + gradient `CTABand`, driven by an optional `content` block — and fully
populated **Pregnancy & Postpartum**, but it carries **zero SEO machinery** and is one
page only.

Two hard facts drive the redesign:

1. **The live site is a client-rendered SPA.** `vite.config.ts` is a bare `react()`
   plugin; `index.html` ships an empty `#root` with one hardcoded `<title>`. The HTML
   served for a service route contains **none of the page text** until JS runs — which
   contradicts the canonical `design-philosophy.md` ("Content available for web
   scraping", "Static HTML5… minimal JavaScript").
2. **No per-page `<head>` or structured data exists anywhere** — no unique title, meta
   description, canonical, Open Graph, or JSON-LD. Those are the actual levers of SEO.

**Goal:** a reusable, richly-optional service-page template that (a) ships crawlable
static HTML, (b) emits valid medical + FAQ + breadcrumb structured data, (c) reads as an
elevated private practice ("wow" for the client after a long administrative delay), and
(d) serves all six services — Pregnancy as the fully-built reference, the rest degrading
gracefully until copy arrives.

**Decisions locked with the client (Jared):**
- **Rendering:** add prerendering/SSG so every route emits real static HTML with baked-in
  metadata + JSON-LD.
- **Template depth:** the SEO-rich "wow" build — breadcrumb, "Conditions We Treat",
  optional per-service FAQ, related-services links, plus **composable boutique sections**
  unique to a service (e.g. pregnancy-only "Home Visits").
- **Palette:** this repo's purple tokens (`--brand #663399`, blue `--accent`, teal
  `--attention` in the spicy gradient only). Upstream plum/teal is historical; Tailwind
  is obviated.

---

## 2. Content model (the crux)

Evolve `src/data/services.ts`. Keep the lightweight card fields (`slug`, `icon`, `title`,
`desc`) and the existing `content?` gate. Grow `ServiceContent` with named core editorial
fields **plus an ordered, optional array of typed section blocks** — the "reach /
double-reach" mechanism the client asked for: sections that read perfectly with or without
them, capturing SEO signal on the highest-impact topics and allowing boutique per-service
content.

```ts
interface ServiceContent {
  // Core editorial (present on every rich page) — evolves the existing fields
  eyebrow?: string;
  headline: string;                 // first-person, Rebecca's voice
  claim: string;
  heroImage: ServiceImage;
  heroImageSide?: 'left' | 'right';
  intro: string;                    // pitch paragraph
  insetImage?: ServiceImage;
  mainBody: string;                 // authority / SEO paragraph
  externalLink?: ExternalLink;      // inline authority link (existing shape)
  closer: string;
  cta: { phrase: string; button: string };

  // SEO / head
  seo?: {
    title?: string;                 // <title>; default `${title} | Stephenson PT`
    metaDescription?: string;       // default derived from `desc`/`intro`
    canonical?: string;             // default derived from slug
    ogImage?: string;               // default heroImage.src
  };

  // Ordered, optional, repeatable content blocks (each degrades to nothing)
  sections?: ServiceSection[];
  relatedSlugs?: string[];          // default: sibling services
}

// Discriminated union — each block is individually type-safe, freely orderable
type ServiceSection =
  | { kind: 'conditions'; title?: string; groups: ConditionGroup[] } // long-tail SEO list
  | { kind: 'faq'; title?: string; items: FaqItem[] }                // → FAQPage JSON-LD + accordion
  | { kind: 'feature'; title: string; body: string;                  // boutique block (e.g. Home Visits)
      image?: ServiceImage; imageSide?: 'left' | 'right' }
  | { kind: 'expect'; title: string; steps: { label: string; desc: string }[] } // "Your First Visit"
  | { kind: 'callout'; title: string; body: string; tone?: 'tint' | 'brand' };

interface ConditionGroup { heading?: string; items: { label: string; desc?: string }[] }
interface FaqItem { q: string; a: string }
```

**Why a union array, not more optional named fields:** it lets one service interleave a
boutique block between standard ones (Conditions → **Home Visits** → FAQ) while a sibling
omits Home Visits entirely — no schema symmetry forced across services. The JSON-LD
builder scans the array for `faq`/`conditions` blocks; ordering in the array *is* the
render order.

Content stays typed TS for now (6 services, type-safe, no new build tooling). MDX
migration remains a flagged future option if the client later wants code-free edits.

---

## 3. Components

Evolve the two existing components; add focused new ones. **Move service-page styling out
of heavy inline styles + imperative `ensureHeroCSS()` injection into a co-located
stylesheet** (`src/styles/service-page.css` or per-component CSS), consistent with the
repo's token-based CSS approach (`global.css` + `tokens/*`). This is a targeted
maintainability fix the growing section set requires — not unrelated refactoring.

| Component | Status | Role |
|---|---|---|
| `ServiceHero` | evolve | image/text split with cream fade; polish type hierarchy, add breadcrumb slot |
| `Breadcrumb` | new | `Home › Services › {title}` as a `<nav aria-label>` landmark; feeds BreadcrumbList JSON-LD |
| `ServiceArticle` | evolve | top editorial column: intro → inset → authority+link → closer |
| `ConditionsSection` | new | scannable grouped "Conditions We Treat" cards/list (leaf motif) |
| `ServiceFaq` | new | accessible accordion (keyboard, `aria-expanded`); source for FAQPage JSON-LD |
| `ServiceFeature` | new | boutique image+prose block (image side toggles); powers "Home Visits" et al. |
| `ExpectSteps` | new | numbered "Your First Visit" steps |
| `RelatedServices` | new | internal links to sibling services (SEO + UX) |
| `CTABand` | reuse | existing gradient closing band |
| `ServiceSeo` | new | renders `<title>`, meta, canonical, OG **and** `<script type="application/ld+json">`; SSG serializes it into static HTML |

`ServiceDetail.tsx` becomes a thin orchestrator: guard → `ServiceSeo` + `Breadcrumb` +
`ServiceHero` + `ServiceArticle` + `sections.map(renderSection)` + `RelatedServices` +
`CTABand`. `content` absent → existing "coming soon" fallback, unchanged.

**Structured-data helper** `src/lib/serviceJsonLd.ts`: builds
`MedicalWebPage`/`MedicalBusiness` (practice NAP from `key-facts.md`: 8 Pleasant St
Unit 8E, South Natick MA 01760), `FAQPage` (from `faq` blocks), and `BreadcrumbList`,
emitted as a single `@graph`.

---

## 4. Rendering / SSG (enabling workstream)

- **Recommended:** `vite-react-ssg` — purpose-built for React Router + Vite, first-class
  per-route head control, React 19 compatible. Requires converting `App`'s JSX `<Routes>`
  into a routes **array** and exporting via `ViteReactSSG(...)` from `main.tsx`; provide
  `includedRoutes` enumerating the six `/services/:slug` paths + static routes. Build
  script → `vite-react-ssg build`.
- **Risk / flag:** the routes-array refactor is the one non-trivial structural change.
  **Fallback** (zero routing changes): a crawl-and-snapshot prerender plugin
  (`@prerenderer/rollup-plugin` / puppeteer) that snapshots the built SPA — heavier build
  (headless Chrome), less clean head control.
- For head/JSON-LD: rely on React 19 native metadata hoisting inside `ServiceSeo`; under
  SSG whatever is in the DOM at render time is serialized into the static HTML. Add a
  generated `sitemap.xml` + `robots.txt` as a low-cost SEO win.

---

## 5. Image plan (DALL·E, on demand)

- **Per service:** hero (landscape ≈5:4) + inset. Pregnancy already has both
  (`pregnancy-landscape.png`, `pregnancy-inset.png`).
- **Boutique sections** may add one figure each (e.g. a home-visit scene) — request as
  the SEO strategy justifies, not upfront.
- Alt text per template (theme phrase; fallback "picture of ▲"). Apply a consistent warm,
  slightly-muted grade so images sit in the cream palette. No model-identity disclaimers.

---

## 6. Scope & phasing

**In scope:** the reusable template (components + `ServiceSection` model), the SSG/SEO
infrastructure, and an **end-to-end reference build of Pregnancy & Postpartum**.

**Out of scope (deferred, per `key-facts.md` "copywriting excluded"):** net-new copy for
the other 5 services; final boutique copy (Home Visits text is *pending* — ship the
`feature` block only when real copy exists, omit until then). Where upstream rich content
already exists (e.g. pelvic-bladder conditions list in rgspt), wiring it is an easy
content-fill follow-up, not a blocker.

1. **SSG + SEO infra** — `vite-react-ssg`, `ServiceSeo`, `serviceJsonLd`, sitemap/robots.
2. **Schema evolution** — `ServiceSection` union + `seo`/`relatedSlugs` on `ServiceContent`.
3. **Components** — evolve hero/article; add breadcrumb, conditions, FAQ accordion,
   feature, expect-steps, related; migrate styles off inline into a stylesheet.
4. **Reference page** — wire Pregnancy fully (FAQ block + conditions block from available
   copy; Home-Visits feature stubbed until copy lands).
5. **Verify** (below).

---

## 7. Verification

- `npm run build` → **inspect `dist/services/pregnancy-postpartum/index.html`**: confirm
  body text is present in raw HTML (crawlable), plus `<title>`, meta description,
  canonical, OG tags, and a `<script type="application/ld+json">` graph.
- Validate the JSON-LD via Google's Rich Results test (MedicalWebPage + FAQPage +
  BreadcrumbList parse cleanly).
- Confirm the other 5 slugs still emit the "coming soon" fallback HTML.
- Responsive at the project breakpoints (1200 / 992 / 768 / 600); hero split collapses to
  stacked with a bottom fade.
- Accessibility: FAQ accordion keyboard-operable with correct `aria-expanded`; breadcrumb
  a labeled `nav`; descriptive alt text; AA contrast against the purple tokens;
  `prefers-reduced-motion` disables non-essential motion.
- `npm run lint` (oxlint) clean.

---

## 8. Open items / future

- **External authority URLs** (e.g. Inova Health for pregnancy) — placeholders until
  provided; do not block.
- **Boutique copy** (Home Visits, per-service FAQs/conditions) — content-fill as it
  arrives; the schema already supports it.
- **MDX migration** — optional, only if the client wants code-free prose edits.
- **SSG library** — `vite-react-ssg` recommended; prerender-plugin fallback documented.
