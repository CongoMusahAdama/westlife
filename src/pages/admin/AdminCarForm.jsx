import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchCarById } from '../../lib/carsApi'
import { createCar, updateCar, uploadImage } from '../../lib/adminApi'
import { resizeImageFile } from '../../lib/resizeImage'
import { CAR_FILTERS, DEFAULT_CHECKLIST, DEFAULT_SERVICES } from '../../data'
import './Admin.css'

const CATEGORIES = CAR_FILTERS.filter((f) => f.id !== 'all')

const BLANK_CAR = {
  name: '',
  shortName: '',
  category: CATEGORIES[0]?.id || 'suv',
  year: '',
  edition: '',
  sku: '',
  meta: '',
  origin: '',
  transmission: 'Automatic',
  drive: '',
  seats: '5 Seats',
  fuel: 'Petrol',
  power: '',
  location: 'Takoradi',
  priceLabel: 'Enquire for price',
  estimate: 'Enquire',
  summary: '',
  gallery: [],
  tags: [],
  checklist: DEFAULT_CHECKLIST,
  condition: { restored: 15, inspected: 55, original: 30 },
  services: DEFAULT_SERVICES,
}

function toCommaList(arr) {
  return (arr || []).join(', ')
}

function fromCommaList(str) {
  return str
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

export default function AdminCarForm() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  const navigate = useNavigate()

  const [car, setCar] = useState(BLANK_CAR)
  const [tagsText, setTagsText] = useState('')
  const [checklistText, setChecklistText] = useState(toCommaList(DEFAULT_CHECKLIST))
  const [loadStatus, setLoadStatus] = useState(isEdit ? 'loading' : 'ready')
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!isEdit) return
    fetchCarById(id)
      .then((data) => {
        if (!data) {
          setLoadStatus('missing')
          return
        }
        setCar(data)
        setTagsText(toCommaList(data.tags))
        setChecklistText(toCommaList(data.checklist))
        setLoadStatus('ready')
      })
      .catch((err) => {
        setError(err.message)
        setLoadStatus('error')
      })
  }, [id, isEdit])

  const updateField = (field, value) => setCar((prev) => ({ ...prev, [field]: value }))
  const updateCondition = (field, value) =>
    setCar((prev) => ({ ...prev, condition: { ...prev.condition, [field]: value } }))

  const updateService = (index, field, value) =>
    setCar((prev) => ({
      ...prev,
      services: prev.services.map((s, i) => (i === index ? { ...s, [field]: value } : s)),
    }))

  const addService = () =>
    setCar((prev) => ({ ...prev, services: [...prev.services, { label: '', amount: 'Included', percent: 0 }] }))

  const removeService = (index) =>
    setCar((prev) => ({ ...prev, services: prev.services.filter((_, i) => i !== index) }))

  const onFilesSelected = async (e) => {
    const files = Array.from(e.target.files || [])
    e.target.value = ''
    if (!files.length) return

    setUploading(true)
    setError('')
    try {
      for (const file of files) {
        const dataUrl = await resizeImageFile(file)
        const { url } = await uploadImage(dataUrl)
        setCar((prev) => ({ ...prev, gallery: [...prev.gallery, url] }))
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
    }
  }

  const removePhoto = (index) =>
    setCar((prev) => ({ ...prev, gallery: prev.gallery.filter((_, i) => i !== index) }))

  const makeCover = (index) =>
    setCar((prev) => {
      const gallery = [...prev.gallery]
      const [photo] = gallery.splice(index, 1)
      gallery.unshift(photo)
      return { ...prev, gallery }
    })

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!car.name.trim() || !car.category) {
      setError('Name and category are required.')
      return
    }

    const payload = {
      ...car,
      // always re-derive from the current gallery order (server falls back to gallery[0])
      // so reordering or removing the cover photo actually changes the listing's cover image
      image: '',
      tags: fromCommaList(tagsText),
      checklist: fromCommaList(checklistText),
    }

    setSaving(true)
    try {
      if (isEdit) {
        await updateCar(id, payload)
      } else {
        await createCar(payload)
      }
      navigate('/admin/inventory', { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  if (loadStatus === 'loading') return <div className="admin-loading">Loading…</div>
  if (loadStatus === 'missing') return <div className="admin-loading">Car not found. <Link to="/admin/inventory">Back to inventory</Link></div>
  if (loadStatus === 'error') return <div className="admin-loading">{error} <Link to="/admin/inventory">Back to inventory</Link></div>

  return (
    <main className="admin__main admin__main--narrow">
      <Link to="/admin/inventory" className="admin__link admin-form__back">
        ← Back to inventory
      </Link>
      <h1>{isEdit ? `Edit ${car.name || 'car'}` : 'Add a car'}</h1>

        <form className="admin-form" onSubmit={onSubmit}>
          {error && <p className="admin-auth__error">{error}</p>}

          <section className="admin-form__section">
            <h2>Basic info</h2>
            <div className="admin-form__grid">
              <label>
                Name
                <input value={car.name} onChange={(e) => updateField('name', e.target.value)} required />
              </label>
              <label>
                Short name
                <input value={car.shortName} onChange={(e) => updateField('shortName', e.target.value)} />
              </label>
              <label>
                Category
                <select value={car.category} onChange={(e) => updateField('category', e.target.value)} required>
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Year
                <input value={car.year} onChange={(e) => updateField('year', e.target.value)} placeholder="2023" />
              </label>
              <label>
                Edition
                <input
                  value={car.edition}
                  onChange={(e) => updateField('edition', e.target.value)}
                  placeholder="Black Double Cab"
                />
              </label>
              <label>
                SKU
                <input value={car.sku} onChange={(e) => updateField('sku', e.target.value)} placeholder="#WM-XXX-000" />
              </label>
              <label>
                Card meta line
                <input
                  value={car.meta}
                  onChange={(e) => updateField('meta', e.target.value)}
                  placeholder="Pickup · GWM"
                />
              </label>
              <label>
                Location
                <input value={car.location} onChange={(e) => updateField('location', e.target.value)} />
              </label>
            </div>
          </section>

          <section className="admin-form__section">
            <h2>Specs</h2>
            <div className="admin-form__grid">
              <label>
                Origin
                <input value={car.origin} onChange={(e) => updateField('origin', e.target.value)} placeholder="Japan" />
              </label>
              <label>
                Transmission
                <input value={car.transmission} onChange={(e) => updateField('transmission', e.target.value)} />
              </label>
              <label>
                Drive
                <input value={car.drive} onChange={(e) => updateField('drive', e.target.value)} placeholder="4x4 / FWD / AWD" />
              </label>
              <label>
                Seats
                <input value={car.seats} onChange={(e) => updateField('seats', e.target.value)} placeholder="5 Seats" />
              </label>
              <label>
                Fuel
                <input value={car.fuel} onChange={(e) => updateField('fuel', e.target.value)} placeholder="Petrol" />
              </label>
              <label>
                Highlight
                <input value={car.power} onChange={(e) => updateField('power', e.target.value)} placeholder="Family SUV" />
              </label>
            </div>
          </section>

          <section className="admin-form__section">
            <h2>Listing copy</h2>
            <label>
              Summary
              <textarea rows={3} value={car.summary} onChange={(e) => updateField('summary', e.target.value)} />
            </label>
            <div className="admin-form__grid">
              <label>
                Price label
                <input value={car.priceLabel} onChange={(e) => updateField('priceLabel', e.target.value)} />
              </label>
              <label>
                Estimate label
                <input value={car.estimate} onChange={(e) => updateField('estimate', e.target.value)} />
              </label>
            </div>
            <label>
              Tags (comma separated)
              <input value={tagsText} onChange={(e) => setTagsText(e.target.value)} placeholder="4x4, China Import, Petrol" />
            </label>
            <label>
              Readiness checklist (comma separated)
              <input value={checklistText} onChange={(e) => setChecklistText(e.target.value)} />
            </label>
          </section>

          <section className="admin-form__section">
            <h2>Photos</h2>
            <p className="admin-form__hint">The first photo is used as the cover image on the site.</p>

            <div className="admin-gallery">
              {car.gallery.map((url, index) => (
                <div className="admin-gallery__item" key={url}>
                  <img src={url} alt="" />
                  {index === 0 && <span className="admin-gallery__badge">Cover</span>}
                  <div className="admin-gallery__actions">
                    {index !== 0 && (
                      <button type="button" onClick={() => makeCover(index)}>
                        Make cover
                      </button>
                    )}
                    <button type="button" onClick={() => removePhoto(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <label className="admin-gallery__upload">
                <input type="file" accept="image/*" multiple onChange={onFilesSelected} disabled={uploading} />
                <span>{uploading ? 'Uploading…' : '+ Add photos'}</span>
              </label>
            </div>
          </section>

          <section className="admin-form__section">
            <h2>Condition</h2>
            <div className="admin-form__grid">
              <label>
                Restored %
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={car.condition.restored}
                  onChange={(e) => updateCondition('restored', Number(e.target.value))}
                />
              </label>
              <label>
                Inspected %
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={car.condition.inspected}
                  onChange={(e) => updateCondition('inspected', Number(e.target.value))}
                />
              </label>
              <label>
                Original %
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={car.condition.original}
                  onChange={(e) => updateCondition('original', Number(e.target.value))}
                />
              </label>
            </div>
          </section>

          <section className="admin-form__section">
            <h2>Services included</h2>
            {car.services.map((service, index) => (
              <div className="admin-service-row" key={index}>
                <input
                  placeholder="Service label"
                  value={service.label}
                  onChange={(e) => updateService(index, 'label', e.target.value)}
                />
                <input
                  placeholder="Included"
                  value={service.amount}
                  onChange={(e) => updateService(index, 'amount', e.target.value)}
                />
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={service.percent}
                  onChange={(e) => updateService(index, 'percent', Number(e.target.value))}
                />
                <button type="button" className="linkish admin-table__delete" onClick={() => removeService(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" className="linkish" onClick={addService}>
              + Add service
            </button>
          </section>

          <div className="admin-form__submit">
            <Link to="/admin/inventory" className="btn admin-btn--outline">
              Cancel
            </Link>
            <button type="submit" className="btn btn--accent" disabled={saving || uploading}>
              {saving ? 'Saving…' : isEdit ? 'Update Car' : 'Save Car'}
            </button>
          </div>
        </form>
    </main>
  )
}
