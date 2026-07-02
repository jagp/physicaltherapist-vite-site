import iconPelvicFloor from '../assets/icons/icon-pelvic-floor.png';
import iconPregnancy from '../assets/icons/icon-pregnancy.png';
import iconPelvicSupport from '../assets/icons/icon-pelvic-support.png';
import iconOncology from '../assets/icons/icon-oncology.png';
import iconSpine from '../assets/icons/icon-spine.png';
import iconSports from '../assets/icons/icon-sports.png';
import iconPelvicFloorCream from '../assets/icons/icon-pelvic-floor-cream.png';
import iconPregnancyCream from '../assets/icons/icon-pregnancy-cream.png';
import iconPelvicSupportCream from '../assets/icons/icon-pelvic-support-cream.png';
import iconOncologyCream from '../assets/icons/icon-oncology-cream.png';
import iconSpineCream from '../assets/icons/icon-spine-cream.png';
import iconSportsCream from '../assets/icons/icon-sports-cream.png';

export interface ServiceInfo {
  slug: string;
  icon: string;
  /** Cream-on-transparent variant for use on dark (--bg) surfaces. */
  iconDark: string;
  title: string;
  desc: string;
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: 'pelvic-floor-bladder-health',
    icon: iconPelvicFloor,
    iconDark: iconPelvicFloorCream,
    title: 'Pelvic Floor & Bladder Health',
    desc: 'Urinary leakage, urgency, frequency, and pelvic organ prolapse — for all genders.',
  },
  {
    slug: 'pregnancy-postpartum',
    icon: iconPregnancy,
    iconDark: iconPregnancyCream,
    title: 'Pregnancy & Postpartum',
    desc: 'Lumbopelvic pain, diastasis recti, and recovery from vaginal or cesarean birth.',
  },
  {
    slug: 'complex-pelvic-pain',
    icon: iconPelvicSupport,
    iconDark: iconPelvicSupportCream,
    title: 'Complex Pelvic Pain',
    desc: 'Chronic pelvic pain, pudendal neuralgia, and painful intimacy, treated with compassion.',
  },
  {
    slug: 'oncology-breast-care',
    icon: iconOncology,
    iconDark: iconOncologyCream,
    title: 'Oncology & Breast Care',
    desc: 'Breast-cancer rehabilitation, lymphedema management (CLT), and scar-tissue therapy.',
  },
  {
    slug: 'orthopedics-bone-health',
    icon: iconSpine,
    iconDark: iconSpineCream,
    title: 'Orthopedics & Bone Health',
    desc: 'Osteoporosis and musculoskeletal care through pelvic-health and Pilates-based rehab.',
  },
  {
    slug: 'sports-medicine-active-recovery',
    icon: iconSports,
    iconDark: iconSportsCream,
    title: 'Sports Medicine & Active Recovery',
    desc: 'Return-to-sport rehab, athletic pelvic floor care, and movement optimization.',
  },
];
