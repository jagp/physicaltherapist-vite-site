# Design Fundamentals

- v2.0

## Principles

- Expertise > Overreach
- Intentioned > Chaotic
- Honest > Artificial
- Referrals > Clamoring
- Speed > Exhaustive
- SEO > artifice
- Accessible > Stereotyped
- Responsive > Opinionated

**Purpose:** A distilled, ingestible spec for Design mode. Each principle is a declarative directive with a one-line rationale so design output stays consistent with what is currently working on the web for clean, modern, women's-health practices.

**North star:** _Calm authority._ The site should feel like a quiet, expensive, deeply credible private practice — not a clinic, not a startup, not a template. Warm minimalism over medical sterility; _editorial restraint over visual theatrics._

**Who this is for:** Dr. Rebecca G. Stephenson — Board-Certified Women's & Pelvic Health Specialist (45+ yrs, Brigham/MGH, published author, educator). The design must carry that authority _and_ lower the anxiety a first-time pelvic-health patient brings. Note: practice treats all genders ("pelvic health is human health"), so the aesthetic leans feminine but must not exclude.

---

## 0. The three adjectives, operationalized

- **Clean** = generous white space, few choices per screen, one idea per section, no decoration that isn't doing a job. The most-trusted 2026 healthcare sites are the _quietest_ ones.
- **Modern** = warm-neutral palette (not medical blue), an elevated serif paired with a clean sans, authentic photography, and motion used only to confirm and guide.
- **Female** = Confidently appealing to any gender. The current women's-health benchmark (Tia, Maven, Origin) reads as _warm minimalism_: cream/paper grounds, one confident accent, editorial serif headlines, soft imagery. Femininity here is tone and warmth, not gender-coded ornament.

---

## 1. Layout & space

1✓. **Default to white space.** Treat empty space as the primary design material. Large section padding (≈96–128px desktop, ≈56–72px mobile). Crowding reads as "cheap clinic." 2. **One idea per section.** Each scroll band makes a single point (who she is, what she treats, what to expect, proof, act now). Never stack two asks in one viewport. 3. **Single-column, narrow measure.** Constrain content to ~1100–1200px max width; body text measure ≤ ~70 characters. Long full-width paragraphs are an anti-pattern. 4. **Predictable vertical rhythm.** Use an 8px spacing base. Consistent spacing between heading→text→CTA in every block. 5. **Left-aligned text by default.** Reserve centered text for short hero lines and CTA banners; centered body copy hurts readability.

## 2. Color

6X. **Warm-neutral foundation, engaging, confident accent signaling identity.** Anchor the whole site in a cream background + soft near-ink ("indigo ink") text, then introduce _one_ accent family for actions and emphasis. This is the defining move of modern women's-health design. 7. **Honor the client's purple/turquoise instinct — but don't overdo it.** Honor the intent by _muting_ it: a dusty plum/aubergine primary and a muted eucalyptus/teal secondary. Same emotional palette (insight + calm), current execution. 8. **Accent teal for emphasis only and not everywhere.** Color commands attention when it's scarce — primary buttons, active states, key links, one or two stat highlights. Backgrounds stay neutral but refuse to conform and bore. 9. **Use tints for sectioning, not borders.** Alternate paper/white/soft-blush with strong bands to separate sections instead of hard lines or boxes. 10. **Avoid clinical blue as the lead.** It signals "hospital," which is the opposite of the warm private-practice feeling. Cool tones, if used, stay as the muted-teal _secondary_.

## 3. Typography

11. **Editorial serif for headlines + clean sans for body.** This pairing is the single strongest signal of the modern, elevated, feminine look (cf. Tia: Garalde serif headlines / grotesque body). Serif carries warmth and authority; sans carries clarity.
12. **Recommended free, performant pairing:** **Fraunces** (variable serif, warm/editorial) for H1–H3; **Inter** (or Figtree) for body, UI, and labels. Load via `font-display: swap`, subset, self-host or preconnect.
13. **Let headlines be large and confident.** Hero H1 ≈ 44–64px desktop. Expressive type is in for 2026, but keep it typographic — no outlines, shadows, or gradient text.
14. **Type scale ≈ 1.25 (major third).** Base body 18px. Define a fixed scale (e.g., 18 / 22 / 28 / 36 / 48 / 64) and never set arbitrary sizes.
15. **Generous line-height for trust.** Body line-height ≈ 1.6. Tight, dense text reads as anxious; airy text reads as calm and confident.

