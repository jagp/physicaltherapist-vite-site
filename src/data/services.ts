import { SERVICE_SLUGS } from './service-slugs';
import iconPelvicFloor from '../assets/icons/icon-pelvic-floor.png';
import iconPregnancy from '../assets/icons/icon-pregnancy.png';
import iconPelvicSupport from '../assets/icons/icon-pelvic-support.png';
import iconOncology from '../assets/icons/icon-oncology.png';
import iconSpine from '../assets/icons/icon-spine.png';
import iconMenopause from'../assets/icons/icon-menopause.png';
import iconPelvicFloorCream from '../assets/icons/icon-pelvic-floor-cream.png';
import iconPregnancyCream from '../assets/icons/icon-pregnancy-cream.png';
import iconPelvicSupportCream from '../assets/icons/icon-pelvic-support-cream.png';
import iconOncologyCream from '../assets/icons/icon-oncology-cream.png';
import iconSpineCream from '../assets/icons/icon-spine-cream.png';
import iconMenopauseCream from '../assets/icons/icon-menopause-cream.png';
import pregnancyLandscape from '../assets/service-page-images/pregnancy-landscape.png?w=1448&format=jpeg';
import pregnancyLandscapeAvif from '../assets/service-page-images/pregnancy-landscape.png?w=480;960;1448&format=avif&as=srcset';
import pregnancyLandscapeWebp from '../assets/service-page-images/pregnancy-landscape.png?w=480;960;1448&format=webp&as=srcset';
import pregnancyInset from '../assets/service-page-images/pregnancy-inset.png?w=1240&format=jpeg';
import pregnancyInsetAvif from '../assets/service-page-images/pregnancy-inset.png?w=480;960;1240&format=avif&as=srcset';
import pregnancyInsetWebp from '../assets/service-page-images/pregnancy-inset.png?w=480;960;1240&format=webp&as=srcset';
// Pelvic Floor & Bladder Health (header/inset 1448×1086)
import pfHeader from '../assets/service-page-images/pelvic-floor-bladder-health-header.png?w=1448&format=jpeg';
import pfHeaderAvif from '../assets/service-page-images/pelvic-floor-bladder-health-header.png?w=480;960;1448&format=avif&as=srcset';
import pfHeaderWebp from '../assets/service-page-images/pelvic-floor-bladder-health-header.png?w=480;960;1448&format=webp&as=srcset';
import pfInset from '../assets/service-page-images/pelvic-floor-bladder-health-inset.png?w=1240&format=jpeg';
import pfInsetAvif from '../assets/service-page-images/pelvic-floor-bladder-health-inset.png?w=480;960;1240&format=avif&as=srcset';
import pfInsetWebp from '../assets/service-page-images/pelvic-floor-bladder-health-inset.png?w=480;960;1240&format=webp&as=srcset';
// Pelvic Pain & Sexual Health — slug complex-pelvic-pain (header/inset 1536×1024)
import ppHeader from '../assets/service-page-images/complex-pelvic-pain-header.png?w=1536&format=jpeg';
import ppHeaderAvif from '../assets/service-page-images/complex-pelvic-pain-header.png?w=480;960;1536&format=avif&as=srcset';
import ppHeaderWebp from '../assets/service-page-images/complex-pelvic-pain-header.png?w=480;960;1536&format=webp&as=srcset';
import ppInset from '../assets/service-page-images/complex-pelvic-pain-inset.png?w=1240&format=jpeg';
import ppInsetAvif from '../assets/service-page-images/complex-pelvic-pain-inset.png?w=480;960;1240&format=avif&as=srcset';
import ppInsetWebp from '../assets/service-page-images/complex-pelvic-pain-inset.png?w=480;960;1240&format=webp&as=srcset';
// Lymphedema & Cancer Rehab (header 1536×1024, inset 1448×1086)
import lyHeader from '../assets/service-page-images/lymphedema-cancer-rehab-header.png?w=1536&format=jpeg';
import lyHeaderAvif from '../assets/service-page-images/lymphedema-cancer-rehab-header.png?w=480;960;1536&format=avif&as=srcset';
import lyHeaderWebp from '../assets/service-page-images/lymphedema-cancer-rehab-header.png?w=480;960;1536&format=webp&as=srcset';
import lyInset from '../assets/service-page-images/lymphedema-cancer-rehab-inset.png?w=1240&format=jpeg';
import lyInsetAvif from '../assets/service-page-images/lymphedema-cancer-rehab-inset.png?w=480;960;1240&format=avif&as=srcset';
import lyInsetWebp from '../assets/service-page-images/lymphedema-cancer-rehab-inset.png?w=480;960;1240&format=webp&as=srcset';
// Osteoporosis & Bone Health (header/inset 1536×1024)
import osHeader from '../assets/service-page-images/osteoporosis-bone-health-header.png?w=1536&format=jpeg';
import osHeaderAvif from '../assets/service-page-images/osteoporosis-bone-health-header.png?w=480;960;1536&format=avif&as=srcset';
import osHeaderWebp from '../assets/service-page-images/osteoporosis-bone-health-header.png?w=480;960;1536&format=webp&as=srcset';
import osInset from '../assets/service-page-images/osteoporosis-bone-health-inset.png?w=1240&format=jpeg';
import osInsetAvif from '../assets/service-page-images/osteoporosis-bone-health-inset.png?w=480;960;1240&format=avif&as=srcset';
import osInsetWebp from '../assets/service-page-images/osteoporosis-bone-health-inset.png?w=480;960;1240&format=webp&as=srcset';
// Menopause & Midlife Health (header 1536×1024, inset 1448×1086)
import meHeader from '../assets/service-page-images/menopause-midlife-health-header.png?w=1536&format=jpeg';
import meHeaderAvif from '../assets/service-page-images/menopause-midlife-health-header.png?w=480;960;1536&format=avif&as=srcset';
import meHeaderWebp from '../assets/service-page-images/menopause-midlife-health-header.png?w=480;960;1536&format=webp&as=srcset';
import meInset from '../assets/service-page-images/menopause-midlife-health-inset.png?w=1240&format=jpeg';
import meInsetAvif from '../assets/service-page-images/menopause-midlife-health-inset.png?w=480;960;1240&format=avif&as=srcset';
import meInsetWebp from '../assets/service-page-images/menopause-midlife-health-inset.png?w=480;960;1240&format=webp&as=srcset';




