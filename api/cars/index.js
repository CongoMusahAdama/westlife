import { getCarsCollection } from '../_lib/mongodb.js'
import { requireAdmin } from '../_lib/auth.js'
import { serializeCar, sanitizeCarInput } from '../_lib/cars.js'

export default async function handler(req, res) {
  const cars = await getCarsCollection()

  if (req.method === 'GET') {
    const { status } = req.query

    // Sold/all views expose buyer info and are for the admin dashboard only.
    // The public site (no status param) only ever sees available cars.
    let filter = { status: { $ne: 'sold' } }
    if (status === 'sold' || status === 'all') {
      if (!requireAdmin(req, res)) return
      filter = status === 'sold' ? { status: 'sold' } : {}
    }

    const docs = await cars.find(filter).sort({ createdAt: -1 }).toArray()
    return res.status(200).json(docs.map(serializeCar))
  }

  if (req.method === 'POST') {
    if (!requireAdmin(req, res)) return

    const input = sanitizeCarInput(req.body)
    if (!input.name || !input.category) {
      return res.status(400).json({ error: 'Name and category are required' })
    }

    const now = new Date()
    const doc = { ...input, status: 'available', createdAt: now, updatedAt: now }
    const result = await cars.insertOne(doc)
    return res.status(201).json(serializeCar({ ...doc, _id: result.insertedId }))
  }

  res.setHeader('Allow', 'GET, POST')
  res.status(405).json({ error: 'Method not allowed' })
}
