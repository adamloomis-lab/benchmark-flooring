import LegalLayout from '../components/LegalLayout'
import { company } from '../data/site'

export default function Accessibility() {
  return (
    <LegalLayout title="Accessibility Statement" updated="June 2026">
      <p>
        Benchmark Flooring LLC is committed to making our website accessible to everyone, including
        people with disabilities. We want every visitor to be able to learn about our services and
        reach us easily.
      </p>

      <h2>Our approach</h2>
      <p>
        We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA where reasonably
        possible. This includes clear text, sufficient color contrast, descriptive links and labels,
        keyboard-navigable controls, and alternative text for meaningful images.
      </p>

      <h2>Ongoing effort</h2>
      <p>
        Accessibility is an ongoing effort. We continue to review and improve the site over time, and
        some content may not yet be fully optimized.
      </p>

      <h2>Need help or found a barrier?</h2>
      <p>
        If you have trouble using any part of this site, or you would like information in a different
        format, please email us at <a href={`mailto:${company.email}`}>{company.email}</a> and we will
        do our best to help and to fix the issue.
      </p>
    </LegalLayout>
  )
}
