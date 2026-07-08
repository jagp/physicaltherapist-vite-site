# Service Page Intents — Keyword/Templated Briefs

> **What this is:** the intermediary layer between the copy template
> (`service-pages-source.md`) and finished page copy. Each "intent" is a *brief*,
> not prose — it names the target keyword per template field, supplies grounded
> facts the copy must hit, and encodes SEO constraints. An SEO copy plugin (or
> Rebecca-voiced write-up) consumes these to produce the live `content` blocks in
> `src/data/services.ts`.
>
> **Schema status:** DRAFT / proposed. Pending Jared's canonical intent example —
> field *names* may change, but the keyword mapping + grounded briefs carry over.
>
> **Scope:** the 5 services still lacking copy under the client-approved SEO
> architecture (`feature/service-seo-architecture`, commit `b5c238d`). Pregnancy &
> Postpartum is already fully built and is the voice/structure reference.
>
> **Grounding:** upstream clinical source in `rgspt-site/pages/services/*` +
> `guidance/`. Where a service's upstream source is thin, it is flagged
> `source: THIN — needs clinical review` and its claims must be verified with
> Rebecca before publish.
>
> **Global voice constraints (apply to every intent):** first-person (Rebecca's
> voice); calm authority / warm minimalism; credential = **PWCS** (per
> `credential-pwcs-source-of-truth`; do not use outdated "WCS" or any "first-ever"
> claim); conservative, evidence-based framing; no model-identity disclaimers on
> imagery. Practice: Dr. Rebecca G. Stephenson, 45+ yrs, published author &
> international educator, former Brigham & Women's Hospital coordinator, South
> Natick MA.
>
> **Global SEO constraints:** exactly one H1 (the `headline`); primary keyword in
> `<title>` (≤60 chars, front-loaded), `meta_desc` (≤155 chars), and the first
> ~100 words (`intro`); long-tail terms carried by `conditions` + `faq`; `faq`
> feeds FAQPage JSON-LD; `conditions`/related feed internal links; one outbound
> authority link per page (E-E-A-T). External deep URLs marked `verify` are not
> fabricated — confirm before publish (project convention: URLs may be
> placeholders, do not block).

---

## 1. Pelvic Floor & Bladder Health
`slug: pelvic-floor-bladder-health` · `source: rich (pelvic-bladder.md)`

```yaml
primary_keyword: "pelvic floor physical therapy for bladder control"
secondary_keywords: [urinary incontinence, overactive bladder, urinary urgency,
  urinary frequency, pelvic organ prolapse, stress incontinence, urge incontinence,
  bowel dysfunction, urinary retention]
audience: all genders across the lifespan     # differentiator vs. "women's only"

seo:
  title: "Pelvic Floor & Bladder Health | Stephenson Physical Therapy"
  meta_desc: "PT for urinary leakage, urgency, frequency, and pelvic organ prolapse — conservative, evidence-based care for all genders in South Natick."

fields:
  headline:            # H1, 3–5 words, first-person, keyword-bearing
    intent: "Frame bladder control as a solvable problem."
    seed: "Take Back Bladder Control."
  claim:               # 1 sentence, may be a question
    intent: "Reassure leakage/urgency are treatable without surgery or medication."
  intro_pitch:         # primary kw within first ~100 words
    intent: "Pelvic floor supports bladder/bowel control, core stability, sexual function; weak/tight/uncoordinated muscles disrupt daily life; I restore function and confidence."
    must_include: [pelvic floor, bladder control, "all genders"]
  main_body_authority:
    intent: "Distinguish stress vs. urge vs. mixed incontinence, OAB, retention, prolapse; conservative PT often avoids surgery/medication."
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
  closer:
    intent: "Normalize seeking care; leakage is common but not something to live with."
  cta:
    phrase_intent: "Low-pressure invitation to a private evaluation."
    button: "Schedule Your Evaluation"

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
```

---

## 2. Pelvic Pain & Sexual Health
`slug: complex-pelvic-pain` · `source: rich (Pelvic Pain)`
> Note: slug retained as `complex-pelvic-pain` on the approved branch; only the
> title changed to the "Sexual Health" keyword. Keep the slug; target the new terms.

