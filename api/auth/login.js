import bcrypt from 'bcryptjs'
import { getAdminsCollection } from '../_lib/mongodb.js'
import { signAdminToken, setAuthCookie } from '../_lib/auth.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, password } = req.body || {}
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  const admins = await getAdminsCollection()
  const admin = await admins.findOne({ email: String(email).toLowerCase().trim() })
  if (!admin) {
    return res.status(401).json({ error: 'Invalid email or password' })
  }

  const valid = await bcrypt.compare(password, admin.passwordHash)
  if (!valid) {
    return res.status(401).json({ error: 'Invalid email or password' })
  }

  const token = signAdminToken(admin)
  setAuthCookie(res, token)
  res.status(200).json({ email: admin.email })
}