## 4. Imagery & iconography

16. **Authentic photography over stock.** Use Rebecca's real headshots (per her notes: opening/working/teaching shots). Real practitioner imagery forms the emotional connection stock cannot — and it's the pattern across every strong reference site.
17. **Warm, soft, human shots.** Favor natural light, calm settings, hands-on-care and teaching moments. Avoid sterile equipment, clip-art anatomy, and stiff posed stock.
18. ~~**Consistent color grade.** Run all photos through a similar warm, sli,ghtly muted grade so they sit in the neutral palette rather than fighting it.~~
19. **Line icons, thin and uniform.** If icons are used for service buckets, keep them simple, single-weight line icons in the slate ink color — never multicolor or filled illustration sets.
20. **No anatomical or graphic medical imagery on entry pages.** For pelvic health, this raises anxiety. Keep clinical detail to the body of service/FAQ content, described in words.

## 5. Page patterns (the reusable blocks)

21. **Simple, flat top nav.** Home · About · Services (→ Conditions / What We Offer) · FAQ · Contact, plus one high-contrast Contact/Book button at the right. Mirrors the client's cited reference (Tempo PT) and keeps choices minimal. Keep Mentorship out of main nav.
22. **Hero = one line of who + one line of value + one primary CTA.** Short headline, one supporting sentence, single primary action ("Request a Consultation"), real photo. Don't crowd the hero with multiple buttons.
23. **Stack your best trust elements high.** Above the fold or just below, surface exactly three: top credential (Board-Certified WCS), an institution marker (Brigham/MGH), and one short patient quote. Users spend most of their attention above the fold.
24. **Service "buckets," not a wall of conditions.** Group the large condition list into ~5 scannable cards (Pelvic & Bladder Health · Pregnancy & Postpartum · Complex Pelvic Pain · Oncology & Breast Care · Bone Health & Ortho). Each card → its own detail. Reduces overwhelm, improves SEO.
25. **Credibility as a "badge of honor" block.** A dedicated, understated section for credentials/authority (WCS explainer, author of the Routledge text, international teaching, GWHI). This is her core differentiator — give it room, keep it factual, not boastful.
26. **Testimonials with real names, near every decision point.** Use named, specific quotes (as Tempo does). Specific > generic. Place a quote in the hero zone, a wall mid-page, and one before the final CTA.
27. **FAQ is a primary anxiety-reducer, not an afterthought.** For pelvic health, the FAQ ("first visit," "internal exam is never mandatory," "what to wear," "do you treat men") is conversion-critical. Make it easy to find and calmly written.
28. **Transparent practical info.** Surface pricing approach, insurance/superbill handling, and location early. Transparency is a documented trust signal for private practices.
29. **Closing CTA banner on every page.** End each page with a single warm, reassuring call to action ("It's time to feel your best → Request a Consultation"). Reassurance language ("no obligation," "we'll discuss every step") outperforms bare commands.
30. **Minimal footer.** Brand, address (8 Pleasant St Unit 8E, South Natick MA 01760), phone, email, compact nav, copyright, accessibility link. Nothing more.

## 6. Motion & interaction

31. **Motion confirms and guides — never performs.** 2026 consensus is restraint. Subtle fade/rise on scroll-in, gentle hover states, smooth focus transitions. No autoplay carousels, parallax spectacle, or animated backgrounds.
32. **Micro-interactions on interactive elements only.** Buttons, form fields, accordion FAQ, nav — each gets a small, fast (~150–250ms) state change. Decorative elements stay still.
33. **Respect `prefers-reduced-motion`.** Disable non-essential animation for users who opt out.

## 7. Responsive & performance

