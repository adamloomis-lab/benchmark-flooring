import { Link } from 'wouter'
import Icon from '../components/Icon'

export default function NotFound() {
  return (
    <div className="page-hero" style={{ paddingBottom: '7rem', minHeight: '70vh' }}>
      <div className="page-hero-bg">
        <img src="/images/gallery/lvp-living-room.webp" alt="" />
      </div>
      <div className="container">
        <div className="content">
          <p className="eyebrow">404</p>
          <h1>We couldn't find that page.</h1>
          <p style={{ marginBottom: '2rem' }}>
            The page you were looking for may have moved. Let's get you back to firm ground — head home
            or request your free in-home flooring quote.
          </p>
          <div className="hero-btns" style={{ marginTop: 0 }}>
            <Link href="/" className="btn btn-copper">
              Back Home
              <Icon name="arrow" />
            </Link>
            <Link href="/quote" className="btn btn-outline-light">
              Get a Free Quote
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
