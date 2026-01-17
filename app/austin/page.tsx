import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import PricingTable from '@/components/PricingTable'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK, SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Porta Potty Rental Austin TX | Same-Day Delivery | From $75/Day',
  description: 'Professional porta potty rental in Austin, TX. Same-day delivery for events, weddings & construction. Clean units from $75/day. Call now for instant quote.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/austin/',
  },
}

const faqs = [
  {
    question: 'How much does a porta potty cost in Austin?',
    answer: 'Standard units rent for $75-150/day in Austin. Weekly rentals run $250-400. Luxury trailers start at $500/day.',
  },
  {
    question: 'Do I need a permit for a porta potty in Austin?',
    answer: 'Permits are required for street or sidewalk placement in Austin. Private property (driveways, backyards) typically doesn\'t require a permit.',
  },
  {
    question: 'Can I get same-day delivery?',
    answer: 'Yes, same-day delivery is available throughout Austin depending on availability. Call before noon for best results.',
  },
  {
    question: 'How many porta potties do I need?',
    answer: 'General rule: 1 unit per 50-75 guests for a 4-hour event. Events with alcohol need 1 per 40 guests. Texas heat = more bathroom breaks.',
  },
  {
    question: 'What about the heat?',
    answer: 'We recommend shaded placement when possible and ensure all units are well-ventilated. Luxury trailers include AC.',
  },
]

export default function AustinPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Porta Potty Rental"
        description="Same-day porta potty rental in Austin, TX for events, weddings, and construction sites."
        areaServed="Austin TX"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Austin', url: '/austin/' },
      ]} />

      <Hero
        title="Porta Potty Rental in Austin, TX"
        subtitle="Need a porta potty delivered today in Austin? We provide same-day porta potty rental throughout Austin for outdoor events, construction sites, weddings, and backyard parties. From standard units starting at $75/day to luxury restroom trailers for upscale Hill Country weddings, we deliver clean, serviced portable toilets with transparent pricing and no hidden fees."
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              If you need reliable <strong>porta potty rental in Austin</strong>, you&apos;re in the right place. From outdoor weddings in the Hill Country to <Link href="/construction-site-rentals/" className="text-accent hover:underline">construction projects downtown</Link> and festival setups at Zilker Park, we provide fast, affordable portable toilet rentals designed for Central Texas conditions.
            </p>
            <p className="text-body-text mb-6">
              Austin events often come with challenges — limited venue restrooms, Texas heat, permit requirements, and tight turnaround times. Our team understands City of Austin regulations and local logistics, helping you avoid delays and last-minute problems.
            </p>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Portable Toilet Options in Austin</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-primary">Standard Porta Potty</h3>
                  <p className="text-sm text-body-text">Small events, backyard parties, short-term needs</p>
                </div>
                <span className="text-accent font-bold">$75-150/day</span>
              </div>
              <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-primary">Deluxe Unit with Hand Wash</h3>
                  <p className="text-sm text-body-text">Weddings, corporate events, longer rentals</p>
                </div>
                <span className="text-accent font-bold">$125-200/day</span>
              </div>
              <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-primary">ADA Accessible Porta Potty</h3>
                  <p className="text-sm text-body-text">Public events, compliance requirements</p>
                </div>
                <span className="text-accent font-bold">$150-250/day</span>
              </div>
              <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-primary">Luxury Restroom Trailer</h3>
                  <p className="text-sm text-body-text">Upscale weddings, VIP events</p>
                </div>
                <span className="text-accent font-bold">$500-1,500/day</span>
              </div>
            </div>
            <p className="text-center mt-6">
              <a href={PHONE_NUMBER_LINK} className="text-accent font-semibold hover:underline">
                Not sure what you need? Call and speak with a local Austin porta potty expert.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Why Austin Events Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Why Austin Events Choose Us</h2>
            <p className="mb-4">Austin&apos;s legendary event scene—from ACL and SXSW to Hill Country weddings and UT tailgates—means you need a porta potty provider who understands Central Texas logistics.</p>

            <h3 className="font-semibold text-primary mt-6 mb-3">We handle:</h3>
            <ul className="space-y-2 mb-6">
              <li>• City of Austin permit requirements</li>
              <li>• Street placement coordination</li>
              <li>• Park and venue rules (Zilker, Auditorium Shores)</li>
              <li>• Same-day emergency delivery</li>
              <li>• Texas heat considerations (shaded placement, ventilation)</li>
            </ul>

            <h3 className="font-semibold text-primary mt-6 mb-3">Our porta potties are perfect for:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>• <Link href="/wedding-restroom-rentals/" className="text-accent hover:underline">Outdoor weddings</Link> & receptions</li>
                <li>• Backyard parties & graduation parties</li>
                <li>• <Link href="/event-porta-potty-rental/" className="text-accent hover:underline">Festivals</Link> (ACL, SXSW, ROT Rally, Pecan Street)</li>
              </ul>
              <ul className="space-y-2">
                <li>• <Link href="/construction-site-rentals/" className="text-accent hover:underline">Construction sites</Link> & renovation projects</li>
                <li>• Corporate events & company picnics</li>
                <li>• UT tailgating & Q2 Stadium events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Austin Neighborhoods We Serve</h2>
            <div className="overflow-x-auto">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Neighborhood</th>
                    <th>Common Uses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>South Austin/SoCo</strong></td><td>Weddings, backyard parties, Zilker events</td></tr>
                  <tr><td><strong>East Austin</strong></td><td>Festivals, construction, warehouse events</td></tr>
                  <tr><td><strong>Downtown</strong></td><td>Corporate events, SXSW, construction</td></tr>
                  <tr><td><strong>North Austin/Domain</strong></td><td>Tech company events, corporate</td></tr>
                  <tr><td><strong>Mueller</strong></td><td>Community gatherings, residential parties</td></tr>
                  <tr><td><strong>West Austin/Westlake</strong></td><td>Upscale events, Hill Country weddings</td></tr>
                  <tr><td><strong>Hyde Park/North Loop</strong></td><td>Neighborhood events, residential</td></tr>
                  <tr><td><strong>South Congress</strong></td><td>Restaurant events, retail</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Same-Day Delivery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Same-Day Delivery Across Greater Austin</h2>
            <p className="mb-4 font-semibold">We serve all of Travis County and beyond:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-light-gray p-3 rounded-lg text-center">Austin (all neighborhoods)</div>
              <div className="bg-light-gray p-3 rounded-lg text-center">Pflugerville</div>
              <div className="bg-light-gray p-3 rounded-lg text-center">Manor</div>
              <div className="bg-light-gray p-3 rounded-lg text-center">Del Valle</div>
              <div className="bg-light-gray p-3 rounded-lg text-center">Bee Cave</div>
              <div className="bg-light-gray p-3 rounded-lg text-center"><Link href="/lakeway/" className="hover:text-accent">Lakeway</Link></div>
              <div className="bg-light-gray p-3 rounded-lg text-center">West Lake Hills</div>
              <div className="bg-light-gray p-3 rounded-lg text-center">Rollingwood</div>
              <div className="bg-light-gray p-3 rounded-lg text-center">Sunset Valley</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Austin Porta Potty Rental FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Your Porta Potty Delivered Today"
        subtitle="Don't let restroom logistics derail your Austin event. Call now for fast, affordable porta potty rental with expert local support."
      />
    </>
  )
}
