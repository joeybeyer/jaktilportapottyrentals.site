export const PHONE_NUMBER = '512-581-6599'
export const PHONE_NUMBER_LINK = 'tel:+15125816599'
export const PHONE_NUMBER_DISPLAY = '(512) 581-6599'

export const SITE_NAME = 'Jaktil Porta Potty Rentals'
export const SITE_URL = 'https://jaktilportapottyrentals.site'

export const BUSINESS_ADDRESS = {
  street: '113 W 5th St',
  city: 'Austin',
  state: 'TX',
  zip: '78701',
  full: '113 W 5th St, Austin, TX 78701',
}

export const GOOGLE_MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.941520248699!2d-97.74406080000001!3d30.267247399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ca52dc2c9c2ed1%3A0x605e15a97d5638a5!2sJaktil%20Porta%20Potty%20Rentals!5e0!3m2!1sen!2sus!4v1768708463542!5m2!1sen!2sus'

export const CITIES = [
  { name: 'Austin', slug: 'austin', description: 'Serving all of Austin including Downtown, South Austin, East Austin, Mueller, Hyde Park, and more.' },
  { name: 'Round Rock', slug: 'round-rock', description: 'Fast delivery to Round Rock, Dell Diamond area, Old Settlers Park, and all Williamson County.' },
  { name: 'Cedar Park', slug: 'cedar-park', description: 'Covering Cedar Park, H-E-B Center, 183A corridor, and surrounding areas.' },
  { name: 'Pflugerville', slug: 'pflugerville', description: 'Serving Pflugerville, Lake Pflugerville, SH 130/45 corridor, and northeast Travis County.' },
  { name: 'Georgetown', slug: 'georgetown', description: 'Georgetown delivery including historic downtown, Sun City, and Hill Country wedding venues.' },
  { name: 'Leander', slug: 'leander', description: 'Fast service to Leander, Crystal Falls, Austin FC training facility area, and north Williamson County.' },
  { name: 'Kyle', slug: 'kyle', description: 'Kyle porta potty rental serving I-35 corridor, Plum Creek, and south Hays County.' },
  { name: 'Buda', slug: 'buda', description: 'Buda delivery including Main Street district and all south Austin suburbs.' },
  { name: 'San Marcos', slug: 'san-marcos', description: 'San Marcos service covering Texas State University, San Marcos River, and outlet mall area.' },
  { name: 'Lakeway', slug: 'lakeway', description: 'Lakeway and Lake Travis area including Hill Country estates and luxury event venues.' },
]

export const SERVICES = [
  {
    name: 'Construction Site Rentals',
    slug: 'construction-site-rentals',
    shortName: 'Construction',
    description: 'OSHA-compliant porta potty rental for construction sites with weekly servicing included.',
    icon: '🏗️',
  },
  {
    name: 'Event Porta Potty Rental',
    slug: 'event-porta-potty-rental',
    shortName: 'Events',
    description: 'Portable toilets for outdoor events, festivals, concerts, and corporate gatherings.',
    icon: '🎪',
  },
  {
    name: 'Luxury Restroom Trailers',
    slug: 'luxury-restroom-trailers',
    shortName: 'Luxury Trailers',
    description: 'Climate-controlled luxury restroom trailers with AC for upscale events.',
    icon: '✨',
  },
  {
    name: 'Wedding Restroom Rentals',
    slug: 'wedding-restroom-rentals',
    shortName: 'Weddings',
    description: 'Elegant restroom solutions for Hill Country weddings and receptions.',
    icon: '💒',
  },
  {
    name: 'ADA Accessible Units',
    slug: 'ada-accessible-units',
    shortName: 'ADA Units',
    description: 'Wheelchair-accessible porta potties meeting ADA compliance requirements.',
    icon: '♿',
  },
  {
    name: 'Long-Term Rentals',
    slug: 'long-term-rentals',
    shortName: 'Long-Term',
    description: 'Monthly porta potty rental with weekly servicing for ongoing projects.',
    icon: '📅',
  },
]

export const PRICING = {
  standard: { daily: '$75-150', weekly: '$250-400', monthly: '$400-700' },
  deluxe: { daily: '$125-200', weekly: '$350-500', monthly: '$600-900' },
  ada: { daily: '$150-250', weekly: '$400-600', monthly: '$700-1,000' },
  luxury: { daily: '$500-1,500', weekly: '$2,000-5,000', monthly: 'Custom' },
}

export const TRUST_BADGES = [
  'Same-Day & Next-Day Delivery Available',
  'Event, Wedding & Construction Porta Potties',
  'Local Austin Permit Knowledge',
  'Clean, Serviced & Sanitized Units',
  'Serving All of Greater Austin & Central Texas',
]

export const NAV_LINKS = [
  { name: 'Services', href: '#services', hasDropdown: true },
  { name: 'Locations', href: '#locations', hasDropdown: true },
  { name: 'Pricing', href: '/pricing/' },
  { name: 'Contact', href: '/contact/' },
]

export const FAQS = [
  {
    question: 'How much does it cost to rent a porta potty in Austin?',
    answer: 'Standard porta potty rentals in Austin cost $75-150 per day. Weekly rentals range from $250-400. Luxury restroom trailers start at $500 per day. Pricing varies based on unit type, rental duration, and delivery location.',
  },
  {
    question: 'How many porta potties do I need for my event?',
    answer: 'General rule: 1 porta potty per 50-75 guests for a 4-hour event. Events serving alcohol should increase to 1 per 40 guests. Texas heat means more bathroom breaks—plan accordingly. For longer events, add more units.',
  },
  {
    question: 'Can I get same-day porta potty delivery in Austin?',
    answer: 'Yes, same-day delivery is available throughout Austin and Central Texas depending on availability. Call before noon for best results. We also offer next-day delivery for planned events.',
  },
  {
    question: 'Do I need a permit for a porta potty in Austin?',
    answer: 'Permits are required if the porta potty is placed on a public street or right-of-way in Austin. Private property placement (driveways, backyards, construction sites) typically doesn\'t require a permit. We can help guide you through permit requirements.',
  },
  {
    question: 'What about the Texas heat?',
    answer: 'We recommend shaded placement for standard units to keep them cooler. Our luxury restroom trailers include AC—essential for Texas weddings and summer events. We also ensure adequate ventilation and more frequent servicing during peak heat.',
  },
]
