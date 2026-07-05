# DALL·E Prompts — Service Page Imagery (Hero + Inset × 6 Services × 2 Sets)

## Instructions, from Claude

Per the service-page template spec (`docs/superpowers/specs/2026-06-25-service-page-template-design.md`),
each service page needs two generated images:

1. **Hero landscape** — sits in `<ServiceHero>`, fades horizontally into the cream page background.
2. **Inset** — mid-body photo inside the ~700px reading column, rounded corners.

Every slot has **two alternate scene directions (Set A / Set B)**. Both sets share the same studio
world and therapist anchor, so you can pick per slot — a Set A hero with a Set B inset still reads as
one page. Set A leans consultation/connection; Set B leans treatment/movement, with different patient
casting so the two options also differ in representation.

Pregnancy & Postpartum already has final assets (`pregnancy-landscape.png`, `pregnancy-inset.png`);
its Set A entries reconstruct the existing scenes as a regeneration baseline, and Set B offers fresh
alternates.

## Generation notes (read first)

- **Sizes:** hero → 1792×1024 (wide). Inset → 1024×1024, crop to 4:3 to match the existing pregnancy assets.
- **Fade side:** all hero prompts place subjects in the left two-thirds with soft negative space on the
  right, matching the default `imageSide: 'left'` fade. If a page flips to `imageSide: 'right'`, ask for
  the mirror ("subjects in the right two-thirds, negative space on the left") instead.
- **Character consistency:** the therapist description is repeated verbatim in every prompt — this is
  DALL·E's only character-consistency lever. Don't paraphrase it between generations.
- **Expect re-rolls:** hands, glasses, and resistance bands are the usual failure points. Generate 2–4
  variants per prompt and pick.
- **Style guardrails baked into each prompt** (from `docs/design-philosophy.md`): warm natural light, no
  clinical blue, no medical machinery, no anatomical imagery, no text/logos, softly muted warm grade.

**Shared therapist anchor (embedded in every prompt):**
> a kind, confident physical therapist in her senior years with short blonde hair and glasses, wearing a
> cream blouse with colorful floral-embroidered sleeves and silver jewelry


## [SCENE MANIFESTO / MAIL-MERGE INDEX]

---

ID: SCENE-01
filename: pelvic-floor-landscape.png
dimensions: 1792×1024
setting: 
scene: Warm editorial photograph in a calm, upscale private physical-therapy studio: cream walls, a large window with soft natural daylight, framed muted watercolor landscape art, light-wood shelving with books and a woven basket, a potted green plant, and pale-lavender accents including an upholstered treatment table and exercise balls. A kind, confident physical therapist in her senior years with short blonde hair and glasses, wearing a cream blouse with colorful floral-embroidered sleeves and silver jewelry, sits in a relaxed one-on-one consultation with a middle-aged man in a casual sweater; they face each other in comfortable chairs near a small light-wood table, the therapist listening attentively with a notebook resting on her lap, the patient at ease mid-conversation. 
composition: Wide landscape composition with the two people in the left two-thirds of the frame and soft, uncluttered negative space on the right side. 
lighting: Softly muted warm color grade, shallow depth of field, authentic candid feel, 
avoid: no text, no logos, no medical machinery.
## 1. Pelvic Floor & Bladder Health — `pelvic-floor-bladder-health`

Files: `pelvic-floor-landscape.png`, `pelvic-floor-inset.png`

*The card copy says "for all genders," so Set A's hero deliberately features a male patient — the one
page where that inclusivity signal does the most work. Set B offers a female-patient alternate.*

