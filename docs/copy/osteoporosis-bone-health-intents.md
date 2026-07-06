# osteoporosis-bone-health — intent

> One page's keyword + journey brief. Pipeline: template (`service-pages-source.md`) → **this intent**
> → human "middle layer" plus-up (Jared: psychological motivation, brand-promise story, H1→CTA thread,
> bounce control) → SEO copy plugin → `content` block in `src/data/services.ts`.
> `narrative_arc` / `brand_promise` are **scaffold for the human layer — yours to own or replace.**
> ⚠ SOURCE THIN — verify exercise-safety claims (esp. spinal-flexion caution) with Rebecca before publish.

```yaml
service: Osteoporosis & Bone Health
slug: osteoporosis-bone-health
source: THIN — needs clinical review
status: DRAFT — clinical review required

# --- brand frame (grounded in design-philosophy.md + key-facts.md; applies sitewide) ---
brand_frame:
  north_star: "Calm authority — quiet, expensive, deeply credible private practice; warm minimalism, not clinical sterility."
  voice: "Warm, expert, plain — trusted senior clinician; reassurance over commands; never salesy."
  anxiety_rule: "Patient arrives anxious (movement feels risky). Plain language; 'we discuss every step'; your pace; supervised and controlled."
  kpi: "Low bounce / high dwell → one idea per section; front-load recognition + credibility; helpful-content depth holds the reader."
  authority_discipline: "Deploy 1–2 grounded signals only; honest > overreach. Credential is PWCS (never 'WCS'); no 'first-ever' claims."
  cta_convention: "ONE reassurance-framed action per page. ⚠ verb inconsistent across sources (design-philosophy 'Request a Consultation' | about 'Book a Consultation' | template 'Schedule Your Evaluation') — standardize sitewide before publish."

# --- keyword targets ---
primary_keyword: "physical therapy for osteoporosis and bone health"
secondary_keywords: [osteoporosis exercise, osteopenia, bone density, safe strength training,
  posture, fall prevention, Pilates-based rehab, fracture risk]
audience: peri-/post-menopausal; cancer survivors on bone-affecting medication; aging adults

# --- journey scaffold (grounded hooks for the human layer; replace freely) ---
brand_promise: "The answer to fragile bones is rarely to move less — load them safely and stay strong, upright, and confident."
authority_signals: ["Certified Pilates Rehabilitation", "bone health through a whole-body / pelvic-health lens", "45+ years"]
narrative_arc:
  recognition: "A scan came back osteoporosis or osteopenia — and now movement feels risky."
  why_her:     "Pilates-Rehab certified; she programs safe loading through her pelvic-health/whole-body lens."
  relief:      "Safe progressive loading, posture, balance/fall-prevention; avoiding the risky positions low-bone-density bodies should skip. (VERIFY)"
  reassurance: "Start where you are; supervised, controlled, no heroics."
  cta:         "Strong bones are built — start now."

# --- SEO head ---
seo:
  title: "Osteoporosis & Bone Health | Stephenson Physical Therapy"   # ≤60 chars, kw front-loaded
  meta_desc: "Safe, Pilates-based strength, posture, and balance training to support bone health and manage osteoporosis and fracture risk."  # ≤155

# --- template fields (intents/seeds, not final prose) ---
fields:
  headline:   {intent: "Strength + confidence in an aging skeleton.", seed: "Build Strength That Lasts."}
  claim:      {intent: "The right exercise, done safely, is one of the best defenses for your bones."}
  intro_pitch:
    intent: "Manage osteoporosis + musculoskeletal health through pelvic-health-informed, Pilates-based rehab; safe loading, posture, balance."
    must_include: [osteoporosis, bone health, "Pilates-based"]   # primary kw within first ~100 words
  main_body_authority:
    intent: "Why safe progressive loading + posture + balance support bone density and cut fracture/fall risk; relevant post-menopause and for survivors on certain meds. VERIFY clinical nuance."
    keywords: [bone density, fracture risk, fall prevention, safe strength training]
    external_link:
      candidates:
        - {label: "Bone Health & Osteoporosis Foundation", url: "https://www.bonehealthandosteoporosis.org/", verify: true}
      relevance_intent: "National authority on osteoporosis prevention and exercise safety."
  specialized_treatments:
    - {label: "Safe Strength Training", desc: "Progressive loading appropriate for low bone density."}
    - {label: "Posture & Alignment", desc: "Countering the postural changes that accompany bone loss."}
    - {label: "Balance & Fall Prevention", desc: "Reducing the fall risk that turns fragile bones into fractures."}
    - {label: "Pilates-Based Rehab", desc: "Controlled, low-impact movement that builds core and bone-supporting strength."}
  closer: {intent: "It's never too early or too late to invest in your bones — start where you are."}
  cta:    {phrase_intent: "Encouraging invitation to a bone-safe movement assessment.", button: "Schedule Your Evaluation  # see cta_convention"}

# --- optional sections (feed conditions list + FAQPage JSON-LD) ---
sections:
  conditions:
    groups:
      - {heading: "Bone health", items: [Osteoporosis, Osteopenia, Low bone density, Fracture-risk reduction]}
      - {heading: "Movement & safety", items: [Postural changes, Balance & fall prevention, Safe return to strength training]}
  faq:                 # → FAQPage JSON-LD; target "People Also Ask"
    questions:
      - "What exercises are safe if I have osteoporosis?"
      - "Can physical therapy improve bone density?"
      - "Is Pilates safe for osteoporosis?"     # verify flexion cautions with Rebecca
  related_slugs: [menopause-midlife-health, lymphedema-cancer-rehab, pelvic-floor-bladder-health]

flags:
  - "THIN source — Rebecca must confirm exercise-safety claims (esp. loaded spinal flexion caution)."
```
