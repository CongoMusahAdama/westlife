import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CAR_FILTERS, CARS } from '../data'
import { Reveal } from '../hooks/useReveal'
import { IconFuel, IconGauge, IconGear, IconPin, IconSeats } from './Icons'

export default function Cars() {
  const [filter, setFilter] = useState('all')
  const [visible, setVisible] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const sectionRef = useRef(null)

  const cars = CARS.filter((car) => filter === 'all' || car.category === filter)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const onFilter = (id) => {
    setFilter(id)
    setAnimKey((k) => k + 1)
  }

  return (
    <section className="cars" id="cars" ref={sectionRef}>
      <div className="container">
        <Reveal as="header" className="cars__header reveal--head">
          <div>
            <h2 className="section-title">Our Cars</h2>
            <p className="cars__subtitle">Premium imports ready for Ghana and Côte d&apos;Ivoire.</p>
          </div>
        </Reveal>

        <div className="cars__tabs" role="tablist">
          {CAR_FILTERS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`cars__tab${filter === tab.id ? ' is-active' : ''}`}
              onClick={() => onFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={`cars__grid${visible ? ' is-visible' : ''}`} key={animKey}>
          {cars.map((car, index) => (
            <article key={car.id} className="car-card" style={{ '--i': index }}>
              <Link to={`/cars/${car.id}`} className="car-card__hit">
                <div className="car-card__stage">
                  <div className="car-card__media">
                    <img src={car.image} alt={car.name} loading="lazy" />
                  </div>
                  <span className="car-card__badge">{car.year}</span>
                </div>

                <div className="car-card__body">
                  <h3>{car.name}</h3>
                  <p className="car-card__loc">
                    <IconPin />
                    <span>
                      {car.location}, Ghana
                    </span>
                  </p>

                  <ul className="car-card__specs">
                    <li>
                      <IconGauge />
                      <span>{car.drive}</span>
                    </li>
                    <li>
                      <IconGear />
                      <span>{car.transmission}</span>
                    </li>
                    <li>
                      <IconFuel />
                      <span>{car.fuel}</span>
                    </li>
                    <li>
                      <IconSeats />
                      <span>{car.seats}</span>
                    </li>
                  </ul>

                  <div className="car-card__footer">
                    <span className="car-card__meta">{car.meta}</span>
                    <span className="car-card__cta">View details</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
