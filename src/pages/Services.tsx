import { Link } from 'wouter'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { services } from '../data/site'

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/gallery/lvp-hallway.webp" alt="" />
        </div>
        <div className="container">
          <div className="content">
            <p className="eyebrow">Services</p>
            <h1>What We Install</h1>
            <p>
              From carpet and hardwood to tile, luxury vinyl plank, and laminate, Benchmark Flooring
              helps Northeast Ohio homeowners choose the right product and get it installed the right
              way.
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {services.map((s, i) => {
            const reversed = i % 2 === 1
            return (
              <article className="service-detail" key={s.slug}>
                <div className="service-detail-img" style={reversed ? { order: 2 } : undefined}>
                  <img src={s.image} alt={`${s.title} installation`} />
                  <span className="img-label">{s.short}</span>
                </div>
                <div className="service-detail-content" style={reversed ? { order: 1 } : undefined}>
                  <p className="eyebrow">Service {String(i + 1).padStart(2, '0')}</p>
                  <h2>{s.title}</h2>
                  <p>{s.blurb}</p>
                  {s.benefits.map((b) => (
                    <div className="benefit-item" key={b}>
                      <Icon name="check" />
                      {b}
                    </div>
                  ))}
                  <Link href="/quote" className="btn btn-copper" style={{ marginTop: '1.25rem' }}>
                    Get a Quote for This Service
                    <Icon name="arrow" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
