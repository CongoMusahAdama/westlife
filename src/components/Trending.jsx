import { TRENDING } from '../data'

export default function Trending() {
  return (
    <section className="trending" id="inventory">
      <div className="container">
        <h2 className="section-title">Trending Searches</h2>
        <div className="trending__grid">
          {TRENDING.map((item) => (
            <a
              key={item.title}
              href="#types"
              className="trend-card"
              style={{ '--img': `url('${item.image}')` }}
            >
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
