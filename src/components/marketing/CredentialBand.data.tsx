import type { CredentialItem } from "./CredentialBand";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: "24",
  height: "24",
};

// Shield with inner checkmark — Board-Certified credential
const ShieldCheckIcon = (
  <svg {...iconProps}>
    <path d="M12 2l9 4.5v7.5c0 6-6 7-9 9-3-2-9-3-9-9V6.5L12 2z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

// Heart with medical cross — Hospital/clinical role
const HeartCrossIcon = (
  <svg {...iconProps}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    <line x1="12" y1="8" x2="12" y2="16" strokeLinecap="round" />
    <line x1="8" y1="12" x2="16" y2="12" strokeLinecap="round" />
  </svg>
);

// Graduation cap — Faculty/teaching role
const GraduationCapIcon = (
  <svg {...iconProps}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

// Open book — Author credential
const OpenBookIcon = (
  <svg {...iconProps}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v13H6.5A2.5 2.5 0 0 1 4 12.5v-7A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="9" y1="5" x2="9" y2="14" strokeWidth="1" opacity="0.4" />
    <line x1="13" y1="5" x2="13" y2="14" strokeWidth="1" opacity="0.4" />
  </svg>
);

// Five-pointed star — Award
const StarIcon = (
  <svg {...iconProps}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Trophy cup — Prestige award
const TrophyIcon = (
  <svg {...iconProps}>
    <path d="M6 9H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M8 9c0-1 1-3 4-3s4 2 4 3" />
    <circle cx="12" cy="5" r="2" />
  </svg>
);

export const stephensonTrustItems: CredentialItem[] = [
  {
    year: "since 2006",
    icon: ShieldCheckIcon,
    label: "Board-Certified Specialist",
    detail: "Pelvic & Women's Health PT (PWCS)",
    href: "https://www.aptapelvichealth.org/pwcs",
  },
  {
    year: "2006–2017",
    icon: HeartCrossIcon,
    label: "Women's Health PT Coordinator",
    detail: "Brigham & Women's Hospital",
    href: "https://www.brighamandwomens.org/",
  },
  {
    year: "2017–present",
    icon: GraduationCapIcon,
    label: "Faculty · Adjunct Clinical Assistant Professor",
    detail: "MGH Institute of Health Professions",
    href: "https://www.mghihp.edu/list/pt-faculty-directory",
  },
  {
    year: "2025",
    icon: OpenBookIcon,
    label: "Lead Author",
    detail: "Routledge clinical textbook, 2025",
    href: "https://www.routledge.com/The-Physical-Therapists-Guide-to-Womens-Pelvic-Perinatal-and-Reproductive-Health/Stephenson-Cathcart/p/book/9781630917869",
  },
  {
    icon: StarIcon,
    label: "Lucy Blair Service Award",
    detail: "American Physical Therapy Association",
    href: "https://www.apta.org/apta-and-you/honors-awards/lucy-blair-service-award",
  },
  {
    icon: TrophyIcon,
    label: "Elizabeth Noble Award",
    detail: "Academy of Pelvic Health's highest honor",
    href: "https://www.aptapelvichealth.org/awards/",
  },
];
