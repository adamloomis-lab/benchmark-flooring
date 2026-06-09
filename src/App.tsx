import { useEffect } from 'react'
import { Route, Switch, Router, useLocation } from 'wouter'
import Seo from './components/Seo'
import Navbar, { MobileCtaBar } from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import Services from './pages/Services'
import OurWork from './pages/OurWork'
import About from './pages/About'
import Quote from './pages/Quote'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Accessibility from './pages/Accessibility'
import NotFound from './pages/NotFound'

function Shell() {
  const [location] = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Seo path={location} />
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/our-work" component={OurWork} />
          <Route path="/about" component={About} />
          <Route path="/quote" component={Quote} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/accessibility" component={Accessibility} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <MobileCtaBar />
      <CookieConsent />
    </>
  )
}

export default function App({ ssrPath }: { readonly ssrPath?: string }) {
  return (
    <Router ssrPath={ssrPath}>
      <Shell />
    </Router>
  )
}
