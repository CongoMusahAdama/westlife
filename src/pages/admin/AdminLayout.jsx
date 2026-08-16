import { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { logout } from '../../lib/adminApi'
import { Logo } from '../../components/Icons'
import ThemeToggle from '../../components/ThemeToggle'
import './Admin.css'

const NAV_ITEMS = [
  { to: '/admin', label: 'Overview', end: true },
  { to: '/admin/inventory', label: 'Inventory' },
  { to: '/admin/sold', label: 'Sold Cars' },
]

export default function AdminLayout() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const onLogout = async () => {
    await logout()
    navigate('/admin/login', { replace: true })
  }

  const linkClass = ({ isActive }) => `admin-sidebar__link${isActive ? ' is-active' : ''}`

  return (
    <div className="admin-shell">
      <button type="button" className="admin-shell__menu-btn" onClick={() => setOpen((v) => !v)}>
        ☰ Menu
      </button>

      <aside className={`admin-sidebar${open ? ' is-open' : ''}`}>
        <Logo />

        <nav className="admin-sidebar__nav">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/admin/cars/new" className="btn btn--accent admin-sidebar__add" onClick={() => setOpen(false)}>
          + Add Car
        </Link>

        <div className="admin-sidebar__footer">
          <a href="/" target="_blank" rel="noreferrer" className="admin-sidebar__link">
            View site ↗
          </a>
          <div className="admin-sidebar__footer-row">
            <ThemeToggle />
            <button type="button" className="btn admin-btn--outline" onClick={onLogout}>
              Log out
            </button>
          </div>
        </div>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  )
}
