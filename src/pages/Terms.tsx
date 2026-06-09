import LegalLayout from '../components/LegalLayout'
import { company } from '../data/site'

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" updated="June 2026">
      <p>
        These terms govern your use of the Benchmark Flooring LLC website. By using this site, you
        agree to them.
      </p>

      <h2>Use of this website</h2>
      <p>
        This website is provided for general information about our flooring services. You agree to use
        it only for lawful purposes and not in a way that could damage, disable, or impair the site.
      </p>

      <h2>Quotes and estimates</h2>
      <p>
        Information on this site is not a binding offer or guarantee of pricing. Any quote, estimate,
        timeline, or product recommendation is confirmed directly with you during an in-home visit or
        written estimate. Materials, conditions, and scope can affect final pricing.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The content, branding, and images on this site are the property of Benchmark Flooring LLC or
        used with permission, and may not be copied or reused without our consent.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        This website is provided "as is." To the fullest extent permitted by law, Benchmark Flooring
        LLC is not liable for any damages arising from your use of, or inability to use, this site.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these terms? Email us at <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </LegalLayout>
  )
}
