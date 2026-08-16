import { getCloudinary } from './_lib/cloudinary.js'
import { requireAdmin } from './_lib/auth.js'

// Vercel's default request body limit applies here (no per-function override
// for plain /api functions). The client resizes photos before sending them
// (see src/lib/resizeImage.js) so uploads stay well under it.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!requireAdmin(req, res)) return

  const { file } = req.body || {}
  if (!file || typeof file !== 'string' || !file.startsWith('data:image/')) {
    return res.status(400).json({ error: 'A base64 image data URL is required' })
  }

  try {
    const result = await getCloudinary().uploader.upload(file, {
      folder: 'westlife-cars',
      resource_type: 'image',
    })
    res.status(200).json({ url: result.secure_url })
  } catch (err) {
    res.status(500).json({ error: err.message || 'Upload failed' })
  }
}
