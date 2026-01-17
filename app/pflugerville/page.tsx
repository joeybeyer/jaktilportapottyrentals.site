import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Porta Potty Rental Pflugerville TX | Same-Day Delivery | Jaktil',
  description: 'Porta potty rental in Pflugerville, TX. Fast delivery for events, construction & parties. Clean units, fair pricing. Serving all of Pflugerville.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/pflugerville/',
  },
}

const faqs = [
  {
    question: 'How much does a porta potty cost in Pflugerville?',
    answer: 'Standard units rent for $75-150/day in Pflugerville. Weekly rentals run $250-400.',
  },
  {
    question: 'Do you deliver to Lake Pflugerville?',
    answer: 'Yes, we serve all of Pflugerville including Lake Pflugerville, Wells Branch, and all surrounding neighborhoods.',
  },
  {
    question: 'Can I get same-day delivery?',
    answer: 'Yes, same-day delivery is available throughout Pflugerville depending on availability.',
  },
]

export default function PflugervillePage() {
  return (
    <>
      <ServiceSchema
        serviceName="Porta Potty Rental"
        description="Porta potty rental in Pflugerville, TX for events, weddings, and construction sites."
        areaServed="Pflugerville TX"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Pflugerville', url: '/pflugerville/' },
      ]} />

      <Hero
        title="Porta Potty Rental in Pflugerville, TX"
        subtitle="Looking for porta potty rental in Pflugerville? We provide fast, affordable portable toilet delivery throughout Pflugerville for events, construction sites, and private parties. From Lake Pflugerville gatherings to backyard parties in the growing residential areas and construction sites along 130 and 45, our local team delivers reliable service with no surprises."
        showTrustBadges={false}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Need reliable <Link href="/" className="text-accent hover:underline">porta potty rental</Link> in Pflugerville? We serve all of northeast Travis County with same-day delivery for <Link href="/event-porta-potty-rental/" className="text-accent hover:underline">events</Link>, <Link href="/construction-site-rentals/" className="text-accent hover:underline">construction sites</Link>, and residential parties.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Serving Pflugerville</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">Pflugerville (all areas)</div>
              <div className="bg-white p-4 rounded-lg text-center">Wells Branch</div>
              <div className="bg-white p-4 rounded-lg text-center">Blackhawk</div>
              <div className="bg-white p-4 rounded-lg text-center">Falcon Pointe</div>
              <div className="bg-white p-4 rounded-lg text-center">Bohls Place</div>
              <div className="bg-white p-4 rounded-lg text-center">Spring Trails</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Pflugerville Porta Potty Services</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Lake Pflugerville Events</h3>
                <p className="text-body-text"><Link href="/wedding-restroom-rentals/" className="text-accent hover:underline">Weddings</Link>, family reunions, and community events at Lake Pflugerville need portable restroom solutions. We&apos;ve got you covered.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Residential Growth</h3>
                <p className="text-body-text">Pflugerville&apos;s booming population means more backyard parties, graduation celebrations, and family events.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Construction Boom</h3>
                <p className="text-body-text">New neighborhoods and commercial development require job site sanitation. <Link href="/long-term-rentals/" className="text-accent hover:underline">Weekly servicing included</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Pflugerville Porta Potty Pricing</h2>
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
              Call for Pflugerville porta potty delivery
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Pflugerville Porta Potty FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Your Porta Potty Delivered in Pflugerville"
        subtitle="Fast service. Clean units. Local expertise."
      />
    </>
  )
}
