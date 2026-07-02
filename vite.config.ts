import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type {} from 'vite-react-ssg' // module augmentation: adds ssgOptions to UserConfig
import { SERVICE_SLUGS } from './src/data/service-slugs.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssgOptions: {
    // Dynamic routes (services/:slug) are skipped by default — enumerate
    // every service page explicitly so each emits static HTML.
    includedRoutes(paths: string[]) {
      return [...paths.filter((p) => !p.includes(':')), ...SERVICE_SLUGS.map((s) => `/services/${s}`)]
    },
  },
})
