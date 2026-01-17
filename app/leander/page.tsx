import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Porta Potty Rental Leander TX | Fast Growing Community | Jaktil',
  description: 'Porta potty rental in Leander, TX. Fast delivery for events, construction & parties. Clean units. Call for same-day availability.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/leander/',
  },
}

const faqs = [
  {
    question: 'How much does a porta potty cost in Leander?',
    answer: 'Standard units rent for $75-150/day in Leander. Weekly rentals run $250-400.',
  },
  {
    question: 'Do you serve Crystal Falls?',
    answer: 'Yes, we serve all of Leander including Crystal Falls, Travisso, Cold Springs, and all surrounding neighborhoods.',
  },
  {
    question: 'Can I get same-day delivery?',
    answer: 'Yes, same-day delivery is available throughout Leander depending on availability.',
  },
]

export default function LeanderPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Porta Potty Rental"
        description="Porta potty rental in Leander, TX for events, weddings, and construction sites."
        areaServed="Leander TX"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Leander', url: '/leander/' },
      ]} />

      <Hero
        title="Porta Potty Rental in Leander, TX"
        subtitle="Looking for porta potty rental in Leander? One of Texas's fastest-growing cities needs reliable portable toilet services for its booming construction, new neighborhoods, and community events. We deliver throughout Leander and the 183A corridor with same-day availability and transparent pricing."
        showTrustBadges={false}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Need <Link href="/" className="text-accent hover:underline">porta potty rental</Link> in Leander? We serve one of Texas&apos;s fastest-growing cities with same-day delivery for <Link href="/event-porta-potty-rental/" className="text-accent hover:underline">events</Link>, <Link href="/construction-site-rentals/" className="text-accent hover:underline">construction sites</Link>, and residential parties.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Serving Leander</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">Leander (all areas)</div>
              <div className="bg-white p-4 rounded-lg text-center">Crystal Falls</div>
              <div className="bg-white p-4 rounded-lg text-center">Travisso</div>
              <div className="bg-white p-4 rounded-lg text-center">Cold Springs</div>
              <div className="bg-white p-4 rounded-lg text-center">Mason Hills</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Leander Services</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Construction Everywhere</h3>
                <p className="text-body-text">Leander&apos;s explosive growth means construction sites on every corner. <Link href="/construction-site-rentals/" className="text-accent hover:underline">OSHA-compliant portable toilets</Link> keep your job site legal.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">New Community Events</h3>
                <p className="text-body-text">New neighborhoods and parks mean new community gatherings, block parties, and <Link href="/event-porta-potty-rental/" className="text-accent hover:underline">events</Link>.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Austin FC Training Facility</h3>
                <p className="text-body-text">The St. David&apos;s Performance Center brings events and activity to Leander.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Leander Porta Potty Pricing</h2>
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
              Call for Leander porta potty delivery
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Leander Porta Potty FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Your Porta Potty Delivered in Leander"
        subtitle="Fast service. Clean units. Local expertise."
      />
    </>
  )
}
