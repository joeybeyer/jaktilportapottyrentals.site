import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import PhoneCTA from '@/components/PhoneCTA'
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from '@/components/SchemaMarkup'
import { PHONE_NUMBER_LINK } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Wedding Porta Potty & Restroom Trailer Rental Austin TX | Jaktil',
  description: 'Wedding restroom rentals in Austin & Hill Country. Standard porta potties to luxury trailers. Keep guests comfortable. Free consultation. Call now.',
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site/wedding-restroom-rentals/',
  },
}

const faqs = [
  {
    question: 'Will porta potties ruin our wedding photos?',
    answer: 'Strategic placement keeps units out of sight. Luxury trailers actually photograph beautifully and can be decorated to match your wedding theme.',
  },
  {
    question: 'What if it\'s 100 degrees on our wedding day?',
    answer: 'This is Texas—it might be! Luxury trailers have AC for guest comfort. For standard units, we recommend shaded placement and more units than usual.',
  },
  {
    question: 'Can guests use the restrooms during the ceremony?',
    answer: 'Yes! Having restrooms available reduces ceremony interruptions and keeps guests comfortable throughout your celebration.',
  },
  {
    question: 'Do you work with wedding planners?',
    answer: 'Absolutely. We coordinate directly with your planner, venue coordinator, and other vendors for seamless delivery and placement.',
  },
]

