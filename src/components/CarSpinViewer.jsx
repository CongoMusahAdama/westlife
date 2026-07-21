import { useEffect, useRef, useState } from 'react'

/**
 * 360° spin of the car itself — cycles real photo angles when available,
 * or gently turns a single photo on a 3D turntable.
 */
export default function CarSpinViewer({
  car,
  gallery,
  spinning,
  activeShot,
  onShotChange,
  onToggleSpin,
}) {
  const stageRef = useRef(null)
  const dragRef = useRef({ active: false, startX: 0, startShot: 0 })
  const [tilt, setTilt] = useState(0)

  const frames = gallery?.length ? gallery : [car.image]
  const multi = frames.length > 1

  useEffect(() => {
    if (!spinning || !multi) return undefined
    const timer = setInterval(() => {
      onShotChange((prev) => (prev + 1) % frames.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [spinning, multi, frames.length, onShotChange])

  useEffect(() => {
    if (!multi) {
      setTilt(0)
      return
    }
    const progress = frames.length <= 1 ? 0 : activeShot / (frames.length - 1)
    setTilt(-14 + progress * 28)
  }, [activeShot, frames.length, multi])

  const onPointerDown = (e) => {
    if (e.target.closest('.car-spin__hint')) return
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startShot: activeShot,
    }
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (!dragRef.current.active || !multi) return
    const delta = e.clientX - dragRef.current.startX
    const step = Math.round(delta / 48)
    const next = (dragRef.current.startShot + step + frames.length * 10) % frames.length
    if (next !== activeShot) onShotChange(next)
  }

  const onPointerUp = () => {
    dragRef.current.active = false
  }

  return (
    <div
      ref={stageRef}
      className={`car-spin${spinning ? ' is-spinning' : ''}${multi ? ' is-multi' : ' is-single'}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="img"
      aria-label={`${car.name} 360 degree view`}
    >
      <div className="car-spin__floor" aria-hidden="true" />
      <div className="car-spin__glow" aria-hidden="true" />

      <div
        className="car-spin__turntable"
        style={
          multi ? { transform: `perspective(1100px) rotateY(${tilt}deg)` } : undefined
        }
      >
        {frames.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`car-spin__frame${i === activeShot ? ' is-active' : ''}`}
            draggable={false}
          />
        ))}
      </div>

      <button type="button" className="car-spin__hint" onClick={onToggleSpin}>
        {spinning ? '360° spinning · tap to pause' : multi ? 'Tap for 360° · or drag to rotate' : 'Tap for 360°'}
      </button>
    </div>
  )
}
