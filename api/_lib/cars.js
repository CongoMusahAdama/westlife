const STRING_FIELDS = [
  'category',
  'meta',
  'name',
  'shortName',
  'year',
  'edition',
  'sku',
  'origin',
  'transmission',
  'drive',
  'seats',
  'fuel',
  'power',
  'location',
  'priceLabel',
  'summary',
  'image',
  'estimate',
]

function toStringArray(value) {
  if (!Array.isArray(value)) return []
  return value.map((v) => String(v).trim()).filter(Boolean)
}

function toNumber(value, fallback = 0) {
  const n = Number(value)
  return Number.isFinite(n) ? n : fallback
}

export function sanitizeCarInput(body = {}) {
  const out = {}

  for (const field of STRING_FIELDS) {
    out[field] = typeof body[field] === 'string' ? body[field].trim() : ''
  }

  out.gallery = toStringArray(body.gallery)
  out.tags = toStringArray(body.tags)
  out.checklist = toStringArray(body.checklist)

  if (!out.image && out.gallery.length) {
    out.image = out.gallery[0]
  }

  const condition = body.condition || {}
  out.condition = {
    restored: toNumber(condition.restored),
    inspected: toNumber(condition.inspected),
    original: toNumber(condition.original),
  }

  out.services = Array.isArray(body.services)
    ? body.services
        .map((s) => ({
          label: String(s?.label || '').trim(),
          amount: String(s?.amount || 'Included').trim(),
          percent: toNumber(s?.percent),
        }))
        .filter((s) => s.label)
    : []

  return out
}

export function serializeCar(doc) {
  if (!doc) return null
  const { _id, ...rest } = doc
  return { id: _id.toString(), ...rest }
}
