import { WHY_US } from '../data'
import { WhyIcon } from './Icons'
import { Reveal } from '../hooks/useReveal'

export default function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="container">
        <Reveal as="header" className="why__header reveal--head">
          <p className="why__eyebrow">Westlife Motors</p>
          <h2 className="why__title">Why Choose Us</h2>
          <p className="why__lead">
            Integrity, reliability, and service you can trust — from import to delivery.
          </p>
          <span className="why__rule" aria-hidden="true" />
        </Reveal>

        <div className="why__grid">
          {WHY_US.map((item, index) => (
            <Reveal key={item.title} as="article" className="why-card reveal--card" delay={index * 100}>
              <div className="why-card__top">
                <div className="why-card__icon" aria-hidden="true">
                  <WhyIcon name={item.icon} />
                </div>
                <span className="why-card__num">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
