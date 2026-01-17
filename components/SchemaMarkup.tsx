import { SITE_NAME, SITE_URL, PHONE_NUMBER, CITIES, BUSINESS_ADDRESS } from '@/lib/constants'

interface SchemaMarkupProps {
  type: 'LocalBusiness' | 'Service' | 'FAQPage' | 'BreadcrumbList'
  data?: any
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    url: SITE_URL,
    telephone: `+1-${PHONE_NUMBER}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_ADDRESS.street,
      addressLocality: BUSINESS_ADDRESS.city,
      addressRegion: BUSINESS_ADDRESS.state,
      postalCode: BUSINESS_ADDRESS.zip,
      addressCountry: 'US',
    },
    areaServed: CITIES.map((city) => `${city.name} TX`),
    description: 'Fast, affordable porta potty rental in Austin, TX with same-day delivery for events, weddings, construction sites, and parties.',
    openingHours: 'Mo-Su 00:00-23:59',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Porta Potty Rental Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Standard Porta Potty Rental' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deluxe Porta Potty with Sink' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ADA Accessible Porta Potty' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Luxury Restroom Trailer Rental' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction Site Portable Toilet' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ServiceSchemaProps {
  serviceName: string
  description: string
  areaServed?: string
}

export function ServiceSchema({ serviceName, description, areaServed = 'Austin TX' }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
    },
    areaServed,
    description,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
