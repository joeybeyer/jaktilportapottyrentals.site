import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Porta Potty Rental Buda TX | South Austin Area | Jaktil',
  description: 'Porta potty rental in Buda, TX. Fast delivery for events, construction & parties. Clean units. Call for same-day availability.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/buda/',
  },
}

const faqs = [
  {
    question: 'How much does a porta potty cost in Buda?',
    answer: 'Standard units rent for $75-150/day in Buda. Weekly rentals run $250-400.',
  },
  {
    question: 'Do you serve Sunfield?',
    answer: 'Yes, we serve all of Buda including Sunfield, Garlic Creek, Ruby Ranch, and all surrounding neighborhoods.',
  },
  {
    question: 'Can I get same-day delivery?',
    answer: 'Yes, same-day delivery is available throughout Buda depending on availability.',
  },
]

export default function BudaPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Porta Potty Rental"
        description="Porta potty rental in Buda, TX for events, weddings, and construction sites."
        areaServed="Buda TX"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Buda', url: '/buda/' },
      ]} />

      <Hero
        title="Porta Potty Rental in Buda, TX"
        subtitle="Looking for porta potty rental in Buda? Just south of Austin along I-35, Buda's growing community needs reliable portable toilet services for construction, events, and private parties. We serve all of Buda and northern Hays County with same-day delivery available."
        showTrustBadges={false}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Need <Link href="/" className="text-accent hover:underline">porta potty rental</Link> in Buda? We serve northern Hays County with same-day delivery for <Link href="/event-porta-potty-rental/" className="text-accent hover:underline">events</Link>, <Link href="/construction-site-rentals/" className="text-accent hover:underline">construction sites</Link>, and residential parties.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Serving Buda</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">Buda (all areas)</div>
              <div className="bg-white p-4 rounded-lg text-center">Sunfield</div>
              <div className="bg-white p-4 rounded-lg text-center">Garlic Creek</div>
              <div className="bg-white p-4 rounded-lg text-center">Ruby Ranch</div>
              <div className="bg-white p-4 rounded-lg text-center">Elliott Ranch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Buda Services</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Main Street Events</h3>
                <p className="text-body-text">Downtown Buda&apos;s charming Main Street hosts community events and festivals throughout the year.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Residential Growth</h3>
                <p className="text-body-text">Buda&apos;s expanding neighborhoods mean more backyard parties and family gatherings.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Wiener Dog Races</h3>
                <p className="text-body-text">Buda&apos;s famous Buda Wiener Dog Races and related <Link href="/event-porta-potty-rental/" className="text-accent hover:underline">events</Link> draw crowds that need portable restroom facilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Buda Porta Potty Pricing</h2>
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
              Call for Buda porta potty delivery
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Buda Porta Potty FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Your Porta Potty Delivered in Buda"
        subtitle="Fast service. Clean units. Local expertise."
      />
    </>
  )
}
