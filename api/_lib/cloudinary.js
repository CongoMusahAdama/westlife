import { v2 as cloudinary } from 'cloudinary'

// Configured lazily (on first use, not at import time) so this works
// regardless of when the process's env vars become available relative to
// module load order — see api/_lib/mongodb.js for the same reasoning.
export function getCloudinary() {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  })
  return cloudinary
}
