import iconPelvicFloor from '../assets/icons/icon-pelvic-floor.png';
import iconPregnancy from '../assets/icons/icon-pregnancy.png';
import iconPelvicSupport from '../assets/icons/icon-pelvic-support.png';
import iconOncology from '../assets/icons/icon-oncology.png';
import iconSpine from '../assets/icons/icon-spine.png';
import iconSports from '../assets/icons/icon-sports.png';
import pregnancyLandscape from '../assets/service-page-images/pregnancy-landscape.png';
import pregnancyInset from '../assets/service-page-images/pregnancy-inset.png';




export interface ServiceImage {
  src: string;
  /** Descriptive alt text; theme-based, fallback "picture of ▲". */
  alt: string;
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
  title: string;
  desc: string;
  /** When present, the slug renders the full template; otherwise the "coming soon" fallback. */
  content?: ServiceContent;
}

export const services: ServiceInfo[] = [
  {
    slug: 'pelvic-floor-bladder-health',
    icon: iconPelvicFloor,
    title: 'Pelvic Floor & Bladder Health',
    desc: 'Urinary leakage, urgency, frequency, and pelvic organ prolapse — for all genders.',
  },
  {
    slug: 'pregnancy-postpartum',
    icon: iconPregnancy,
    title: 'Pregnancy & Postpartum',
    desc: 'Lumbopelvic pain, diastasis recti, and recovery from vaginal or cesarean birth.',
    content: {
      headline: 'I Don’t Just Treat You.',
      claim: 'I bring long-lasting vitality to your whole family.',
      heroImage: {
        src: pregnancyLandscape,
        alt: 'A physical therapist holds a pregnant patient’s hand during a supportive consultation, her partner seated nearby.',
      },
      heroImageSide: 'left',
      intro:
        'Pregnancy and the months after birth ask a lot of your body — and you deserve a provider who’s spent decades learning how to support it. As a Board-Certified Women’s Health Clinical Specialist, I work one-on-one with you through every stage, from the aches of a changing pregnancy to a full return to strength postpartum.',
      insetImage: {
        src: pregnancyInset,
        alt: 'A physical therapist talking with a pregnant patient during a consultation.',
      },
      mainBody:
        'Pregnancy changes how your body moves, holds weight, and recovers — often faster than your prenatal care team has time to fully address. Limited movement late in pregnancy, shifting nutrition needs, and a drop in activity level can all compound into pain or dysfunction that doesn’t resolve on its own. Working alongside your obstetric provider, I help you stay capable through pregnancy and rebuild safely afterward, with care tailored to exactly where you are.',
      externalLink: {
        url: '#',
        label: 'Inova Health’s overview',
        before:
          'For a broader look at what pelvic floor physical therapy addresses during and after pregnancy, ',
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
    slug: 'complex-pelvic-pain',
    icon: iconPelvicSupport,
    title: 'Complex Pelvic Pain',
    desc: 'Chronic pelvic pain, pudendal neuralgia, and painful intimacy, treated with compassion.',
  },
  {
    slug: 'oncology-breast-care',
    icon: iconOncology,
    title: 'Oncology & Breast Care',
    desc: 'Breast-cancer rehabilitation, lymphedema management (CLT), and scar-tissue therapy.',
  },
  {
    slug: 'orthopedics-bone-health',
    icon: iconSpine,
    title: 'Orthopedics & Bone Health',
    desc: 'Osteoporosis and musculoskeletal care through pelvic-health and Pilates-based rehab.',
  },
  {
    slug: 'sports-medicine-active-recovery',
    icon: iconSports,
    title: 'Sports Medicine & Active Recovery',
    desc: 'Return-to-sport rehab, athletic pelvic floor care, and movement optimization.',
  },
];