### Hero — Set A (1792×1024)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio: cream walls, a large
window with soft natural daylight, framed muted watercolor landscape art, light-wood shelving with books
and a woven basket, a potted green plant, and pale-lavender accents including an upholstered treatment
table and exercise balls. A kind, confident physical therapist in her senior years with short blonde
hair and glasses, wearing a cream blouse with colorful floral-embroidered sleeves and silver jewelry,
sits in a relaxed one-on-one consultation with a middle-aged man in a casual sweater; they face each
other in comfortable chairs near a small light-wood table, the therapist listening attentively with a
notebook resting on her lap, the patient at ease mid-conversation. Wide landscape composition with the
two people in the left two-thirds of the frame and soft, uncluttered negative space on the right side.
Softly muted warm color grade, shallow depth of field, authentic candid feel, no text, no logos, no
medical machinery.
```

Alt text: `Physical therapist in a relaxed one-on-one consultation with a patient about pelvic floor and bladder health.`

### Hero — Set B (1792×1024)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio: cream walls, a large
window with soft natural daylight, framed muted watercolor landscape art, light-wood shelving with books
and a woven basket, a potted green plant, and pale-lavender accents including an upholstered treatment
table and exercise balls. A kind, confident physical therapist in her senior years with short blonde
hair and glasses, wearing a cream blouse with colorful floral-embroidered sleeves and silver jewelry,
sits at a small light-wood desk in a warm consultation with a woman in her 50s; the patient is laughing
softly with visible relief, a cup of tea beside her, the therapist smiling and making a gentle open-hand
gesture as she explains. Wide landscape composition with the two women in the left two-thirds of the
frame and soft, uncluttered negative space on the right side. Softly muted warm color grade, shallow
depth of field, authentic candid feel, no text, no logos, no medical machinery.
```

Alt text: `Patient smiling with relief during a warm consultation about bladder health.`

### Inset — Set A (1024×1024 → crop 4:3)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio with cream walls, soft
natural window light, framed muted watercolor art, a potted green plant, and a pale-lavender upholstered
treatment table. A kind, confident physical therapist in her senior years with short blonde hair and
glasses, wearing a cream blouse with colorful floral-embroidered sleeves and silver jewelry, sits on a
low stool beside the table gently coaching a woman in her 40s who lies comfortably on her back, fully
clothed in soft activewear, one hand resting on her own ribcage as she practices a slow breathing
exercise. Both are calm and focused. Softly muted warm color grade, shallow depth of field, authentic
candid feel, no text, no logos, no medical machinery.
```

Alt text: `Therapist guiding a patient through gentle breathing work on the treatment table.`

### Inset — Set B (1024×1024 → crop 4:3)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio with cream walls, soft
natural window light, framed muted watercolor art, a potted green plant, and light-wood shelving. A
woman in her 40s in soft activewear sits tall on a pale-lavender exercise ball, hands resting lightly on
her thighs, while a kind, confident physical therapist in her senior years with short blonde hair and
glasses, wearing a cream blouse with colorful floral-embroidered sleeves and silver jewelry, sits beside
her guiding her upright posture with one hand hovering near the patient's lower back. Focused, easy
mood. Softly muted warm color grade, shallow depth of field, authentic candid feel, no text, no logos,
no medical machinery.
```

Alt text: `Therapist guiding seated posture and core work on an exercise ball.`

---

## 2. Pregnancy & Postpartum — `pregnancy-postpartum` ✅ assets exist

Files: `pregnancy-landscape.png`, `pregnancy-inset.png` (already in `src/assets/service-page-images/`)

### Hero — Set A (1792×1024) — regeneration baseline, matches the existing scene

```
Warm editorial photograph in a calm, upscale private physical-therapy studio: cream walls, a large
window with soft natural daylight, framed muted watercolor landscape art, light-wood shelving with books
and a woven basket, a potted green plant, and pale-lavender accents including an upholstered treatment
table and exercise balls. A kind, confident physical therapist in her senior years with short blonde
hair and glasses, wearing a cream blouse with colorful floral-embroidered sleeves and silver jewelry,
sits on a low stool gently holding the hands of a pregnant woman in a tank top and leggings who sits on
the edge of the pale-lavender treatment table, her partner seated supportively in the soft-focus
background. Reassuring, attentive mood. Wide landscape composition with the people in the left
two-thirds of the frame and soft negative space on the right side. Softly muted warm color grade,
shallow depth of field, authentic candid feel, no text, no logos, no medical machinery.
```

Alt text: `Therapist reassuring an expectant mother during a consultation, her partner seated nearby.`

### Hero — Set B (1792×1024) — postpartum alternate

