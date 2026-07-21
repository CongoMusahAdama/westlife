import { useState } from 'react'

const TABS = [
  { id: 'all', label: 'All Conditions' },
  { id: 'new', label: 'New Cars' },
  { id: 'used', label: 'Used Cars' },
  { id: 'certified', label: 'Certified' },
]

const INITIAL = { make: '', model: '', type: '', location: '' }

export default function SearchPanel() {
  const [condition, setCondition] = useState('all')
  const [form, setForm] = useState(INITIAL)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const parts = Object.entries({ condition, ...form })
      .filter(([, v]) => v && v !== 'all')
      .map(([k, v]) => `${k}: ${v}`)
    window.alert(parts.length ? `Searching inventory — ${parts.join(', ')}` : 'Showing all available vehicles.')
  }

  return (
    <section className="search" aria-label="Vehicle search">
      <div className="container">
        <form className="search__panel" onSubmit={onSubmit}>
          <div className="search__tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                className={`search__tab${condition === tab.id ? ' is-active' : ''}`}
                aria-selected={condition === tab.id}
                onClick={() => setCondition(tab.id)}
              >
                {tab.label}
              </button>
            ))}
            <span className="search__count">Serving Ghana &amp; Côte d&apos;Ivoire</span>
          </div>

          <div className="search__fields">
            <label className="field">
              <span>Make</span>
              <select name="make" value={form.make} onChange={update('make')}>
                <option value="">Any Make</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>Mercedes-Benz</option>
                <option>BMW</option>
                <option>Ford</option>
                <option>Hyundai</option>
                <option>Nissan</option>
              </select>
            </label>
            <label className="field">
              <span>Model</span>
              <select name="model" value={form.model} onChange={update('model')}>
                <option value="">Any Model</option>
                <option>Camry</option>
                <option>Land Cruiser</option>
                <option>Hilux</option>
                <option>Civic</option>
                <option>Ranger</option>
              </select>
            </label>
            <label className="field">
              <span>Type</span>
              <select name="type" value={form.type} onChange={update('type')}>
                <option value="">Any Type</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Pickup</option>
                <option>Truck</option>
                <option>Commercial</option>
              </select>
            </label>
            <label className="field">
              <span>Location</span>
              <input
                type="text"
                name="location"
                placeholder="Takoradi, Accra…"
                value={form.location}
                onChange={update('location')}
              />
            </label>
            <button type="submit" className="btn btn--accent search__submit">
              Search
            </button>
          </div>

          <div className="search__footer">
            <button type="button" className="linkish">
              Advanced Search
            </button>
            <button type="button" className="linkish linkish--muted" onClick={() => setForm(INITIAL)}>
              Reset All
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