export interface ServiceImage {
  src: string;
  /** Descriptive alt text; theme-based, fallback "picture of ▲". */
  alt: string;
  /** Optional responsive-delivery variants (vite-imagetools srcsets).
      When present, components render an AVIF/WebP/JPEG <picture>. */
  avifSrcSet?: string;
  webpSrcSet?: string;
  /** Intrinsic px dims of the fallback asset (reserves aspect ratio). */
  width?: number;
  height?: number;
}

export interface ExternalLink {
  url: string;
  /** Linked label text, rendered as the <a>. */
  label: string;
  /** Sentence fragment before the link. */
  before: string;
  /** Sentence fragment after the link (e.g. " is a solid starting point."). */
  after?: string;
}

export interface SpecializedTreatment {
  label: string;
  desc: string;
}

/* ---- Optional, composable content blocks ("reach / double-reach") ----
   Each service opts into any mix of these; array order is render order.
   Boutique per-service blocks (e.g. a pregnancy-only "Home Visits" feature)
   live here too, with no analog forced onto sibling pages. */

export interface ConditionItem {
  label: string;
  /** Optional one-line description of the condition. */
  desc?: string;
}

export interface ConditionGroup {
  /** Optional sub-heading grouping related conditions. */
  heading?: string;
  items: ConditionItem[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ExpectStep {
  label: string;
  desc: string;
}

export type ServiceSection =
  | { kind: 'conditions'; title?: string; groups: ConditionGroup[] }
  | { kind: 'faq'; title?: string; items: FaqItem[] }
  | { kind: 'feature'; title: string; body: string; image?: ServiceImage; imageSide?: 'left' | 'right' }
  | { kind: 'expect'; title: string; steps: ExpectStep[] }
  | { kind: 'callout'; title: string; body: string; tone?: 'tint' | 'brand' };

export interface ServiceSeo {
  /** <title>; defaults to `${title} | Stephenson Physical Therapy`. */
  title?: string;
  /** Meta description; defaults to `desc`. */
  metaDescription?: string;
  /** Canonical URL; defaults to the derived `/services/${slug}`. */
  canonical?: string;
  /** Open Graph image; defaults to `heroImage.src`. */
  ogImage?: string;
}

export interface ServiceContent {
  /** Small label above the headline (e.g. the service title). */
  eyebrow?: string;
  /** First-person headline in Rebecca's voice. */
  headline: string;
  /** Punchy claim under the headline. */
  claim: string;
  heroImage: ServiceImage;
  /** Side the hero image sits on; flip per page so consecutive pages differ. @default "left" */
  heroImageSide?: 'left' | 'right';
  /** Intro pitch paragraph. */
  intro: string;
  /** Mid-body service picture. */
  insetImage?: ServiceImage;
  /** Authority / SEO paragraph. */
  mainBody: string;
  externalLink?: ExternalLink;
  specializedTreatments?: SpecializedTreatment[];
  /** Land-the-pitch closing paragraph. */
  closer: string;
  cta: { phrase: string; button: string };
  /** Per-page SEO/head overrides; every field falls back to a sensible default. */
  seo?: ServiceSeo;
  /** Ordered, optional content blocks rendered between the article and the CTA. */
  sections?: ServiceSection[];
  /** Slugs of sibling services to cross-link; defaults to the other services. */
  relatedSlugs?: string[];
}

export interface ServiceInfo {
  slug: string;
  icon: string;
  /** Cream-on-transparent icon variant for use on dark (--bg) surfaces. */
  iconDark: string;
  title: string;
  desc: string;
  /** When present, the slug renders the full template; otherwise the "coming soon" fallback. */
  content?: ServiceContent;
}

export const services: ServiceInfo[] = [
  {
    slug: SERVICE_SLUGS[0],
    icon: iconPelvicFloor,
    iconDark: iconPelvicFloorCream,
    title: 'Pelvic Floor & Bladder Health',
    desc: 'Urinary leakage, urgency, frequency, and pelvic organ prolapse — for all genders.',
    content: {
      headline: 'Take Back Bladder Control.',
      claim:
        'Leaking, urgency, and “gotta-go-now” moments are common — but they are not something you have to live with.',
      heroImage: {
        src: pfHeader,
        avifSrcSet: pfHeaderAvif,
        webpSrcSet: pfHeaderWebp,
        width: 1448,
        height: 1086,
        alt: 'A physical therapist speaks warmly with a couple during a consultation in a calm, home-like room.',
      },
      heroImageSide: 'left',
      intro:
        'Your pelvic floor quietly runs a lot of daily life — bladder and bowel control, core stability, even sexual function. When those muscles become weak, tight, or uncoordinated, the fallout shows up as leakage, urgency, or pressure. I work one-on-one with patients of every gender to restore how the pelvic floor actually works — and with it, the confidence to stop planning your day around the nearest bathroom.',
      insetImage: {
        src: pfInset,
        avifSrcSet: pfInsetAvif,
        webpSrcSet: pfInsetWebp,
        width: 1448,
        height: 1086,
        alt: 'A physical therapist reviews a care plan with two patients at her desk.',
      },
      mainBody:
        'Bladder problems are rarely one thing. Stress incontinence (leaking when you laugh, cough, or lift), urge incontinence and overactive bladder (sudden, hard-to-defer urgency), and mixed incontinence each respond to different, targeted care — as do urinary retention and pelvic organ prolapse. Using pelvic floor retraining, behavioral strategies, and neuromuscular reeducation, I treat the cause rather than managing the symptom. For many people, that conservative approach reduces or resolves symptoms without surgery or medication.',
      externalLink: {
        url: 'https://my.clevelandclinic.org/health/diseases/14459-pelvic-floor-dysfunction',
        label: 'Cleveland Clinic’s overview',
        before:
          'For more on how these muscles affect bladder and bowel control, ',
        after: ' is a good place to start.',
      },
      specializedTreatments: [
        {
          label: 'Urinary Incontinence',
          desc: 'Stress, urge, and mixed leakage, treated with conservative methods that often avoid surgery or medication.',
        },
        {
          label: 'Overactive Bladder (OAB)',
          desc: 'Urgency and frequency retrained through behavioral strategy and neuromuscular reeducation.',
        },
        {
          label: 'Urinary Retention',
          desc: 'Addressing the muscle or neurological causes behind incomplete emptying.',
        },
        {
          label: 'Pelvic Organ Prolapse (POP)',
          desc: 'Heaviness and pressure often improved without surgery.',
        },
        {
          label: 'Interstitial Cystitis / Painful Bladder Syndrome',
          desc: 'A multimodal approach combining manual therapy, behavioral strategy, and education.',
        },
      ],
      closer:
        'You don’t need a referral to start feeling like yourself again. Whether your goal is running without leaking or simply sleeping through the night, we build the plan around it.',
      cta: {
        phrase: 'Ready to stop planning your life around the bathroom?',
        button: 'Schedule Your Evaluation',
      },
      seo: {
        title: 'Pelvic Floor & Bladder Health | Stephenson Physical Therapy',
        metaDescription:
          'PT for urinary leakage, urgency, frequency, and pelvic organ prolapse — conservative, evidence-based care for all genders in South Natick.',
      },
      sections: [
        {
          kind: 'conditions',
          title: 'Conditions treated',
          groups: [
            {
              heading: 'Bladder',
              items: [
                { label: 'Stress incontinence' },
                { label: 'Urge incontinence' },
                { label: 'Mixed incontinence' },
                { label: 'Overactive bladder' },
                { label: 'Urinary frequency' },
                { label: 'Urinary urgency' },
                { label: 'Urinary retention' },
              ],
            },
            {
              heading: 'Bowel & support',
              items: [
                { label: 'Chronic constipation' },
                { label: 'Fecal incontinence' },
                { label: 'Painful bowel movements' },
                { label: 'Pelvic organ prolapse' },
              ],
            },
          ],
        },
        {
          kind: 'faq',
          title: 'Common questions',
          items: [
            {
              q: 'Can physical therapy fix urinary incontinence without surgery?',
              a: 'Very often, yes. Conservative pelvic floor therapy — retraining, behavioral strategy, and neuromuscular reeducation — treats the underlying cause of leakage and frequently resolves or greatly improves it without surgery or medication.',
            },
            {
              q: 'Do men get pelvic floor therapy for bladder problems?',
              a: 'Absolutely. The pelvic floor supports bladder control in every body, and this practice treats all genders. Men experience incontinence, urgency, and retention too — and the same cause-focused approach applies.',
            },
            {
              q: 'How many sessions until bladder leakage improves?',
              a: 'It varies with the cause and how long symptoms have been present, but many people notice meaningful improvement over a course of care as the pelvic floor is retrained. Your plan is individual, and we track progress together.',
            },
          ],
        },
      ],
      relatedSlugs: ['pregnancy-postpartum', 'complex-pelvic-pain', 'menopause-midlife-health'],
    },
  },
  {
    slug: SERVICE_SLUGS[1],
    icon: iconPregnancy,
    iconDark: iconPregnancyCream,
    title: 'Pregnancy & Postpartum',
    desc: 'Lumbopelvic pain, diastasis recti, and recovery from vaginal or cesarean birth.',
    content: {
      headline: 'I Don’t Just Treat You.',
      claim: 'I bring long-lasting vitality to your whole family.',
      heroImage: {
        src: pregnancyLandscape,
        avifSrcSet: pregnancyLandscapeAvif,
        webpSrcSet: pregnancyLandscapeWebp,
        width: 1448,
        height: 1086,
        alt: 'A physical therapist holds a pregnant patient’s hand during a supportive consultation, her partner seated nearby.',
      },
      heroImageSide: 'left',
      intro:
        'Pregnancy and the months after birth ask a lot of your body — and you deserve a provider who’s spent decades learning how to support it. As a Board-Certified Women’s Health Clinical Specialist, I work one-on-one with you through every stage, from the aches of a changing pregnancy to a full return to strength postpartum.',
      insetImage: {
        src: pregnancyInset,
        avifSrcSet: pregnancyInsetAvif,
        webpSrcSet: pregnancyInsetWebp,
        width: 1240,
        height: 930,
        alt: 'A physical therapist talking with a pregnant patient during a consultation.',
      },
      mainBody:
        'Pregnancy changes how your body moves, holds weight, and recovers — often faster than your prenatal care team has time to fully address. Limited movement late in pregnancy, shifting nutrition needs, and a drop in activity level can all compound into pain or dysfunction that doesn’t resolve on its own. Working alongside your obstetric provider, I help you stay capable through pregnancy and rebuild safely afterward, with care tailored to exactly where you are.',
      externalLink: {
        url: 'https://www.inova.org/our-services/inova-womens-services/gynecology/conditions-and-treatments/pelvic-floor-health/physical-therapy',
        label: 'Inova Health’s overview',
        before:
          'For more on what pelvic floor physical therapy addresses during and after pregnancy, ',
        after: ' is a solid starting point.',
      },
      specializedTreatments: [
        {
          label: 'Prenatal Care',
          desc: 'Pelvic girdle pain (PGP), pubic symphysis dysfunction, and lower back pain during pregnancy.',
        },
        {
          label: 'Postpartum Rehabilitation',
          desc: 'Recovery from vaginal or C-section deliveries, including scar tissue management.',
        },
        {
          label: 'Diastasis Recti (DRA)',
          desc: 'Separation of the abdominal muscles after pregnancy.',
        },
      ],
      closer:
        'Your partner is carrying their own version of this stress. Let me handle the clinical complexity, so the two of you can focus on what matters — a healthy recovery and a healthy family.',
      cta: {
        phrase: 'You don’t have to white-knuckle your way through this.',
        button: 'Schedule Your Evaluation',
      },
      sections: [
        {
          kind: 'conditions',
          title: 'Conditions I treat through pregnancy and beyond',
          groups: [
            {
              heading: 'During pregnancy',
              items: [
                { label: 'Pelvic girdle pain (PGP)' },
                { label: 'Pubic symphysis dysfunction' },
                { label: 'Sacroiliac (SI) joint pain' },
                { label: 'Lower back pain in pregnancy' },
                { label: 'Rib pain in pregnancy' },
              ],
            },
            {
              heading: 'After birth',
              items: [
                { label: 'Diastasis recti (DRA)' },
                { label: 'Postpartum pelvic floor dysfunction' },
                { label: 'Urinary or fecal incontinence' },
                { label: 'Painful scar tissue (perineal or cesarean)' },
                { label: 'Return to running postpartum' },
                { label: 'Pelvic instability postpartum' },
              ],
            },
          ],
        },
        {
          kind: 'expect',
          title: 'Your first visit',
          steps: [
            {
              label: 'The Conversation',
              desc: 'We begin by getting to know you and understanding your history, goals, and concerns. This isn’t a rushed appointment — we take time to listen and ask clarifying questions.',
            },
            {
              label: 'The Assessment',
              desc: 'Depending on your condition and comfort level, we perform a physical assessment that may include posture evaluation, breathing assessment, movement screening, and pelvic floor muscle assessment (performed externally unless you choose internal evaluation).',
            },
            {
              label: 'The Plan',
              desc: 'We discuss our findings in clear, understandable language and collaboratively create a treatment plan tailored to your goals and timeline.',
            },
          ],
        },
        {
          kind: 'faq',
          title: 'Common questions',
          items: [
            {
              q: 'Is pelvic-floor physical therapy safe during pregnancy?',
              a: 'Yes. I work one-on-one with you through every stage and alongside your obstetric provider, tailoring gentle, appropriate care to exactly where you are — from the aches of a changing body toward a strong recovery after birth.',
            },
            {
              q: 'Can you help with diastasis recti (abdominal separation)?',
              a: 'Yes — rebuilding the abdominal wall after diastasis recti (DRA) is a core part of postpartum recovery, using breathing and progressive, well-sequenced loading rather than generic “ab” work.',
            },
            {
              q: 'Do you treat recovery after a cesarean birth?',
              a: 'Absolutely. Postpartum rehabilitation includes recovery from both vaginal and C-section deliveries, including gentle scar-tissue management once you are healing well.',
            },
            {
              q: 'What happens during the first visit?',
              a: 'Your initial evaluation is a 60-minute session in a private, quiet room. We start with a thorough conversation about your medical history and goals. If appropriate, a physical assessment is performed to check your posture, breathing, and pelvic floor muscle function. We will always discuss every step before proceeding.',
            },
            {
              q: 'Do I have to have an internal exam?',
              a: 'An internal assessment (vaginal or rectal) is the "gold standard" for evaluating pelvic floor muscle strength, coordination, and tension. However, it is never mandatory. We can learn a great deal from external assessments, and we will only perform an internal exam if you feel comfortable and give your full consent.',
            },
            {
              q: 'What should I wear to my appointment?',
              a: 'Wear comfortable, loose-fitting clothing that you can easily move in. You do not need special athletic gear, but clothing like yoga pants or sweatpants is often the most practical.',
            },
            {
              q: 'How many sessions will I need?',
              a: 'Everybody is different. After your first evaluation, we will create a personalized plan. Some patients see significant improvement in 4–6 visits, while more complex or chronic conditions may require longer-term care.',
            },
          ],
        },
      ],
    },
  },
  {
    slug: SERVICE_SLUGS[2],
    icon: iconPelvicSupport,
    iconDark: iconPelvicSupportCream,
    title: 'Pelvic Pain & Sexual Health',
    desc: 'Chronic pelvic pain, pudendal neuralgia, and painful intimacy, treated with compassion.',
    content: {
      headline: 'Break Free From Pelvic Pain.',
      claim:
        'Chronic pelvic pain is complex — but “complex” is not the same as “permanent.”',
      heroImage: {
        src: ppHeader,
        avifSrcSet: ppHeaderAvif,
        webpSrcSet: ppHeaderWebp,
        width: 1536,
        height: 1024,
        alt: 'A woman rests with a bolster under her knees while a physical therapist provides gentle hands-on pelvic care.',
      },
      heroImageSide: 'right',
      intro:
        'Persistent pain in the pelvis, abdomen, or genital region can come from muscle tension, nerve irritation, scar tissue, or several of these at once — which is exactly why it so often goes unresolved. I take the time to understand where your pain actually comes from, then treat it comprehensively, with the discretion and care this kind of work deserves.',
      insetImage: {
        src: ppInset,
        avifSrcSet: ppInsetAvif,
        webpSrcSet: ppInsetWebp,
        width: 1536,
        height: 1024,
        alt: 'A physical therapist listens and holds a patient’s hands during a supportive consultation.',
      },
      mainBody:
        'A thorough assessment lets me separate the threads — whether your pain is driven by pudendal neuralgia, levator ani spasm, vulvodynia, coccydynia, or the muscle guarding behind painful intimacy (dyspareunia) and vaginismus. From there, desensitization techniques, manual therapy, and neuromuscular reeducation calm the system down and restore normal function. Sexual health is part of that conversation, not an afterthought.',
      externalLink: {
        url: 'https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/pelvic-floor-therapy',
        label: 'Johns Hopkins Medicine',
        before:
          'For more on what pelvic floor therapy addresses, ',
        after: ' is a helpful outside resource.',
      },
      specializedTreatments: [
        {
          label: 'Vulvodynia & Vestibulodynia',
          desc: 'Generalized or localized vulvar pain reduced through desensitization and manual therapy.',
        },
        {
          label: 'Pudendal Neuralgia',
          desc: 'Techniques to calm the nerve irritation causing burning, shooting pain, or numbness.',
        },
        {
          label: 'Coccydynia (Tailbone Pain)',
          desc: 'Tissue mobilization and postural work to make sitting bearable again.',
        },
        {
          label: 'Levator Ani Syndrome',
          desc: 'Targeted relaxation and neuromuscular reeducation for deep pelvic aching.',
        },
        {
          label: 'Dyspareunia (Painful Intercourse)',
          desc: 'Addressing the physical drivers so you can enjoy intimacy again.',
        },
        {
          label: 'Vaginismus',
          desc: 'Highly treatable with progressive desensitization and pelvic floor retraining.',
        },
      ],
      closer:
        'Please stop waiting for this to fix itself. Pain this personal deserves a provider who treats both the tissue and the person — and who has spent decades doing exactly that.',
      cta: {
        phrase: 'You deserve to feel at home in your body again.',
        button: 'Schedule Your Evaluation',
      },
      seo: {
        title: 'Pelvic Pain & Sexual Health | Stephenson Physical Therapy',
        metaDescription:
          'Compassionate PT for chronic pelvic pain, pudendal neuralgia, and painful intimacy — thorough assessment and a targeted, dignified plan.',
      },
      sections: [
        {
          kind: 'conditions',
          title: 'Conditions treated',
          groups: [
            {
              heading: 'Pain syndromes',
              items: [
                { label: 'Chronic pelvic pain' },
                { label: 'Vulvodynia' },
                { label: 'Vestibulodynia' },
                { label: 'Pudendal neuralgia' },
                { label: 'Coccydynia (tailbone pain)' },
                { label: 'Levator ani syndrome' },
              ],
            },
            {
              heading: 'Sexual health',
              items: [
                { label: 'Dyspareunia (painful intercourse)' },
                { label: 'Vaginismus' },
                { label: 'Scar-related pain' },
              ],
            },
          ],
        },
        {
          kind: 'faq',
          title: 'Common questions',
          items: [
            {
              q: 'Can pelvic floor therapy help painful sex (dyspareunia)?',
              a: 'Yes. Painful intercourse usually has physical drivers — muscle guarding, tissue sensitivity, or scarring — that pelvic floor therapy can directly address. We work through them gradually, always at your pace, so intimacy can become comfortable again.',
            },
            {
              q: 'What does treatment for pudendal neuralgia involve?',
              a: 'Treatment focuses on calming an irritated nerve and the muscles around it. That means gentle desensitization, manual therapy to release surrounding tension, and neuromuscular reeducation — reducing the burning, shooting, or numb sensations over time rather than masking them.',
            },
            {
              q: 'Is chronic pelvic pain treatable without medication?',
              a: 'Often, yes. Because chronic pelvic pain frequently comes from muscle, nerve, and scar-tissue patterns, a targeted physical therapy approach can reduce or resolve it by treating those drivers directly — a conservative, first-line option worth trying before more invasive routes.',
            },
          ],
        },
      ],
      relatedSlugs: ['pelvic-floor-bladder-health', 'pregnancy-postpartum', 'menopause-midlife-health'],
    },
  },
  {
    slug: SERVICE_SLUGS[3],
    icon: iconOncology,
    iconDark: iconOncologyCream,
    title: 'Lymphedema & Cancer Rehab',
    desc: 'Lymphedema therapy (CLT), manual lymphatic drainage, and breast-cancer rehabilitation.',
    content: {
      headline: 'Reclaim Your Body After Cancer.',
      claim:
        'Cancer treatment asks everything of your body — recovery deserves the same expertise.',
      heroImage: {
        src: lyHeader,
        avifSrcSet: lyHeaderAvif,
        webpSrcSet: lyHeaderWebp,
        width: 1536,
        height: 1024,
        alt: 'A physical therapist holds an older woman’s hands during a warm, reassuring conversation.',
      },
      heroImageSide: 'left',
      intro:
        'Surgery, radiation, and chemotherapy save lives — and they also leave their mark, on range of motion, on the lymphatic system, on bladder, bowel, and sexual function. As a Certified Lymphedema Therapist, I help breast- and gynecologic-cancer survivors rebuild strength, manage swelling, and feel at home in their bodies again.',
      insetImage: {
        src: lyInset,
        avifSrcSet: lyInsetAvif,
        webpSrcSet: lyInsetWebp,
        width: 1448,
        height: 1086,
        alt: 'A physical therapist fits a compression sleeve on a woman in a head scarf during cancer rehabilitation.',
      },
      mainBody:
        'Post-surgical breast rehabilitation restores shoulder range of motion, softens scar tissue, and lowers lymphedema risk. When lymphedema is already present, Complete Lymphedema Therapy — manual lymphatic drainage, compression, and targeted exercise — keeps it managed. And because cancer treatment often affects the pelvic floor, I also address the bladder, bowel, and intimacy changes that survivors are too rarely told to expect.',
      externalLink: {
        url: 'https://www.cancer.org/',
        label: 'American Cancer Society',
        before: 'The ',
        after: ' offers patient-facing guidance on lymphedema risk and management.',
      },
      specializedTreatments: [
        {
          label: 'Breast Cancer Recovery',
          desc: 'Scar management, range-of-motion restoration, lymphedema prevention, and return to activity.',
        },
        {
          label: 'Lymphedema Management (CLT)',
          desc: 'Manual lymphatic drainage, compression-garment fitting, and exercise prescription.',
        },
        {
          label: 'Gynecological Surgery Recovery',
          desc: 'Pelvic floor rehab and scar work after hysterectomy, endometriosis excision, or ovarian surgery.',
        },
        {
          label: 'Pelvic Health After Cancer',
          desc: 'Addressing the bladder, bowel, and sexual side effects of surgery, radiation, or chemotherapy.',
        },
      ],
      closer:
        'Survivorship is a stage of care in its own right. Let’s make sure yours includes a body that moves, feels, and functions the way you want it to.',
      cta: {
        phrase: 'Your recovery is not finished until you say it is.',
        button: 'Schedule Your Evaluation',
      },
      seo: {
        title: 'Lymphedema & Cancer Rehab | Stephenson Physical Therapy',
        metaDescription:
          'Certified lymphedema therapy (CLT), manual lymphatic drainage, and breast-cancer rehabilitation to help survivors recover strength and function.',
      },
      sections: [
        {
          kind: 'conditions',
          title: 'Conditions and care',
          groups: [
            {
              heading: 'Lymphedema care',
              items: [
                { label: 'Manual lymphatic drainage' },
                { label: 'Compression-garment fitting' },
                { label: 'Lymphedema prevention & management' },
              ],
            },
            {
              heading: 'Cancer rehabilitation',
              items: [
                { label: 'Breast-cancer post-surgical rehab' },
                { label: 'Scar-tissue management' },
                { label: 'Range-of-motion restoration' },
                { label: 'Pelvic health after cancer' },
                { label: 'Gynecological surgery recovery' },
              ],
            },
          ],
        },
        {
          kind: 'faq',
          title: 'Common questions',
          items: [
            {
              q: 'What does a Certified Lymphedema Therapist do?',
              a: 'A CLT is specially trained to prevent and manage lymphedema — the swelling that can follow cancer treatment. That care includes manual lymphatic drainage to move fluid, proper compression-garment fitting, and tailored exercise, all built around your stage of recovery.',
            },
            {
              q: 'When should I start rehab after breast cancer surgery?',
              a: 'Often sooner than people expect — early, gentle rehabilitation helps restore shoulder range of motion, supports healthy scar formation, and reduces lymphedema risk. We start where your body is and progress at a pace that respects your healing.',
            },
            {
              q: 'Can physical therapy help side effects of radiation or chemo?',
              a: 'Yes. Beyond lymphedema, treatment can bring tissue tightness, fatigue, and pelvic, bladder, or sexual changes. Physical therapy addresses these directly, helping you regain function and comfort as part of survivorship care.',
            },
          ],
        },
      ],
      relatedSlugs: ['osteoporosis-bone-health', 'pelvic-floor-bladder-health', 'complex-pelvic-pain'],
    },
  },
  {
    slug: SERVICE_SLUGS[4],
    icon: iconSpine,
    iconDark: iconSpineCream,
    title: 'Osteoporosis & Bone Health',
    desc: 'Osteoporosis and bone health with safe, Pilates-based strength and posture.',
    content: {
      headline: 'Build Strength That Lasts.',
      claim:
        'The right exercise, done safely, is one of the best things you can do for your bones.',
      heroImage: {
        src: osHeader,
        avifSrcSet: osHeaderAvif,
        webpSrcSet: osHeaderWebp,
        width: 1536,
        height: 1024,
        alt: 'An older man builds strength with light dumbbells while his physical therapist guides his form.',
      },
      heroImageSide: 'right',
      intro:
        'A diagnosis of osteoporosis or low bone density can make movement feel risky — but the answer is rarely to move less. Through safe, Pilates-based strength, posture, and balance work, I help you load your bones the way they need while protecting the areas most vulnerable to fracture.',
      insetImage: {
        src: osInset,
        avifSrcSet: osInsetAvif,
        webpSrcSet: osInsetWebp,
        width: 1536,
        height: 1024,
        alt: 'A physical therapist supports an older man through a seated strength exercise with hand weights.',
      },
      mainBody:
        'Bone responds to demand: appropriately progressed resistance and weight-bearing exercise support bone density, while posture and balance training cut the fall risk that turns fragile bones into fractures. This matters especially after menopause, and for cancer survivors whose medications affect bone. I program movement that builds strength without the risky positions — like heavily loaded spinal flexion — that a low-bone-density body should avoid.',
      externalLink: {
        url: 'https://www.bonehealthandosteoporosis.org/',
        label: 'Bone Health & Osteoporosis Foundation',
        before: 'The ',
        after: ' is a national authority on osteoporosis prevention and exercise safety.',
      },
      specializedTreatments: [
        {
          label: 'Safe Strength Training',
          desc: 'Progressive loading appropriate for low bone density.',
        },
        {
          label: 'Posture & Alignment',
          desc: 'Countering the postural changes that accompany bone loss.',
        },
        {
          label: 'Balance & Fall Prevention',
          desc: 'Reducing the fall risk that turns fragile bones into fractures.',
        },
        {
          label: 'Pilates-Based Rehab',
          desc: 'Controlled, low-impact movement that builds core and bone-supporting strength.',
        },
      ],
      closer:
        'It is never too early — or too late — to invest in your skeleton. We start wherever you are and build from there.',
      cta: {
        phrase: 'Strong bones are built, not inherited.',
        button: 'Schedule Your Evaluation',
      },
      seo: {
        title: 'Osteoporosis & Bone Health | Stephenson Physical Therapy',
        metaDescription:
          'Safe, Pilates-based strength, posture, and balance training to support bone health and manage osteoporosis and fracture risk.',
      },
      sections: [
        {
          kind: 'conditions',
          title: 'Conditions and care',
          groups: [
            {
              heading: 'Bone health',
              items: [
                { label: 'Osteoporosis' },
                { label: 'Osteopenia' },
                { label: 'Low bone density' },
                { label: 'Fracture-risk reduction' },
              ],
            },
            {
              heading: 'Movement & safety',
              items: [
                { label: 'Postural changes' },
                { label: 'Balance & fall prevention' },
                { label: 'Safe return to strength training' },
              ],
            },
          ],
        },
        {
          kind: 'faq',
          title: 'Common questions',
          items: [
            {
              q: 'What exercises are safe if I have osteoporosis?',
              a: 'Safe, progressive strength training combined with posture and balance work is the foundation — and it’s tailored to your bone density. Just as important is guidance on which movements to approach carefully, so your program supports your bones rather than risking them.',
            },
            {
              q: 'Can physical therapy improve bone density?',
              a: 'Physical therapy supports bone health by loading bones safely and building the strength, posture, and balance that protect them. That approach helps manage osteoporosis and reduce fracture risk as part of a whole-body plan.',
            },
            {
              q: 'Is Pilates safe for osteoporosis?',
              a: 'Pilates-based rehabilitation can be an excellent, low-impact way to build bone-supporting strength — when it’s programmed by a certified clinician who adapts the movements for low bone density and steers around the positions that don’t suit fragile bones.',
            },
          ],
        },
      ],
      relatedSlugs: ['menopause-midlife-health', 'lymphedema-cancer-rehab', 'pelvic-floor-bladder-health'],
    },
  },
  {
    slug: SERVICE_SLUGS[5],
    // TODO: needs a dedicated menopause icon — reusing the sports icon as a
    // placeholder until the image pipeline (docs/image-prompts-side-work) ships one.
    icon: iconMenopause,
    iconDark: iconMenopauseCream,
    title: 'Menopause & Midlife Health',
    desc: 'Menopause and midlife pelvic health — bladder changes, dryness and comfort, and intimacy.',
    content: {
      headline: 'Thrive Through Midlife.',
      claim:
        'Menopause changes your body — the right care keeps you comfortable, capable, and confident.',
      heroImage: {
        src: meHeader,
        avifSrcSet: meHeaderAvif,
        webpSrcSet: meHeaderWebp,
        width: 1536,
        height: 1024,
        alt: 'A woman practices a standing strength and posture exercise with her physical therapist’s guidance.',
      },
      heroImageSide: 'left',
      intro:
        'The hormonal shifts of perimenopause and menopause reach further than most people are warned about — into the bladder, the pelvic floor, tissue comfort, and intimacy. I help you navigate midlife with expert, judgment-free pelvic health care, so this stage feels like something you move through, not something you endure.',
      insetImage: {
        src: meInset,
        avifSrcSet: meInsetAvif,
        webpSrcSet: meInsetWebp,
        width: 1448,
        height: 1086,
        alt: 'A woman does a supported step-up balance exercise to stay strong and steady through midlife.',
      },
      mainBody:
        'Declining estrogen can bring new or worsening bladder urgency and frequency, recurrent urinary tract infections, dryness and discomfort, and changes that make intimacy painful — a cluster clinicians call the genitourinary syndrome of menopause. Pelvic floor physical therapy, paired with education and practical strategies, addresses these conservatively and without embarrassment. Midlife is also the moment to protect your bones, which is why this care pairs naturally with bone-health work.',
      externalLink: {
        url: 'https://www.menopause.org/',
        label: 'The Menopause Society',
        before: '',
        after: ' is a leading clinical authority on menopause care and a useful outside resource.',
      },
      specializedTreatments: [
        {
          label: 'Bladder Changes',
          desc: 'Urgency, frequency, and leakage that emerge or worsen around menopause.',
        },
        {
          label: 'Comfort & Dryness',
          desc: 'Addressing the tissue and pelvic-floor components of midlife discomfort.',
        },
        {
          label: 'Intimacy',
          desc: 'Restoring comfort with intimacy affected by hormonal change.',
        },
        {
          label: 'Pelvic Floor Strength',
          desc: 'Rebuilding the support that hormonal change can erode.',
        },
      ],
      closer:
        'You have spent decades taking care of everyone else. Midlife is when that care comes home to you.',
      cta: {
        phrase: 'This chapter deserves a specialist who has seen it all.',
        button: 'Schedule Your Evaluation',
      },
      seo: {
        title: 'Menopause & Midlife Health | Stephenson Physical Therapy',
        metaDescription:
          'Pelvic-health care for menopause and midlife — bladder changes, dryness and comfort, and intimacy — with a specialist who’s seen it all.',
      },
      sections: [
        {
          kind: 'conditions',
          title: 'Conditions and care',
          groups: [
            {
              heading: 'Genitourinary (GSM)',
              items: [
                { label: 'Vaginal dryness' },
                { label: 'Painful intimacy' },
                { label: 'Urinary urgency & frequency' },
                { label: 'Recurrent UTIs' },
              ],
            },
            {
              heading: 'Whole-body midlife',
              items: [
                { label: 'Pelvic floor weakness' },
                { label: 'Prolapse symptoms' },
                { label: 'Bone health & strength' },
              ],
            },
          ],
        },
        {
          kind: 'faq',
          title: 'Common questions',
          items: [
            {
              q: 'Can pelvic floor therapy help menopause symptoms?',
              a: 'Yes — many of menopause’s pelvic-health symptoms have physical components that respond to conservative care. Pelvic floor physical therapy and education can help with bladder changes, comfort, and intimacy, often as a first-line approach.',
            },
            {
              q: 'Why do I have bladder problems during menopause?',
              a: 'Declining estrogen affects the tissues and muscles that support bladder control, which is why urgency, frequency, and leakage often appear or worsen around menopause. Retraining and supporting the pelvic floor addresses those changes directly.',
            },
            {
              q: 'Is painful intimacy after menopause treatable?',
              a: 'Often, yes. Hormonal change can bring dryness and tissue sensitivity that make intimacy uncomfortable — and the pelvic-floor and tissue components of that discomfort can be treated, gently and privately, at your pace.',
            },
          ],
        },
      ],
      relatedSlugs: ['osteoporosis-bone-health', 'pelvic-floor-bladder-health', 'complex-pelvic-pain'],
    },
  },
];