```yaml
primary_keyword: "pelvic floor therapy for chronic pelvic pain"
secondary_keywords: [pudendal neuralgia, painful intercourse, dyspareunia,
  vaginismus, vulvodynia, coccydynia, tailbone pain, levator ani syndrome, sexual health]
audience: all genders; sensitive/intimacy-forward framing

seo:
  title: "Pelvic Pain & Sexual Health | Stephenson Physical Therapy"
  meta_desc: "Compassionate PT for chronic pelvic pain, pudendal neuralgia, and painful intimacy — thorough assessment and a targeted, dignified plan."

fields:
  headline:
    intent: "Name pain + a way out, gently."
    seed: "Break Free From Pelvic Pain."
  claim:
    intent: "Chronic pelvic pain is complex but treatable — you don't have to wait it out."
  intro_pitch:
    intent: "Chronic pelvic pain involves muscle tension, nerve irritation, and/or scar tissue; I take time to understand your pain and treat it comprehensively."
    must_include: [chronic pelvic pain, "sexual health / intimacy"]
  main_body_authority:
    intent: "Explain multi-source pain (muscle, nerve, scar) and named syndromes; desensitization, manual therapy, neuromuscular reeducation restore comfort and intimacy."
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
  closer:
    intent: "Stop pretending it will improve on its own — help exists; reclaim comfort and intimacy."
  cta:
    phrase_intent: "Direct, hopeful invitation to be assessed."
    button: "Schedule Your Evaluation"

sections:
  conditions:
    groups:
      - {heading: "Pain syndromes", items: [Chronic pelvic pain, Vulvodynia, Vestibulodynia, Pudendal neuralgia, Coccydynia, Levator ani syndrome]}
      - {heading: "Sexual health", items: [Dyspareunia (painful intercourse), Vaginismus, Scar-related pain]}
  faq:
    questions:
      - "Can pelvic floor therapy help painful sex (dyspareunia)?"
      - "What does treatment for pudendal neuralgia involve?"
      - "Is chronic pelvic pain treatable without medication?"
```

---

## 3. Lymphedema & Cancer Rehab
`slug: lymphedema-cancer-rehab` · `source: rich (Oncology)`

```yaml
primary_keyword: "lymphedema therapy and cancer rehabilitation"
secondary_keywords: [certified lymphedema therapist, manual lymphatic drainage, CLT,
  breast cancer rehabilitation, scar tissue management, pelvic health after cancer,
  gynecological surgery recovery]
audience: cancer survivors (breast + gynecologic); post-surgical

seo:
  title: "Lymphedema & Cancer Rehab | Stephenson Physical Therapy"
  meta_desc: "Certified lymphedema therapy (CLT), manual lymphatic drainage, and breast-cancer rehabilitation to help survivors recover strength and function."

fields:
  headline:
    intent: "Recovery and reclaiming the body after cancer."
    seed: "Reclaim Your Body After Cancer."
  claim:
    intent: "Cancer treatment affects more than the tumor — I help you rebuild."
  intro_pitch:
    intent: "Cancer treatment impacts pelvic health, sexual function, range of motion, and quality of life; as a Certified Lymphedema Therapist I help survivors recover and reclaim their bodies."
    must_include: [lymphedema, "cancer rehabilitation", "Certified Lymphedema Therapist"]
  main_body_authority:
    intent: "Cover breast-cancer post-surgical rehab (scar, ROM, lymphedema prevention) and CLT (manual lymphatic drainage, compression fitting, exercise); note side effects of surgery/radiation/chemo on pelvic, bladder, sexual function."
    keywords: [manual lymphatic drainage, compression, breast cancer recovery, scar tissue]
    external_link:
      candidates:
        - {label: "American Cancer Society — lymphedema", url: "https://www.cancer.org/", verify: true}   # confirm exact lymphedema deep-link
        - {label: "National Lymphedema Network", url: "https://lymphnet.org/", verify: true}
      relevance_intent: "Patient-facing authority on lymphedema risk and management."
  specialized_treatments:
    - {label: "Breast Cancer Recovery", desc: "Scar management, range-of-motion restoration, lymphedema prevention, and return to activity."}
    - {label: "Lymphedema Management (CLT)", desc: "Manual lymphatic drainage, compression-garment fitting, and exercise prescription."}
    - {label: "Gynecological Surgery Recovery", desc: "Pelvic floor rehab and scar work after hysterectomy, endometriosis excision, or ovarian surgery."}
    - {label: "Pelvic Health After Cancer", desc: "Addressing bladder, bowel, and sexual side effects of surgery, radiation, or chemotherapy."}
  closer:
    intent: "Survivorship is a stage of care, not the end of it — expert rehab helps you move forward."
  cta:
    phrase_intent: "Warm invitation to a survivorship-focused evaluation."
    button: "Schedule Your Evaluation"

sections:
  conditions:
    groups:
      - {heading: "Lymphedema care", items: [Manual lymphatic drainage, Compression-garment fitting, Lymphedema prevention & management]}
      - {heading: "Cancer rehabilitation", items: [Breast-cancer post-surgical rehab, Scar-tissue management, Range-of-motion restoration, Pelvic health after cancer treatment, Gynecological surgery recovery]}
  faq:
    questions:
      - "What does a Certified Lymphedema Therapist do?"
      - "When should I start rehab after breast cancer surgery?"
      - "Can physical therapy help side effects of radiation or chemo?"
```

