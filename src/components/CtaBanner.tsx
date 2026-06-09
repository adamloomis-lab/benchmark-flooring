import { Link } from 'wouter'
import Icon from './Icon'

// Copper "Schedule your free in-home quote" banner reused at the foot of most
// pages. `bare` drops the bottom margin for pages that end on it.
export default function CtaBanner({ marginBottom = true }: { readonly marginBottom?: boolean }) {
  return (
    <section style={{ padding: '2rem 0 0' }}>
      <div className="container">
        <div className="cta-banner" style={marginBottom ? undefined : { marginBottom: 0 }}>
          <div className="cta-banner-inner">
            <div>
              <p className="eyebrow">Free In-Home Quote</p>
              <h2>Ready to transform your floors? Let us come to you.</h2>
            </div>
            <Link href="/quote" className="btn btn-white">
              Schedule Your Free In-Home Quote
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
