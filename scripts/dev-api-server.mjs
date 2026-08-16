// Standalone launcher for the dev API app — handy for hitting /api directly
// with curl while debugging. `npm run dev` does not use this file; it mounts
// createDevApiApp() straight into Vite instead (see vite.config.js).
import { createDevApiApp } from './dev-api-app.mjs'

const PORT = process.env.API_PORT || 3001

createDevApiApp().listen(PORT, () => {
  console.log(`API dev server listening on http://localhost:${PORT}`)
})