```
Warm editorial photograph in a calm, upscale private physical-therapy studio: cream walls, a large
window with soft natural daylight, framed muted watercolor landscape art, light-wood shelving, a potted
green plant, and pale-lavender accents. A new mother in soft activewear performs a gentle supported core
exercise on an exercise mat while her infant lies contentedly on a soft cream blanket beside her; a
kind, confident physical therapist in her senior years with short blonde hair and glasses, wearing a
cream blouse with colorful floral-embroidered sleeves and silver jewelry, kneels nearby coaching her
with an encouraging smile. Tender, hopeful mood. Wide landscape composition with the people in the left
two-thirds of the frame and soft, uncluttered negative space on the right side. Softly muted warm color
grade, shallow depth of field, authentic candid feel, no text, no logos, no medical machinery.
```

Alt text: `New mother rebuilding core strength in a guided postpartum session, her baby beside her.`

### Inset — Set A (1024×1024 → crop 4:3) — regeneration baseline, matches the existing scene

```
Warm editorial photograph in a calm, upscale private physical-therapy studio with cream walls, soft
natural window light, framed muted watercolor art, a potted green plant, and pale-lavender accents. A
kind, confident physical therapist in her senior years with short blonde hair and glasses, wearing a
cream blouse with colorful floral-embroidered sleeves and silver jewelry, gently holds the hands of a
pregnant woman in a tank top and leggings seated on the edge of a pale-lavender treatment table, making
warm reassuring eye contact; the woman's partner sits supportively in the soft-focus background. Closer,
more intimate framing on the two women's connected hands and faces. Softly muted warm color grade,
shallow depth of field, authentic candid feel, no text, no logos, no medical machinery.
```

Alt text: `Therapist holding an expectant mother's hands in a moment of reassurance.`

### Inset — Set B (1024×1024 → crop 4:3)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio with cream walls, soft
natural window light, framed muted watercolor art, and pale-lavender accents. A pregnant woman in a
fitted tank top and leggings stands in a relaxed posture while a kind, confident physical therapist in
her senior years with short blonde hair and glasses, wearing a cream blouse with colorful
floral-embroidered sleeves and silver jewelry, stands slightly behind her with hands resting lightly at
the woman's hips, guiding a gentle pelvic tilt; both are calm and focused. Softly muted warm color
grade, shallow depth of field, authentic candid feel, no text, no logos, no medical machinery.
```

Alt text: `Therapist guiding gentle standing pelvic alignment work during pregnancy.`

---

## 3. Complex Pelvic Pain — `complex-pelvic-pain`

Files: `pelvic-pain-landscape.png`, `pelvic-pain-inset.png`

*The card copy leads with "treated with compassion" — so the hero is a listening moment, not a treatment
moment. This is the page where a first-time visitor is most anxious; the image's job is safety.*

### Hero — Set A (1792×1024)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio: cream walls, a large
window with soft natural daylight, framed muted watercolor landscape art, light-wood furniture, a potted
green plant, a soft throw blanket over a chair, and pale-lavender accents. A kind, confident physical
therapist in her senior years with short blonde hair and glasses, wearing a cream blouse with colorful
floral-embroidered sleeves and silver jewelry, leans in with warm eye contact and gently rests her hand
over the clasped hands of a woman in her 30s seated across from her in a comfortable armchair; the
patient's expression is relieved and hopeful, as if finally feeling heard. A cup of tea sits on the
small side table between them. Wide landscape composition with the two women in the left two-thirds of
the frame and soft, uncluttered negative space on the right side. Softly muted warm color grade, shallow
depth of field, authentic candid feel, no text, no logos, no medical machinery.
```

Alt text: `Therapist offering compassionate, unhurried reassurance to a patient during a private consultation.`

