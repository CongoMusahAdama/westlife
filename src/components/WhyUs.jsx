import { WHY_US } from '../data'
import { WhyIcon } from './Icons'

export default function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="container">
        <header className="why__header">
          <p className="why__eyebrow">Westlife Motors</p>
          <h2 className="why__title">Why Choose Us</h2>
          <p className="why__lead">
            Integrity, reliability, and service you can trust — from import to delivery.
          </p>
          <span className="why__rule" aria-hidden="true" />
        </header>

        <div className="why__grid">
          {WHY_US.map((item, index) => (
            <article key={item.title} className="why-card">
              <div className="why-card__top">
                <div className="why-card__icon" aria-hidden="true">
                  <WhyIcon name={item.icon} />
                </div>
                <span className="why-card__num">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