34. **Mobile-first, genuinely.** Most patients arrive on phones. Design the single-column mobile layout first, then expand. Tap targets ≥ 44px.
35. **Fast is part of the aesthetic.** Target < 3s load / strong Core Web Vitals: optimize/lazy-load images, limit fonts to two families, avoid heavy frameworks (fits the static-HTML scope).
36. **Sticky, reachable contact on mobile.** Persistent or easily reached "Call" / "Request" action on small screens.

## 8. Accessibility (non-negotiable, and on-brand)

37. **WCAG AA contrast.** Verified against the starter tokens: ink-on-paper (13.3:1), plum primary as text or button (≈7.8:1), and ink-muted (5.0:1) all pass for body text. The muted teal secondary is **large-text/UI only** (3.38:1) — never use it for body copy or small labels. Re-check any new color before shipping; muted palettes fail silently.
38. **Semantic HTML + visible focus.** Proper headings, landmarks, alt text, labeled forms, keyboard-navigable accordions, clear focus rings. Matches the project's semantic-HTML commitment.
39. **Calm, inclusive language in UI copy.** Microcopy reduces anxiety ("we'll discuss every step before proceeding"). Avoid jargon in buttons and labels.

## 9. Voice in the interface (design-adjacent)

40. **Warm, expert, plain.** Headlines and microcopy should sound like a trusted senior clinician: confident, kind, never clinical-cold or salesy. This tone _is_ part of the visual identity.

---

## What to avoid (anti-patterns)

- Vibrant purple→turquoise gradients, glassmorphism, neon — dated and generic-medical.
- Lead clinical blue; stocky "smiling doctor" imagery; clip-art anatomy.
- Stereotyped feminine ornament (florals, script fonts, heavy pinks).
- Dense walls of conditions; multi-button heroes; autoplay sliders.
- More than two type families; tiny body text; hard-bordered boxes everywhere.

## Trend basis (why these principles)

Derived from current (2025–26) patterns across: leading women's-health brand systems (Tia's warm earth-tone palette + Garalde-serif/grotesque pairing; Maven's calming, approachable system); 2026 healthcare web-design consensus (calm, quiet, generous white space, warm paper + slate + one accent, restrained motion); PT/private-practice conversion practice (authentic photography, named testimonials, transparent pricing/insurance, prominent scheduling CTA, three stacked trust signals); and the client's own cited reference, Tempo PT (flat nav, single-line hero + CTA, service list, practitioner bio, named testimonial wall, repeated closing CTA, minimal footer).

### Sources (by principle)

