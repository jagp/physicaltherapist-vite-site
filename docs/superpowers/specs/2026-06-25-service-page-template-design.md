# Service Page Template — Design Spec

**Date:** 2026-06-25
**Status:** Approved (brainstorm) — pending implementation plan
**Source content:** [`docs/copy/service-pages-source.md`](../../copy/service-pages-source.md)

## 1. Goal

Give the service detail pages an "X factor" through **form, not decoration**. A
visitor should feel the core message — *connecting with Rebecca will make your life
better* — even if they click in and bounce. The site voice stays **clean, simple, not
fancy, informative**, oriented toward community connection.

Priority order behind the work (from the client): **spotlight content > visual variety
> elevate inner pages.**

## 2. Background / current state

- `src/pages/ServiceDetail.tsx` is a **stub**: it renders the generic `PageHeader` plus
  a "Detailed page coming soon" card.
- `src/data/services.ts` exposes a minimal `ServiceInfo` (`slug`, `icon`, `title`,
  `desc`) for the 6 services.
- The client supplied a **content template** plus full copy for one service
  (Pregnancy & Postpartum). The two original layout notes — "hero section inner pages"
  and "split graphic / larger-format quote" — **merge into one element**: a service
  hero where Rebecca's first-person headline + claim sit opposite a landscape image.

## 3. Scope

**In scope**
- A reusable service-page template (components + content model).
- Build it **end-to-end for `pregnancy-postpartum`** as the reference page.

**Out of scope (deferred)**
- The other 5 services keep the current "coming soon" fallback until their copy exists.
  `ServiceDetail` renders the full template only when rich content is present.
- The earlier Home-`Philosophy` / About "signature quote" work (explicitly deferred when
  scope refocused on service pages).
- Sourcing/writing copy or final imagery for the other 5 services.

## 4. Decomposition

1. Design the content model + section template (this spec).
2. Build the template end-to-end for Pregnancy & Postpartum.
3. Other 5 services become content-fill behind the same template, later.

## 5. Components

### 5.1 `<ServiceHero>` (new)
Replaces the generic `PageHeader` **on service pages only**. `PageHeader` is left
untouched for About/Contact/FAQ/Services.

**Props**
- `imageSide?: 'left' | 'right'` — default `'left'`. The placement **toggle**; flip it
  per service so consecutive pages don't feel identical.
- `image: { src: string; alt: string }`
- `headline: ReactNode` — Rebecca's first-person line (e.g. "I Don't Just Treat You.").
- `claim: ReactNode` — the punchy claim.
- `eyebrow?: ReactNode` — optional small label (e.g. the service title).

**Visual**
- Landscape image occupies one side; the **quote occupies the opposite side**.
- The image **fades into the cream page background** (`--cream`) via a horizontal
  `linear-gradient(to right, transparent, var(--cream))` overlay (mirrored when
  `imageSide="right"`). No image editing required — same overlay trick used elsewhere,
  rotated horizontal.
- Quote in **dark display type** (`--font-display`, `--text-heading`). Calm, editorial,
  consistent with the rest of the page (no mood shift between hero and body).
- Responsive: the split collapses to stacked (image above text) on narrow viewports;
  the fade can soften to a bottom fade when stacked.

### 5.2 `<ServiceArticle>` (new — editorial body)
A centered reading column (~700px max) holding the prose sections with generous
vertical rhythm ("one idea per scroll"). Sections, in order:

1. **Intro pitch** — lede-weight paragraph.
2. **Inset photo** — the mid-body service picture (e.g. `pregnancy-inset.png`), rounded,
   inset within the column.
3. **Authority paragraph** — the SEO/authority prose, with the **external authority
   link** rendered inline (accent-colored link).
4. **Specialized treatments list** — optional; renders only when items exist. Uses the
   **leaf motif** (`leaf-mark.png`) as the list inset/marker, inside a tinted panel
   (`--surface-tint` / `Card tone="tint"`). Each item: bold label + description.
5. **Closer** — "land the pitch" paragraph.

### 5.3 Closing CTA
Reuse the existing **`CTABand`** with `tone="gradient"` (the page's single dramatic
moment, bookending the calm body). Content: the service's CTA phrase + button.

## 6. Content model

Grow the service data from `ServiceInfo` into a richer optional content object. Keep the
existing lightweight fields (used by the Services grid / cards) and add an optional
`content` block that, when present, drives the full template.

