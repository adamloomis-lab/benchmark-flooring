import { useEffect, useState } from 'react'
import { Link } from 'wouter'

const KEY = 'benchmark-cookie-consent'

// Dismissible cookie-consent banner (pairs with the legal pages). Stores the
// choice in localStorage so it only shows once. SSR-safe: renders nothing until
// mounted on the client.
export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true)
    } catch {
      /* storage blocked — keep banner hidden */
    }
  }, [])

  const close = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(KEY, choice)
    } catch {
      /* ignore */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie notice">
      <p>
        We use cookies to keep this site working smoothly and understand how visitors use it. See our{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <div className="cookie-banner-actions">
        <button onClick={() => close('declined')}>Decline</button>
        <button className="primary" onClick={() => close('accepted')}>
          Accept
        </button>
      </div>
    </div>
  )
}