---

## 4. Osteoporosis & Bone Health
`slug: osteoporosis-bone-health` · `source: THIN — needs clinical review`
> Grounding is limited (a "Bone Health & Osteoporosis" item split off the Oncology
> page + the Orthopedics service-bucket line). Pilates-based framing is from the
> approved `desc`. Verify all clinical claims with Rebecca before publish.

```yaml
primary_keyword: "physical therapy for osteoporosis and bone health"
secondary_keywords: [osteoporosis exercise, osteopenia, bone density, safe strength training,
  posture, fall prevention, Pilates-based rehab, fracture risk]
audience: peri-/post-menopausal; cancer survivors on bone-affecting medication; aging adults

seo:
  title: "Osteoporosis & Bone Health | Stephenson Physical Therapy"
  meta_desc: "Safe, Pilates-based strength, posture, and balance training to support bone health and manage osteoporosis and fracture risk."

fields:
  headline:
    intent: "Strength and confidence in an aging skeleton."
    seed: "Build Strength That Lasts."
  claim:
    intent: "The right exercise — done safely — is one of the best defenses for your bones."
  intro_pitch:
    intent: "Manage osteoporosis and musculoskeletal health through pelvic-health-informed, Pilates-based rehab; safe loading, posture, and balance."
    must_include: [osteoporosis, bone health, "Pilates-based"]
  main_body_authority:
    intent: "Explain why safe progressive loading, posture, and balance training support bone density and reduce fracture/fall risk; especially relevant post-menopause and for survivors on certain medications."
    keywords: [bone density, fracture risk, fall prevention, safe strength training]
    external_link:
      candidates:
        - {label: "Bone Health & Osteoporosis Foundation", url: "https://www.bonehealthandosteoporosis.org/", verify: true}
      relevance_intent: "National authority on osteoporosis prevention and exercise safety."
  specialized_treatments:
    - {label: "Safe Strength Training", desc: "Progressive loading appropriate for low bone density, without risky spinal flexion."}
    - {label: "Posture & Alignment", desc: "Countering the postural changes that accompany bone loss."}
    - {label: "Balance & Fall Prevention", desc: "Reducing the fall risk that turns fragile bones into fractures."}
    - {label: "Pilates-Based Rehab", desc: "Controlled, low-impact movement that builds core and bone-supporting strength."}
  closer:
    intent: "It's never too early or too late to invest in your bones — start where you are."
  cta:
    phrase_intent: "Encouraging invitation to a bone-safe movement assessment."
    button: "Schedule Your Evaluation"

sections:
  conditions:
    groups:
      - {heading: "Bone health", items: [Osteoporosis, Osteopenia, Low bone density, Fracture-risk reduction]}
      - {heading: "Movement & safety", items: [Postural changes, Balance & fall prevention, Safe return to strength training]}
  faq:
    questions:
      - "What exercises are safe if I have osteoporosis?"
      - "Can physical therapy improve bone density?"
      - "Is Pilates safe for osteoporosis?"     # verify clinical nuance (flexion cautions)
```

---

