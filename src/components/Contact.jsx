import { CONTACT } from '../data'
import { IconPhone, IconPin } from './Icons'

export default function Contact() {
  return (
    <section className="cta" id="contact">
      <div className="container cta__inner">
        <div>
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
        </div>
        <div className="cta__actions">
          <a href={CONTACT.phoneHref} className="btn btn--light">
            Call Now
          </a>
          <a href={CONTACT.emailHref} className="btn btn--ghost-dark">
            Email Us
          </a>
        </div>
      </div>
    </section>
  )
}
