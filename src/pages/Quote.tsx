import { useState } from 'react'
import Icon from '../components/Icon'
import { company, serviceAreas } from '../data/site'

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')

const flooringOptions = ['Carpet', 'Tile', 'LVP or Laminate', 'Hardwood', 'Not Sure Yet']
const footageOptions = [
  'Under 250 sq. ft.',
  '250 to 500 sq. ft.',
  '500 to 1,000 sq. ft.',
  '1,000+ sq. ft.',
  'Not sure yet',
]

export default function Quote() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)
    const payload: Record<string, string> = { 'form-name': 'quote' }
    data.forEach((v, k) => {
      payload[k] = typeof v === 'string' ? v : ''
    })

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      })
      if (!res.ok) throw new Error('Submit failed')
      setSubmitted(true)
      form.reset()
    } catch {
      setError(
        'Something went wrong sending your request. Please email us directly at ' +
          company.email +
          ' and we will follow up.',
      )
    }
  }

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/tile.webp" alt="" />
        </div>
        <div className="container">
          <div className="content">
            <p className="eyebrow">Get a Quote</p>
            <h1>Tell us about your project.</h1>
            <p>
              If you are planning new floors for your home, share a few details here and we will help
              you understand your options, your timing, and what the next step looks like.
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="quote-grid">
            <div className="quote-form-card">
              <div className="section-intro" style={{ marginBottom: 0 }}>
                <p className="eyebrow">Free In-Home Quote</p>
                <h2>Start with a quote that feels clear and easy</h2>
                <p>
                  Share a few details about your home and your project, and we will follow up with
                  honest guidance, answer your questions, and help you figure out the flooring options
                  that make the most sense for your space.
                </p>
              </div>

              {submitted ? (
                <div className="success-msg" style={{ marginTop: '2.5rem' }}>
                  Thanks! We will be in touch soon to follow up on your project.
                </div>
              ) : (
                <form
                  name="quote"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={onSubmit}
                >
                  <input type="hidden" name="form-name" value="quote" />
                  <p hidden>
                    <label>
                      Do not fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="form-row">
                    <label>
                      Name
                      <div className="field-shell">
                        <input type="text" name="name" placeholder="Your name" required />
                      </div>
                    </label>
                    <label>
                      Phone
                      <div className="field-shell">
                        <input type="tel" name="phone" placeholder="Best number to reach you" />
                      </div>
                    </label>
                  </div>

                  <div className="form-row">
                    <label>
                      Email
                      <div className="field-shell">
                        <input type="email" name="email" placeholder="Your email address" />
                      </div>
                    </label>
                    <label>
                      Address
                      <div className="field-shell">
                        <input type="text" name="address" placeholder="Project address" />
                      </div>
                    </label>
                  </div>

                  <div className="form-row">
                    <label>
                      Type of Flooring Needed
                      <div className="field-shell">
                        <select name="flooringType" defaultValue="Carpet">
                          {flooringOptions.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                    </label>
                    <label>
                      Approximate Square Footage
                      <div className="field-shell">
                        <select name="squareFootage" defaultValue="Under 250 sq. ft.">
                          {footageOptions.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                    </label>
                  </div>

                  <div className="form-row">
                    <label>
                      How Did You Hear About Us
                      <div className="field-shell">
                        <input
                          type="text"
                          name="referralSource"
                          placeholder="Referral, search, Facebook, yard sign, etc."
                        />
                      </div>
                    </label>
                    <div className="what-next">
                      <p className="eyebrow">What Happens Next</p>
                      <p>
                        We usually follow up quickly so you know what to expect next. You can ask
                        questions, talk through options, and move at a pace that feels right for your
                        home.
                      </p>
                    </div>
                  </div>

                  <label>
                    Additional Details
                    <div className="field-shell">
                      <textarea
                        name="details"
                        rows={6}
                        placeholder="Tell us about the rooms you want to update, your timing, the flooring you have now, or anything else that would help us give you better guidance."
                      ></textarea>
                    </div>
                  </label>

                  <div>
                    <button type="submit" className="btn btn-copper">
                      Request My Free Quote
                      <Icon name="arrow" />
                    </button>
                    {error ? <p className="field-error" style={{ marginTop: '0.75rem' }}>{error}</p> : null}
                  </div>
                </form>
              )}
            </div>

            <aside className="quote-aside">
              <p className="eyebrow">Contact Info</p>
              <h2>Reach out with confidence</h2>

              {company.phone ? (
                <div className="contact-item">
                  <Icon name="phone" />
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
              ) : null}
              <div className="contact-item">
                <Icon name="mail" />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
              <div className="contact-item">
                <Icon name="map-pin" />
                <p>{serviceAreas.slice(0, 6).join(' • ')}</p>
              </div>

              <div className="serving-box">
                <p className="eyebrow">Serving Northeast Ohio</p>
                <p>
                  When you reach out, you are starting a straightforward conversation about your home,
                  your goals, and the kind of flooring solution that will feel right once it is
                  installed.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
