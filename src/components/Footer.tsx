import { Link } from 'wouter'
import { company, nav, serviceAreas, services } from '../data/site'
import Icon from './Icon'

const mapsHref = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`

export default function Footer() {
  const serviceLine = services.map((s) => s.short).join(' • ')

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="Benchmark Flooring LLC logo" />
            <div className="name">Benchmark Flooring</div>
            <p>
              Where Every Job Sets the Standard. Mobile flooring installation for homeowners who want
              straight answers, skilled work, and a better in-home experience.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <div className="footer-nav">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Service Areas</h4>
            <div className="footer-areas">
              {serviceAreas.map((area) => (
                <a
                  key={area}
                  href={mapsHref(`${area}, Ohio`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {area}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact">
              {company.phone ? (
                <div className="footer-contact-item">
                  <Icon name="phone" />
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
              ) : null}
              <div className="footer-contact-item">
                <Icon name="mail" />
                <Link href="/quote">Request a free quote</Link>
              </div>
              <div className="footer-contact-item">
                <Icon name="grid" />
                <p>{serviceLine}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright Benchmark Flooring LLC {new Date().getFullYear()}</p>
          <div className="legal-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
          <a
            className="agency-credit"
            href="https://adamloomismarketing.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/adam-loomis-logo.png" alt="Adam Loomis Marketing" />
            Site by Adam Loomis Marketing
          </a>
        </div>
      </div>
    </footer>
  )
}
