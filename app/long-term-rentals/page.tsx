import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Long-Term Porta Potty Rental Austin TX | Monthly Rates | Jaktil',
  description: 'Long-term porta potty rental in Austin. Monthly rates for construction, property management & ongoing needs. Weekly servicing included.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/long-term-rentals/',
  },
}

const faqs = [
  {
    question: 'What\'s the minimum commitment?',
    answer: '30 days minimum for long-term rates. Project-based terms are also available for construction sites.',
  },
  {
    question: 'Can I add units mid-project?',
    answer: 'Yes. We can typically deliver additional units within 24-48 hours based on availability.',
  },
  {
    question: 'What if my project ends early?',
    answer: 'We offer flexible terms. Talk to us about your situation and we\'ll work with you.',
  },
  {
    question: 'Is servicing included?',
    answer: 'Yes. Weekly servicing (pumping, cleaning, restocking) is included in monthly rates. More frequent service is available for high-traffic sites.',
  },
]

export default function LongTermRentalsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Long-Term Porta Potty Rental"
        description="Long-term porta potty rental in Austin with monthly rates and weekly servicing included."
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Long-Term Rentals', url: '/long-term-rentals/' },
      ]} />

      <Hero
        title="Long-Term Porta Potty Rental in Austin, TX"
        subtitle="Need portable toilets for an extended project? Our long-term rental program offers monthly rates with weekly servicing included—keeping your site compliant and clean without the hassle of managing multiple short-term rentals."
        showTrustBadges={false}
      />

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              Managing a multi-month <Link href="/construction-site-rentals/" className="text-accent hover:underline">construction project in Austin</Link>? Long-term rental is the most cost-effective solution for ongoing portable toilet needs.
            </p>

            <h2 className="mb-6">Long-Term Rental Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Lower monthly rates</strong> – Significant savings vs. weekly rentals</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Weekly servicing included</strong> – No extra charges</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Flexible terms</strong> – Month-to-month or project duration</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Easy scaling</strong> – Add or remove units as needed</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Dedicated account management</strong> – Single point of contact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Long-Term Pricing</h2>

            <div className="overflow-x-auto mb-6">
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
                  <tr><td>High-Capacity Site</td><td>Custom</td><td>Custom schedule</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-body-text text-sm mb-4">*3+ month commitments may qualify for additional discounts.</p>
            <a href={PHONE_NUMBER_LINK} className="text-accent font-semibold hover:underline">
              Call for custom long-term pricing
            </a>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Ideal For</h2>
            <p className="mb-4 font-semibold">Long-term rentals serve:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-body-text">
                <li>• Multi-month construction projects</li>
                <li>• Property management companies</li>
                <li>• Apartment complex renovations</li>
                <li>• Road and infrastructure work</li>
              </ul>
              <ul className="space-y-2 text-body-text">
                <li>• Seasonal businesses</li>
                <li>• Agricultural operations</li>
                <li>• Event venues with ongoing needs</li>
                <li>• Industrial facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Austin Construction Boom */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Austin&apos;s Construction Boom</h2>
            <p className="mb-4">Austin is one of the fastest-growing cities in America. That means construction everywhere—and every site needs OSHA-compliant sanitation.</p>
            <p className="mb-4 font-semibold">We serve long-term projects throughout:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">Downtown Austin</div>
              <div className="bg-white p-4 rounded-lg text-center">Domain/North Austin</div>
              <div className="bg-white p-4 rounded-lg text-center">Round Rock/Williamson</div>
              <div className="bg-white p-4 rounded-lg text-center">Kyle/Buda/San Marcos</div>
              <div className="bg-white p-4 rounded-lg text-center">Cedar Park/Leander</div>
              <div className="bg-white p-4 rounded-lg text-center">East Austin corridor</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-primary">Tell us your needs</h3>
                  <p className="text-body-text">Units, duration, location</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-primary">Get custom pricing</h3>
                  <p className="text-body-text">Based on your specific requirements</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-primary">We deliver & set up</h3>
                  <p className="text-body-text">On your schedule</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-primary">Weekly service</h3>
                  <p className="text-body-text">Pumping, cleaning, restocking</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <div>
                  <h3 className="font-semibold text-primary">Flexible adjustments</h3>
                  <p className="text-body-text">Add/remove units anytime</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">6</div>
                <div>
                  <h3 className="font-semibold text-primary">Pickup when done</h3>
                  <p className="text-body-text">Or extend as needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Long-Term Rental FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Long-Term Rental Pricing"
        subtitle="Call now to discuss your project and get custom pricing for long-term porta potty rental in Austin."
      />
    </>
  )
}
