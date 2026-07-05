# Copy Refresh — Review Proposal

> **Status:** DRAFT for client-review readiness. Words only — no code has been changed.
> Review this, mark it up, then I wire the approved copy into the components.
> Date: 2026-07-05 · Branch: (hotfix/content-tweaks, off `main` per gitflow)

---

## Why this pass

The current copy is structurally sound and SEO-strong, but in places it reads
**amateur or confrontational** rather than warm. The clearest example is the
Pregnancy service page headline — *"I Don't Just Treat You."* — which came from a
raw intent-note that never got translated into finished language. This pass keeps
everything that's working and rewrites for **warmth, calm authority, and trust**.

### Voice principles (the standard every line is held to)

1. **Warm, expert, plain** — sounds like a trusted senior clinician: confident,
   kind, never clinical-cold, never salesy.
2. **Reassure, don't confront.** No "you don't have to white-knuckle this,"
   no telling the reader how they or their family feel. Offer support instead.
3. **Confidence through specifics** — 45+ years, PWCS, Brigham/MGH, the Routledge
   text — not through slogans.
4. **Consent-forward** — "we discuss every step," "only with your consent,"
   "at your pace." This is conversion-critical for pelvic health.
5. **You-centered, never presumptuous** — speak to the reader's experience without
   inventing their circumstances (partner, family, emotional state).

### Credential accuracy (must-fix, sitewide)

- The credential is **PWCS** — *Pelvic & Women's Health Clinical Specialist*
  (renamed from WCS in Sept 2025). Any remaining **"Women's Health Clinical
  Specialist (WCS)"** phrasing is outdated — e.g. the Pregnancy intro currently
  says WCS. Fix all to PWCS. No "first-ever" claims.

### ⚠️ Two open questions I need you to answer

1. **Testimonials.** You mentioned Rebecca has fantastic real patient quotes we
   should thread through the pages (Home + service pages). I searched **both this
   repo and all of rgspt-site (including "floating copy")** — they aren't anywhere.
   The current Home testimonials are **placeholders** ("Postpartum patient").
   **Where do the real quotes live?** Paste them, point me to a file, or confirm
   we ship the (attributed-but-generic) placeholders for now.
2. **Canonical book title.** Her 2025 text appears in *three* different forms
   across the repo. I need the one exact published title + publisher. My proposed
   canonical (matches the career timeline):
   **_The Physical Therapists' Guide to Pelvic, Perinatal & Reproductive Health_**
   (Routledge, 2025). Confirm or correct.

---

## Page 1 — About  *(full rewrite, first person, built around the timeline)*

**Voice shift:** first person ("I…"), warmer and truer to her philosophy. The
`CareerTimeline` already carries the CV/awards accurately, so this prose does the
*human* work around it: who she is, what she believes, why South Natick.

### Page header
- **Eyebrow:** About
- **Title:** *More than four decades of expert, compassionate care*
  *(current: "Four decades of compassionate, expert care" — fine; this just nods to 45+ yrs)*

### Intro (replaces current lede)
> I'm Dr. Rebecca G. Stephenson — a Board-Certified Pelvic & Women's Health
> Clinical Specialist (PWCS) with more than 45 years of experience caring for
> people of all genders. I've spent my career treating complex pelvic health,
> urogynecologic, and obstetric concerns, and building women's-health programs at
> two of the country's leading hospitals. Today I bring that same standard of care
> to a small, private practice in South Natick — where you're a person, never a
> file number.

### "What is a Board-Certified PWCS?" card *(keep the card, tighten copy)*
> A Pelvic & Women's Health Clinical Specialist (PWCS) holds the highest board
> certification in the field, awarded by the American Board of Physical Therapy
> Specialties. It takes thousands of supervised clinical hours and a rigorous
> national exam — and only a small percentage of physical therapists earn it. In
> practice, it means care from someone who understands the full picture: how
> hormones, childbirth, aging, and surgery shape pelvic and whole-body health.

