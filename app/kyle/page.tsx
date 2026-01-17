import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Porta Potty Rental Kyle TX | South Austin Corridor | Jaktil',
  description: 'Porta potty rental in Kyle, TX. Fast delivery for events, construction & parties. Clean units. Call for pricing.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/kyle/',
  },
}

const faqs = [
  {
    question: 'How much does a porta potty cost in Kyle?',
    answer: 'Standard units rent for $75-150/day in Kyle. Weekly rentals run $250-400.',
  },
  {
    question: 'Do you serve Plum Creek?',
    answer: 'Yes, we serve all of Kyle including Plum Creek, Waterleaf, Hometown Kyle, and all surrounding areas.',
  },
  {
    question: 'Can I get same-day delivery?',
    answer: 'Yes, same-day delivery is available throughout Kyle depending on availability.',
  },
]

export default function KylePage() {
  return (
    <>
      <ServiceSchema
        serviceName="Porta Potty Rental"
        description="Porta potty rental in Kyle, TX for events, weddings, and construction sites."
        areaServed="Kyle TX"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Kyle', url: '/kyle/' },
      ]} />

      <Hero
        title="Porta Potty Rental in Kyle, TX"
        subtitle="Need porta potty rental in Kyle? Located along the booming I-35 corridor south of Austin, Kyle's rapid growth creates strong demand for portable toilet services—from construction sites to backyard parties. We serve all of Kyle and southern Hays County with fast delivery and fair pricing."
        showTrustBadges={false}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Looking for <Link href="/" className="text-accent hover:underline">porta potty rental</Link> in Kyle? We serve the I-35 corridor south of <Link href="/austin/" className="text-accent hover:underline">Austin</Link> with same-day delivery for <Link href="/event-porta-potty-rental/" className="text-accent hover:underline">events</Link>, <Link href="/construction-site-rentals/" className="text-accent hover:underline">construction sites</Link>, and residential parties.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Serving Kyle & Southern Hays County</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">Kyle (all areas)</div>
              <div className="bg-white p-4 rounded-lg text-center">Plum Creek</div>
              <div className="bg-white p-4 rounded-lg text-center">Waterleaf</div>
              <div className="bg-white p-4 rounded-lg text-center">Hometown Kyle</div>
              <div className="bg-white p-4 rounded-lg text-center">Steeplechase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Kyle Services</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Residential Events</h3>
                <p className="text-body-text">Kyle&apos;s family-friendly master-planned communities host graduation parties, reunions, and neighborhood events.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Construction Growth</h3>
                <p className="text-body-text">New development along I-35 and throughout Kyle requires <Link href="/construction-site-rentals/" className="text-accent hover:underline">job site sanitation</Link>.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Pie Capital Events</h3>
                <p className="text-body-text">Kyle&apos;s unique festivals and community events draw visitors from throughout Central Texas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Kyle Porta Potty Pricing</h2>
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
              Call for Kyle porta potty rental
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Kyle Porta Potty FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Your Porta Potty Delivered in Kyle"
        subtitle="Fast service. Clean units. Local expertise."
      />
    </>
  )
}