### Hero — Set B (1792×1024)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio: cream walls, a large
window with soft natural daylight, framed muted watercolor landscape art, light-wood furniture, and a
potted green plant. A kind, confident physical therapist in her senior years with short blonde hair and
glasses, wearing a cream blouse with colorful floral-embroidered sleeves and silver jewelry, stands by
the sunlit window with a woman in her 40s, one hand resting supportively on the woman's shoulder; the
patient looks out toward the light with a faint, hopeful smile, as if a weight is beginning to lift.
Quiet, dignified mood. Wide landscape composition with the two women in the left two-thirds of the
frame and soft, uncluttered negative space on the right side. Softly muted warm color grade, shallow
depth of field, authentic candid feel, no text, no logos, no medical machinery.
```

Alt text: `A quiet moment of hope and support by the window during pelvic pain care.`

### Inset — Set A (1024×1024 → crop 4:3)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio with cream walls, soft
natural window light, framed muted watercolor art, a potted green plant, and pale-lavender accents. A
woman in her 30s in soft activewear reclines comfortably on an exercise mat with her knees supported by
a cushioned bolster, one hand on her belly and one on her ribs, practicing slow relaxed breathing; a
kind, confident physical therapist in her senior years with short blonde hair and glasses, wearing a
cream blouse with colorful floral-embroidered sleeves and silver jewelry, kneels alongside coaching her
gently. Peaceful, unhurried mood. Softly muted warm color grade, shallow depth of field, authentic
candid feel, no text, no logos, no medical machinery.
```

Alt text: `Guided relaxation and breathing exercise during a pelvic pain therapy session.`

### Inset — Set B (1024×1024 → crop 4:3)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio with cream walls, soft
natural window light, framed muted watercolor art, and pale-lavender accents. A woman in her 30s in soft
activewear rests in a supported child's pose over a cushioned bolster on an exercise mat, her body
relaxed and at ease; a kind, confident physical therapist in her senior years with short blonde hair and
glasses, wearing a cream blouse with colorful floral-embroidered sleeves and silver jewelry, kneels
beside her with a reassuring hand resting lightly on the woman's upper back. Deeply peaceful mood.
Softly muted warm color grade, shallow depth of field, authentic candid feel, no text, no logos, no
medical machinery.
```

Alt text: `Supported restorative stretch with gentle hands-on reassurance.`

---

## 4. Oncology & Breast Care — `oncology-breast-care`

Files: `oncology-landscape.png`, `oncology-inset.png`

*Tone target: quietly triumphant recovery, not illness. Set A's soft headwrap reads as authentic
representation without hospital context; Set B casts short regrown hair instead — two different points
on the recovery timeline for the client to choose between.*

### Hero — Set A (1792×1024)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio: cream walls, a large
window with soft natural daylight, framed muted watercolor landscape art, light-wood shelving, a potted
green plant, and pale-lavender accents including an upholstered treatment table. A kind, confident
physical therapist in her senior years with short blonde hair and glasses, wearing a cream blouse with
colorful floral-embroidered sleeves and silver jewelry, stands beside a woman in her 50s wearing a soft
patterned headwrap and comfortable clothing who sits upright on the treatment table; the therapist
gently supports the woman's raised arm at the wrist and elbow in a slow shoulder-mobility stretch. Both
look calm and quietly encouraged. Wide landscape composition with the two women in the left two-thirds
of the frame and soft, uncluttered negative space on the right side. Softly muted warm color grade,
shallow depth of field, authentic candid feel, no text, no logos, no medical machinery.
```

Alt text: `Therapist gently guiding a shoulder and arm stretch during breast-cancer rehabilitation.`

### Hero — Set B (1792×1024)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio: cream walls, a large
window with soft natural daylight, framed muted watercolor landscape art, light-wood shelving, a potted
green plant, and pale-lavender accents. A woman in her 50s with very short silver regrown hair and a
serene, quietly proud expression sits upright on a wooden bench, slowly raising a light wooden dowel
overhead with both hands; beside her, a kind, confident physical therapist in her senior years with
short blonde hair and glasses, wearing a cream blouse with colorful floral-embroidered sleeves and
silver jewelry, guides the movement with a gentle hand under the patient's elbow. Wide landscape
composition with the two women in the left two-thirds of the frame and soft, uncluttered negative space
on the right side. Softly muted warm color grade, shallow depth of field, authentic candid feel, no
text, no logos, no medical machinery.
```

Alt text: `Guided overhead mobility exercise during oncology rehabilitation.`

### Inset — Set A (1024×1024 → crop 4:3)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio with cream walls, soft
natural window light, framed muted watercolor art, and pale-lavender accents. Close, warm scene: a kind,
confident physical therapist in her senior years with short blonde hair and glasses, wearing a cream
blouse with colorful floral-embroidered sleeves and silver jewelry, uses both hands to perform a slow,
gentle massage along the forearm and upper arm of a relaxed seated woman in her 50s with her sleeve
rolled up, the patient's expression restful. Soft window light across their hands. Softly muted warm
color grade, shallow depth of field, authentic candid feel, no text, no logos, no medical machinery.
```

