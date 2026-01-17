import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import PricingTable from '@/components/PricingTable'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { LocalBusinessSchema, FAQSchema } from '@/components/SchemaMarkup'
import { SERVICES, CITIES, FAQS, PHONE_NUMBER_LINK } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={FAQS} />

      <Hero
        title="Porta Potty Rental in Austin, TX – Fast, Affordable Portable Toilets"
        subtitle="Need a porta potty delivered today in Austin? We provide same-day porta potty rental in Austin for outdoor events, construction sites, weddings, and backyard parties. Choose from standard units, deluxe porta potties with sinks, or luxury restroom trailers with clear pricing and no hidden fees."
      />

      {/* Service Options */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-4">Portable Toilet Options in Austin</h2>
          <p className="text-center text-body-text mb-10 max-w-3xl mx-auto">
            Whether you&apos;re hosting an event in South Austin, managing a construction site downtown, or planning a Hill Country wedding, we offer the right portable restroom for your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Standard Porta Potty"
              description="Backyard parties, small events, short-term construction. Includes hand sanitizer and toilet paper."
              href="/event-porta-potty-rental/"
              icon="🚻"
              price="$75-150/day"
            />
            <ServiceCard
              title="Deluxe with Sink"
              description="Upgraded unit with hand wash station and mirror. Ideal for weddings, corporate events, and longer rentals."
              href="/wedding-restroom-rentals/"
              icon="🪥"
              price="$125-200/day"
            />
            <ServiceCard
              title="ADA Accessible"
              description="Wheelchair accessible with handrails and spacious interior. Required for public events and ADA compliance."
              href="/ada-accessible-units/"
              icon="♿"
              price="$150-250/day"
            />
            <ServiceCard
              title="Luxury Trailer"
              description="Climate-controlled with running water, flushing toilets, and elegant finishes. Perfect for upscale weddings."
              href="/luxury-restroom-trailers/"
              icon="✨"
              price="$500-1,500/day"
            />
          </div>

          <p className="text-center mt-8">
            <a href={PHONE_NUMBER_LINK} className="text-accent font-semibold hover:underline">
              Not sure what you need? Call and speak with a local Austin porta potty expert.
            </a>
          </p>
        </div>
      </section>

      {/* Event & Construction Section */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <h2 className="text-center mb-4">Event & Construction Porta Potty Rentals in Austin</h2>
          <p className="text-center text-body-text mb-10 max-w-3xl mx-auto">
            Austin&apos;s packed event calendar and booming construction scene mean tight spaces, permit rules, and demanding schedules. We handle logistics so you don&apos;t have to.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Events & Parties</h3>
              <ul className="space-y-2 text-body-text">
                <li>• Outdoor weddings & receptions</li>
                <li>• Backyard parties & family reunions</li>
                <li>• Festivals (ACL, SXSW, ROT Rally)</li>
                <li>• Graduation parties & quinceañeras</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Construction & Commercial</h3>
              <ul className="space-y-2 text-body-text">
                <li>• Construction sites & job sites</li>
                <li>• Renovation projects</li>
                <li>• Commercial builds</li>
                <li>• Road & infrastructure work</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-3">Corporate & Community</h3>
              <ul className="space-y-2 text-body-text">
                <li>• Corporate events & fundraisers</li>
                <li>• Company picnics</li>
                <li>• UT tailgating & Q2 Stadium</li>
                <li>• Community events</li>
              </ul>
            </div>
          </div>

          <p className="text-center mt-8 text-body-text">
            We understand City of Austin placement rules and help you avoid permit issues, delays, and last-minute problems.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-4">Austin Porta Potty Rental Pricing</h2>
          <p className="text-center text-body-text mb-10 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Delivery and pickup included.
          </p>
          <div className="max-w-3xl mx-auto">
            <PricingTable />
          </div>
          <p className="text-center mt-6">
            <Link href="/pricing/" className="text-accent font-semibold hover:underline">
              View full pricing details →
            </Link>
          </p>
        </div>
      </section>

      {/* Cities Served */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <h2 className="text-center mb-4">Same-Day Porta Potty Delivery Across Austin & Nearby Cities</h2>
          <p className="text-center text-body-text mb-10">
            We proudly serve all of Greater Austin and Central Texas.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}/`}
                className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <span className="font-medium text-primary hover:text-accent">{city.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-10">Why Austin Chooses Us for Porta Potty Rentals</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Local Austin-Focused Service</h3>
              <p className="text-body-text">Not a national call center. We know Austin&apos;s neighborhoods, venues, and permit requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Transparent Pricing</h3>
              <p className="text-body-text">Clear quotes with no hidden fees. What we quote is what you pay.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Fast Delivery</h3>
              <p className="text-body-text">Same-day and next-day delivery available throughout Austin and Central Texas.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Clean & Sanitized</h3>
              <p className="text-body-text">Every unit is professionally cleaned and sanitized before delivery.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Friendly Support</h3>
              <p className="text-body-text">Knowledgeable team ready to help you choose the right units for your needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Permit Knowledge</h3>
              <p className="text-body-text">We help navigate City of Austin permit requirements for street placements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={FAQS} title="Austin Porta Potty Rental FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Your Porta Potty Delivered Today in Austin"
        subtitle="Don't let restroom logistics slow down your event or project. Call now for fast, affordable porta potty rental with expert local support."
      />
    </>
  )
}
