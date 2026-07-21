import { VEHICLE_TYPES } from '../data'
import { Reveal } from '../hooks/useReveal'
import Carousel from './Carousel'

export default function VehicleTypes() {
  return (
    <section className="types" id="types">
      <div className="container">
        <Reveal as="div" className="section-head reveal--head">
          <h2 className="section-title">Browse by Types</h2>
          <a href="#inventory" className="section-link">
            See all types →
          </a>
        </Reveal>
        <Carousel className="types__carousel" interval={3400}>
          {VEHICLE_TYPES.map((type) => (
            <article key={type.name} className="type-item reveal reveal--media is-inview">
              <img src={type.image} alt={type.name} />
              <h3>
                {type.name} <span>({type.tag})</span>
              </h3>
              <p>{type.description}</p>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
