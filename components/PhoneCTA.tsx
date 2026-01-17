import { PHONE_NUMBER_LINK } from '@/lib/constants'

interface PhoneCTAProps {
  title?: string
  subtitle?: string
  variant?: 'primary' | 'secondary'
}

export default function PhoneCTA({
  title = 'Get Your Porta Potty Delivered Today',
  subtitle = 'Fast service. Clear pricing. Local expertise.',
  variant = 'primary'
}: PhoneCTAProps) {
  const bgClass = variant === 'primary'
    ? 'bg-gradient-to-r from-accent to-teal-600'
    : 'bg-gradient-to-r from-primary to-blue-800'

  return (
    <section className={`${bgClass} text-white py-12 md:py-16`}>
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-gray-100 mb-8">{subtitle}</p>
        <a
          href={PHONE_NUMBER_LINK}
          className="inline-flex items-center gap-3 bg-white text-primary font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-100 transition-colors shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now - Limited Same-Day Availability
        </a>
      </div>
    </section>
  )
}
