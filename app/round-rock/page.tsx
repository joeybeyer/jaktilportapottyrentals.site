import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Porta Potty Rental Round Rock TX | Same-Day Delivery | Jaktil',
  description: 'Porta potty rental in Round Rock, TX. Fast delivery for events, weddings & construction. Clean units, transparent pricing. Call for same-day availability.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/round-rock/',
  },
}

const faqs = [
  {
    question: 'How much does a porta potty cost in Round Rock?',
    answer: 'Standard units rent for $75-150/day in Round Rock. Weekly rentals run $250-400. Prices may vary based on delivery location.',
  },
  {
    question: 'Do you deliver to Dell Diamond area?',
    answer: 'Yes, we serve all of Round Rock including the Dell Diamond area, Old Settlers Park, and all surrounding neighborhoods.',
  },
  {
    question: 'Can I get same-day delivery in Round Rock?',
    answer: 'Yes, same-day delivery is available throughout Round Rock and Williamson County depending on availability.',
  },
]

export default function RoundRockPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Porta Potty Rental"
        description="Porta potty rental in Round Rock, TX for events, weddings, and construction sites."
        areaServed="Round Rock TX"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Round Rock', url: '/round-rock/' },
      ]} />

      <Hero
        title="Porta Potty Rental in Round Rock, TX"
        subtitle="Looking for reliable porta potty rental in Round Rock? We deliver clean, affordable portable toilets throughout Williamson County for outdoor events, construction sites, backyard parties, and weddings. From downtown Round Rock venues to Dell Diamond events and Old Settlers Park gatherings, our team provides same-day delivery with local expertise."
        showTrustBadges={false}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Need a porta potty in Round Rock? Whether you&apos;re hosting an event at Old Settlers Park, managing a <Link href="/construction-site-rentals/" className="text-accent hover:underline">construction site</Link> in the booming I-35 corridor, or planning a backyard party, we provide <Link href="/" className="text-accent hover:underline">fast, reliable portable toilet rental</Link> throughout Williamson County.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Serving All of Round Rock & Williamson County</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">Round Rock (all areas)</div>
              <div className="bg-white p-4 rounded-lg text-center">Hutto</div>
              <div className="bg-white p-4 rounded-lg text-center">Taylor</div>
              <div className="bg-white p-4 rounded-lg text-center">Brushy Creek</div>
              <div className="bg-white p-4 rounded-lg text-center">Forest Creek</div>
              <div className="bg-white p-4 rounded-lg text-center">Teravista</div>
              <div className="bg-white p-4 rounded-lg text-center">Paloma Lake</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Uses */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Popular Round Rock Uses</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Residential Events</h3>
                <p className="text-body-text">Round Rock&apos;s family-friendly neighborhoods host graduation parties, backyard weddings, and family reunions. Our portable toilets keep guests comfortable without overwhelming your home&apos;s bathrooms.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Dell Diamond & Sports Events</h3>
                <p className="text-body-text">Express games, tournaments, and sporting events at Dell Diamond and surrounding facilities often need supplemental restrooms.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Construction Sites</h3>
                <p className="text-body-text">Round Rock&apos;s explosive growth means construction sites everywhere. <Link href="/construction-site-rentals/" className="text-accent hover:underline">OSHA-compliant portable toilets</Link> with weekly servicing keep your job site legal and your crew happy.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Old Settlers Park Events</h3>
                <p className="text-body-text"><Link href="/wedding-restroom-rentals/" className="text-accent hover:underline">Weddings</Link>, company picnics, and community events at Old Settlers Park benefit from our portable restroom solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Round Rock Porta Potty Pricing</h2>
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
              Call for exact Round Rock pricing
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Round Rock Porta Potty FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Your Porta Potty Delivered in Round Rock"
        subtitle="Fast service. Clean units. Local expertise."
      />
    </>
  )
}
