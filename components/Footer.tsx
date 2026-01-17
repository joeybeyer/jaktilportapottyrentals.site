import Link from 'next/link'
import { SITE_NAME, PHONE_NUMBER_LINK, PHONE_NUMBER_DISPLAY, CITIES, SERVICES, BUSINESS_ADDRESS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{SITE_NAME}</h3>
            <p className="text-gray-300 mb-4">
              Fast, affordable porta potty rental in Austin, TX with same-day delivery for events, weddings, construction sites, and parties.
            </p>
            <address className="text-gray-300 not-italic mb-4">
              <p>{BUSINESS_ADDRESS.street}</p>
              <p>{BUSINESS_ADDRESS.city}, {BUSINESS_ADDRESS.state} {BUSINESS_ADDRESS.zip}</p>
            </address>
            <a
              href={PHONE_NUMBER_LINK}
              className="inline-flex items-center gap-2 text-accent hover:text-teal-300 font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE_NUMBER_DISPLAY}
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}/`} className="text-gray-300 hover:text-accent transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {CITIES.map((city) => (
                <li key={city.slug}>
                  <Link href={`/${city.slug}/`} className="text-gray-300 hover:text-accent transition-colors">
                    {city.name}, TX
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/pricing/" className="text-gray-300 hover:text-accent transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/contact/" className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/austin/" className="text-gray-300 hover:text-accent transition-colors">Austin Service Area</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="mt-2 text-sm">Serving Austin, TX and Central Texas with quality portable toilet solutions.</p>
        </div>
      </div>
    </footer>
  )
}
