import { TRENDING } from '../data'
import { Reveal } from '../hooks/useReveal'
import Carousel from './Carousel'

export default function Trending() {
  return (
    <section className="trending" id="inventory">
      <div className="container">
        <Reveal as="header" className="reveal--head">
          <h2 className="section-title">Trending Searches</h2>
        </Reveal>
        <Carousel className="trending__carousel" interval={3000}>
          {TRENDING.map((item, i) => (
            <a
              key={item.title}
              href="#types"
              className="trend-card reveal reveal--media is-inview"
              style={{ '--img': `url('${item.image}')`, '--reveal-delay': `${i * 80}ms` }}
            >
              <span>{item.title}</span>
            </a>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
