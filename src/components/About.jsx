import { Reveal } from '../hooks/useReveal'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <Reveal className="about__copy reveal--head">
          <p className="eyebrow">About Us</p>
          <h2 className="section-title">Trusted automobile leaders from Takoradi</h2>
          <p>
            Founded in Takoradi, Western Region of Ghana, Westlife Motors is a trusted leader in the automobile
            industry. We specialize in importing high-quality vehicles from America, Europe, Japan, and China,
            delivering reliable and affordable options to customers across Ghana and Côte d&apos;Ivoire.
          </p>
          <p>
            With a commitment to excellence, we provide cars that meet diverse needs, from sleek sedans and rugged
            SUVs to durable pickups, trucks, and commercial vehicles.
          </p>
          <div className="about__pillars">
            <div>
              <h3>Our Mission</h3>
              <p>
                Make premium international automobiles accessible to the West African market, bridging global
                innovation and local demand with quality, affordability, and performance.
              </p>
            </div>
            <div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted automobile importer and distributor in West Africa, recognized for
                integrity, customer satisfaction, and dedicated service.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal className="about__visual reveal--media" delay={140}>
          <img
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1000&q=80"
            alt="Luxury vehicle representing Westlife Motors inventory"
          />
          <div className="about__badge">
            <strong>Ghana + Côte d&apos;Ivoire</strong>
            <span>Our market across West Africa</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
