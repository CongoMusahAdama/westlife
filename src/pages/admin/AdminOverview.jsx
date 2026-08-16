import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { fetchCars } from '../../lib/carsApi'
import { listSoldCars } from '../../lib/adminApi'
import './Admin.css'

const BOSS_NAME = 'Mr Emma'

function isThisMonth(dateStr) {
  if (!dateStr) return false
  const d = new Date(dateStr)
  const now = new Date()
  return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth()
}

export default function AdminOverview() {
  const location = useLocation()
  const navigate = useNavigate()
  const [status, setStatus] = useState('loading')
  const [stats, setStats] = useState({ available: 0, sold: 0, soldThisMonth: 0 })
  const [recent, setRecent] = useState([])
  const [showWelcome, setShowWelcome] = useState(Boolean(location.state?.justLoggedIn))

  useEffect(() => {
    Promise.all([fetchCars(), listSoldCars()])
      .then(([available, sold]) => {
        setStats({
          available: available.length,
          sold: sold.length,
          soldThisMonth: sold.filter((c) => isThisMonth(c.soldAt)).length,
        })
        setRecent(available.slice(0, 5))
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }, [])

  useEffect(() => {
    if (!showWelcome) return
    // Clear the nav state so the toast doesn't reappear on refresh/back-nav.
    navigate(location.pathname, { replace: true })
    const timer = setTimeout(() => setShowWelcome(false), 5000)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="admin__main">
      {showWelcome && (
        <div className="admin-welcome">
          <span>👋 Welcome back, {BOSS_NAME}!</span>
          <button type="button" onClick={() => setShowWelcome(false)} aria-label="Dismiss">
            ×
          </button>
        </div>
      )}

      <div className="admin__header">
        <div>
          <h1>Overview</h1>
          <p>A quick look at the Westlife Motors inventory.</p>
        </div>
      </div>

      {status === 'loading' && <p className="admin__state">Loading…</p>}
      {status === 'error' && <p className="admin__state admin__state--error">Could not load stats.</p>}

      {status === 'ready' && (
        <>
          <div className="admin-stats">
            <div className="admin-stat-card">
              <span className="admin-stat-card__value">{stats.available}</span>
              <span className="admin-stat-card__label">Available now</span>
            </div>
            <div className="admin-stat-card">
              <span className="admin-stat-card__value">{stats.sold}</span>
              <span className="admin-stat-card__label">Sold (all time)</span>
            </div>
            <div className="admin-stat-card">
              <span className="admin-stat-card__value">{stats.soldThisMonth}</span>
              <span className="admin-stat-card__label">Sold this month</span>
            </div>
          </div>

          <div className="admin-quicklinks">
            <Link to="/admin/cars/new" className="btn btn--accent">
              + Add a car
            </Link>
            <Link to="/admin/inventory" className="btn admin-btn--outline">
              View inventory
            </Link>
            <Link to="/admin/sold" className="btn admin-btn--outline">
              View sold cars
            </Link>
          </div>

          <section className="admin-form__section">
            <h2>Recently added</h2>
            {recent.length === 0 && <p className="admin-form__hint">No cars listed yet.</p>}
            {recent.length > 0 && (
              <ul className="admin-recent">
                {recent.map((car) => (
                  <li key={car.id}>
                    <div className="admin-table__thumb">{car.image && <img src={car.image} alt="" />}</div>
                    <span>{car.name}</span>
                    <span className="admin-table__muted">{car.year}</span>
                    <Link to={`/admin/cars/${car.id}/edit`} className="linkish">
                      Edit
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      )}
    </div>
  )
}
