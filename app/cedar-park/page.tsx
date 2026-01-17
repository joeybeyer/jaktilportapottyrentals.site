import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Porta Potty Rental Cedar Park TX | Events & Construction | Jaktil',
  description: 'Porta potty rental in Cedar Park, TX. Fast delivery for events, construction & parties. Clean units from $75/day. Call now.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/cedar-park/',
  },
}

const faqs = [
  {
    question: 'How much does a porta potty cost in Cedar Park?',
    answer: 'Standard units rent for $75-150/day in Cedar Park. Weekly rentals run $250-400.',
  },
  {
    question: 'Do you serve the H-E-B Center area?',
    answer: 'Yes, we serve all of Cedar Park including the H-E-B Center area, 183A corridor, and all surrounding neighborhoods.',
  },
  {
    question: 'Can I get same-day delivery?',
    answer: 'Yes, same-day delivery is available throughout Cedar Park depending on availability.',
  },
]

export default function CedarParkPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Porta Potty Rental"
        description="Porta potty rental in Cedar Park, TX for events, weddings, and construction sites."
        areaServed="Cedar Park TX"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Cedar Park', url: '/cedar-park/' },
      ]} />

      <Hero
        title="Porta Potty Rental in Cedar Park, TX"
        subtitle="Need porta potty rental in Cedar Park? We deliver clean, reliable portable toilets throughout Cedar Park and the 183A corridor for outdoor events, construction projects, and special occasions. Whether you're hosting a backyard party near Brushy Creek, managing a construction site, or planning an event at one of Cedar Park's parks, our team provides fast delivery with transparent pricing."
        showTrustBadges={false}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Looking for reliable <Link href="/" className="text-accent hover:underline">porta potty rental</Link> in Cedar Park? We serve the entire 183A corridor with same-day delivery available for <Link href="/event-porta-potty-rental/" className="text-accent hover:underline">events</Link>, <Link href="/construction-site-rentals/" className="text-accent hover:underline">construction sites</Link>, and residential needs.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Serving Cedar Park & Surrounding Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">Cedar Park (all areas)</div>
              <div className="bg-white p-4 rounded-lg text-center"><Link href="/leander/" className="hover:text-accent">Leander</Link> (nearby)</div>
              <div className="bg-white p-4 rounded-lg text-center">Brushy Creek</div>
              <div className="bg-white p-4 rounded-lg text-center">Anderson Mill</div>
              <div className="bg-white p-4 rounded-lg text-center">Avery Ranch (nearby)</div>
              <div className="bg-white p-4 rounded-lg text-center">Volente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Cedar Park Event & Construction Services</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">H-E-B Center Events</h3>
                <p className="text-body-text">The H-E-B Center brings concerts, hockey games, and events to Cedar Park. We serve event vendors, tailgaters, and overflow needs.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Residential Events</h3>
                <p className="text-body-text">Cedar Park&apos;s suburban neighborhoods are perfect for outdoor parties. Our porta potties supplement your home facilities for larger gatherings.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Construction Sites</h3>
                <p className="text-body-text">New development throughout Cedar Park and along 183A means plenty of job sites needing <Link href="/construction-site-rentals/" className="text-accent hover:underline">OSHA-compliant portable toilets</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Cedar Park Porta Potty Pricing</h2>
            <div className="overflow-x-auto mb-6">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Unit Type</th>
                    <th>Daily</th>
                    <th>Weekly</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Standard</td><td>$75-150</td><td>$250-400</td></tr>
                  <tr><td>Deluxe w/ Sink</td><td>$125-200</td><td>$350-500</td></tr>
                  <tr><td>ADA Accessible</td><td>$150-250</td><td>$400-600</td></tr>
                  <tr><td>Luxury Trailer</td><td>$500-1,500</td><td>$2,000+</td></tr>
                </tbody>
              </table>
            </div>
            <a href={PHONE_NUMBER_LINK} className="text-accent font-semibold hover:underline">
              Call for Cedar Park porta potty rental
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Cedar Park Porta Potty FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Your Porta Potty Delivered in Cedar Park"
        subtitle="Fast service. Clean units. Local expertise."
      />
    </>
  )
}
