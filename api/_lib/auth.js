import jwt from 'jsonwebtoken'

const COOKIE_NAME = 'wm_admin_token'
const SEVEN_DAYS = 60 * 60 * 24 * 7

function getSecret() {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error('JWT_SECRET is not set')
  return secret
}

export function signAdminToken(admin) {
  return jwt.sign({ sub: admin._id.toString(), email: admin.email }, getSecret(), {
    expiresIn: SEVEN_DAYS,
  })
}

export function verifyAdminToken(token) {
  try {
    return jwt.verify(token, getSecret())
  } catch {
    return null
  }
}

export function setAuthCookie(res, token) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  res.setHeader(
    'Set-Cookie',
    `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SEVEN_DAYS}${secure}`
  )
}

export function clearAuthCookie(res) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  res.setHeader('Set-Cookie', `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure}`)
}

function parseCookies(req) {
  const header = req.headers.cookie
  if (!header) return {}
  return Object.fromEntries(
    header.split(';').map((pair) => {
      const [key, ...rest] = pair.trim().split('=')
      return [key, decodeURIComponent(rest.join('='))]
    })
  )
}

export function getAdminFromRequest(req) {
  const cookies = parseCookies(req)
  const token = cookies[COOKIE_NAME]
  if (!token) return null
  return verifyAdminToken(token)
}

export function requireAdmin(req, res) {
  const admin = getAdminFromRequest(req)
  if (!admin) {
    res.status(401).json({ error: 'Not authenticated' })
    return null
  }
  return admin
}