### NEW section — Clinical leadership *(short prose above the timeline)*
> For decades I served as Urogynecology Coordinator at Brigham and Women's
> Hospital and as a clinical specialist in women's pelvic health at Massachusetts
> General Hospital — caring for high-risk pregnancies, postpartum recovery, and
> complex pelvic-floor conditions at the highest level. The timeline below traces
> that work alongside the teaching, research, and advocacy it grew into.

*(then the existing `CareerTimeline` renders — no change to its content)*

### NEW section — Educator, author & advocate *(after the timeline)*
> My work has never stopped at the clinic door. I teach as an Adjunct Clinical
> Assistant Professor at the MGH Institute of Health Professions, and I'm lead
> author and editor of *The Physical Therapists' Guide to Pelvic, Perinatal &
> Reproductive Health* (Routledge, 2025) — a comprehensive reference for
> clinicians. I've taught women's health internationally, from the United Arab
> Emirates and Korea to Ethiopia and Chile.
>
> I also founded the **InspireHer Global Women's Health Initiative** to widen
> access to women's health education and expertise in underserved regions. It
> reflects a belief that runs through everything I do: that every person deserves
> compassionate, expert care — regardless of geography or circumstance.

### Philosophy quote *(keep; already excellent)*
> "My philosophy of care is the personal touch that is fundamental to overall
> well-being. Whether I'm working one-on-one with a patient, teaching, or
> mentoring, my goal is evidence-based, compassionate care that empowers
> individuals to reclaim their quality of life." — Dr. Rebecca G. Stephenson

### Closing CTA *(warm the current copy)*
- **Eyebrow:** Work with Rebecca
- **Title:** *Compassionate care, built around you*
- **Description:** *Your first visit is an unhurried, 60-minute conversation and
  evaluation in a private setting. We'll talk through your history, your goals,
  and the plan that fits you.*
- **Button:** Book a Consultation

---

## Page 2 — Pregnancy & Postpartum service  *(de-confrontationalize)*

This is the page with the flagged copy. Field-by-field, mapped to
`services.ts → content`:

| Field | Current (confrontational / off) | Proposed (warm) |
|---|---|---|
| **headline** | "I Don't Just Treat You." | **"Care through pregnancy and beyond"** |
| **claim** | "I bring long-lasting vitality to your whole family." | **"Expert, one-on-one pelvic health care through pregnancy and postpartum recovery."** |
| **cta.phrase** | "You don't have to white-knuckle your way through this." | **"You don't have to navigate this alone."** |
| **cta.button** | "Schedule Your Evaluation" | **"Book a Consultation"** *(matches the rest of the site)* |

### intro *(fix WCS→PWCS, keep the warmth that's already here)*
> Pregnancy and the months after birth ask a great deal of your body — and you
> deserve a provider who has spent decades learning how to support it. As a
> Board-Certified Pelvic & Women's Health Clinical Specialist (PWCS), I work
> one-on-one with you at every stage, from the aches of a changing body to a full
> return to strength after birth.

### mainBody *(minor polish; already strong)*
> Pregnancy changes how your body moves, carries weight, and recovers — often
> faster than a prenatal care team has time to fully address. Reduced movement
> late in pregnancy, shifting nutritional needs, and lower activity can compound
> into pain that doesn't resolve on its own. Working alongside your obstetric
> provider, I help you stay capable through pregnancy and rebuild safely
> afterward, with care tailored to exactly where you are.

### closer *(remove the presumption about "your partner")*
> Recovery is easier with an expert in your corner. Let me handle the clinical
> complexity — so you can focus on healing, and on your growing family.

