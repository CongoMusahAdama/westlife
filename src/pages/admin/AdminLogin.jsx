import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../lib/adminApi'
import { Logo } from '../../components/Icons'
import './Admin.css'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      await login(email, password)
      navigate('/admin', { replace: true, state: { justLoggedIn: true } })
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="admin-auth">
      <form className="admin-auth__card" onSubmit={onSubmit}>
        <Logo />
        <h1>Admin Login</h1>
        <p>Sign in to manage the Westlife Motors inventory.</p>

        {error && <p className="admin-auth__error">{error}</p>}

        <label>
          Login (email or phone number)
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </label>

        <button type="submit" className="btn btn--accent" disabled={busy}>
          {busy ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
