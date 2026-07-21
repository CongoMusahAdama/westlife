import { useEffect, useRef, useState } from 'react'

function useIsMobile(maxWidth = 768) {
  const [mobile, setMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(`(max-width: ${maxWidth}px)`).matches : false
  )

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${maxWidth}px)`)
    const onChange = () => setMobile(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [maxWidth])

  return mobile
}

/** Horizontal snap carousel with auto-play on mobile */
export default function Carousel({ children, className = '', interval = 3200 }) {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const mobile = useIsMobile()
  const items = Array.isArray(children) ? children : [children]
  const count = items.length

  const scrollToIndex = (i) => {
    const track = trackRef.current
    const card = track?.children[i]
    if (!track || !card) return
    track.scrollTo({ left: card.offsetLeft - 8, behavior: 'smooth' })
    setIndex(i)
  }

  useEffect(() => {
    if (!mobile || paused || count < 2) return undefined

    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % count
        const track = trackRef.current
        const card = track?.children[next]
        if (track && card) {
          track.scrollTo({ left: card.offsetLeft - 8, behavior: 'smooth' })
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [mobile, paused, count, interval])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const onScroll = () => {
      const cards = [...track.children]
      if (!cards.length) return
      const left = track.scrollLeft
      let closest = 0
      let best = Infinity
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft - left)
        if (dist < best) {
          best = dist
          closest = i
        }
      })
      setIndex(closest)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`carousel ${className}`.trim()}
      onPointerDown={() => setPaused(true)}
      onPointerUp={() => setPaused(false)}
      onPointerCancel={() => setPaused(false)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="carousel__track" ref={trackRef}>
        {items}
      </div>
      {mobile && count > 1 && (
        <>
          <div className="carousel__dots" role="tablist" aria-label="Carousel pages">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel__dot${i === index ? ' is-active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
              />
            ))}
          </div>
          <p className="carousel__hint">Swipe for more →</p>
        </>
      )}
    </div>
  )
}
