import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import PricingTable from '@/components/PricingTable'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { BreadcrumbSchema, FAQSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Porta Potty Rental Prices Austin TX | Transparent Pricing | Jaktil',
  description: 'Porta potty rental prices in Austin, TX. Standard units from $75/day, luxury trailers from $500/day. No hidden fees. Get your free quote today.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/pricing/',
  },
}

const faqs = [
  {
    question: 'What affects porta potty rental pricing?',
    answer: 'Pricing depends on unit type (standard vs luxury), rental duration, delivery location, and number of units. Longer rentals and multiple units typically qualify for discounts.',
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No. Our quotes include delivery, pickup, and supplies. Weekly servicing is included for rentals over 7 days. We\'ll always tell you the total cost upfront.',
  },
  {
    question: 'Do you offer discounts for multiple units?',
    answer: 'Yes, we offer volume discounts for multiple units and long-term rentals. Call us for a custom quote.',
  },
  {
    question: 'What\'s included in the rental price?',
    answer: 'All rentals include delivery, pickup, toilet paper, hand sanitizer, and fully stocked supplies. Weekly servicing is included for rentals over 7 days.',
  },
]

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Pricing', url: '/pricing/' },
      ]} />
      <FAQSchema faqs={faqs} />

      <Hero
        title="Porta Potty Rental Pricing in Austin, TX"
        subtitle="Transparent pricing with no hidden fees. All prices include delivery, pickup, and supplies. Weekly servicing included for rentals over 7 days."
        showTrustBadges={false}
      />

      {/* Main Pricing Table */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">Austin Porta Potty Rental Rates</h2>
            <p className="text-center text-body-text mb-8">
              Looking for <Link href="/austin/" className="text-accent hover:underline">porta potty rental in Austin</Link>? Here&apos;s our transparent pricing for all unit types.
            </p>
            <PricingTable showAll={true} />
            <p className="text-sm text-body-text mt-4 text-center">
              *Prices may vary based on delivery location and availability. Call for exact quote.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">What&apos;s Included in Every Rental</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl mb-3">🚚</div>
                <h3 className="font-semibold text-primary mb-2">Delivery & Pickup</h3>
                <p className="text-sm text-body-text">On-time delivery and pickup on your schedule</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl mb-3">🧻</div>
                <h3 className="font-semibold text-primary mb-2">Supplies</h3>
                <p className="text-sm text-body-text">Toilet paper and hand sanitizer fully stocked</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl mb-3">🧹</div>
                <h3 className="font-semibold text-primary mb-2">Clean Units</h3>
                <p className="text-sm text-body-text">Professionally cleaned and sanitized before delivery</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl mb-3">📅</div>
                <h3 className="font-semibold text-primary mb-2">Weekly Service</h3>
                <p className="text-sm text-body-text">Weekly pumping and cleaning for 7+ day rentals</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-semibold text-primary mb-2">Local Support</h3>
                <p className="text-sm text-body-text">Austin-based team ready to help</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold text-primary mb-2">No Hidden Fees</h3>
                <p className="text-sm text-body-text">The price we quote is the price you pay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Types */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Choose the Right Unit for Your Needs</h2>

            <div className="space-y-6">
              <div className="bg-light-gray p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Standard Porta Potty</h3>
                    <p className="text-body-text mb-4">Basic portable toilet with hand sanitizer. Perfect for backyard parties, small events, and short-term construction needs.</p>
                    <Link href="/event-porta-potty-rental/" className="text-accent hover:underline text-sm">Learn more about event rentals →</Link>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-accent">$75-150/day</p>
                    <p className="text-sm text-body-text">$250-400/week</p>
                  </div>
                </div>
              </div>

              <div className="bg-light-gray p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Deluxe with Hand Wash Station</h3>
                    <p className="text-body-text mb-4">Upgraded unit with hand washing station and mirror. Ideal for weddings, corporate events, and longer rentals.</p>
                    <Link href="/wedding-restroom-rentals/" className="text-accent hover:underline text-sm">Learn more about wedding rentals →</Link>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-accent">$125-200/day</p>
                    <p className="text-sm text-body-text">$350-500/week</p>
                  </div>
                </div>
              </div>

              <div className="bg-light-gray p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">ADA Accessible Unit</h3>
                    <p className="text-body-text mb-4">Wheelchair accessible with handrails and spacious interior. Required for public events and ADA compliance.</p>
                    <Link href="/ada-accessible-units/" className="text-accent hover:underline text-sm">Learn more about ADA units →</Link>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-accent">$150-250/day</p>
                    <p className="text-sm text-body-text">$400-600/week</p>
                  </div>
                </div>
              </div>

              <div className="bg-light-gray p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Luxury Restroom Trailer</h3>
                    <p className="text-body-text mb-4">Climate-controlled trailer with running water, flushing toilets, and elegant finishes. Perfect for upscale Hill Country weddings.</p>
                    <Link href="/luxury-restroom-trailers/" className="text-accent hover:underline text-sm">Learn more about luxury trailers →</Link>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-accent">$500-1,500/day</p>
                    <p className="text-sm text-body-text">$2,000-5,000/week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Pricing */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">Long-Term & Construction Pricing</h2>
            <p className="text-center text-body-text mb-8">
              Need porta potties for an extended project? Our <Link href="/long-term-rentals/" className="text-accent hover:underline">long-term rental program</Link> offers significant savings.
            </p>
            <div className="overflow-x-auto">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Unit Type</th>
                    <th>Monthly Rate</th>
                    <th>Service Included</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Standard</td><td>$400-700</td><td>Weekly</td></tr>
                  <tr><td>Deluxe w/ Sink</td><td>$600-900</td><td>Weekly</td></tr>
                  <tr><td>ADA Accessible</td><td>$700-1,000</td><td>Weekly</td></tr>
                  <tr><td>Multiple Units</td><td>Custom</td><td>Custom</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-center mt-4">
              <Link href="/construction-site-rentals/" className="text-accent hover:underline">
                View construction site rental details →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Pricing FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Your Free Quote"
        subtitle="Call now for exact pricing based on your specific needs. No obligation, no hidden fees."
      />
    </>
  )
}
