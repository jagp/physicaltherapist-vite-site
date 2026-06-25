import iconPelvicFloor from '../assets/icons/icon-pelvic-floor.png';
import iconPregnancy from '../assets/icons/icon-pregnancy.png';
import iconPelvicSupport from '../assets/icons/icon-pelvic-support.png';
import iconOncology from '../assets/icons/icon-oncology.png';
import iconSpine from '../assets/icons/icon-spine.png';
import iconSports from '../assets/icons/icon-sports.png';

export interface ServiceInfo {
  slug: string;
  icon: string;
  title: string;
  desc: string;
}

export const SERVICES: ServiceInfo[] = [
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
