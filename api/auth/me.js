import { getAdminFromRequest } from '../_lib/auth.js'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const admin = getAdminFromRequest(req)
  if (!admin) {
    return res.status(401).json({ error: 'Not authenticated' })
  }

  res.status(200).json({ email: admin.email })
}
