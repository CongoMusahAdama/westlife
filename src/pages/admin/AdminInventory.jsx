import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchCars } from '../../lib/carsApi'
import { deleteCar, markSold } from '../../lib/adminApi'
import './Admin.css'

function MarkSoldModal({ car, onClose, onConfirm }) {
  const [buyerName, setBuyerName] = useState('')
  const [soldPrice, setSoldPrice] = useState('')
  const [soldNotes, setSoldNotes] = useState('')
  const [saving, setSaving] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      await onConfirm({ buyerName, soldPrice, soldNotes })
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="admin-modal__backdrop" onClick={onClose}>
      <form className="admin-modal" onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <h2>Mark “{car.name}” as sold</h2>
        <p className="admin-form__hint">It will come off the public site and move to Sold Cars for your records.</p>

        <label>
          Buyer name
          <input value={buyerName} onChange={(e) => setBuyerName(e.target.value)} placeholder="Optional" />
        </label>
        <label>
          Sale price
          <input value={soldPrice} onChange={(e) => setSoldPrice(e.target.value)} placeholder="e.g. GHS 120,000" />
        </label>
        <label>
          Notes
          <textarea rows={3} value={soldNotes} onChange={(e) => setSoldNotes(e.target.value)} placeholder="Optional" />
        </label>

        <div className="admin-form__submit">
          <button type="button" className="btn admin-btn--outline" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn--accent" disabled={saving}>
            {saving ? 'Saving…' : 'Confirm Sold'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default function AdminInventory() {
  const [cars, setCars] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')
  const [soldTarget, setSoldTarget] = useState(null)

  const load = () => {
    setStatus('loading')
    fetchCars()
      .then((data) => {
        setCars(data)
        setStatus('ready')
      })
      .catch((err) => {
        setError(err.message)
        setStatus('error')
      })
  }

  useEffect(load, [])

  const onDelete = async (car) => {
    if (!window.confirm(`Delete ${car.name}? This cannot be undone.`)) return
    try {
      await deleteCar(car.id)
      setCars((prev) => prev.filter((c) => c.id !== car.id))
    } catch (err) {
      window.alert(err.message)
    }
  }

  const onConfirmSold = async (details) => {
    try {
      await markSold(soldTarget.id, details)
      setCars((prev) => prev.filter((c) => c.id !== soldTarget.id))
      setSoldTarget(null)
    } catch (err) {
      window.alert(err.message)
    }
  }

  return (
    <div className="admin__main">
      <div className="admin__header">
        <div>
          <h1>Inventory</h1>
          <p>{status === 'ready' ? `${cars.length} car${cars.length === 1 ? '' : 's'} listed` : ' '}</p>
        </div>
        <Link to="/admin/cars/new" className="btn btn--accent">
          + Add Car
        </Link>
      </div>

      {status === 'loading' && <p className="admin__state">Loading inventory…</p>}
      {status === 'error' && <p className="admin__state admin__state--error">{error}</p>}

      {status === 'ready' && cars.length === 0 && (
        <p className="admin__state">No cars yet. Add your first one to get started.</p>
      )}

      {status === 'ready' && cars.length > 0 && (
        <div className="admin-table__wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Category</th>
                <th>Year</th>
                <th>SKU</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car.id}>
                  <td>
                    <div className="admin-table__thumb">{car.image && <img src={car.image} alt="" />}</div>
                  </td>
                  <td>{car.name}</td>
                  <td className="admin-table__muted">{car.category}</td>
                  <td className="admin-table__muted">{car.year}</td>
                  <td className="admin-table__muted">{car.sku}</td>
                  <td className="admin-table__actions">
                    <Link to={`/admin/cars/${car.id}/edit`} className="linkish">
                      Edit
                    </Link>
                    <button type="button" className="linkish" onClick={() => setSoldTarget(car)}>
                      Mark Sold
                    </button>
                    <button type="button" className="linkish admin-table__delete" onClick={() => onDelete(car)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {soldTarget && (
        <MarkSoldModal car={soldTarget} onClose={() => setSoldTarget(null)} onConfirm={onConfirmSold} />
      )}
    </div>
  )
}
