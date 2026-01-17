import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Porta Potty Rental Lakeway TX | Lake Travis Events | Jaktil',
  description: 'Porta potty rental in Lakeway, TX. Lake Travis events, weddings & parties. Luxury trailers available. Call for pricing.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/lakeway/',
  },
}

const faqs = [
  {
    question: 'How much does a porta potty cost in Lakeway?',
    answer: 'Standard units rent for $75-150/day in Lakeway. Luxury restroom trailers for upscale events start at $500/day.',
  },
  {
    question: 'Do you serve Lake Travis area?',
    answer: 'Yes, we serve all of Lakeway including The Hills, Bee Cave, Spicewood, Lago Vista, and the Lake Travis area.',
  },
  {
    question: 'Do you have luxury trailers for weddings?',
    answer: 'Yes, we specialize in luxury restroom trailers for upscale Lakeway and Lake Travis weddings.',
  },
]

export default function LakewayPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Porta Potty Rental"
        description="Porta potty rental in Lakeway, TX for events, weddings, and Lake Travis gatherings."
        areaServed="Lakeway TX"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Lakeway', url: '/lakeway/' },
      ]} />

      <Hero
        title="Porta Potty Rental in Lakeway, TX"
        subtitle="Looking for porta potty rental in Lakeway? Nestled on Lake Travis in the Hill Country west of Austin, Lakeway hosts some of Central Texas's most beautiful outdoor events and weddings. We serve Lakeway and the Lake Travis area with options from standard units to luxury restroom trailers that match the elegance of your venue."
        showTrustBadges={false}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Need <Link href="/" className="text-accent hover:underline">porta potty rental</Link> in Lakeway? We specialize in serving the Lake Travis area with options from standard units for casual gatherings to <Link href="/luxury-restroom-trailers/" className="text-accent hover:underline">luxury restroom trailers</Link> for upscale <Link href="/wedding-restroom-rentals/" className="text-accent hover:underline">Hill Country weddings</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Serving Lakeway & Lake Travis Area</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">Lakeway</div>
              <div className="bg-white p-4 rounded-lg text-center">The Hills</div>
              <div className="bg-white p-4 rounded-lg text-center">Bee Cave</div>
              <div className="bg-white p-4 rounded-lg text-center">Spicewood</div>
              <div className="bg-white p-4 rounded-lg text-center">Lago Vista</div>
              <div className="bg-white p-4 rounded-lg text-center">Marble Falls (nearby)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Lakeway Premium Services</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Lake Travis Weddings</h3>
                <p className="text-body-text">Lakeway&apos;s stunning waterfront venues and Hill Country ranches host elegant outdoor <Link href="/wedding-restroom-rentals/" className="text-accent hover:underline">weddings</Link>. Our <Link href="/luxury-restroom-trailers/" className="text-accent hover:underline">luxury restroom trailers</Link> provide a premium guest experience.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Lakefront Events</h3>
                <p className="text-body-text">Private parties, corporate retreats, and community events on Lake Travis benefit from our portable restroom solutions.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Upscale Residential</h3>
                <p className="text-body-text">Lakeway&apos;s beautiful homes host sophisticated gatherings that deserve better than basic porta potties.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Lakeway Porta Potty Pricing</h2>
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
              Call for Lakeway porta potty rental
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Lakeway Porta Potty FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Your Porta Potty Delivered in Lakeway"
        subtitle="Premium service for Lake Travis events and weddings."
      />
    </>
  )
}
