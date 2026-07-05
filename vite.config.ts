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

/** Inject the two Google Tag Manager snippets at build time, gated on a valid
 *  VITE_GTM_ID. transformIndexHtml runs once against the shared index.html shell;
 *  vite-react-ssg then reuses that built HTML as the template for every route, so
 *  GTM lands on all pre-rendered pages (loader high in <head>, <noscript> right
 *  after <body>). No ID / malformed ID → nothing is injected, so local dev and the
 *  reusable template both stay GTM-free without extra config. */
function gtmPlugin(containerId: string | undefined): Plugin {
  const id = containerId?.trim()
  // Gate: only inject for a real container. A set-but-malformed value is almost
  // always a typo in .env.local or the Cloudflare dashboard — warn rather than
  // silently ship a broken/empty container.
  const enabled = !!id && /^GTM-[A-Z0-9]+$/.test(id)
  if (id && !enabled) {
    console.warn(`[gtm] VITE_GTM_ID="${id}" is not a valid GTM-XXXXXXX id — GTM not injected.`)
  }
  return {
    name: 'inject-gtm',
    transformIndexHtml() {
      if (!enabled) return
      return [
        {
          tag: 'script',
          injectTo: 'head-prepend',
          children:
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':` +
            `new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],` +
            `j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=` +
            `'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);` +
            `})(window,document,'script','dataLayer','${id}');`,
        },
        {
          tag: 'noscript',
          injectTo: 'body-prepend',
          children:
            `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}"` +
            ` height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        },
      ]
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Default VITE_ prefix: loadEnv reads both .env.local (local testing) AND
  // process.env.VITE_GTM_ID injected by the Cloudflare Pages build.
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [react(), imagetools(), sitemapPlugin(), gtmPlugin(env.VITE_GTM_ID)],
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
