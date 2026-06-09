import { Link } from 'wouter'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { services } from '../data/site'

const whyCards = [
  {
    n: '01',
    title: 'We Come to You',
    body: 'You do not have to guess under showroom lighting. We bring samples and guidance to your home so you can compare options where the floor will actually live.',
  },
  {
    n: '02',
    title: 'Guidance You Can Feel Good About',
    body: 'When you have questions about product fit, layout, durability, or budget, you get answers shaped by decades of real Northeast Ohio installation experience.',
  },
  {
    n: '03',
    title: 'Done Right the First Time',
    body: 'You deserve a floor that looks right, feels solid, and holds up. That is why the prep, measurements, and finishing details all matter from the start.',
  },
]

const processCards = [
  {
    n: '01',
    title: 'Schedule an in-home visit',
    body: 'You can start with a quote request and get the process moving without spending your weekend driving from showroom to showroom.',
  },
  {
    n: '02',
    title: 'Compare options in your space',
    body: 'You see samples where the floor will actually live, which makes it easier to judge color, texture, and how the room comes together.',
  },
  {
    n: '03',
    title: 'Enjoy a finished floor that feels right',
    body: 'Once the work is complete, the room should feel cleaner, more finished, and more comfortable to live in every day.',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/images/hero-room.webp" alt="Finished flooring in a bright Northeast Ohio home" />
        </div>
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow hero-eyebrow">Benchmark Flooring LLC • Serving Northeast Ohio</p>
              <h1 className="fade-in">Northeast Ohio's Standard for Flooring.</h1>
              <p className="subhead fade-in-delay-1">
                Get expert installation, honest pricing, and a finished floor that feels right in your
                home for years to come.
              </p>
              <div className="hero-btns fade-in-delay-2">
                <Link href="/quote" className="btn btn-copper">
                  Get a Free Quote
                  <Icon name="arrow" />
                </Link>
                <Link href="/services" className="btn btn-outline-light">
                  View Our Services
                  <Icon name="arrow" />
                </Link>
              </div>
            </div>
            <div className="fade-in-delay-3">
              <div className="hero-card">
                <div className="hero-card-grid">
                  <div>
                    <p className="hero-card-label">Service Area</p>
                    <p>
                      Medina, Akron, the greater Northeast Ohio region, and the surrounding communities
                      we serve.
                    </p>
                  </div>
                  <div>
                    <p className="hero-card-label">What You Get</p>
                    <p>
                      In-home guidance, clear pricing, and an installation process built to respect your
                      time and your home.
                    </p>
                  </div>
                </div>
                <div className="hero-checklist">
                  <p className="hero-checklist-label">Built for homeowners who want</p>
                  <div className="check-grid">
                    {['Clear estimates', 'Skilled installation', 'No showroom pressure', 'A finished floor that feels right'].map(
                      (item) => (
                        <div className="check-item" key={item}>
                          <Icon name="check" />
                          {item}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">
                <Icon name="doc" size={20} />
              </div>
              <p>60+ Years Combined Experience</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <Icon name="map-pin" size={20} />
              </div>
              <p>Serving Medina, Summit and Wayne Counties</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <Icon name="shield" size={20} />
              </div>
              <p>Licensed, Insured and Local</p>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES OVERVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">What We Install</p>
            <h2>Flooring for real homes and real life</h2>
            <p>
              Whether you are updating one room or planning a larger change, you can choose from
              flooring options that fit how your home looks, feels, and gets used every day.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <article className="service-card" key={s.slug}>
                <div className="service-card-img">
                  <img src={s.image} alt={`${s.title} installation`} />
                  <span className="img-label">{s.short}</span>
                </div>
                <div className="service-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.blurb.split('. ')[0]}.</p>
                  <Link href="/services" className="service-card-link">
                    Learn More
                    <Icon name="arrow" size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BENCHMARK (dark) */}
      <section className="section section-dark draft-grid">
        <div className="container">
          <div className="section-intro light">
            <p className="eyebrow">Why Benchmark</p>
            <h2>Choose flooring with more confidence and less friction</h2>
            <p>
              If you want the process to feel simpler, clearer, and more personal, these are the
              differences you should notice from your first visit to the final result.
            </p>
          </div>
          <div className="why-grid">
            {whyCards.map((c) => (
              <div className="why-card" key={c.n}>
                <div className="why-num">{c.n}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Your Process</p>
            <h2>A straightforward way to move your project forward</h2>
            <p>
              You should be able to understand the next step, compare options comfortably, and feel
              confident about the finished result before installation day arrives.
            </p>
          </div>
          <div className="process-grid">
            {processCards.map((c) => (
              <div className="process-card" key={c.n}>
                <div className="process-num">{c.n}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
