# complex-pelvic-pain — intent   (page title: Pelvic Pain & Sexual Health)

> One page's keyword + journey brief. Pipeline: template (`service-pages-source.md`) → **this intent**
> → human "middle layer" plus-up (Jared: psychological motivation, brand-promise story, H1→CTA thread,
> bounce control) → SEO copy plugin → `content` block in `src/data/services.ts`.
> `narrative_arc` / `brand_promise` are **scaffold for the human layer — yours to own or replace.**
> Note: route slug stays `complex-pelvic-pain`; only the title changed to the "Sexual Health" keyword.

```yaml
service: Pelvic Pain & Sexual Health
slug: complex-pelvic-pain
source: rich (rgspt Pelvic Pain)
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
primary_keyword: "pelvic floor therapy for chronic pelvic pain"
secondary_keywords: [pudendal neuralgia, painful intercourse, dyspareunia, vaginismus, vulvodynia,
  coccydynia, tailbone pain, levator ani syndrome, sexual health]
audience: all genders; sensitive/intimacy-forward framing

# --- journey scaffold (grounded hooks for the human layer; replace freely) ---
brand_promise: "'Complex' is not 'permanent' — find the source of the pain, calm it, and reclaim comfort and intimacy."
authority_signals: ["Board-Certified PWCS — decades on complex pelvic pain syndromes", "Brigham complex pelvic floor dysfunction", "discretion + full consent"]
narrative_arc:
  recognition: "Pain that's gone unresolved or been dismissed; intimacy quietly avoided because it hurts."
  why_her:     "A specialist who names these syndromes without flinching and has treated them for decades."
  relief:      "Assessment separates muscle / nerve / scar drivers; desensitization, manual therapy, neuromuscular reeducation restore function."
  reassurance: "Judgment-free, full consent, your pace; sexual health discussed openly, never pressured."
  cta:         "Stop waiting for it to fix itself — a private, unhurried evaluation."

# --- SEO head ---
seo:
  title: "Pelvic Pain & Sexual Health | Stephenson Physical Therapy"   # ≤60 chars, kw front-loaded
  meta_desc: "Compassionate PT for chronic pelvic pain, pudendal neuralgia, and painful intimacy — thorough assessment and a targeted, dignified plan."  # ≤155

# --- template fields (intents/seeds, not final prose) ---
fields:
  headline:   {intent: "Name pain + a way out, gently.", seed: "Break Free From Pelvic Pain."}
  claim:      {intent: "Chronic pelvic pain is complex but treatable — you don't have to wait it out."}
  intro_pitch:
    intent: "Chronic pelvic pain involves muscle tension, nerve irritation, and/or scar tissue; I take time to find the source and treat comprehensively, with discretion."
    must_include: [chronic pelvic pain, "sexual health / intimacy"]   # primary kw within first ~100 words
  main_body_authority:
    intent: "Explain multi-source pain + named syndromes; desensitization, manual therapy, neuromuscular reeducation restore comfort and intimacy."
    keywords: [pudendal neuralgia, dyspareunia, vaginismus, vulvodynia]
    external_link:
      candidates:
        - {label: "Johns Hopkins Medicine — pelvic floor therapy", url: "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/pelvic-floor-therapy"}
        - {label: "Inova — pelvic floor physical therapy", url: "https://www.inova.org/our-services/inova-womens-services/gynecology/conditions-and-treatments/pelvic-floor-health/physical-therapy"}
      relevance_intent: "Authority overview of what pelvic floor therapy addresses."
  specialized_treatments:
    - {label: "Vulvodynia & Vestibulodynia", desc: "Generalized or localized vulvar pain reduced through desensitization and manual therapy."}
    - {label: "Pudendal Neuralgia", desc: "Techniques to calm nerve irritation causing burning, shooting pain, or numbness."}
    - {label: "Coccydynia (Tailbone Pain)", desc: "Tissue mobilization and postural work to make sitting bearable again."}
    - {label: "Levator Ani Syndrome", desc: "Targeted relaxation and neuromuscular reeducation for deep pelvic aching."}
    - {label: "Dyspareunia (Painful Intercourse)", desc: "Addressing the physical drivers so you can enjoy intimacy again."}
    - {label: "Vaginismus", desc: "Highly treatable with progressive desensitization and pelvic floor retraining."}
  closer: {intent: "Stop pretending it will improve on its own — help exists; reclaim comfort and intimacy."}
  cta:    {phrase_intent: "Direct, hopeful invitation to be assessed.", button: "Schedule Your Evaluation  # see cta_convention"}

# --- optional sections (feed conditions list + FAQPage JSON-LD) ---
sections:
  conditions:
    groups:
      - {heading: "Pain syndromes", items: [Chronic pelvic pain, Vulvodynia, Vestibulodynia, Pudendal neuralgia, Coccydynia, Levator ani syndrome]}
      - {heading: "Sexual health", items: ["Dyspareunia (painful intercourse)", Vaginismus, Scar-related pain]}
  faq:                 # → FAQPage JSON-LD; target "People Also Ask"
    questions:
      - "Can pelvic floor therapy help painful sex (dyspareunia)?"
      - "What does treatment for pudendal neuralgia involve?"
      - "Is chronic pelvic pain treatable without medication?"
  related_slugs: [pelvic-floor-bladder-health, pregnancy-postpartum, menopause-midlife-health]
```