Alt text: `Gentle lymphedema massage therapy on a patient's arm.`

### Inset — Set B (1024×1024 → crop 4:3)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio with cream walls, soft
natural window light, framed muted watercolor art, and pale-lavender accents. A kind, confident physical
therapist in her senior years with short blonde hair and glasses, wearing a cream blouse with colorful
floral-embroidered sleeves and silver jewelry, carefully smooths a soft beige compression sleeve onto
the extended forearm of a seated woman in her 50s; both women share a small, easy smile, the mood
practical and encouraging. Softly muted warm color grade, shallow depth of field, authentic candid
feel, no text, no logos, no medical machinery.
```

Alt text: `Therapist fitting a compression sleeve during lymphedema care.`

---

## 5. Orthopedics & Bone Health — `orthopedics-bone-health`

Files: `ortho-landscape.png`, `ortho-inset.png`

*The card copy names Pilates-based rehab, so the reformer is the differentiator here — described as
light wood so it reads "boutique studio," never "gym machine." Set B casts a male patient in his 70s —
osteoporosis care is not only a women's concern, and this extends the all-genders signal.*

### Hero — Set A (1792×1024)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio: cream walls, a large
window with soft natural daylight, framed muted watercolor landscape art, a potted green plant, and
pale-lavender accents, with a light-wood Pilates reformer visible at the edge of the scene. A kind,
confident physical therapist in her senior years with short blonde hair and glasses, wearing a cream
blouse with colorful floral-embroidered sleeves and silver jewelry, guides a silver-haired woman in her
late 60s wearing soft activewear through a standing posture-and-balance exercise, the therapist's hands
resting lightly at the patient's shoulder and mid-back, both with small warm smiles. Wide landscape
composition with the two women in the left two-thirds of the frame and soft, uncluttered negative space
on the right side. Softly muted warm color grade, shallow depth of field, authentic candid feel, no
text, no logos, no medical machinery.
```

Alt text: `Therapist guiding an older adult through posture and balance training for bone health.`

### Hero — Set B (1792×1024)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio: cream walls, a large
window with soft natural daylight, framed muted watercolor landscape art, light-wood shelving, a potted
green plant, and pale-lavender accents. A fit man in his early 70s with white hair, wearing a soft
polo shirt and comfortable pants, performs a controlled sit-to-stand exercise from a sturdy wooden
chair holding small light dumbbells, his expression focused and capable; beside him, a kind, confident
physical therapist in her senior years with short blonde hair and glasses, wearing a cream blouse with
colorful floral-embroidered sleeves and silver jewelry, coaches him with an approving nod. Wide
landscape composition with the two people in the left two-thirds of the frame and soft, uncluttered
negative space on the right side. Softly muted warm color grade, shallow depth of field, authentic
candid feel, no text, no logos, no medical machinery.
```

Alt text: `Older adult building functional strength in a guided bone-health session.`

### Inset — Set A (1024×1024 → crop 4:3)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio with cream walls, soft
natural window light, framed muted watercolor art, a potted green plant, and pale-lavender accents. A
silver-haired woman in her late 60s in soft activewear lies on a light-wood Pilates reformer performing
gentle, controlled footwork with the springs, while a kind, confident physical therapist in her senior
years with short blonde hair and glasses, wearing a cream blouse with colorful floral-embroidered
sleeves and silver jewelry, crouches beside the reformer guiding the alignment of the patient's legs.
Focused, encouraging mood. Softly muted warm color grade, shallow depth of field, authentic candid feel,
no text, no logos, no medical machinery.
```

Alt text: `Pilates reformer–based rehabilitation session for strength and bone health.`

