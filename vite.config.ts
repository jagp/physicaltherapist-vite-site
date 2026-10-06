import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import type {} from 'vite-react-ssg' // module augmentation: adds ssgOptions to UserConfig
import { SERVICE_SLUGS } from './src/data/service-slugs.js'

const SITE_URL = 'https://stephensonpt.com'
const STATIC_PATHS = ['/', '/about', '/services', '/faq', '/contact']

const allPaths = () => [...STATIC_PATHS, ...SERVICE_SLUGS.map((s) => `/services/${s}`)]

/** Emit sitemap.xml from the same slug list that drives the SSG routes —
 *  the two can never diverge. */
function sitemapPlugin(): Plugin {
  return {
    name: 'generate-sitemap',
    apply: 'build',
    closeBundle() {
      const urls = allPaths()
        .map((p) => `  <url><loc>${SITE_URL}${p === '/' ? '/' : p}</loc></url>`)
        .join('\n')
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
      writeFileSync(resolve(process.cwd(), 'dist/sitemap.xml'), xml)
    },
  }
}

/** Inject the Google Analytics 4 tag (gtag.js) at build time, gated on a valid
 *  VITE_GA_ID. transformIndexHtml runs once against the shared index.html shell;
 *  vite-react-ssg then reuses that built HTML as the template for every route, so
 *  the tag lands on all pre-rendered pages, high in <head>. Two scripts, in order:
 *    1. the async gtag.js library loader
 *    2. the inline bootstrap — create dataLayer, define gtag(), send the config hit
 *       (calls queue in dataLayer until the library arrives, so order is safe)
 *  gtag.js has no <noscript> fallback (unlike GTM), so nothing goes in <body>.
 *  No ID / malformed ID → nothing is injected, so local dev and the reusable
 *  template both stay analytics-free without extra config. */
function gaPlugin(measurementId: string | undefined): Plugin {
  const id = measurementId?.trim()
  // Gate: only inject for a real GA4 measurement ID (G-XXXXXXXXXX). A set-but-
  // malformed value is almost always a typo in .env.local or the Cloudflare
  // dashboard — warn rather than silently ship a broken tag.
  const enabled = !!id && /^G-[A-Z0-9]+$/.test(id)
  if (id && !enabled) {
    console.warn(`[ga] VITE_GA_ID="${id}" is not a valid G-XXXXXXXXXX id — GA not injected.`)
  }
  return {
    name: 'inject-ga',
    transformIndexHtml() {
      if (!enabled) return
      return [
        {
          // 1. library loader — async so it never blocks first paint
          tag: 'script',
          injectTo: 'head-prepend',
          attrs: { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${id}` },
        },
        {
          // 2. bootstrap + config hit (Google's install snippet, minus whitespace)
          tag: 'script',
          injectTo: 'head-prepend',
          children:
            `window.dataLayer = window.dataLayer || [];` +
            `function gtag(){dataLayer.push(arguments);}` +
            `gtag('js', new Date());` +
            `gtag('config', '${id}');`,
        },
      ]
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Default VITE_ prefix: loadEnv reads both .env.local (local testing) AND
  // process.env.VITE_GA_ID injected by the Cloudflare Pages build.
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [react(), imagetools(), sitemapPlugin(), gaPlugin(env.VITE_GA_ID)],
    ssgOptions: {
      // Flat output (services/<slug>.html): Cloudflare Pages serves these at
      // the extensionless URL with NO redirect, exactly matching our
      // no-trailing-slash canonicals. (Nested index.html dirs made CF 308
      // /foo -> /foo/, so every canonical pointed at a redirect.)
      // Dynamic routes (services/:slug) are skipped by default — enumerate
      // every service page explicitly so each emits static HTML.
      includedRoutes(paths: string[]) {
        return [...paths.filter((p) => !p.includes(':')), ...SERVICE_SLUGS.map((s) => `/services/${s}`)]
      },
    },
  }
})
