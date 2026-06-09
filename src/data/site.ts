// Single source of truth for business info, navigation, service areas, and
// page content. Drive every contact signal (email, service-area links) from
// here so there is one place to update.
//
// NOTE: Benchmark Flooring has not supplied a public phone number or street
// address yet. Until they do, contact is routed to email + the quote form.
// Fill `phone`, `phoneHref`, and `address` below and they flow everywhere.

export const company = {
  name: 'Benchmark Flooring LLC',
  shortName: 'Benchmark Flooring',
  tagline: 'Where Every Job Sets the Standard',
  region: 'Northeast Ohio',
  // TODO: replace with the real published number when available.
  phone: '',
  phoneHref: '',
  // NOTE: the owner's email is intentionally NOT rendered anywhere on the site
  // (no mailto links, not in JSON-LD) to keep it off scrapers. Form submissions
  // are routed to it via a Netlify email notification configured server-side.
  // Kept here only for reference.
  email: 'adam.loomis@gmail.com',
  // TODO: add a street address if/when Benchmark wants one listed publicly.
  address: {
    street: '',
    city: 'Medina',
    state: 'OH',
    zip: '',
  },
  // Approx. centroid of the Medina, OH service area (used for schema geo).
  geo: { lat: 41.1384, lng: -81.8632 },
  shortBlurb:
    'Mobile flooring installation for Northeast Ohio homeowners who want straight answers, skilled work, and a better in-home experience. Carpet, tile and stone, luxury vinyl plank, laminate, and hardwood.',
  social: {
    facebook: '',
    instagram: '',
  },
} as const

export type NavItem = { label: string; href: string }

// Find Your Floor (the AI visualizer) is intentionally removed.
export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'About', href: '/about' },
  { label: 'Get a Quote', href: '/quote' },
]

export const serviceAreas: string[] = [
  'Medina County',
  'Summit County',
  'Wayne County',
  'Stark County',
  'Greater Akron Area',
  'West Side Cleveland Suburbs',
  'Surrounding Northeast Ohio communities',
]

export type Service = {
  slug: string
  short: string
  title: string
  blurb: string
  image: string
  benefits: string[]
}

export const services: Service[] = [
  {
    slug: 'carpet',
    short: 'Carpet',
    title: 'Carpet',
    image: '/images/carpet.webp',
    blurb:
      'If you want a room to feel warmer, quieter, and more comfortable underfoot, carpet is still one of the best choices you can make. We help you choose the right style for the space, then install it with the prep work, stretching, and finishing details that help it look clean and wear better from day one.',
    benefits: [
      'You get soft comfort where your family actually lives',
      'You can choose from textures, styles, and price points that fit your home',
      'You get professional stretching and seam work for a cleaner finished look',
    ],
  },
  {
    slug: 'tile-and-stone',
    short: 'Tile and Stone',
    title: 'Tile and Stone',
    image: '/images/tile.webp',
    blurb:
      'When you want a floor that can handle moisture, traffic, and everyday wear, tile and stone give you long-term performance with a clean finished look. We focus on flat surfaces, careful layout, and tight finishing so your new floor feels solid, balanced, and built to last.',
    benefits: [
      'You get durability for wet areas and heavy traffic',
      'You get a clean, timeless look that holds its value',
      'You get precise spacing, leveling, and grout-line consistency',
    ],
  },
  {
    slug: 'lvp-laminate',
    short: 'LVP / Laminate',
    title: 'Luxury Vinyl Plank and Laminate',
    image: '/images/hero-room.webp',
    blurb:
      'If you want a hard-surface floor that looks sharp and stands up to real life, luxury vinyl plank and laminate are strong options. We help you narrow in on the right product for your room, your traffic level, and the finish you want your home to carry.',
    benefits: [
      'You get strong performance for active family homes',
      'You can choose from looks that fit modern, classic, or in-between spaces',
      'You get an efficient installation with a polished finished appearance',
    ],
  },
  {
    slug: 'hardwood',
    short: 'Hardwood',
    title: 'Hardwood',
    image: '/images/hardwood.webp',
    blurb:
      'If you want a floor that feels timeless the moment you walk into the room, hardwood is hard to beat. We plan each project carefully so the grain flow, alignment, and finished look feel intentional, solid, and right for the home you are improving.',
    benefits: [
      'You get a natural look that adds warmth and resale appeal',
      'You get rich wood character with long-term durability',
      'You get careful layout and finishing for a balanced final result',
    ],
  },
]

export type GalleryItem = {
  category: 'carpet' | 'tile' | 'lvp' | 'hardwood'
  label: string
  title: string
  image?: string
}

export const gallery: GalleryItem[] = [
  { category: 'carpet', label: 'Carpet', title: 'Soft carpet finish for bedrooms and family rooms', image: '/images/carpet.webp' },
  { category: 'tile', label: 'Tile', title: 'Clean tile look for kitchens, baths, and entries', image: '/images/tile.webp' },
  { category: 'lvp', label: 'LVP', title: 'Wood-look LVP style for open living spaces', image: '/images/gallery-room.webp' },
  { category: 'hardwood', label: 'Hardwood', title: 'Classic hardwood character for main living areas', image: '/images/hardwood.webp' },
  { category: 'lvp', label: 'LVP', title: 'Open-concept living room flooring inspiration' },
  { category: 'tile', label: 'Tile', title: 'Welcoming entryway tile inspiration' },
  { category: 'carpet', label: 'Carpet', title: 'Comfort-focused bedroom carpet inspiration' },
  { category: 'hardwood', label: 'Hardwood', title: 'Statement hardwood inspiration for larger rooms' },
]
