import { company, serviceAreas, services } from '../data/site'

// Production domain. The live Netlify site uses the apex as primary and 301s
// www -> apex, so canonicals/sitemap/OG/schema all use the apex to match the
// final served URL (no canonical->redirect mismatch).
export const SITE_URL = 'https://benchmarkflooringllc.com'

const OG_IMAGE = '/images/hero-room.webp'

export const abs = (path: string) => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

// Netlify serves pages with a trailing slash; keep canonical/sitemap aligned.
export const pageUrl = (path: string) =>
  abs(path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`)

const areaServed = serviceAreas.map((a) => ({ '@type': 'AdministrativeArea', name: `${a}, Ohio` }))

// Flooring installer => HomeAndConstructionBusiness (a LocalBusiness subtype).
export function businessSchema() {
  const a = company.address
  return {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': `${SITE_URL}/#business`,
    name: company.name,
    alternateName: company.shortName,
    url: SITE_URL,
    image: abs(OG_IMAGE),
    logo: abs('/images/logo.png'),
    description: company.shortBlurb,
    slogan: company.tagline,
    ...(company.phone ? { telephone: company.phone } : {}),
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      ...(a.street ? { streetAddress: a.street } : {}),
      addressLocality: a.city,
      addressRegion: a.state,
      ...(a.zip ? { postalCode: a.zip } : {}),
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
    areaServed,
    knowsAbout: ['Carpet installation', 'Tile and stone flooring', 'Luxury vinyl plank', 'Laminate flooring', 'Hardwood flooring'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Flooring Installation Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title },
      })),
    },
    ...(company.social.facebook || company.social.instagram
      ? { sameAs: [company.social.facebook, company.social.instagram].filter(Boolean) }
      : {}),
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: company.name,
    publisher: { '@id': `${SITE_URL}/#business` },
  }
}

function serviceSchema() {
  return services.map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `${s.title} Installation`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed,
    description: s.blurb,
    url: pageUrl('/services'),
  }))
}

const FAQS = [
  {
    q: 'What areas does Benchmark Flooring serve?',
    a: 'We serve homeowners across Northeast Ohio, including Medina, Summit, Wayne and Stark counties, the greater Akron area, and the west-side Cleveland suburbs.',
  },
  {
    q: 'What types of flooring do you install?',
    a: 'We install carpet, tile and stone, luxury vinyl plank, laminate, and hardwood flooring.',
  },
  {
    q: 'Do you offer free in-home estimates?',
    a: 'Yes. We bring samples and guidance to your home so you can compare options where the floor will actually live, then provide a clear estimate. Request one through our quote form.',
  },
  {
    q: 'Why choose an in-home estimate over a showroom?',
    a: 'You get to judge color, texture, and fit under your own lighting and against your own walls and furnishings, which makes the decision easier and more accurate than a showroom.',
  },
]

function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: pageUrl(it.path),
    })),
  }
}

export const faqs = FAQS

export type PageMeta = {
  title: string
  description: string
  canonical: string
  ogImage: string
  jsonLd: object[]
}

export function getPageMeta(rawPath: string): PageMeta {
  const path = rawPath !== '/' ? rawPath.replace(/\/$/, '') : '/'
  const ogImage = abs(OG_IMAGE)

  switch (path) {
    case '/':
      return {
        title: "Benchmark Flooring LLC | Northeast Ohio's Standard for Flooring",
        description:
          'Expert flooring installation in Northeast Ohio. Carpet, tile, hardwood, LVP and laminate with free in-home estimates. Serving Medina, Summit, Wayne and Stark counties.',
        canonical: pageUrl('/'),
        ogImage,
        jsonLd: [businessSchema(), websiteSchema(), faqSchema()],
      }
    case '/services':
      return {
        title: 'Flooring Services | Benchmark Flooring LLC, Northeast Ohio',
        description:
          'Carpet, tile and stone, luxury vinyl plank, laminate, and hardwood flooring installation across Northeast Ohio. Free in-home estimates from Benchmark Flooring.',
        canonical: pageUrl('/services'),
        ogImage: abs('/images/tile.webp'),
        jsonLd: [
          businessSchema(),
          ...serviceSchema(),
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
        ],
      }
    case '/our-work':
      return {
        title: 'Our Work | Flooring Gallery | Benchmark Flooring LLC',
        description:
          'Browse flooring inspiration for Northeast Ohio homes: carpet, tile, hardwood, LVP and laminate examples from Benchmark Flooring. Filter by material.',
        canonical: pageUrl('/our-work'),
        ogImage: abs('/images/hardwood.webp'),
        jsonLd: [
          businessSchema(),
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Our Work', path: '/our-work' },
          ]),
        ],
      }
    case '/about':
      return {
        title: 'About | Benchmark Flooring LLC, Northeast Ohio',
        description:
          'Benchmark Flooring brings 60+ years of combined experience to Northeast Ohio homeowners: honest in-home guidance and professional carpet, tile, vinyl and hardwood installation.',
        canonical: pageUrl('/about'),
        ogImage: abs('/images/carpet.webp'),
        jsonLd: [
          businessSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            url: pageUrl('/about'),
            about: { '@id': `${SITE_URL}/#business` },
          },
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ],
      }
    case '/quote':
      return {
        title: 'Get a Free Quote | Benchmark Flooring LLC, Northeast Ohio',
        description:
          'Request a free in-home flooring estimate from Benchmark Flooring. Carpet, tile, hardwood, LVP and laminate installation across Medina, Summit, Wayne and Stark counties.',
        canonical: pageUrl('/quote'),
        ogImage: abs('/images/gallery-room.webp'),
        jsonLd: [
          businessSchema(),
          faqSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            url: pageUrl('/quote'),
            about: { '@id': `${SITE_URL}/#business` },
          },
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Get a Quote', path: '/quote' },
          ]),
        ],
      }
    case '/privacy':
      return {
        title: 'Privacy Policy | Benchmark Flooring LLC',
        description: 'How Benchmark Flooring LLC collects, uses, and protects information submitted through this website.',
        canonical: pageUrl('/privacy'),
        ogImage,
        jsonLd: [breadcrumb([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }])],
      }
    case '/terms':
      return {
        title: 'Terms of Service | Benchmark Flooring LLC',
        description: 'The terms that govern your use of the Benchmark Flooring LLC website.',
        canonical: pageUrl('/terms'),
        ogImage,
        jsonLd: [breadcrumb([{ name: 'Home', path: '/' }, { name: 'Terms of Service', path: '/terms' }])],
      }
    case '/accessibility':
      return {
        title: 'Accessibility Statement | Benchmark Flooring LLC',
        description:
          'Our commitment to making the Benchmark Flooring website accessible to everyone, and how to reach us about accessibility.',
        canonical: pageUrl('/accessibility'),
        ogImage,
        jsonLd: [breadcrumb([{ name: 'Home', path: '/' }, { name: 'Accessibility', path: '/accessibility' }])],
      }
    default:
      return {
        title: 'Page Not Found | Benchmark Flooring LLC',
        description:
          "Sorry, we couldn't find that page. Benchmark Flooring LLC installs carpet, tile, hardwood, LVP and laminate across Northeast Ohio.",
        canonical: pageUrl(path),
        ogImage,
        jsonLd: [businessSchema()],
      }
  }
}

export const ALL_ROUTES: string[] = [
  '/',
  '/services',
  '/our-work',
  '/about',
  '/quote',
  '/privacy',
  '/terms',
  '/accessibility',
]
