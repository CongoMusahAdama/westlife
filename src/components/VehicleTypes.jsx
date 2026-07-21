import { VEHICLE_TYPES } from '../data'

export default function VehicleTypes() {
  return (
    <section className="types" id="types">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Browse by Types</h2>
          <a href="#inventory" className="section-link">
            See all types →
          </a>
        </div>
        <div className="types__grid">
          {VEHICLE_TYPES.map((type) => (
            <article key={type.name} className="type-item">
              <img src={type.image} alt={type.name} />
              <h3>
                {type.name} <span>({type.tag})</span>
              </h3>
              <p>{type.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
