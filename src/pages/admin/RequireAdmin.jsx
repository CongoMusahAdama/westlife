import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { me } from '../../lib/adminApi'

export default function RequireAdmin({ children }) {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false
    me()
      .then(() => !cancelled && setStatus('authed'))
      .catch(() => !cancelled && setStatus('anon'))
    return () => {
      cancelled = true
    }
  }, [])

  if (status === 'loading') {
    return <div className="admin-loading">Loading…</div>
  }

  if (status === 'anon') {
    return <Navigate to="/admin/login" replace />
  }

  return children
}
