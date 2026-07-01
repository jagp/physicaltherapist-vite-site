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
  alt: string;
}

export interface ExternalLink {
  url: string;
  label: string;
  before: string;
  after?: string;
}

export interface SpecializedTreatment {
  label: string;
  desc: string;
}

export interface ServiceContent {
  headline: string;
  claim: string;
  heroImage: ServiceImage;
  heroImageSide?: 'left' | 'right';
  intro: string;
  insetImage?: ServiceImage;
  mainBody: string;
  externalLink?: ExternalLink;
  specializedTreatments?: SpecializedTreatment[];
  closer: string;
  cta: { phrase: string; button: string };
}

export interface ServiceInfo {
  slug: string;
  icon: string;
  title: string;
  desc: string;
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