*(Specialized treatments, conditions, "your first visit" steps, and FAQ on this
page are accurate and well-written — **keep as-is**, aside from "Board-Certified
Women's Health Clinical Specialist" → PWCS if it recurs.)*

---

## Page 3 — Home  *(targeted polish; keep third-person marketing voice)*

Home is the strongest page already. Proposed changes are surgical:

- **Hero title** — keep: *"Expert Pelvic & Women's Health Care in South Natick"* ✅
- **Hero lede** — keep; it's accurate and warm ✅
- **Book spotlight** — align the title/publisher to canonical (Routledge, 2025)
  and fix the alt text to match. Current body is good.
- **Testimonials** — **blocked on open question #1.** If real quotes exist, swap
  them in with first-name + context attribution (e.g. "— Maria, postpartum
  recovery"). Placeholders read as invented; real quotes are the biggest single
  credibility upgrade on the page.
- **Closing CTA title** — *"Start your journey to better health"* is a touch
  generic. Optional warmer alt: **"Take the first step, at your pace."**
  *(Low priority — flag only.)*

---

## Page 4 — Services  *(light polish + card blurbs)*

- **Header** is good. Keep.
- **Service card descriptions** (`services.ts → desc`) are accurate and scannable
  — keep. One small warmth tweak available for the Complex Pelvic Pain blurb
  (already ends "treated with compassion" — good).
- **"Not sure where you fit?"** CTA — keep; it's warm and low-pressure. ✅
- **Note (out of scope for this pass):** five of six service pages are still
  "coming soon" (only Pregnancy has full content). Writing full copy for the
  other five is a **separate, larger task** — flag for scheduling, not part of
  "improve the initial copy."

---

## Page 5 — FAQ  *(already excellent — minimal)*

The FAQ is the best-written page on the site: consent-forward, plain, calm. It
even nails "Do you treat men? … pelvic health is human health." **Keep entirely.**
Optional additions, drawing on copy that already exists upstream:
- **"What should I wear?"** — answer already written on the Pregnancy page FAQ; promote it here.
- **"Do you take insurance / provide superbills?"** — only if you give me the answer.
- **"How do I prepare for my first visit?"** — the upstream new-patient copy has a
  ready answer: *"To make the most of our time together, complete the digital intake
  forms sent to your email before your first appointment."*

---

## Page 6 — Contact  *(warm microcopy; mostly keep)*

- **Header title** *"Start your journey to better health"* duplicates the Home CTA
  title. Suggest a contact-specific line: **"Let's find a time that works for you."**
- **Form intro / hint** — "Everything you share is confidential" ✅ keep.
- **"Thank you" confirmation** — keep; warm and clear. ✅
- **Hours card** — "New patients welcome. We'll find a time that works for you." ✅
- **NEW (optional) — a short "What to expect" reassurance block**, using the strong
  upstream copy that today only appears on one service page:
  > *Your first visit is an unhurried, 60-minute evaluation in a private, comfortable
  > room. We start with a conversation about your history and goals, then — only with
  > your consent — a specialized assessment, and together we build a plan at your pace.
  > Digital intake forms are emailed ahead so we can make the most of our time.*

---

## Upstream (rgspt-site) review — what I pulled in

Per your ask, I reviewed rgspt-site, especially `pages/floating copy/`. Nothing there
supersedes this project; these are the only genuinely useful, non-duplicate bits, now
folded into the pages above:
- **`what to expect.md`** → the "Conversation / Assessment / Plan / Your Input Matters"
  first-visit breakdown → **Contact reassurance block** (and it already backs the
  Pregnancy page's "Your first visit" steps).
- **`new-patients.md`** → HIPAA-compliant booking + **intake-forms-emailed-ahead** →
  **Contact + FAQ**.
- **`accredidation.md`** → uses outdated **"WCS"** → confirms the sitewide PWCS fix.
- Everything else upstream (Areas of Expertise list, etc.) already exists in this repo's
  `docs/copy/bio/`. No testimonials anywhere.

---

## Summary of what changes

| Page | Effort | Blocked? |
|---|---|---|
| About | **Full rewrite** (first person, +2 new sections) | needs book-title confirm |
| Pregnancy service | Headline/claim/closer/CTA rewrite + WCS→PWCS | no |
| Home | Testimonials swap + book-title align + 1 optional CTA | **needs real testimonials** |
| Services | Keep, minor | no |
| FAQ | Keep (optional +2 Qs) | no |
| Contact | 1 header line | no |

**Nothing here touches code until you approve the words.**
