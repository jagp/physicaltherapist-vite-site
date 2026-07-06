# pelvic-floor-bladder-health — intent

> One page's keyword + journey brief. Pipeline: template (`service-pages-source.md`) → **this intent**
> → human "middle layer" plus-up (Jared: psychological motivation, brand-promise story, H1→CTA thread,
> bounce control) → SEO copy plugin → `content` block in `src/data/services.ts`.
> `narrative_arc` / `brand_promise` are **scaffold for the human layer — yours to own or replace.**

```yaml
service: Pelvic Floor & Bladder Health
slug: pelvic-floor-bladder-health
source: rich (rgspt pelvic-bladder.md)
status: publish-ready draft

# --- brand frame (grounded in design-philosophy.md + key-facts.md; applies sitewide) ---
brand_frame:
  north_star: "Calm authority — quiet, expensive, deeply credible private practice; warm minimalism, not clinical sterility."
  voice: "Warm, expert, plain — trusted senior clinician; reassurance over commands; never salesy."
  anxiety_rule: "Patient arrives anxious. Plain language; 'we discuss every step'; your pace, full consent; internal exam never mandatory."
  kpi: "Low bounce / high dwell → one idea per section; front-load recognition + credibility; helpful-content depth holds the reader."
  authority_discipline: "Deploy 1–2 grounded signals only; honest > overreach. Credential is PWCS (never 'WCS'); no 'first-ever' claims."
  cta_convention: "ONE reassurance-framed action per page. ⚠ verb inconsistent across sources (design-philosophy 'Request a Consultation' | about 'Book a Consultation' | template 'Schedule Your Evaluation') — standardize sitewide before publish."

# --- keyword targets ---
primary_keyword: "pelvic floor physical therapy for bladder control"
secondary_keywords: [urinary incontinence, overactive bladder, urinary urgency, urinary frequency,
  pelvic organ prolapse, stress incontinence, urge incontinence, bowel dysfunction, urinary retention]
audience: all genders across the lifespan

# --- journey scaffold (grounded hooks for the human layer; replace freely) ---
brand_promise: "Stop planning your life around the nearest bathroom — with care that often works without surgery or medication."
authority_signals: ["Board-Certified PWCS — bladder/bowel disorders across the lifespan", "former Brigham Urogynecology Coordinator", "treats all genders"]
narrative_arc:
  recognition: "Leaking when you laugh, cough, or lift; sudden urgency; mentally mapping every restroom."
  why_her:     "A PWCS whose core domain is exactly this — and a former Brigham urogynecology coordinator; for all genders."
  relief:      "Stress vs. urge vs. mixed incontinence, OAB, retention, prolapse — treated at the cause via pelvic floor retraining, behavioral strategy, neuromuscular reeducation."
  reassurance: "Private, external-first assessment; internal evaluation never mandatory; your pace."
  cta:         "You don't need a referral to start feeling like yourself again."

# --- SEO head ---
seo:
  title: "Pelvic Floor & Bladder Health | Stephenson Physical Therapy"   # ≤60 chars, kw front-loaded
  meta_desc: "PT for urinary leakage, urgency, frequency, and pelvic organ prolapse — conservative, evidence-based care for all genders in South Natick."  # ≤155

# --- template fields (intents/seeds, not final prose) ---
fields:
  headline:   {intent: "Frame bladder control as solvable.", seed: "Take Back Bladder Control."}
  claim:      {intent: "Leakage/urgency are common but treatable, often without surgery or medication."}
  intro_pitch:
    intent: "Pelvic floor supports bladder/bowel control, core, sexual function; weak/tight/uncoordinated muscles disrupt daily life; I restore function + confidence."
    must_include: [pelvic floor, bladder control, "all genders"]   # primary kw within first ~100 words
  main_body_authority:
    intent: "Distinguish incontinence types + OAB + retention + prolapse; conservative PT often avoids surgery/meds."
    keywords: [stress incontinence, urge incontinence, overactive bladder, pelvic organ prolapse]
    external_link:
      candidates:
        - {label: "Cleveland Clinic — pelvic floor dysfunction", url: "https://my.clevelandclinic.org/health/diseases/14459-pelvic-floor-dysfunction"}
        - {label: "Brigham & Women's — rehabilitation services", url: "https://www.brighamandwomens.org/patients-and-families/rehabilitation-services/services-overview"}
      relevance_intent: "Further reading on how PT treats pelvic floor dysfunction."
  specialized_treatments:
    - {label: "Urinary Incontinence", desc: "Stress, urge, and mixed leakage — conservative methods that often avoid surgery or medication."}
    - {label: "Overactive Bladder (OAB)", desc: "Urgency and frequency retrained via behavioral strategy and neuromuscular reeducation."}
    - {label: "Urinary Retention", desc: "Addressing muscle or neurological causes of incomplete emptying."}
    - {label: "Pelvic Organ Prolapse (POP)", desc: "Heaviness and pressure often improved without surgery."}
    - {label: "Interstitial Cystitis / Painful Bladder", desc: "Multimodal manual therapy, behavioral strategy, and education."}
  closer: {intent: "Normalize seeking care; leakage is common but not something to live with."}
  cta:    {phrase_intent: "Low-pressure invitation to a private evaluation.", button: "Schedule Your Evaluation  # see cta_convention"}

# --- optional sections (feed conditions list + FAQPage JSON-LD) ---
sections:
  conditions:
    groups:
      - {heading: "Bladder", items: [Stress incontinence, Urge incontinence, Mixed incontinence, Overactive bladder, Urinary frequency, Urinary urgency, Urinary retention]}
      - {heading: "Bowel & support", items: [Chronic constipation, Fecal incontinence, Painful bowel movements, Pelvic organ prolapse]}
  faq:                 # → FAQPage JSON-LD; target "People Also Ask"
    questions:
      - "Can physical therapy fix urinary incontinence without surgery?"
      - "Do men get pelvic floor therapy for bladder problems?"
      - "How many sessions until bladder leakage improves?"
  related_slugs: [pregnancy-postpartum, complex-pelvic-pain, menopause-midlife-health]
```
