import { useEffect, useState } from 'react'
import { listSoldCars, deleteCar, restoreCar } from '../../lib/adminApi'
import './Admin.css'

function formatDate(dateStr) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function AdminSoldCars() {
  const [cars, setCars] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  const load = () => {
    setStatus('loading')
    listSoldCars()
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

  const onRestore = async (car) => {
    if (!window.confirm(`Move ${car.name} back to the live inventory?`)) return
    try {
      await restoreCar(car.id)
      setCars((prev) => prev.filter((c) => c.id !== car.id))
    } catch (err) {
      window.alert(err.message)
    }
  }

  const onDelete = async (car) => {
    if (!window.confirm(`Permanently delete this sold record for ${car.name}?`)) return
    try {
      await deleteCar(car.id)
      setCars((prev) => prev.filter((c) => c.id !== car.id))
    } catch (err) {
      window.alert(err.message)
    }
  }

  return (
    <div className="admin__main">
      <div className="admin__header">
        <div>
          <h1>Sold Cars</h1>
          <p>{status === 'ready' ? `${cars.length} sold record${cars.length === 1 ? '' : 's'}` : ' '}</p>
        </div>
      </div>

      {status === 'loading' && <p className="admin__state">Loading sold records…</p>}
      {status === 'error' && <p className="admin__state admin__state--error">{error}</p>}

      {status === 'ready' && cars.length === 0 && (
        <p className="admin__state">No sold cars yet — mark one sold from Inventory to see it here.</p>
      )}

      {status === 'ready' && cars.length > 0 && (
        <div className="admin-table__wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Sold on</th>
                <th>Buyer</th>
                <th>Price</th>
                <th>Notes</th>
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
                  <td className="admin-table__muted">{formatDate(car.soldAt)}</td>
                  <td className="admin-table__muted">{car.buyerName || '—'}</td>
                  <td className="admin-table__muted">{car.soldPrice || '—'}</td>
                  <td className="admin-table__muted admin-table__notes">{car.soldNotes || '—'}</td>
                  <td className="admin-table__actions">
                    <button type="button" className="linkish" onClick={() => onRestore(car)}>
                      Restore
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
    </div>
  )
}