export default function WeddingRestroomRentalsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Wedding Restroom Rental"
        description="Wedding restroom rentals in Austin and Hill Country from standard porta potties to luxury restroom trailers."
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Wedding Restroom Rentals', url: '/wedding-restroom-rentals/' },
      ]} />

      <Hero
        title="Wedding Restroom Rental in Austin & Hill Country"
        subtitle="Planning an outdoor wedding in Austin or the Hill Country? Don't let restroom logistics stress you out. Whether you need a few standard porta potties for a casual backyard celebration or an elegant luxury restroom trailer for a vineyard wedding, we help Central Texas brides and grooms keep their guests comfortable."
        showTrustBadges={false}
      />

      {/* Wedding Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              Getting married in <Link href="/austin/" className="text-accent hover:underline">Austin</Link> or the surrounding Hill Country? We offer wedding restroom solutions for every budget and style.
            </p>

            <h2 className="mb-8">Wedding Restroom Options</h2>

            <div className="space-y-6">
              <div className="bg-light-gray p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-primary">Budget-Friendly: Standard Porta Potties</h3>
                  <span className="text-accent font-bold">$75-150/day</span>
                </div>
                <p className="text-body-text mb-4">Perfect for:</p>
                <ul className="space-y-1 text-body-text">
                  <li>• Casual backyard weddings</li>
                  <li>• Budget-conscious couples</li>
                  <li>• Venues with some existing facilities</li>
                </ul>
                <p className="text-sm mt-4 italic">We recommend deluxe units with sinks for a better guest experience.</p>
              </div>

              <div className="bg-light-gray p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-primary">Popular Choice: Deluxe Units with Sink</h3>
                  <span className="text-accent font-bold">$125-200/day</span>
                </div>
                <p className="text-body-text mb-4">Perfect for:</p>
                <ul className="space-y-1 text-body-text">
                  <li>• Most outdoor weddings</li>
                  <li>• Barn and ranch venues</li>
                  <li>• Good balance of cost and comfort</li>
                </ul>
              </div>

              <div className="bg-light-gray p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-primary">Premium Choice: Luxury Restroom Trailer</h3>
                  <span className="text-accent font-bold">$500-1,500/day</span>
                </div>
                <p className="text-body-text mb-4">Perfect for:</p>
                <ul className="space-y-1 text-body-text">
                  <li>• Upscale Hill Country weddings</li>
                  <li>• Vineyard and estate venues</li>
                  <li>• Couples who want the best for guests</li>
                  <li>• Any wedding where AC is a must (spoiler: that&apos;s most Texas weddings)</li>
                </ul>
                <p className="mt-4">
                  <Link href="/luxury-restroom-trailers/" className="text-accent font-semibold hover:underline">
                    Learn more about luxury trailers →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Many */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">How Many Restrooms for Your Wedding?</h2>

            <div className="overflow-x-auto mb-6">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Guest Count</th>
                    <th>Standard Units</th>
                    <th>OR Luxury Trailer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>50-75</td><td>2 deluxe units</td><td>2-station trailer</td></tr>
                  <tr><td>75-125</td><td>3-4 deluxe units</td><td>4-station trailer</td></tr>
                  <tr><td>125-200</td><td>4-5 deluxe units</td><td>4-6 station trailer</td></tr>
                  <tr><td>200+</td><td>6+ units</td><td>6+ station trailer</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-body-text">
                <strong>Tips:</strong> Add 1-2 units if serving alcohol. Consider 1 <Link href="/ada-accessible-units/" className="text-accent hover:underline">ADA unit</Link> for accessibility. Texas heat = more bathroom breaks.
              </p>
            </div>

            <p className="text-center mt-6">
              <a href={PHONE_NUMBER_LINK} className="text-accent font-semibold hover:underline">
                Call for personalized recommendations
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Planning Tips */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Wedding Planning Tips</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-primary mb-3">When to Book</h3>
                <p className="text-body-text">Book 2-3 months ahead for wedding season (March-November). Luxury trailers book earliest—don&apos;t wait. October is peak wedding season in Texas due to cooler weather.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Placement</h3>
                <ul className="text-body-text space-y-1">
                  <li>• Keep restrooms accessible but discreet</li>
                  <li>• Away from food service and dance floor</li>
                  <li>• Well-lit path for evening events</li>
                  <li>• Consider shade for standard units</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Timing</h3>
                <ul className="text-body-text space-y-1">
                  <li>• Delivery 2-4 hours before ceremony</li>
                  <li>• Pickup morning after (or specify time)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">Coordination</h3>
                <p className="text-body-text">We work with your wedding planner, venue coordinator, and other vendors to ensure smooth logistics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Austin & Hill Country Wedding Venues We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg text-center text-sm">Dripping Springs venues</div>
              <div className="bg-white p-4 rounded-lg text-center text-sm">Wimberley ranches</div>
              <div className="bg-white p-4 rounded-lg text-center text-sm">Fredericksburg vineyards</div>
              <div className="bg-white p-4 rounded-lg text-center text-sm">Lake Travis estates</div>
              <div className="bg-white p-4 rounded-lg text-center text-sm">Austin urban venues</div>
              <div className="bg-white p-4 rounded-lg text-center text-sm">Georgetown historic</div>
              <div className="bg-white p-4 rounded-lg text-center text-sm">Bastrop area</div>
              <div className="bg-white p-4 rounded-lg text-center text-sm">Marble Falls</div>
            </div>
          </div>
        </div>
      </section>

      {/* Texas Considerations */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Texas Wedding Considerations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-primary mb-3">The Heat Reality</h3>
                <p className="text-body-text mb-4">Texas weddings, especially spring through fall, mean heat. Consider:</p>
                <ul className="text-body-text space-y-1">
                  <li>• <Link href="/luxury-restroom-trailers/" className="text-accent hover:underline">Luxury trailers with AC</Link> for guest comfort</li>
                  <li>• More units than usual (heat = more bathroom trips)</li>
                  <li>• Shaded placement for standard units</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-3">The Distance Factor</h3>
                <p className="text-body-text mb-4">Many beautiful Hill Country venues are remote. We serve:</p>
                <ul className="text-body-text space-y-1">
                  <li>• Venues up to 100 miles from Austin</li>
                  <li>• Properties without utilities (we bring generators & water)</li>
                  <li>• Difficult access locations (we&apos;ll assess beforehand)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhancements */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Make It Yours</h2>
            <p className="mb-4 font-semibold">Optional enhancements:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">Fresh flowers in trailers</div>
              <div className="bg-white p-4 rounded-lg text-center">Custom signage</div>
              <div className="bg-white p-4 rounded-lg text-center">Attendant service</div>
              <div className="bg-white p-4 rounded-lg text-center">Emergency kit stocking</div>
              <div className="bg-white p-4 rounded-lg text-center">Extended rental hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} title="Wedding Restroom FAQ" />

      {/* Final CTA */}
      <PhoneCTA
        title="Let's Plan Your Wedding Restrooms"
        subtitle="One less thing to worry about on your big day. Call now for a free consultation and quote for your Austin or Hill Country wedding."
      />
    </>
  )
}
