import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Luxury Restroom Trailer Rental Austin TX | Hill Country Weddings | Jaktil',
  description: 'Luxury restroom trailer rental in Austin & Hill Country. Climate-controlled, running water, AC. Perfect for weddings. From $500/day. Call now.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/luxury-restroom-trailers/',
  },
}

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer: 'Book 2-3 months ahead for wedding season (March-November). Luxury trailers are limited inventory and book fast for fall weddings especially.',
  },
  {
    question: 'What\'s included in the price?',
    answer: 'Delivery, setup, pickup, and fully stocked supplies. Attendant service is available at additional cost for events where you want extra service.',
  },
  {
    question: 'Do you provide a generator?',
    answer: 'Yes, generator rental is available if your venue lacks electrical hookup. Our generators are powerful enough to run climate control all day and night.',
  },
  {
    question: 'Can the trailer be decorated?',
    answer: 'Yes! Many couples add florals, signage, and décor. We\'ll coordinate with your wedding planner to ensure everything is perfect.',
  },
  {
    question: 'How does AC work at remote venues?',
    answer: 'We bring generators powerful enough to run climate control all day and night, even at remote Hill Country venues without electrical hookups.',
  },
]

export default function LuxuryRestroomTrailersPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Luxury Restroom Trailer Rental"
        description="Luxury restroom trailer rental in Austin and Hill Country with climate control, running water, and elegant finishes."
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Luxury Restroom Trailers', url: '/luxury-restroom-trailers/' },
      ]} />

      <Hero
        title="Luxury Restroom Trailer Rental in Austin, TX"
        subtitle="For events where standard porta potties won't do, our luxury restroom trailers provide a premium experience your guests will appreciate. Featuring climate control (essential in Texas!), running water, flushing toilets, vanity mirrors, and elegant interiors, these trailers transform outdoor event restrooms from a necessity into an amenity."
        showTrustBadges={false}
      />

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              Planning a <Link href="/wedding-restroom-rentals/" className="text-accent hover:underline">Hill Country wedding</Link> or upscale <Link href="/event-porta-potty-rental/" className="text-accent hover:underline">Austin event</Link>? Our luxury restroom trailers deliver the comfort and elegance your guests deserve.
            </p>

            <h2 className="mb-6">Luxury Trailer Features</h2>
            <p className="mb-4 font-semibold">Every luxury restroom trailer includes:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Climate control</strong> – AC & heat for Texas weather</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Running water</strong> – Real sinks with hot & cold water</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Flushing toilets</strong> – Not chemical toilets</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Vanity mirrors</strong> – Full-length and countertop</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Premium lighting</strong> – Elegant, flattering illumination</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Sound system</strong> – Ambient music capability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configurations */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8">Trailer Configurations</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-primary">2-Station Trailer</h3>
                  <span className="text-accent font-bold">$500-800/day</span>
                </div>
                <p className="text-body-text mb-2">1 women&apos;s + 1 men&apos;s station</p>
                <p className="text-sm text-gray-500">Perfect for: Intimate weddings (50-100 guests)</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-primary">4-Station Trailer</h3>
                  <span className="text-accent font-bold">$800-1,200/day</span>
                </div>
                <p className="text-body-text mb-2">2 women&apos;s + 2 men&apos;s stations</p>
                <p className="text-sm text-gray-500">Perfect for: Medium weddings (100-200 guests)</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-primary">6+ Station Trailer</h3>
                  <span className="text-accent font-bold">$1,200-2,000/day</span>
                </div>
                <p className="text-body-text mb-2">Multiple configurations available</p>
                <p className="text-sm text-gray-500">Perfect for: Large events (200+ guests)</p>
              </div>
            </div>

            <p className="text-center mt-8">
              <a href={PHONE_NUMBER_LINK} className="text-accent font-semibold hover:underline">
                Call to discuss your event&apos;s needs
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Perfect For</h2>
            <p className="mb-4">Luxury trailers are ideal for:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Hill Country Weddings</h3>
                <p className="text-body-text">Match the elegance of your vineyard or ranch venue</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Austin Outdoor Weddings</h3>
                <p className="text-body-text">Premium facilities for any location</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Corporate Galas</h3>
                <p className="text-body-text">Impress clients and executives</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">VIP Areas</h3>
                <p className="text-body-text">Exclusive restroom access at festivals</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Estate Events</h3>
                <p className="text-body-text">Supplement existing facilities with luxury</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Film & Photo Shoots</h3>
                <p className="text-body-text">Talent comfort on location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AC Matters */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Why AC Matters in Texas</h2>
            <p className="mb-4">Let&apos;s be honest: Texas is hot. Standard porta potties in summer can be... unpleasant.</p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-semibold mb-4">Our luxury trailers feature:</p>
              <ul className="space-y-2">
                <li>• Full air conditioning</li>
                <li>• Continuous fresh air circulation</li>
                <li>• Cool, comfortable interior</li>
                <li>• Pleasant experience for guests in formalwear</li>
              </ul>
              <p className="mt-4 text-accent font-semibold">Your guests will thank you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Requirements */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Setup Requirements</h2>
            <p className="mb-4 font-semibold">Luxury trailers need:</p>
            <ul className="space-y-3 mb-6">
              <li>• Level ground (we can provide leveling)</li>
              <li>• Electrical connection (generator available if needed)</li>
              <li>• Water hookup OR we bring freshwater tanks</li>
              <li>• Clear access for trailer delivery</li>
            </ul>
            <p className="text-body-text">We&apos;ll assess your site and handle all logistics.</p>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Hill Country & Austin Wedding Venues We Serve</h2>
            <p className="mb-4">We&apos;ve served luxury trailer rentals at:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">Dripping Springs venues</div>
              <div className="bg-white p-4 rounded-lg text-center">Wimberley ranches</div>
              <div className="bg-white p-4 rounded-lg text-center">Fredericksburg vineyards</div>
              <div className="bg-white p-4 rounded-lg text-center">Lake Travis estates</div>
              <div className="bg-white p-4 rounded-lg text-center">Austin Hill Country</div>
              <div className="bg-white p-4 rounded-lg text-center">Spicewood locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Luxury Trailer FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Elevate Your Event"
        subtitle="Your guests deserve better than a hot porta potty. Call now to reserve a luxury restroom trailer for your Austin or Hill Country wedding."
      />
    </>
  )
}
