import { ObjectId } from 'mongodb'
import { getCarsCollection } from '../_lib/mongodb.js'
import { requireAdmin } from '../_lib/auth.js'
import { serializeCar, sanitizeCarInput } from '../_lib/cars.js'

export default async function handler(req, res) {
  const { id } = req.query

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid car id' })
  }

  const _id = new ObjectId(id)
  const cars = await getCarsCollection()

  if (req.method === 'GET') {
    const doc = await cars.findOne({ _id })
    if (!doc) return res.status(404).json({ error: 'Car not found' })
    return res.status(200).json(serializeCar(doc))
  }

  if (req.method === 'PUT') {
    if (!requireAdmin(req, res)) return

    const input = sanitizeCarInput(req.body)
    if (!input.name || !input.category) {
      return res.status(400).json({ error: 'Name and category are required' })
    }

    const update = { ...input, updatedAt: new Date() }
    const result = await cars.findOneAndUpdate({ _id }, { $set: update }, { returnDocument: 'after' })
    if (!result) return res.status(404).json({ error: 'Car not found' })
    return res.status(200).json(serializeCar(result))
  }

  if (req.method === 'DELETE') {
    if (!requireAdmin(req, res)) return

    const result = await cars.deleteOne({ _id })
    if (!result.deletedCount) return res.status(404).json({ error: 'Car not found' })
    return res.status(200).json({ ok: true })
  }

  res.setHeader('Allow', 'GET, PUT, DELETE')
  res.status(405).json({ error: 'Method not allowed' })
}