## 5. Menopause & Midlife Health
`slug: menopause-midlife-health` · `source: THIN — needs clinical review`
> **Largest gap.** This is a net-new keyword pivot (old upstream "Sports" folder is
> unrelated). No dedicated upstream source. Brief below is built from standard
> menopause pelvic-health scope (genitourinary syndrome of menopause) — **all
> clinical claims must be reviewed with Rebecca before publish.**

```yaml
primary_keyword: "physical therapy for menopause and midlife pelvic health"
secondary_keywords: [genitourinary syndrome of menopause, GSM, vaginal dryness,
  painful intimacy, bladder changes menopause, pelvic floor menopause, midlife health]
audience: peri-/post-menopausal women

seo:
  title: "Menopause & Midlife Health | Stephenson Physical Therapy"
  meta_desc: "Pelvic-health care for menopause and midlife — bladder changes, dryness and comfort, and intimacy — with a specialist who's seen it all."

fields:
  headline:
    intent: "Midlife as a stage to be supported, not endured."
    seed: "Thrive Through Midlife."
  claim:
    intent: "Menopause changes your body — the right care keeps you comfortable and confident."
  intro_pitch:
    intent: "Hormonal changes of menopause affect the bladder, pelvic floor, tissue comfort, and intimacy; I help you navigate midlife with expert, judgment-free pelvic-health care."
    must_include: [menopause, "midlife", pelvic health]
  main_body_authority:
    intent: "Explain how declining estrogen drives genitourinary syndrome of menopause (GSM) — dryness, urinary urgency/frequency, recurrent UTIs, painful intimacy — and how pelvic floor PT plus education addresses these conservatively. VERIFY scope with Rebecca."
    keywords: [genitourinary syndrome of menopause, vaginal dryness, bladder changes, painful intimacy]
    external_link:
      candidates:
        - {label: "The Menopause Society", url: "https://www.menopause.org/", verify: true}
      relevance_intent: "Leading clinical authority on menopause care."
  specialized_treatments:
    - {label: "Bladder Changes", desc: "Urgency, frequency, and leakage that emerge or worsen around menopause."}
    - {label: "Comfort & Dryness", desc: "Addressing the tissue and pelvic-floor components of midlife discomfort."}
    - {label: "Intimacy", desc: "Restoring comfort with intimacy affected by hormonal change."}
    - {label: "Bone & Strength (cross-link)", desc: "Midlife is the time to protect bone health — see Osteoporosis & Bone Health."}
  closer:
    intent: "You've spent decades caring for everyone else; midlife is when to invest in you."
  cta:
    phrase_intent: "Reassuring invitation to a private, specialist evaluation."
    button: "Schedule Your Evaluation"

sections:
  conditions:
    groups:
      - {heading: "Genitourinary (GSM)", items: [Vaginal dryness, Painful intimacy, Urinary urgency & frequency, Recurrent UTIs]}   # verify
      - {heading: "Whole-body midlife", items: [Pelvic floor weakness, Prolapse symptoms, Bone-health & strength (cross-link)]}
  faq:
    questions:
      - "Can pelvic floor therapy help menopause symptoms?"
      - "Why do I have bladder problems during menopause?"
      - "Is painful intimacy after menopause treatable?"
  related_cross_link: [osteoporosis-bone-health, pelvic-floor-bladder-health]

flags:
  - "No upstream clinical source — Rebecca must confirm the menopause scope she treats and is comfortable claiming (esp. GSM, recurrent UTIs, dryness)."
  - "Menopause icon still a placeholder (per service-architecture-approved) — image asset pending."
```

---

## Cross-cutting notes for the SEO plugin

- **Internal linking:** every page's `relatedSlugs` should include 2–3 siblings;
  natural clusters — Pelvic Floor ↔ Pelvic Pain ↔ Pregnancy (pelvic core);
  Lymphedema ↔ Osteoporosis (survivorship); Menopause ↔ Osteoporosis ↔ Pelvic Floor
  (midlife). This distributes link equity and matches search journeys.
- **Schema:** `faq` blocks → FAQPage JSON-LD; page → MedicalWebPage; breadcrumb →
  BreadcrumbList (all already emitted by the template's `serviceJsonLd`).
- **Title/meta length:** keep `<title>` ≤60 and `meta_desc` ≤155 chars after the
  plugin expands seeds — front-load the primary keyword in both.
- **Do not** let the plugin invent clinical claims for the two THIN services;
  gate those on Rebecca's review.
