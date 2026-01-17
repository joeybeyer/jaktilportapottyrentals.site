import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Porta Potty Rental San Marcos TX | Texas State & River Events | Jaktil',
  description: 'Porta potty rental in San Marcos, TX. Events, river parties, Texas State, construction. Same-day delivery. Call now.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/san-marcos/',
  },
}

const faqs = [
  {
    question: 'How much does a porta potty cost in San Marcos?',
    answer: 'Standard units rent for $75-150/day in San Marcos. Weekly rentals run $250-400.',
  },
  {
    question: 'Do you serve Texas State area?',
    answer: 'Yes, we serve all of San Marcos including Texas State campus area, the outlets, and all surrounding neighborhoods.',
  },
  {
    question: 'Can I get same-day delivery?',
    answer: 'Yes, same-day delivery is available throughout San Marcos depending on availability.',
  },
]

export default function SanMarcosPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Porta Potty Rental"
        description="Porta potty rental in San Marcos, TX for events, weddings, and construction sites."
        areaServed="San Marcos TX"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'San Marcos', url: '/san-marcos/' },
      ]} />

      <Hero
        title="Porta Potty Rental in San Marcos, TX"
        subtitle="Need porta potty rental in San Marcos? Home to Texas State University, the beautiful San Marcos River, and a thriving events scene, San Marcos has unique portable toilet needs. From river tubing outfitters to graduation parties, downtown festivals, and the constant construction of a growing college town, we provide reliable service throughout Hays County."
        showTrustBadges={false}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Looking for <Link href="/" className="text-accent hover:underline">porta potty rental</Link> in San Marcos? We serve the college town and Hays County with same-day delivery for <Link href="/event-porta-potty-rental/" className="text-accent hover:underline">events</Link>, <Link href="/construction-site-rentals/" className="text-accent hover:underline">construction sites</Link>, and river-area gatherings.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Serving San Marcos & Hays County</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">San Marcos (all areas)</div>
              <div className="bg-white p-4 rounded-lg text-center">Texas State campus</div>
              <div className="bg-white p-4 rounded-lg text-center">Outlet Mall corridor</div>
              <div className="bg-white p-4 rounded-lg text-center">Blanco River area</div>
              <div className="bg-white p-4 rounded-lg text-center">Wimberley (nearby)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">San Marcos Services</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">River Events</h3>
                <p className="text-body-text">San Marcos River gatherings, tubing company staging areas, and riverside events all need portable restroom solutions.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Texas State University</h3>
                <p className="text-body-text">Graduation parties, tailgates, and university-adjacent <Link href="/event-porta-potty-rental/" className="text-accent hover:underline">events</Link> throughout the year.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Downtown & Outlet Events</h3>
                <p className="text-body-text">The outlets and downtown square host events drawing visitors from throughout Central Texas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">San Marcos Porta Potty Pricing</h2>
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
              Call for San Marcos porta potty rental
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="San Marcos Porta Potty FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Your Porta Potty Delivered in San Marcos"
        subtitle="Fast service. Clean units. Local expertise."
      />
    </>
  )
}
