import { useState } from 'react'
import { CONTACT, NAV_LINKS } from '../data'
import { IconCar, IconClock, IconPhone, IconPin, IconUser, Logo } from './Icons'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="topbar">
        <div className="container topbar__inner">
          <Logo />

          <ul className="topbar__meta">
            <li>
              <IconPin />
              <div>
                <span className="meta__label">Location</span>
                <span className="meta__value">{CONTACT.address}</span>
              </div>
            </li>
            <li>
              <IconPhone />
              <div>
                <span className="meta__label">Hotline</span>
                <a className="meta__value" href={CONTACT.phoneHref}>
                  {CONTACT.phone}
                </a>
              </div>
            </li>
            <li>
              <IconClock />
              <div>
                <span className="meta__label">Working Hours</span>
                <span className="meta__value">{CONTACT.hours}</span>
              </div>
            </li>
          </ul>

          <a href="/#inventory" className="btn btn--accent topbar__cta topbar__cta--desk">
            <IconCar />
            View Inventory
          </a>
          <a href={CONTACT.phoneHref} className="btn btn--accent topbar__cta topbar__cta--mobile">
            <IconPhone />
            Call
          </a>
        </div>
      </header>

      <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Primary">
        <div className="container nav__inner">
          <ul className="nav__links">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href} className={link.desktopOnly ? 'nav__item--desk' : undefined}>
                <a href={link.href} className={i === 0 ? 'is-active' : undefined} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <div className="nav__social" aria-label="Social links">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zM17.5 8a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
                </svg>
              </a>
              <a href={CONTACT.emailHref} aria-label="Email">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.5L3.8 7h16.4L12 12.5z" />
                </svg>
              </a>
            </div>
            <a href="/#contact" className="nav__login" onClick={() => setOpen(false)}>
              <IconUser />
              Enquire
            </a>
          </div>

          <button
            className="nav__toggle"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </>
  )
}