### Inset — Set B (1024×1024 → crop 4:3)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio with cream walls, soft
natural window light, framed muted watercolor art, and a potted green plant. A silver-haired woman in
her late 60s in soft activewear steps up onto a low light-wood step with tall, confident posture, while
a kind, confident physical therapist in her senior years with short blonde hair and glasses, wearing a
cream blouse with colorful floral-embroidered sleeves and silver jewelry, stands close beside her with
a light steadying hand near her shoulder. Focused, encouraging mood. Softly muted warm color grade,
shallow depth of field, authentic candid feel, no text, no logos, no medical machinery.
```

Alt text: `Weight-bearing step training for bone strength with hands-on guidance.`

---

## 6. Sports Medicine & Active Recovery — `sports-medicine-active-recovery`

Files: `sports-landscape.png`, `sports-inset.png`

*The one page allowed visible energy — but it stays in the same warm studio, so the site never tips into
"gym." Motion comes from the patient's pose, not the environment. Set B casts a male athlete.*

### Hero — Set A (1792×1024)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio: cream walls, a large
window with soft natural daylight, framed muted watercolor landscape art, light-wood shelving, a potted
green plant, and pale-lavender accents including exercise balls. An athletic woman in her late 20s in
running tights and a fitted top performs a controlled single-leg lunge while holding a taut resistance
band anchored low, her focus determined and confident; beside her, a kind, confident physical therapist
in her senior years with short blonde hair and glasses, wearing a cream blouse with colorful
floral-embroidered sleeves and silver jewelry, coaches her form with an encouraging gesture. A sense of
controlled strength and energy. Wide landscape composition with the two women in the left two-thirds of
the frame and soft, uncluttered negative space on the right side. Softly muted warm color grade, shallow
depth of field, authentic candid feel, no text, no logos, no medical machinery.
```

Alt text: `Therapist coaching an athlete through return-to-sport strength training.`

### Hero — Set B (1792×1024)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio: cream walls, a large
window with soft natural daylight, framed muted watercolor landscape art, light-wood shelving, a potted
green plant, and pale-lavender accents. An athletic man in his 30s in a fitted athletic shirt and
shorts performs a slow, controlled step-down from a low light-wood plyometric step, concentrating on
his landing leg; a kind, confident physical therapist in her senior years with short blonde hair and
glasses, wearing a cream blouse with colorful floral-embroidered sleeves and silver jewelry, crouches
slightly to watch his knee alignment, one hand raised in a precise coaching gesture. Controlled,
focused energy. Wide landscape composition with the two people in the left two-thirds of the frame and
soft, uncluttered negative space on the right side. Softly muted warm color grade, shallow depth of
field, authentic candid feel, no text, no logos, no medical machinery.
```

Alt text: `Therapist assessing landing mechanics during return-to-sport rehabilitation.`

### Inset — Set A (1024×1024 → crop 4:3)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio with cream walls, soft
natural window light, framed muted watercolor art, and pale-lavender accents. An athletic woman in her
late 20s in running tights lies on an exercise mat performing a band-resisted hip-strengthening bridge,
a soft resistance loop around her thighs, while a kind, confident physical therapist in her senior years
with short blonde hair and glasses, wearing a cream blouse with colorful floral-embroidered sleeves and
silver jewelry, kneels beside her lightly guiding the alignment of her knee. Focused, energetic but
calm mood. Softly muted warm color grade, shallow depth of field, authentic candid feel, no text, no
logos, no medical machinery.
```

Alt text: `Resistance-band hip strengthening during an active-recovery session.`

### Inset — Set B (1024×1024 → crop 4:3)

```
Warm editorial photograph in a calm, upscale private physical-therapy studio with cream walls, soft
natural window light, framed muted watercolor art, and pale-lavender accents including an upholstered
treatment table. An athletic woman in her late 20s in running gear sits on the edge of the
pale-lavender treatment table while a kind, confident physical therapist in her senior years with short
blonde hair and glasses, wearing a cream blouse with colorful floral-embroidered sleeves and silver
jewelry, gently assesses the woman's knee with both hands, the athlete watching with engaged, trusting
attention. Professional, optimistic mood. Softly muted warm color grade, shallow depth of field,
authentic candid feel, no text, no logos, no medical machinery.
```

Alt text: `Hands-on knee assessment during a return-to-sport evaluation.`
