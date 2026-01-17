import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Event Porta Potty Rental Austin TX | Weddings, Festivals, Parties | Jaktil',
  description: 'Event porta potty rental in Austin. ACL, SXSW, weddings, backyard parties. Clean units from $75/day. Free quantity consultation. Call now.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/event-porta-potty-rental/',
  },
}

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer: 'Book 2-4 weeks ahead for best availability. Festival season (March for SXSW, October for ACL) and wedding season (spring/fall) book fast—plan early.',
  },
  {
    question: 'What if my guest count changes?',
    answer: 'Call us. We can often add or remove units up to 48 hours before your event depending on availability.',
  },
  {
    question: 'Do you deliver to parks?',
    answer: 'Yes, with proper permits. We can advise on City of Austin and Travis County park requirements for porta potty placement.',
  },
  {
    question: 'What\'s included in the rental?',
    answer: 'Delivery, pickup, and fully stocked units (toilet paper, hand sanitizer). For multi-day events, we can arrange servicing.',
  },
]

export default function EventPortaPottyRentalPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Event Porta Potty Rental"
        description="Event porta potty rental in Austin for outdoor events, festivals, weddings, and parties."
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Event Porta Potty Rental', url: '/event-porta-potty-rental/' },
      ]} />

      <Hero
        title="Event Porta Potty Rental in Austin, TX"
        subtitle="Hosting an outdoor event in Austin? Don't let bathroom logistics ruin your day. Our event porta potty rentals provide clean, convenient restroom access for your guests—from standard units for casual backyard parties to luxury restroom trailers for elegant Hill Country weddings."
        showTrustBadges={false}
      />

      {/* Event Calculator */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              Planning an event in <Link href="/austin/" className="text-accent hover:underline">Austin</Link>? We help you determine exactly how many porta potties you need for your guest count and event duration.
            </p>

            <h2 className="mb-6">Event Porta Potty Calculator</h2>
            <p className="mb-4 font-semibold">How many porta potties do you need?</p>

            <div className="overflow-x-auto mb-6">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Guests</th>
                    <th>4-Hour Event</th>
                    <th>8-Hour Event</th>
                    <th>With Alcohol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>50</td><td>1</td><td>2</td><td>2</td></tr>
                  <tr><td>100</td><td>2-3</td><td>4-5</td><td>3-4</td></tr>
                  <tr><td>150</td><td>3-4</td><td>6-8</td><td>5-6</td></tr>
                  <tr><td>200</td><td>4-5</td><td>8-10</td><td>6-8</td></tr>
                  <tr><td>300</td><td>6-8</td><td>12-15</td><td>9-11</td></tr>
                  <tr><td>500</td><td>10-12</td><td>18-22</td><td>13-17</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-light-gray p-6 rounded-lg mb-6">
              <p className="font-semibold mb-2">Factors that increase your count:</p>
              <ul className="space-y-1 text-body-text">
                <li>• Alcohol service (+25-50%)</li>
                <li>• All-female events (+20%)</li>
                <li>• Events longer than 4 hours</li>
                <li>• Texas heat (more bathroom breaks!)</li>
                <li>• Limited other restroom access</li>
              </ul>
            </div>

            <a href={PHONE_NUMBER_LINK} className="text-accent font-semibold hover:underline">
              Not sure? Call for a free consultation
            </a>
          </div>
        </div>
      </section>

      {/* Event Options */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8">Event Portable Toilet Options</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-primary">Standard Porta Potty</h3>
                  <span className="text-accent font-bold">$75-150/day</span>
                </div>
                <p className="text-body-text">Best for casual events, backyard parties, and budget-conscious gatherings. Clean, functional, and reliable.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-primary">Deluxe Unit with Hand Wash</h3>
                  <span className="text-accent font-bold">$125-200/day</span>
                </div>
                <p className="text-body-text">Upgraded experience with hand washing station and mirror. Popular for graduation parties and corporate events.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-primary">ADA Accessible Unit</h3>
                  <span className="text-accent font-bold">$150-250/day</span>
                </div>
                <p className="text-body-text">Wheelchair accessible with handrails. Required for public events and recommended for any large gathering. <Link href="/ada-accessible-units/" className="text-accent hover:underline">Learn more</Link></p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-primary">Luxury Restroom Trailer</h3>
                  <span className="text-accent font-bold">$500-1,500/day</span>
                </div>
                <p className="text-body-text">Premium experience with climate control (crucial in Texas!), running water, flushing toilets, and elegant finishes. Perfect for weddings and upscale events. <Link href="/luxury-restroom-trailers/" className="text-accent hover:underline">Learn more</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Perfect For</h2>
            <p className="mb-4">Our event porta potties serve:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-3">Outdoor Weddings</h3>
                <p className="text-body-text">From Hill Country ranches to Zilker Park ceremonies. <Link href="/wedding-restroom-rentals/" className="text-accent hover:underline">View wedding options</Link></p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Backyard Parties</h3>
                <p className="text-body-text">Graduations, birthdays, quinceañeras, reunions</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Festivals</h3>
                <p className="text-body-text">ACL, SXSW, ROT Rally, Pecan Street, local events</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Corporate Events</h3>
                <p className="text-body-text">Company picnics, outdoor meetings, retreats</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Sporting Events</h3>
                <p className="text-body-text">UT tailgating, Q2 Stadium, tournaments</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Community Events</h3>
                <p className="text-body-text">Block parties, fundraisers, church events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venues We Serve */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Austin Event Venues We Serve</h2>
            <p className="mb-4">We&apos;ve delivered to events at:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">Zilker Park</div>
              <div className="bg-white p-4 rounded-lg text-center">Lady Bird Lake</div>
              <div className="bg-white p-4 rounded-lg text-center">Hill Country Ranches</div>
              <div className="bg-white p-4 rounded-lg text-center">Downtown Austin</div>
              <div className="bg-white p-4 rounded-lg text-center">The Domain</div>
              <div className="bg-white p-4 rounded-lg text-center">Mueller Parks</div>
              <div className="bg-white p-4 rounded-lg text-center">Private Estates</div>
              <div className="bg-white p-4 rounded-lg text-center">Corporate Campuses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Texas Heat */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Texas Heat Planning</h2>
            <p className="mb-4">Austin events need to account for the heat:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>More units</strong> – Guests use restrooms more in heat</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Strategic placement</strong> – Shade when possible</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Luxury trailers</strong> – AC for upscale events</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Hydration = bathroom trips</strong> – Plan accordingly</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Event Porta Potty FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Your Event Porta Potties Reserved"
        subtitle="Don't wait until the last minute. Call now to reserve clean, reliable porta potties for your Austin event."
      />
    </>
  )
}
