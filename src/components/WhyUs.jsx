import { useState } from 'react'
import { FAQS, WHY_US } from '../data'
import { WhyIcon } from './Icons'
import { Reveal } from '../hooks/useReveal'

export default function WhyUs() {
  const [active, setActive] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section className="why" id="why">
      <div className="container">
        <div className="why__panel">
          <Reveal as="header" className="why__header reveal--head">
            <div className="why__intro">
              <h2 className="why__title">Why Choose Us?</h2>
              <p className="why__lead">
                Integrity, reliability, and service you can trust, from import to delivery across Ghana and Côte
                d&apos;Ivoire.
              </p>
            </div>
            <a href="#contact" className="why__cta">
              Book a Viewing
            </a>
          </Reveal>

          <div className="why__grid">
            {WHY_US.map((item, index) => (
              <Reveal
                key={item.title}
                as="article"
                className={`why-card reveal--card${active === index ? ' is-active' : ''}`}
                delay={index * 80}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <div className="why-card__icon" aria-hidden="true">
                  <WhyIcon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#contact" className="why-card__btn">
                  Contact Us
                </a>
              </Reveal>
            ))}
          </div>

          <div className="faq" id="faq">
            <Reveal as="header" className="faq__header reveal--head">
              <h3 className="faq__title">Frequently Asked Questions</h3>
              <p className="faq__lead">Quick answers about importing, viewing, and buying with Westlife Motors.</p>
            </Reveal>

            <div className="faq__list">
              {FAQS.map((item, index) => {
                const open = openFaq === index
                return (
                  <div key={item.q} className={`faq__item${open ? ' is-open' : ''}`}>
                    <button
                      type="button"
                      className="faq__question"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? -1 : index)}
                    >
                      <span>{item.q}</span>
                      <span className="faq__icon" aria-hidden="true">
                        {open ? '−' : '+'}
                      </span>
                    </button>
                    <div className="faq__answer" hidden={!open}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
