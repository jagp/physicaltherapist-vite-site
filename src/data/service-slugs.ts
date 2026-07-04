/**
 * Service slugs only — asset-free so vite.config.ts (bundled by esbuild,
 * which can't load .png imports) can share the same source of truth as
 * services.ts.
 */
export const SERVICE_SLUGS = [
  'pelvic-floor-bladder-health',
  'pregnancy-postpartum',
  'complex-pelvic-pain',
  'oncology-breast-care',
  'orthopedics-bone-health',
  'sports-medicine-active-recovery',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];
