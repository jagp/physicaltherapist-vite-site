# menopause-midlife-health — intent

> One page's keyword + journey brief. Pipeline: template (`service-pages-source.md`) → **this intent**
> → human "middle layer" plus-up (Jared: psychological motivation, brand-promise story, H1→CTA thread,
> bounce control) → SEO copy plugin → `content` block in `src/data/services.ts`.
> `narrative_arc` / `brand_promise` are **scaffold for the human layer — yours to own or replace.**
> ⚠ LARGEST SOURCE GAP — net-new keyword pivot, no dedicated upstream source. Built from standard
> menopause pelvic-health scope (GSM). Rebecca must confirm the scope she treats before publish.

```yaml
service: Menopause & Midlife Health
slug: menopause-midlife-health
source: THIN — needs clinical review (largest gap)
status: DRAFT — clinical review required

# --- brand frame (grounded in design-philosophy.md + key-facts.md; applies sitewide) ---
brand_frame:
  north_star: "Calm authority — quiet, expensive, deeply credible private practice; warm minimalism, not clinical sterility."
  voice: "Warm, expert, plain — trusted senior clinician; reassurance over commands; never salesy."
  anxiety_rule: "Patient arrives anxious and often dismissed. Plain language; 'we discuss every step'; your pace, full consent; never embarrassing."
  kpi: "Low bounce / high dwell → one idea per section; front-load recognition + credibility; helpful-content depth holds the reader."
  authority_discipline: "Deploy 1–2 grounded signals only; honest > overreach. Credential is PWCS (never 'WCS'); no 'first-ever' claims."
  cta_convention: "ONE reassurance-framed action per page. ⚠ verb inconsistent across sources (design-philosophy 'Request a Consultation' | about 'Book a Consultation' | template 'Schedule Your Evaluation') — standardize sitewide before publish."

# --- keyword targets ---
primary_keyword: "physical therapy for menopause and midlife pelvic health"
secondary_keywords: [genitourinary syndrome of menopause, GSM, vaginal dryness, painful intimacy,
  bladder changes menopause, pelvic floor menopause, midlife health]
audience: peri-/post-menopausal women

# --- journey scaffold (grounded hooks for the human layer; replace freely) ---
brand_promise: "Midlife is a stage to be supported, not endured — expert, judgment-free care for the changes no one warned you about."
authority_signals: ["Board-Certified PWCS — pelvic health across the lifespan incl. hormonal change", "45+ years", "judgment-free, boutique setting"]
narrative_arc:
  recognition: "New bladder urgency, dryness, painful intimacy — and being told it's 'just menopause.'"
  why_her:     "A specialist in pelvic health across the lifespan, including the hormonal transition — she's seen it all, judgment-free."
  relief:      "The GSM cluster — bladder changes, dryness, intimacy — addressed conservatively with pelvic floor PT + education. (VERIFY scope)"
  reassurance: "Private, unhurried, never embarrassing; pairs naturally with bone-health care."
  cta:         "This chapter deserves a specialist who's seen it all."

# --- SEO head ---
seo:
  title: "Menopause & Midlife Health | Stephenson Physical Therapy"   # ≤60 chars, kw front-loaded
  meta_desc: "Pelvic-health care for menopause and midlife — bladder changes, dryness and comfort, and intimacy — with a specialist who's seen it all."  # ≤155

# --- template fields (intents/seeds, not final prose) ---
fields:
  headline:   {intent: "Midlife as a stage to be supported, not endured.", seed: "Thrive Through Midlife."}
  claim:      {intent: "Menopause changes your body — the right care keeps you comfortable and confident."}
  intro_pitch:
    intent: "Hormonal changes of menopause affect bladder, pelvic floor, tissue comfort, intimacy; I help you navigate midlife with expert, judgment-free care."
    must_include: [menopause, midlife, pelvic health]   # primary kw within first ~100 words
  main_body_authority:
    intent: "Declining estrogen drives GSM — dryness, urgency/frequency, recurrent UTIs, painful intimacy — addressed conservatively via pelvic floor PT + education. VERIFY scope with Rebecca."
    keywords: [genitourinary syndrome of menopause, vaginal dryness, bladder changes, painful intimacy]
    external_link:
      candidates:
        - {label: "The Menopause Society", url: "https://www.menopause.org/", verify: true}
      relevance_intent: "Leading clinical authority on menopause care."
  specialized_treatments:
    - {label: "Bladder Changes", desc: "Urgency, frequency, and leakage that emerge or worsen around menopause."}
    - {label: "Comfort & Dryness", desc: "Addressing the tissue and pelvic-floor components of midlife discomfort."}
    - {label: "Intimacy", desc: "Restoring comfort with intimacy affected by hormonal change."}
    - {label: "Pelvic Floor Strength", desc: "Rebuilding the support that hormonal change can erode."}
  closer: {intent: "You've spent decades caring for everyone else; midlife is when to invest in you."}
  cta:    {phrase_intent: "Reassuring invitation to a private, specialist evaluation.", button: "Schedule Your Evaluation  # see cta_convention"}

# --- optional sections (feed conditions list + FAQPage JSON-LD) ---
sections:
  conditions:
    groups:
      - {heading: "Genitourinary (GSM)", items: [Vaginal dryness, Painful intimacy, Urinary urgency & frequency, Recurrent UTIs]}   # verify
      - {heading: "Whole-body midlife", items: [Pelvic floor weakness, Prolapse symptoms, Bone-health & strength (cross-link)]}
  faq:                 # → FAQPage JSON-LD; target "People Also Ask"
    questions:
      - "Can pelvic floor therapy help menopause symptoms?"
      - "Why do I have bladder problems during menopause?"
      - "Is painful intimacy after menopause treatable?"
  related_slugs: [osteoporosis-bone-health, pelvic-floor-bladder-health, complex-pelvic-pain]

flags:
  - "No upstream clinical source — Rebecca must confirm menopause scope (esp. GSM, recurrent UTIs, dryness)."
  - "Menopause icon still a placeholder — image asset pending."
```
