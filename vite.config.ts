import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imagetools(), sitemapPlugin()],
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
})