- **#1 White space** —
  · [NN/g, "Trustworthy Design"](https://www.nngroup.com/articles/trustworthy-design/)
  · [Sbaffi & Rowley 2017, "Trust and Credibility in Web-Based Health Information," _J Med Internet Res_](https://pmc.ncbi.nlm.nih.gov/articles/PMC5495972/)
  · ["Healthcare Websites in 2026: 12 Design Trends Patients Now Expect," Medium](https://medium.com/@hello_34133/healthcare-websites-in-2026-12-design-trends-patients-now-expect-a7d1ecfe011b)
  · [Vezadigital, "Healthcare Web Design Trends"](https://www.vezadigital.com/post/healthcare-web-design-trends)
  · [DigitalSilk, "Minimalist Web Design Trends"](https://www.digitalsilk.com/digital-trends/minimalist-web-design-trends/)

- **#6 Warm-neutral + accent count** —
  · [PRINT Magazine, "Tia's elevated women's healthcare brand system"](https://www.printmag.com/branding-identity-design/tia/)
  · [Design Week, "Athletics rebrands women's healthcare brand Tia"](https://www.designweek.co.uk/issues/28-november-2-december-2022/athletics-rebrands-womens-healthcare-tia/)
  · [AIGA Eye on Design, "High design healthcare is getting the millennial branding treatment"](https://eyeondesign.aiga.org/high-design-healthcare-is-getting-the-millennial-branding-treatment/)

- **#7 Client color instinct** —
  · [Future FemHealth, "How women's health branding grew up"](https://www.futurefemhealth.com/p/how-womens-health-branding-grew-up)
  · [PRINT Magazine, Tia](https://www.printmag.com/branding-identity-design/tia/) · [Design Week, Tia](https://www.designweek.co.uk/issues/28-november-2-december-2022/athletics-rebrands-womens-healthcare-tia/)
  · [AIGA Eye on Design](https://eyeondesign.aiga.org/high-design-healthcare-is-getting-the-millennial-branding-treatment/)
  · [Creative Boom, "10 trends creatives are so over in 2026"](https://www.creativeboom.com/insight/10-trends-creatives-are-so-over-in-2026/) (gradients specifically)

- **#16 Authentic photography** —
  · [NN/g, "Photos as Web Content"](https://www.nngroup.com/articles/photos-as-web-content/)
  · [NN/g, "Trustworthy Design"](https://www.nngroup.com/articles/trustworthy-design/) · [PhotoShelter/Blue Compass, "Stock vs. real patient photos"](https://go.photoshelter.com/brands/blog/stock-vs-real-patient-photos-what-healthcare-marketers-should-know/)
  · [Simple Impact Media, "Dental practice website conversion rates"](https://www.simpleimpactmedia.com/blog/dental-practice-website-conversion-rates/) · [Hanna Danielson, Maven Clinic rebrand case study](http://www.hannadanielson.com/maven-clinic)

- **#19 Icons** —
  · [Envato Elements, "Icon Design Trends"](https://elements.envato.com/learn/icon-design-trends)
  · [DesignShack, "Icon Design Trends"](https://designshack.net/articles/trends/icon-design/)

- **#23 Trust signals / above the fold** —
  · [NN/g, "Scrolling and Attention"](https://www.nngroup.com/articles/scrolling-and-attention/)
  · [NN/g, "The Fold Manifesto"](https://www.nngroup.com/articles/page-fold-manifesto/) · [Sbaffi & Rowley 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5495972/)
  · [CXL, "Above the Fold"](https://cxl.com/blog/above-the-fold/) (distinguishing source, Chartbeat below-fold-attention data)
  · [Origin (theoriginway.com)](https://www.theoriginway.com/), live-site example of stacked trust signals

- **General 2025–26 trend corroboration** —
  · [Motionbuzz, "Healthcare Web Design Trends"](https://www.motionbuzz.com/blog/healthcare-web-design-trends/)

## Colors revised

## Starter token set (concrete defaults for Design mode) according to updated design princples after deep research

----> IMPORTANT: THE BELOW COLOR VALUES ARE NOT TO BE REFERENCED OR CHANGED UNLESS BY HUMAN COMMITS -- not even "human authorized" commits <---

```rgb
/* Color — warm-neutral foundation + modernized plum/teal */o stop, may as well preserve the work but NOT to be carried forward onto live
/* commenting all of this out.  Overzealous agent refused t
--paper:        #FAF7F2;   /* primary background (warm off-white) */
--surface:      #FFFFFF;   /* cards / raised areas */
--ink:          #2B2A2E;   /* primary text (soft slate-black) */
--ink-muted:    #6C6A72;   /* secondary text */
--primary:      #5E4B66;   /* dusty plum/aubergine — actions, emphasis */
--primary-deep: #3F3247;   /* hover / headings accent */
--secondary:    #6E938D;   /* muted eucalyptus/teal — large text / UI accent ONLY (3.38:1; not for body text) */
--tint-blush:   #F1E8E2;   /* section band */
--tint-sage:    #E9EEEA;   /* section band */
--line:         #E6E0D9;   /* hairlines, dividers */

/* Type */
--font-display: 'Fraunces', Georgia, serif;     /* headlines */
--font-body:    'Inter', system-ui, sans-serif; /* body + UI */
--text-base:    18px;
--scale:        1.25;       /* 18 / 22 / 28 / 36 / 48 / 64 */
--leading-body: 1.6;
--leading-head: 1.15;

/* Space & shape */
--space-base:   8px;
--section-pad-desktop: 112px;
--section-pad-mobile:  64px;
--container-max: 1140px;
--measure:      68ch;
--radius:       12px;        /* soft, consistent — not pill, not sharp */
--motion-fast:  180ms;
```
