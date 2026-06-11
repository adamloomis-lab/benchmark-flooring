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
            {company.social.facebook ? (
              <a
                className="footer-social"
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Benchmark Flooring on Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07z" />
                </svg>
                <span>Follow us on Facebook</span>
              </a>
            ) : null}
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
