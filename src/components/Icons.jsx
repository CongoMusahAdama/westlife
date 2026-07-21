import { Link } from 'react-router-dom'

export function Logo({ footer = false }) {
  return (
    <Link to="/" className={`logo${footer ? ' logo--footer' : ''}`} aria-label="Westlife Motors home">
      <span className="logo__mark" aria-hidden="true" />
      <span className="logo__text">
        <strong>Westlife</strong>
        <span>Motors</span>
      </span>
    </Link>
  )
}

export function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 4.5h3.2l1.2 4.2-2 1.2a12.5 12.5 0 0 0 5.2 5.2l1.2-2 4.2 1.2v3.2A2 2 0 0 1 17.5 19.5 14 14 0 0 1 4.5 6.5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconClock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconCar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 15.5h16l-1.4-5.2A2 2 0 0 0 16.7 9H7.3a2 2 0 0 0-1.9 1.3L4 15.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 15.5v1.8a1.2 1.2 0 0 0 1.2 1.2h.6a1.2 1.2 0 0 0 1.2-1.2v-1.8M14.5 15.5v1.8a1.2 1.2 0 0 0 1.2 1.2h.6a1.2 1.2 0 0 0 1.2-1.2v-1.8M7 9V6.8A1.8 1.8 0 0 1 8.8 5h6.4A1.8 1.8 0 0 1 17 6.8V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function IconWheel() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="13" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="13" r="2" fill="currentColor" />
      <path d="M12 4v2.5M8 5.5l1.2 1.8M16 5.5l-1.2 1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconUser() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 19.2c1.8-3 4.2-4.5 7-4.5s5.2 1.5 7 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function IconGlobe() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h3l2-6 3 12 2-6h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconShield() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 4.5 6.5v5.2c0 4.6 3.2 8.7 7.5 9.8 4.3-1.1 7.5-5.2 7.5-9.8V6.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconTruck() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 16.5V7.8A1.8 1.8 0 0 1 4.8 6h9.4A1.8 1.8 0 0 1 16 7.8v8.7M16 10.5h2.4a2 2 0 0 1 1.8 1.1l1.5 2.9a2 2 0 0 1 .1.8V16.5M3 16.5h18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="7" cy="16.5" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="16.5" r="1.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function IconHeart() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20s7-4.4 7-10a7 7 0 1 0-14 0c0 5.6 7 10 7 10Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.5 10.5 11 12l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const WHY_ICONS = {
  globe: IconGlobe,
  shield: IconShield,
  truck: IconTruck,
  heart: IconHeart,
}

export function WhyIcon({ name }) {
  const Comp = WHY_ICONS[name] || IconGlobe
  return <Comp />
}
