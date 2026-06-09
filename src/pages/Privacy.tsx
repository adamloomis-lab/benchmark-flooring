import LegalLayout from '../components/LegalLayout'
import { company } from '../data/site'

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 2026">
      <p>
        Benchmark Flooring LLC ("we," "us," or "our") respects your privacy. This policy explains what
        information we collect through this website, how we use it, and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <p>
        We collect the information you choose to give us when you request a quote or contact us, such
        as your name, phone number, email address, project address, and any details you share about
        your flooring project. We may also collect limited, non-identifying technical data (such as
        general usage and device information) to keep the site working and understand how it is used.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your quote requests and questions</li>
        <li>To schedule and follow up on in-home estimates and installations</li>
        <li>To improve our website and the service we provide</li>
      </ul>
      <p>
        We do not sell your personal information. We only share it with service providers who help us
        operate this website and respond to you, and only as needed to provide our services.
      </p>

      <h2>Cookies</h2>
      <p>
        This site uses cookies and similar technologies to keep the site functioning and to understand
        general usage. You can control cookies through your browser settings. Declining non-essential
        cookies will not stop you from requesting a quote.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have questions about this policy or want us to update or delete information you have
        shared, email us at <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </LegalLayout>
  )
}
