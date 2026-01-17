import { PHONE_NUMBER_LINK, TRUST_BADGES } from '@/lib/constants'

interface HeroProps {
  title: string
  subtitle: string
  showTrustBadges?: boolean
}

export default function Hero({ title, subtitle, showTrustBadges = true }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            {subtitle}
          </p>

          <a
            href={PHONE_NUMBER_LINK}
            className="inline-flex items-center gap-3 bg-accent text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-teal-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now for Same-Day Delivery
          </a>

          {showTrustBadges && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TRUST_BADGES.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg py-3 px-4"
                >
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
