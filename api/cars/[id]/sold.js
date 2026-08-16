import { ObjectId } from 'mongodb'
import { getCarsCollection } from '../../_lib/mongodb.js'
import { requireAdmin } from '../../_lib/auth.js'
import { serializeCar } from '../../_lib/cars.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!requireAdmin(req, res)) return

  const { id } = req.query
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid car id' })
  }

  const { buyerName, soldPrice, soldNotes } = req.body || {}

  const cars = await getCarsCollection()
  const result = await cars.findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: {
        status: 'sold',
        soldAt: new Date(),
        buyerName: String(buyerName || '').trim(),
        soldPrice: String(soldPrice || '').trim(),
        soldNotes: String(soldNotes || '').trim(),
        updatedAt: new Date(),
      },
    },
    { returnDocument: 'after' }
  )

  if (!result) return res.status(404).json({ error: 'Car not found' })
  res.status(200).json(serializeCar(result))
}
