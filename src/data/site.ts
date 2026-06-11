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
  phone: '(234) 350-9272',
  phoneHref: 'tel:+12343509272',
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
    image: '/images/gallery/carpet-master-bedroom.webp',
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
    image: '/images/gallery/tile-marble-look-bathroom-white.webp',
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
    image: '/images/gallery/lvp-living-room-fireplace.webp',
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
    image: '/images/gallery/hardwood-with-tile-border-inlay.webp',
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

// Real Benchmark Flooring project photos (Drive folder, June 2026), optimized
// to webp in /public/images/gallery. Ordered to interleave materials in the
// unfiltered "All" view.
const G = (category: GalleryItem['category'], label: string, slug: string, title: string): GalleryItem => ({
  category,
  label,
  title,
  image: `/images/gallery/${slug}.webp`,
})

export const gallery: GalleryItem[] = [
  G('hardwood', 'Hardwood', 'hardwood-with-tile-border-inlay', 'Hand-finished hardwood with a tile border inlay'),
  G('lvp', 'LVP', 'lvp-living-room-fireplace', 'Luxury vinyl plank in a fireplace living room'),
  G('carpet', 'Carpet', 'carpet-master-bedroom', 'Plush new carpet in a master bedroom'),
  G('tile', 'Tile', 'tile-marble-look-bathroom-white', 'Marble-look tile in a bright bathroom'),
  G('lvp', 'LVP', 'lvp-kitchen-green-cabinets', 'Wood-look LVP in a remodeled kitchen'),
  G('carpet', 'Carpet', 'carpet-family-room', 'Comfortable carpet in a family room'),
  G('lvp', 'LVP', 'lvp-stairs-modern-railing', 'LVP stair landing with a modern railing'),
  G('tile', 'Tile', 'tile-marble-look-bathroom-dark', 'Dark marble-look bathroom tile'),
  G('lvp', 'LVP', 'lvp-kitchen-light', 'Light luxury vinyl plank kitchen floor'),
  G('carpet', 'Carpet', 'carpet-bright-bedroom', 'Soft carpet in a bright bedroom'),
  G('lvp', 'LVP', 'lvp-hallway', 'Luxury vinyl plank hallway'),
  G('tile', 'Tile', 'tile-bathroom-install', 'Tile and stone bathroom installation'),
  G('lvp', 'LVP', 'lvp-sunlit-room', 'Sunlit luxury vinyl plank flooring'),
  G('carpet', 'Carpet', 'carpet-empty-living-room', 'Fresh carpet in a living room'),
  G('lvp', 'LVP', 'lvp-living-room', 'Open-concept luxury vinyl plank living room'),
  G('carpet', 'Carpet', 'carpet-staircase-landing', 'Carpeted staircase and landing'),
  G('lvp', 'LVP', 'lvp-room-white-trim', 'Luxury vinyl plank with crisp white trim'),
  G('carpet', 'Carpet', 'carpet-guest-bedroom', 'Cozy carpet in a guest bedroom'),
  G('lvp', 'LVP', 'lvp-staircase', 'Luxury vinyl plank staircase'),
  G('carpet', 'Carpet', 'carpet-bedroom', 'New bedroom carpet'),
  G('lvp', 'LVP', 'lvp-stairs-wood-look', 'Wood-look LVP staircase'),
  G('carpet', 'Carpet', 'carpet-room-corner-wood-trim', 'Carpet finished against warm wood trim'),
  G('lvp', 'LVP', 'lvp-stairs-in-progress', 'Luxury vinyl plank stair installation'),
  G('carpet', 'Carpet', 'carpet-bedroom-loft', 'Carpeted bedroom loft'),
  G('lvp', 'LVP', 'lvp-bathroom', 'Luxury vinyl plank bathroom floor'),
  G('carpet', 'Carpet', 'carpet-hallway-to-room', 'Carpeted hallway into a bedroom'),
  G('tile', 'Tile', 'decorative-speckled-floor', 'Decorative speckled floor finish'),
  G('carpet', 'Carpet', 'carpet-staircase', 'Carpeted staircase'),
  G('carpet', 'Carpet', 'carpet-tile-commercial-hallway', 'Commercial carpet-tile hallway'),
  G('carpet', 'Carpet', 'carpet-tile-commercial-corridor', 'Commercial carpet-tile corridor'),
]
