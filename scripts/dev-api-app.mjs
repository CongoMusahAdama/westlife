// Local stand-in for Vercel's /api runtime. Mounts the same handler files
// that Vercel deploys unchanged — Express's req.query/req.body/res.status().json()
// line up with Vercel's Node.js helpers, so no handler code is dev-only.
//
// Exported as an Express app (rather than calling .listen() here) so it can
// be mounted straight into Vite's dev server as middleware — see the
// devApiPlugin in vite.config.js. That keeps `npm run dev` a single process,
// which sidesteps flakiness we saw from running Vite and this server as two
// separately-supervised processes on Windows.
import express from 'express'
import loginHandler from '../api/auth/login.js'
import logoutHandler from '../api/auth/logout.js'
import meHandler from '../api/auth/me.js'
import carsIndexHandler from '../api/cars/index.js'
import carsIdHandler from '../api/cars/[id].js'
import carsSoldHandler from '../api/cars/[id]/sold.js'
import carsRestoreHandler from '../api/cars/[id]/restore.js'
import uploadHandler from '../api/upload.js'

function withIdParam(handler) {
  return (req, res) => {
    // Express 5 exposes req.query as a getter-only property, so it can't be
    // reassigned directly — redefine it instead to merge in the route param.
    Object.defineProperty(req, 'query', {
      value: { ...req.query, id: req.params.id },
      configurable: true,
    })
    return handler(req, res)
  }
}

export function createDevApiApp() {
  const app = express()
  app.use(express.json({ limit: '10mb' }))

  app.all('/api/auth/login', loginHandler)
  app.all('/api/auth/logout', logoutHandler)
  app.all('/api/auth/me', meHandler)
  app.all('/api/cars', carsIndexHandler)
  app.all('/api/cars/:id/sold', withIdParam(carsSoldHandler))
  app.all('/api/cars/:id/restore', withIdParam(carsRestoreHandler))
  app.all('/api/cars/:id', withIdParam(carsIdHandler))
  app.all('/api/upload', uploadHandler)

  return app
}
