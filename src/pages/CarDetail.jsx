import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CONTACT, getCarById } from '../data'
import CarSpinViewer from '../components/CarSpinViewer'
import './CarDetail.css'

export default function CarDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const car = useMemo(() => getCarById(id), [id])
  const [mode, setMode] = useState('buy')
  const [activeShot, setActiveShot] = useState(0)
  const [orbiting, setOrbiting] = useState(true)
  const [note, setNote] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveShot(0)
    setOrbiting(true)
  }, [id])

  if (!car) {
    return (
      <div className="detail-missing">
        <h1>Vehicle not found</h1>
        <Link to="/#cars">Back to inventory</Link>
      </div>
    )
  }

  const gallery = car.gallery?.length ? car.gallery : [car.image]

  return (
    <div className="detail">
      <header className="detail__top">
        <div className="detail__top-inner">
          <button type="button" className="detail__back" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <Link to="/" className="detail__brand">
            Westlife Motors
          </Link>
          <a href={CONTACT.phoneHref} className="detail__call">
            {CONTACT.phone}
          </a>
        </div>
      </header>

      <div className="detail__shell">
        <section className="detail-main">
          <div className="detail-main__head">
            <div>
              <h1>{car.name}</h1>
              <p>
                {car.year} — {car.edition}
              </p>
            </div>
            <div className="detail-mode">
              <button
                type="button"
                className={mode === 'lease' ? 'is-active' : ''}
                onClick={() => setMode('lease')}
              >
                Enquire
              </button>
              <button
                type="button"
                className={mode === 'buy' ? 'is-active' : ''}
                onClick={() => setMode('buy')}
              >
                Buy
              </button>
            </div>
          </div>

          <div className="detail-tags">
            {car.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="detail-stage">
            <CarSpinViewer
              car={car}
              gallery={gallery}
              spinning={orbiting}
              activeShot={activeShot}
              onShotChange={setActiveShot}
              onToggleSpin={() => setOrbiting((v) => !v)}
            />

            <div className="detail-shots">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={i === activeShot ? 'is-active' : ''}
                  onClick={() => {
                    setOrbiting(false)
                    setActiveShot(i)
                  }}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className="detail-ask">
            <label htmlFor="car-note">Ask about this vehicle</label>
            <textarea
              id="car-note"
              rows={2}
              placeholder={`Analyse the ${car.shortName} as a buying option for Ghana and Côte d'Ivoire...`}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <div className="detail-ask__row">
              <div className="detail-ask__chips">
                <span>Westlife Inspected</span>
                <span>Import Ready</span>
                <span>Takoradi Stock</span>
              </div>
              <a
                className="detail-ask__send"
                href={`${CONTACT.emailHref}?subject=${encodeURIComponent(`Enquiry: ${car.name}`)}&body=${encodeURIComponent(note || `I am interested in the ${car.name}.`)}`}
              >
                Send
              </a>
            </div>
          </div>
        </section>

        <aside className="detail-side">
          <div className="detail-side__top">
            <span>{car.sku}</span>
            <a href={CONTACT.emailHref}>Export</a>
          </div>

          <div className="detail-card">
            <div className="detail-card__head">
              <h2>Vehicle readiness</h2>
              <p>{car.priceLabel}</p>
            </div>

            <div className="detail-ready">
              <ul>
                {car.checklist.map((item) => (
                  <li key={item}>
                    <span>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="detail-gauge" aria-label="Estimated value">
                <svg viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="46" className="detail-gauge__track" />
                  <circle
                    cx="60"
                    cy="60"
                    r="46"
                    className="detail-gauge__value"
                    style={{
                      strokeDasharray: `${(car.condition.inspected / 100) * 289} 289`,
                    }}
                  />
                </svg>
                <div className="detail-gauge__label">
                  <strong>{car.estimate}</strong>
                  <span>Est. value</span>
                </div>
              </div>
            </div>

            <div className="detail-bars">
              <div>
                <div className="detail-bars__meta">
                  <span>{car.condition.restored}% Restored</span>
                </div>
                <div className="detail-bars__track">
                  <i style={{ width: `${car.condition.restored}%` }} className="is-muted" />
                </div>
              </div>
              <div>
                <div className="detail-bars__meta">
                  <span>{car.condition.inspected}% Inspected</span>
                </div>
                <div className="detail-bars__track">
                  <i style={{ width: `${car.condition.inspected}%` }} className="is-warn" />
                </div>
              </div>
              <div>
                <div className="detail-bars__meta">
                  <span>{car.condition.original}% Original</span>
                </div>
                <div className="detail-bars__track">
                  <i style={{ width: `${car.condition.original}%` }} className="is-accent" />
                </div>
              </div>
            </div>
          </div>

          <div className="detail-card">
            <h2>Services included</h2>
            <ul className="detail-services">
              {car.services.map((service, index) => (
                <li key={service.label}>
                  <div className="detail-services__left">
                    <em>{String(index + 1).padStart(2, '0')}</em>
                    <div>
                      <strong>{service.amount}</strong>
                      <span>{service.label}</span>
                    </div>
                  </div>
                  <div className="detail-services__bar">
                    <i style={{ width: `${service.percent}%` }} />
                    <b>{service.percent}%</b>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-card detail-card--cta">
            <p>{car.summary}</p>
            <div className="detail-cta">
              <a href={CONTACT.phoneHref} className="detail-cta__primary">
                Call {CONTACT.phone}
              </a>
              <a href={CONTACT.emailHref} className="detail-cta__ghost">
                Email Westlife Motors
              </a>
            </div>
            <p className="detail-cta__loc">{CONTACT.address}</p>
          </div>
        </aside>
      </div>

      <div className="detail-mobile-bar">
        <a href={CONTACT.phoneHref}>Call Now</a>
        <a href={CONTACT.emailHref} className="is-ghost">
          Email
        </a>
      </div>
    </div>
  )
}
