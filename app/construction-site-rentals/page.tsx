import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Construction Site Porta Potty Rental Austin TX | OSHA Compliant | Jaktil',
  description: 'OSHA-compliant construction porta potty rental in Austin. 1 toilet per 20 workers. Weekly servicing included. Same-day delivery. Call now.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/construction-site-rentals/',
  },
}

const faqs = [
  {
    question: 'How often are construction porta potties serviced?',
    answer: 'Standard service is weekly. High-traffic sites or summer months may need twice-weekly or daily service. We can customize the schedule to match your site\'s needs.',
  },
  {
    question: 'Can you deliver same-day for an urgent job?',
    answer: 'Yes, same-day delivery is available throughout Austin and Central Texas. Call before noon for best results on urgent requests.',
  },
  {
    question: 'What if I need to add units mid-project?',
    answer: 'No problem. Call us and we\'ll deliver additional units, usually within 24-48 hours depending on availability.',
  },
  {
    question: 'Do you offer ADA units for construction sites?',
    answer: 'Yes. Sites with employees requiring accessibility should have ADA-compliant units available. We can include these in your rental package.',
  },
]

export default function ConstructionSiteRentalsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Construction Site Porta Potty Rental"
        description="OSHA-compliant construction porta potty rental in Austin with weekly servicing included."
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Construction Site Rentals', url: '/construction-site-rentals/' },
      ]} />

      <Hero
        title="Construction Site Porta Potty Rental in Austin, TX"
        subtitle="OSHA requires one portable toilet per 20 workers on construction sites. Don't risk fines or shut-down orders—our construction porta potty rentals keep your Austin job site compliant, clean, and productive. We offer weekly servicing, flexible rental terms, and same-day delivery to construction sites across Greater Austin."
        showTrustBadges={false}
      />

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              Looking for reliable <Link href="/austin/" className="text-accent hover:underline">porta potty rental in Austin</Link> for your construction project? We deliver OSHA-compliant portable toilets to job sites throughout Travis, Williamson, Hays, Bastrop, and Caldwell counties.
            </p>

            <h2 className="mb-6">What&apos;s Included</h2>
            <p className="mb-4">Every construction site rental includes:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Clean, sanitized portable toilet</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Hand sanitizer dispenser</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Toilet paper & supplies</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Weekly pumping & cleaning service</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Delivery and pickup on your schedule</span>
              </li>
            </ul>
            <p className="text-body-text">Need more frequent servicing? We offer twice-weekly and daily service for high-traffic sites.</p>
          </div>
        </div>
      </section>

      {/* OSHA Requirements */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">OSHA Portable Toilet Requirements</h2>
            <p className="mb-6">Federal OSHA regulations (29 CFR 1926.51) require:</p>

            <div className="overflow-x-auto mb-6">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Workers on Site</th>
                    <th>Toilets Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1-20</td><td>1</td></tr>
                  <tr><td>21-40</td><td>2</td></tr>
                  <tr><td>41-60</td><td>3</td></tr>
                  <tr><td>61-80</td><td>4</td></tr>
                  <tr><td>81-100</td><td>5</td></tr>
                  <tr><td>100+</td><td>1 additional per 40 workers</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-body-text mb-4"><strong>Important:</strong> Toilets must be maintained in a sanitary condition. Our weekly servicing keeps you compliant.</p>
            <a href={PHONE_NUMBER_LINK} className="text-accent font-semibold hover:underline">
              Call now – we&apos;ll help you calculate your site&apos;s needs
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Construction Porta Potty Pricing</h2>

            <div className="overflow-x-auto mb-6">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Rental Period</th>
                    <th>Standard Unit</th>
                    <th>With Hand Wash</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Daily</td><td>$75-150</td><td>$125-200</td></tr>
                  <tr><td>Weekly</td><td>$250-400</td><td>$350-500</td></tr>
                  <tr><td>Monthly</td><td>$400-700</td><td>$600-900</td></tr>
                  <tr><td>Long-term (3+ months)</td><td>Custom pricing</td><td>Custom pricing</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-body-text text-sm">*Includes weekly servicing. Additional service visits available.</p>

            <div className="mt-8">
              <Link href="/long-term-rentals/" className="text-accent font-semibold hover:underline">
                Need long-term rental? View our monthly rates →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Ideal For</h2>
            <p className="mb-4">Our construction porta potties serve:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>• New construction & home builds</li>
                <li>• Renovation & remodel projects</li>
                <li>• Roofing jobs</li>
                <li>• Commercial builds</li>
              </ul>
              <ul className="space-y-2">
                <li>• Road & infrastructure projects</li>
                <li>• Demolition sites</li>
                <li>• Landscaping projects</li>
                <li>• Industrial sites</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Austin Construction Coverage</h2>
            <p className="mb-4">We deliver to job sites throughout:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-light-gray p-4 rounded-lg text-center">Travis County</div>
              <div className="bg-light-gray p-4 rounded-lg text-center">Williamson County</div>
              <div className="bg-light-gray p-4 rounded-lg text-center">Hays County</div>
              <div className="bg-light-gray p-4 rounded-lg text-center">Bastrop County</div>
              <div className="bg-light-gray p-4 rounded-lg text-center">Caldwell County</div>
            </div>
            <p className="text-body-text">Same-day delivery available for urgent needs. Call early for best availability.</p>
          </div>
        </div>
      </section>

      {/* Texas Heat */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Texas Heat Considerations</h2>
            <p className="mb-4">Austin&apos;s heat means extra considerations for job site sanitation:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Ventilation</strong> – All units have proper ventilation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Servicing frequency</strong> – More frequent pumping in summer</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Placement advice</strong> – Shaded locations when possible</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Hand sanitizer</strong> – Always stocked</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Why Contractors Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>OSHA knowledge</strong> – We help you stay compliant</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Reliable service</strong> – Weekly pumping on schedule</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Flexible terms</strong> – Day, week, month, or project duration</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Fast response</strong> – Same-day delivery when you need it</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Clean units</strong> – Professional appearance on your site</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Construction Site FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Get Your Construction Porta Potty Delivered"
        subtitle="Keep your job site compliant and your crew happy. Call now for fast, reliable construction portable toilet rental in Austin."
      />
    </>
  )
}