```ts
interface ExternalLink {
  /** Linked label, e.g. "Inova Health's overview". */
  label: string;
  url: string;            // may be a placeholder until finalized
  /** Sentence framing the link's relevance; the label renders as the <a>. */
  relevance: string;
}

interface SpecializedTreatment {
  label: string;          // e.g. "Diastasis Recti (DRA)"
  desc: string;
}

interface ServiceContent {
  headline: string;       // first-person, Rebecca's voice
  claim: string;          // punchy claim
  heroImage: { src: string; alt: string };
  heroImageSide?: 'left' | 'right';
  intro: string;          // pitch paragraph
  insetImage?: { src: string; alt: string };
  mainBody: string;       // authority / SEO paragraph
  externalLink?: ExternalLink;
  specializedTreatments?: SpecializedTreatment[];
  closer: string;
  cta: { phrase: string; button: string };
}

interface ServiceInfo {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  content?: ServiceContent;   // present => full template; absent => "coming soon"
}
```

**Decision — TypeScript vs MDX:** keep content in the typed TS array for now. With 6
services it stays type-safe and needs no new build tooling. **Flagged future option:**
move prose to MDX/markdown if the client later wants to edit copy without touching code.

## 7. Assets available

- Hero (landscape): `src/assets/service-page-images/pregnancy-landscape.png`
- Inset (mid-body): `src/assets/service-page-images/pregnancy-inset.png`
- Spare scene: `src/assets/service-page-images/pregnancy-not-rebecca.png`
- Leaf marker: `src/assets/leaf-mark.png`; leaf motif: `src/assets/leaf-leaves.png`
- Per-service icons already in `src/data/services.ts`.

## 8. Reference build — Pregnancy & Postpartum (`pregnancy-postpartum`)

Map the source copy to `content` fields (full text in the source-content file):

- **headline:** "I Don't Just Treat You."
- **claim:** "I bring long-lasting vitality to your whole family."
- **heroImage:** `pregnancy-landscape.png`; alt = descriptive care-moment text.
  **heroImageSide:** `'left'`.
- **intro:** the pitch paragraph (Board-Certified WHCS, one-on-one through every stage).
- **insetImage:** `pregnancy-inset.png`; descriptive alt text.
- **mainBody:** the authority paragraph (movement/weight/recovery, working alongside the
  obstetric provider).
- **externalLink:** label "Inova Health's overview", `url` = **TBD placeholder**,
  relevance = "For a broader look at what pelvic floor physical therapy addresses during
  and after pregnancy".
- **specializedTreatments:** Prenatal Care; Postpartum Rehabilitation; Diastasis Recti
  (DRA) — labels + descriptions from source.
- **closer:** the partner / healthy-family paragraph.
- **cta:** phrase "You don't have to white-knuckle your way through this." / button
  "Schedule Your Evaluation".

## 9. Design tokens to use

Compose from the existing closed palette only — no new colors:
- Backgrounds: `--cream` (hero fade + page), `--surface-tint` (treatments panel),
  gradient (`--brand-gradient-spicy` or brand) for the CTA band.
- Type: `--font-display` for hero quote + headings, `--font-ui` for labels/eyebrows.
- Text: `--text-heading`, `--text-body`, `--text-muted`; link in `--text-link`/`--accent`.
- Radii/shadows/spacing per existing tokens; match `PageHeader`/`CTABand` conventions.

## 10. Fallback behavior

`ServiceDetail` checks `service.content`:
- present → render `<ServiceHero>` + `<ServiceArticle>` + `CTABand`.
- absent → render the existing "Detailed page coming soon" card (unchanged), so the 5
  unwritten services degrade gracefully.

## 11. Open items / future

- **External link URL** for Inova Health — placeholder until provided (do not block).
- **Final hero/inset imagery** for the other 5 services — content-fill, later.
- **MDX migration** — optional, only if client wants code-free prose edits.
- **Responsive fade** behavior for the stacked (mobile) hero — confirm during build.

## 12. Verification

- Build the reference page and confirm it renders against real content.
- Confirm `imageSide` toggles the split correctly (left/right) with the fade mirrored.
- Confirm the 5 unwritten services still show the "coming soon" fallback.
- Visual check at desktop + mobile widths; confirm alt text is present and descriptive.
