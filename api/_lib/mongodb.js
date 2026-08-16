import { MongoClient } from 'mongodb'

let clientPromise

export function getMongoClient() {
  if (!clientPromise) {
    const uri = process.env.MONGODB_URI
    if (!uri) {
      throw new Error('MONGODB_URI is not set')
    }
    clientPromise = new MongoClient(uri).connect()
  }

  return clientPromise
}

export async function getDb() {
  const client = await getMongoClient()
  return client.db()
}

export async function getCarsCollection() {
  const db = await getDb()
  return db.collection('cars')
}

export async function getAdminsCollection() {
  const db = await getDb()
  return db.collection('admins')
}
