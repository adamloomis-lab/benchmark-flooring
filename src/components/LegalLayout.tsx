import type { ReactNode } from 'react'

// Shared shell for Privacy / Terms / Accessibility: navy hero + prose column.
export default function LegalLayout({
  title,
  updated,
  children,
}: {
  readonly title: string
  readonly updated: string
  readonly children: ReactNode
}) {
  return (
    <>
      <div className="legal-hero">
        <div className="container">
          <p className="eyebrow">Benchmark Flooring LLC</p>
          <h1>{title}</h1>
          <p className="updated">Last updated {updated}</p>
        </div>
      </div>
      <section className="legal-body">
        <div className="container">
          {children}
          <p className="legal-disclaimer">
            This page is provided for general informational purposes and is not legal advice. Please
            review it with your own counsel to confirm it fits your needs.
          </p>
        </div>
      </section>
    </>
  )
}
