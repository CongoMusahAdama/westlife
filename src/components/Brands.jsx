import { BRANDS } from '../data'
import { Reveal } from '../hooks/useReveal'

function BrandTile({ brand }) {
  return (
    <article className="brand-tile" title={brand.name}>
      <img className="brand-tile__logo" src={brand.logo} alt={`${brand.name} logo`} loading="lazy" />
    </article>
  )
}

export default function Brands() {
  const loop = [...BRANDS, ...BRANDS, ...BRANDS]

  return (
    <section className="brands" id="brands" aria-label="Premium brands">
      <div className="container">
        <Reveal as="header" className="brands__header reveal--head">
          <div>
            <h2 className="brands__title">Premium Brands</h2>
            <p className="brands__subtitle">Unveil the finest selection of high-end vehicles</p>
          </div>
          <a href="#cars" className="brands__all">
            Show All Brands →
          </a>
        </Reveal>
      </div>

      <div className="brands__carousel">
        <div className="brands__track">
          {loop.map((brand, i) => (
            <BrandTile key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  )
}
