import { useEffect, useState } from 'react'
import { HERO_SLIDES } from '../data'
import { IconWheel } from './Icons'

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  const go = (dir) => {
    setIndex((i) => (i + dir + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  return (
    <section className="hero" id="home">
      <div className="hero__media" aria-hidden="true">
        {HERO_SLIDES.map((src, i) => (
          <img key={src} src={src} alt="" className={`hero__img${i === index ? ' is-active' : ''}`} />
        ))}
        <div className="hero__shade" />
      </div>

      <div className="container hero__content">
        <p className="hero__brand">Westlife Motors</p>
        <h1 className="hero__title">Drive Your Dream</h1>
        <p className="hero__lead">
          Premium vehicles from America, Europe, Japan, and China, delivered across Ghana and Côte d&apos;Ivoire.
        </p>
        <div className="hero__actions">
          <a href="#about" className="btn btn--ghost">
            Learn More
          </a>
          <a href="#contact" className="btn btn--accent">
            <IconWheel />
            Book a Viewing
          </a>
        </div>
      </div>

      <button className="hero__arrow hero__arrow--prev" type="button" aria-label="Previous slide" onClick={() => go(-1)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 5 8 12l7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className="hero__arrow hero__arrow--next" type="button" aria-label="Next slide" onClick={() => go(1)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  )
}
