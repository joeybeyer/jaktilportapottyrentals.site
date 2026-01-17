import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import PhoneCTA from '@/components/PhoneCTA'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK, PHONE_NUMBER_DISPLAY, CITIES, SERVICES, BUSINESS_ADDRESS, GOOGLE_MAPS_EMBED } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us | Porta Potty Rental Austin TX | Jaktil',
  description: 'Contact Jaktil Porta Potty Rentals in Austin, TX. Call for same-day delivery, free quotes, and expert advice on portable toilet rentals.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/contact/',
  },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact/' },
      ]} />

      <Hero
        title="Contact Jaktil Porta Potty Rentals"
        subtitle="Ready to rent? Have questions? Our Austin-based team is here to help. Call now for same-day delivery, free quotes, and expert advice on choosing the right portable toilets for your needs."
        showTrustBadges={false}
      />

      {/* Contact Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Call Us */}
              <div className="bg-light-gray p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-primary mb-2">Call Us</h2>
                <p className="text-body-text mb-4">Fastest way to get a quote or schedule delivery</p>
                <a
                  href={PHONE_NUMBER_LINK}
                  className="inline-flex items-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE_NUMBER_DISPLAY}
                </a>
                <p className="text-sm text-body-text mt-4">Available 7 days a week</p>
              </div>

              {/* Service Hours */}
              <div className="bg-light-gray p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-primary mb-2">Service Hours</h2>
                <p className="text-body-text mb-4">We&apos;re here when you need us</p>
                <div className="text-body-text">
                  <p className="font-semibold">Phone Support</p>
                  <p>Monday - Sunday: 7am - 7pm</p>
                  <p className="mt-4 font-semibold">Delivery & Pickup</p>
                  <p>7 days a week, flexible scheduling</p>
                </div>
              </div>
            </div>

            {/* Address & Map */}
            <div className="mt-8">
              <div className="bg-light-gray p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center md:text-left">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-primary mb-2">Our Location</h2>
                    <p className="text-body-text mb-4">Serving all of Central Texas from Austin</p>
                    <address className="text-body-text not-italic">
                      <p className="font-semibold">Jaktil Porta Potty Rentals</p>
                      <p>{BUSINESS_ADDRESS.street}</p>
                      <p>{BUSINESS_ADDRESS.city}, {BUSINESS_ADDRESS.state} {BUSINESS_ADDRESS.zip}</p>
                    </address>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                      src={GOOGLE_MAPS_EMBED}
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Jaktil Porta Potty Rentals Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Tell Us */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">What to Have Ready When You Call</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-3">For Events</h3>
                <ul className="space-y-2 text-body-text">
                  <li>• Date and duration of event</li>
                  <li>• Expected number of guests</li>
                  <li>• Event location (city/neighborhood)</li>
                  <li>• Type of event (wedding, party, festival)</li>
                  <li>• Will alcohol be served?</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-3">For Construction</h3>
                <ul className="space-y-2 text-body-text">
                  <li>• Project start and end dates</li>
                  <li>• Number of workers on site</li>
                  <li>• Job site address</li>
                  <li>• Any special requirements (ADA, etc.)</li>
                  <li>• Preferred service schedule</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">Service Areas</h2>
            <p className="text-center text-body-text mb-8">
              We provide porta potty rental throughout Austin and Central Texas
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}/`}
                  className="bg-light-gray p-4 rounded-lg text-center hover:bg-accent hover:text-white transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">Our Services</h2>
            <p className="text-center text-body-text mb-8">
              We offer a full range of portable toilet solutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}/`}
                  className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow flex items-center gap-3"
                >
                  <span className="text-2xl">{service.icon}</span>
                  <span className="font-medium text-primary">{service.shortName}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Common Questions</h2>
            <div className="space-y-4">
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="font-semibold text-primary">How much does it cost?</p>
                <p className="text-body-text">Standard porta potties start at $75/day. <Link href="/pricing/" className="text-accent hover:underline">View full pricing</Link></p>
              </div>
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="font-semibold text-primary">Can I get same-day delivery?</p>
                <p className="text-body-text">Yes! Same-day delivery is available throughout Austin. Call before noon for best results.</p>
              </div>
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="font-semibold text-primary">How many porta potties do I need?</p>
                <p className="text-body-text">Generally 1 per 50-75 guests for a 4-hour event. <Link href="/event-porta-potty-rental/" className="text-accent hover:underline">See our event calculator</Link></p>
              </div>
              <div className="bg-light-gray p-4 rounded-lg">
                <p className="font-semibold text-primary">Do you offer luxury trailers?</p>
                <p className="text-body-text">Yes! Climate-controlled luxury trailers are perfect for weddings. <Link href="/luxury-restroom-trailers/" className="text-accent hover:underline">Learn more</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <PhoneCTA
        title="Ready to Get Started?"
        subtitle="Call now for a free quote. Same-day delivery available throughout Austin and Central Texas."
      />
    </>
  )
}
