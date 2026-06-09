import { useState } from 'react'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { gallery } from '../data/site'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'carpet', label: 'Carpet' },
  { key: 'tile', label: 'Tile' },
  { key: 'lvp', label: 'LVP and Laminate' },
  { key: 'hardwood', label: 'Hardwood' },
] as const

export default function OurWork() {
  const [active, setActive] = useState<string>('all')

  const shown = gallery.filter((g) => active === 'all' || g.category === active)

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/hardwood.webp" alt="" />
        </div>
        <div className="container">
          <div className="content">
            <p className="eyebrow">Our Work</p>
            <h1>See the kind of finished look you can expect</h1>
            <p>
              Browse the looks Benchmark Flooring helps homeowners create across carpet, tile,
              hardwood, laminate, and luxury vinyl. Each gallery card is organized to help you compare
              materials and picture the right finish for your own home.
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Gallery</p>
            <h2>Organized by flooring type</h2>
            <p>
              Use the filters below to compare flooring styles by material and room type, then move
              into a quote when you are ready to talk through your own project.
            </p>
          </div>

          <div className="gallery-filters">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`filter-btn${active === f.key ? ' active' : ''}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {shown.map((g, i) => (
              <article className="gallery-card" key={`${g.title}-${i}`}>
                <div className="gallery-card-img">
                  {g.image ? (
                    <img src={g.image} alt={g.title} />
                  ) : (
                    <div className="gallery-placeholder">
                      <Icon name="image" size={44} />
                      <span>Design Reference Preview</span>
                    </div>
                  )}
                  <span className="img-label">{g.label}</span>
                </div>
                <div className="gallery-card-body">
                  <h3>{g.title}</h3>
                  <p>Flooring inspiration for Northeast Ohio homes</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
