import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { company, nav } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'
import Icon from './Icon'

export default function Navbar() {
  const [location] = useLocation()
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(24)

  const isActive = (href: string) => (href === '/' ? location === '/' : location.startsWith(href))

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="logo-wrap" onClick={() => setOpen(false)}>
            <img src="/images/logo.png" alt="Benchmark Flooring LLC logo" />
            <div className="logo-text">
              <div className="name">Benchmark Flooring</div>
              <div className="sub">Serving Northeast Ohio</div>
            </div>
          </Link>

          <nav className="desktop-nav">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={isActive(item.href) ? 'active' : ''}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <Link href="/quote" className="btn btn-copper">
              Get a Free Quote
              <Icon name="arrow" />
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-nav${open ? ' open' : ''}`}>
        <div className="container">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="btn btn-copper"
            style={{ justifyContent: 'center', marginTop: '0.75rem' }}
            onClick={() => setOpen(false)}
          >
            Get a Free Quote
            <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export function MobileCtaBar() {
  return (
    <div className="mobile-cta-bar">
      <Link href="/quote" className="btn btn-copper">
        Get a Free Quote
        <Icon name="arrow" />
      </Link>
    </div>
  )
}

export { company }
