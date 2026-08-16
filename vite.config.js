import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createDevApiApp } from './scripts/dev-api-app.mjs'

// Mounts the local /api stand-in directly into Vite's dev server so
// `npm run dev` stays a single process — see scripts/dev-api-app.mjs.
function devApiPlugin() {
  return {
    name: 'dev-api',
    configureServer(server) {
      server.middlewares.use(createDevApiApp())
    },
  }
}

export default defineConfig(({ mode }) => {
  // Load .env into process.env so the /api handlers (which read
  // process.env.MONGODB_URI etc. directly, matching how Vercel injects
  // them in production) see the same values during `vite dev`.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [react(), devApiPlugin()],
  }
})
