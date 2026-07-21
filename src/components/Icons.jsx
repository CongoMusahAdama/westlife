import { Link } from 'react-router-dom'

export function Logo({ footer = false }) {
  return (
    <Link to="/" className={`logo${footer ? ' logo--footer' : ''}`} aria-label="Westlife Motors home">
      <img
        className="logo__img"
        src="/westlife-logo.png"
        alt="Westlife Motors"
        width="160"
        height="160"
      />
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

export function IconGauge() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 16a8.5 8.5 0 1 1 15 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 15.5 15.2 9.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="15.5" r="1.2" fill="currentColor" />
    </svg>
  )
}

export function IconGear() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="8" y="4" width="8" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 7.5h2M11 12h2M11 16.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconFuel() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 20V6.5A1.5 1.5 0 0 1 6.5 5h6A1.5 1.5 0 0 1 14 6.5V20M5 20h9M8 8.5h3M16 8.5h1.2A1.8 1.8 0 0 1 19 10.3V16a1.5 1.5 0 0 0 1.5 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconSeats() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="7.5" r="2.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 18.5c1.2-2.4 3-3.6 5.5-3.6s4.3 1.2 5.5 3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconGlobe() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.6 3.6 5.4 3.6 8.5S14.4 17.9 12 20.5C9.6 17.9 8.4 15.1 8.4 12S9.6 6.1 12 3.5Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function IconShield() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 4.5 6.5v5.2c0 4.6 3.2 8.7 7.5 9.8 4.3-1.1 7.5-5.2 7.5-9.8V6.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconTruck() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 16.5V7.8A1.8 1.8 0 0 1 4.8 6h9.4A1.8 1.8 0 0 1 16 7.8v8.7M16 10.5h2.4a2 2 0 0 1 1.8 1.1l1.5 2.9a2 2 0 0 1 .1.8V16.5M3 16.5h18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="7" cy="16.5" r="1.8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="16.5" r="1.8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function IconHeart() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15.5" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4.5 18.5c1.4-2.6 3.4-3.9 5.5-3.9.8 0 1.5.2 2.2.5.7-.3 1.4-.5 2.2-.5 2.1 0 4.1 1.3 5.5 3.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
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
