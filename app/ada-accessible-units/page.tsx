import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'ADA Accessible Porta Potty Rental Austin TX | Wheelchair Accessible | Jaktil',
  description: 'ADA accessible porta potty rental in Austin. Wheelchair accessible, spacious, handrails. Public events & construction. Call now.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/ada-accessible-units/',
  },
}

const faqs = [
  {
    question: 'How big is an ADA unit?',
    answer: 'ADA porta potties are approximately 5\' x 5\' interior—significantly larger than standard units (4\' x 4\'), providing ample room for wheelchair users.',
  },
  {
    question: 'Can wheelchairs fit inside?',
    answer: 'Yes. The extra-wide door and spacious interior accommodate wheelchairs and mobility devices comfortably.',
  },
  {
    question: 'Do you have ADA luxury trailers?',
    answer: 'Yes. Our luxury restroom trailers include ADA-compliant stations with the same premium amenities, including AC.',
  },
  {
    question: 'What if I\'m not sure about requirements?',
    answer: 'Call us. We\'ll help you understand your obligations based on your specific event type, size, and location.',
  },
]

export default function ADAAccessibleUnitsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="ADA Accessible Porta Potty Rental"
        description="ADA accessible porta potty rental in Austin with wheelchair accessibility and compliance features."
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'ADA Accessible Units', url: '/ada-accessible-units/' },
      ]} />

      <Hero
        title="ADA Accessible Porta Potty Rental in Austin, TX"
        subtitle="ADA compliance isn't optional for public events. Our ADA accessible porta potties provide spacious interiors, handrails, and wheelchair access to ensure all your guests or workers can use the facilities comfortably and safely."
        showTrustBadges={false}
      />

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              Planning a public <Link href="/event-porta-potty-rental/" className="text-accent hover:underline">event in Austin</Link> or managing a <Link href="/construction-site-rentals/" className="text-accent hover:underline">construction site</Link>? Ensure accessibility for all with our ADA-compliant portable toilets.
            </p>

            <h2 className="mb-6">ADA Unit Features</h2>
            <p className="mb-4 font-semibold">Every ADA accessible porta potty includes:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Extra-wide door</strong> – Easy wheelchair entry</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Spacious interior</strong> – Room to maneuver</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Interior handrails</strong> – Stability and support</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Lower toilet seat height</strong> – Accessible transfer</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Non-slip flooring</strong> – Safety in all conditions</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>ADA compliant design</strong> – Meets federal standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">When You Need ADA Units</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-primary mb-3">Required for:</h3>
                <ul className="text-body-text space-y-2">
                  <li>• Public events and festivals</li>
                  <li>• Government and municipal events</li>
                  <li>• Events receiving public funding</li>
                  <li>• Construction sites with accessibility requirements</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Recommended for:</h3>
                <ul className="text-body-text space-y-2">
                  <li>• Any large gathering (200+ guests)</li>
                  <li>• Events expecting elderly attendees</li>
                  <li>• Community and church events</li>
                  <li>• Corporate events</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg mt-6">
              <p className="text-body-text">
                <strong>General guideline:</strong> Include at least 1 ADA unit for every 10 standard units.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">ADA Porta Potty Pricing</h2>

            <div className="overflow-x-auto mb-6">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Rental Period</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Daily</td><td>$150-250</td></tr>
                  <tr><td>Weekly</td><td>$400-600</td></tr>
                  <tr><td>Monthly</td><td>$700-1,000</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-body-text text-sm">*Includes delivery, pickup, and weekly servicing.</p>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">ADA Compliance Basics</h2>
            <p className="mb-4">The Americans with Disabilities Act requires accessible restrooms at:</p>
            <ul className="space-y-2 text-body-text mb-6">
              <li>• Events open to the public</li>
              <li>• Construction sites meeting certain criteria</li>
              <li>• Any facility receiving federal funds</li>
            </ul>
            <div className="bg-white p-6 rounded-lg">
              <p className="font-semibold text-primary mb-2">We help you determine requirements.</p>
              <p className="text-body-text">Call us with your event details and we&apos;ll advise on ADA needs specific to your situation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="ADA Porta Potty FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Ensure Accessibility at Your Event"
        subtitle="Don't risk non-compliance. Call now for ADA accessible porta potty rental in Austin."
      />
    </>
  )
}
