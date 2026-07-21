import { CONTACT } from '../data'
import { Logo } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo footer />
          <p className="footer__tagline">Drive Your Dream</p>
          <p>Importing quality automobiles from America, Europe, Japan, and China to West Africa.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#inventory">Inventory</a>
            </li>
            <li>
              <a href="#types">Vehicle Types</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#why">Why Choose Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Market</h4>
          <ul>
            {CONTACT.markets.map((m) => (
              <li key={m}>{m}</li>
            ))}
            <li>Based in Takoradi</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>{CONTACT.address}</li>
            <li>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </li>
            <li>
              <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>© {year} Westlife Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
