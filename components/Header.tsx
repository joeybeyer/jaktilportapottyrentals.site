'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PHONE_NUMBER_LINK, PHONE_NUMBER_DISPLAY, CITIES, SERVICES } from '@/lib/constants'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-primary">Jaktil Porta Potty</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="nav-link flex items-center gap-1 py-6">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
              >
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}/`}
                    className="block px-4 py-2 text-body-text hover:bg-light-gray hover:text-accent transition-colors"
                  >
                    <span className="mr-2">{service.icon}</span>
                    {service.shortName}
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button className="nav-link flex items-center gap-1 py-6">
                Locations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg py-2 ${locationsOpen ? 'block' : 'hidden'}`}
              >
                {CITIES.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}/`}
                    className="block px-4 py-2 text-body-text hover:bg-light-gray hover:text-accent transition-colors"
                  >
                    {city.name}, TX
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/pricing/" className="nav-link">Pricing</Link>
            <Link href="/contact/" className="nav-link">Contact</Link>

            <a href={PHONE_NUMBER_LINK} className="btn-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE_NUMBER_DISPLAY}
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-primary mb-2">Services</p>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}/`}
                      className="text-body-text hover:text-accent text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.shortName}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold text-primary mb-2">Locations</p>
                <div className="grid grid-cols-2 gap-2">
                  {CITIES.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${city.slug}/`}
                      className="text-body-text hover:text-accent text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/pricing/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                <Link href="/contact/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </div>

              <a href={PHONE_NUMBER_LINK} className="btn-primary w-full justify-center">
                Call {PHONE_NUMBER_DISPLAY}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
