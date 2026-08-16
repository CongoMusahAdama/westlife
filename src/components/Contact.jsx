import { CONTACT } from '../data'
import { IconPhone, IconPin } from './Icons'
import { Reveal } from '../hooks/useReveal'

const MAP_QUERY = encodeURIComponent(`${CONTACT.address}, Ghana`)
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`

export default function Contact() {
  return (
    <section className="cta" id="contact">
      <div className="container cta__inner">
        <Reveal className="reveal--head">
          <p className="eyebrow eyebrow--light">Get in Touch</p>
          <h2>Ready to drive your dream?</h2>
          <p>
            Visit us opposite Apowa Police Station in Takoradi, or enquire about our latest imports for Ghana and Côte
            d&apos;Ivoire.
          </p>
          <ul className="cta__details">
            <li>
              <IconPin />
              <span>{CONTACT.address}</span>
            </li>
            <li>
              <IconPhone />
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            </li>
          </ul>

          <a
            className="cta__map"
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Get directions to Westlife Motors on Google Maps"
          >
            <iframe
              src={MAP_EMBED_URL}
              title="Westlife Motors location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              tabIndex={-1}
              aria-hidden="true"
            />
            <span className="cta__map-label">Get Directions ↗</span>
          </a>
        </Reveal>
        <Reveal className="cta__actions reveal--card" delay={120}>
          <a href={CONTACT.phoneHref} className="btn btn--light">
            Call Now
          </a>
          <a href={CONTACT.emailHref} className="btn btn--ghost-dark">
            Email Us
          </a>
        </Reveal>
      </div>
    </section>
  )
}
