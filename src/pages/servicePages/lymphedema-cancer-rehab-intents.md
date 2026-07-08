# lymphedema-cancer-rehab — intent

> One page's keyword + journey brief. Pipeline: template (`service-pages-source.md`) → **this intent**
> → human "middle layer" plus-up (Jared: psychological motivation, brand-promise story, H1→CTA thread,
> bounce control) → SEO copy plugin → `content` block in `src/data/services.ts`.
> `narrative_arc` / `brand_promise` are **scaffold for the human layer — yours to own or replace.**

```yaml
service: Lymphedema & Cancer Rehab
slug: lymphedema-cancer-rehab
source: rich (rgspt Oncology)
status: publish-ready draft

# --- brand frame (grounded in design-philosophy.md + key-facts.md; applies sitewide) ---
brand_frame:
  north_star: "Calm authority — quiet, expensive, deeply credible private practice; warm minimalism, not clinical sterility."
  voice: "Warm, expert, plain — trusted senior clinician; reassurance over commands; never salesy."
  anxiety_rule: "Patient arrives anxious. Plain language; 'we discuss every step'; your pace, full consent; coordinates with your oncology team."
  kpi: "Low bounce / high dwell → one idea per section; front-load recognition + credibility; helpful-content depth holds the reader."
  authority_discipline: "Deploy 1–2 grounded signals only; honest > overreach. Credential is PWCS (never 'WCS'); no 'first-ever' claims."
  cta_convention: "ONE reassurance-framed action per page. ⚠ verb inconsistent across sources (design-philosophy 'Request a Consultation' | about 'Book a Consultation' | template 'Schedule Your Evaluation') — standardize sitewide before publish."

# --- keyword targets ---
primary_keyword: "lymphedema therapy and cancer rehabilitation"
secondary_keywords: [certified lymphedema therapist, manual lymphatic drainage, CLT,
  breast cancer rehabilitation, scar tissue management, pelvic health after cancer, gynecological surgery recovery]
audience: cancer survivors (breast + gynecologic); post-surgical

# --- journey scaffold (grounded hooks for the human layer; replace freely) ---
brand_promise: "Survivorship is a stage of care, not the end of one — rebuild strength, manage swelling, feel at home in your body again."
authority_signals: ["Certified Lymphedema Therapist (CLT)", "Partners in Excellence — built & led Brigham's Breast Oncology PT team", "Board-Certified PWCS"]   # the Brigham breast-oncology signal is the differentiator — deploy it
narrative_arc:
  recognition: "After treatment: swelling, a stiff shoulder, bladder/intimacy changes no one warned you about."
  why_her:     "A CLT who created and led Brigham's breast-oncology PT team — rare, specific, exactly this."
  relief:      "Breast post-surgical rehab (ROM, scar, lymphedema prevention); CLT (manual lymphatic drainage, compression, exercise); pelvic side-effect care."
  reassurance: "Gentle, survivorship-paced; coordinates with your oncology team."
  cta:         "Your recovery isn't finished until you say it is."

# --- SEO head ---
seo:
  title: "Lymphedema & Cancer Rehab | Stephenson Physical Therapy"   # ≤60 chars, kw front-loaded
  meta_desc: "Certified lymphedema therapy (CLT), manual lymphatic drainage, and breast-cancer rehabilitation to help survivors recover strength and function."  # ≤155

# --- template fields (intents/seeds, not final prose) ---
fields:
  headline:   {intent: "Recovery + reclaiming the body after cancer.", seed: "Reclaim Your Body After Cancer."}
  claim:      {intent: "Cancer treatment affects more than the tumor — expert rehab helps you rebuild."}
  intro_pitch:
    intent: "Cancer treatment impacts range of motion, the lymphatic system, and pelvic/sexual function; as a CLT I help survivors recover and reclaim their bodies."
    must_include: [lymphedema, "cancer rehabilitation", "Certified Lymphedema Therapist"]   # primary kw within first ~100 words
  main_body_authority:
    intent: "Breast post-surgical rehab (scar, ROM, lymphedema prevention) + CLT (MLD, compression, exercise); note pelvic/bladder/sexual side effects of surgery/radiation/chemo."
    keywords: [manual lymphatic drainage, compression, breast cancer recovery, scar tissue]
    external_link:
      candidates:
        - {label: "American Cancer Society — lymphedema", url: "https://www.cancer.org/", verify: true}
        - {label: "National Lymphedema Network", url: "https://lymphnet.org/", verify: true}
      relevance_intent: "Patient-facing authority on lymphedema risk and management."
  specialized_treatments:
    - {label: "Breast Cancer Recovery", desc: "Scar management, range-of-motion restoration, lymphedema prevention, and return to activity."}
    - {label: "Lymphedema Management (CLT)", desc: "Manual lymphatic drainage, compression-garment fitting, and exercise prescription."}
    - {label: "Gynecological Surgery Recovery", desc: "Pelvic floor rehab and scar work after hysterectomy, endometriosis excision, or ovarian surgery."}
    - {label: "Pelvic Health After Cancer", desc: "Addressing bladder, bowel, and sexual side effects of surgery, radiation, or chemotherapy."}
  closer: {intent: "Survivorship is a stage of care in its own right — expert rehab helps you move forward."}
  cta:    {phrase_intent: "Warm invitation to a survivorship-focused evaluation.", button: "Schedule Your Evaluation  # see cta_convention"}

# --- optional sections (feed conditions list + FAQPage JSON-LD) ---
sections:
  conditions:
    groups:
      - {heading: "Lymphedema care", items: [Manual lymphatic drainage, Compression-garment fitting, Lymphedema prevention & management]}
      - {heading: "Cancer rehabilitation", items: [Breast-cancer post-surgical rehab, Scar-tissue management, Range-of-motion restoration, Pelvic health after cancer, Gynecological surgery recovery]}
  faq:                 # → FAQPage JSON-LD; target "People Also Ask"
    questions:
      - "What does a Certified Lymphedema Therapist do?"
      - "When should I start rehab after breast cancer surgery?"
      - "Can physical therapy help side effects of radiation or chemo?"
  related_slugs: [osteoporosis-bone-health, pelvic-floor-bladder-health, complex-pelvic-pain]
```
