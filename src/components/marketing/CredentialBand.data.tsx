import type { CredentialItem } from "./CredentialBand";

// Verified 7/2/26. Sources: aptapelvichealth.org/pwcs + docs/awards-and-more.md
// (PWCS is the current ABPTS designation; "2025" was the WCS→PWCS title change,
// NOT an award year, so it is deliberately omitted here), apta.org Lucy Blair
// award page, and docs (awards.md) for the Elizabeth Noble Award.
export const stephensonTrustItems: CredentialItem[] = [
  {
    category: "Board Certification",
    label: "Board-Certified PWCS",
    detail: "Pelvic & Women's Health Clinical Specialist · ABPTS",
  },
  {
    category: "National Honor",
    label: "Lucy Blair Service Award",
    detail: "American Physical Therapy Association, 2013",
  },
  {
    category: "Field Honor",
    label: "Elizabeth Noble Award",
    detail: "Academy of Pelvic Health, APTA",
  },
];
