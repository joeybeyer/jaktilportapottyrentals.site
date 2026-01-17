import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Porta Potty Rental Georgetown TX | Historic Downtown & Events | Jaktil',
  description: 'Porta potty rental in Georgetown, TX. Perfect for downtown events, weddings & construction. Same-day delivery available. Call for pricing.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/georgetown/',
  },
}

const faqs = [
  {
    question: 'How much does a porta potty cost in Georgetown?',
    answer: 'Standard units rent for $75-150/day in Georgetown. Weekly rentals run $250-400.',
  },
  {
    question: 'Do you serve Sun City?',
    answer: 'Yes, we serve all of Georgetown including Sun City, Berry Creek, historic downtown, and all surrounding areas.',
  },
  {
    question: 'Can I get same-day delivery?',
    answer: 'Yes, same-day delivery is available throughout Georgetown depending on availability.',
  },
]

export default function GeorgetownPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Porta Potty Rental"
        description="Porta potty rental in Georgetown, TX for events, weddings, and construction sites."
        areaServed="Georgetown TX"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Georgetown', url: '/georgetown/' },
      ]} />

      <Hero
        title="Porta Potty Rental in Georgetown, TX"
        subtitle="Need porta potty rental in Georgetown? From historic downtown square events to Hill Country weddings at local vineyards and the ongoing construction throughout Williamson County's seat, we provide fast, reliable portable toilet delivery. Georgetown's charm and growth create unique needs—we understand the logistics of serving both historic venues and new developments."
        showTrustBadges={false}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Looking for <Link href="/" className="text-accent hover:underline">porta potty rental</Link> in Georgetown? We serve northern Williamson County with same-day delivery for <Link href="/event-porta-potty-rental/" className="text-accent hover:underline">events</Link>, <Link href="/wedding-restroom-rentals/" className="text-accent hover:underline">weddings</Link>, and <Link href="/construction-site-rentals/" className="text-accent hover:underline">construction sites</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Serving Georgetown & Northern Williamson County</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">Georgetown (all areas)</div>
              <div className="bg-white p-4 rounded-lg text-center">Sun City</div>
              <div className="bg-white p-4 rounded-lg text-center">Berry Creek</div>
              <div className="bg-white p-4 rounded-lg text-center">Serenada</div>
              <div className="bg-white p-4 rounded-lg text-center">Weir</div>
              <div className="bg-white p-4 rounded-lg text-center">Jarrell (nearby)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Georgetown Services</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Downtown Square Events</h3>
                <p className="text-body-text">Georgetown&apos;s beautiful historic square hosts festivals, markets, and community events. We provide portable restrooms that work around the historic setting.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Hill Country Weddings</h3>
                <p className="text-body-text">Vineyards and ranches near Georgetown host beautiful outdoor weddings. Our <Link href="/luxury-restroom-trailers/" className="text-accent hover:underline">luxury restroom trailers</Link> match the elegance of your venue.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Sun City & Retirement Community Events</h3>
                <p className="text-body-text">Large community gatherings and events need supplemental restroom facilities. We include <Link href="/ada-accessible-units/" className="text-accent hover:underline">ADA units</Link> for accessibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Georgetown Porta Potty Pricing</h2>
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
              Call for Georgetown porta potty rental
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Georgetown Porta Potty FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Your Porta Potty Delivered in Georgetown"
        subtitle="Fast service. Clean units. Local expertise."
      />
    </>
  )
}
