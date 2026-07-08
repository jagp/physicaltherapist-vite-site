/**
 * Service slugs only — asset-free so vite.config.ts (bundled by esbuild,
 * which can't load .png imports) can share the same source of truth as
 * services.ts.
 */
export const SERVICE_SLUGS = [
  'pelvic-floor-bladder-health',
  'pregnancy-postpartum',
  'complex-pelvic-pain',
  'lymphedema-cancer-rehab',
  'osteoporosis-bone-health',
  'menopause-midlife-health',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];
