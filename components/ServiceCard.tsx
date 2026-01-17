import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: string
  price?: string
}

export default function ServiceCard({ title, description, href, icon, price }: ServiceCardProps) {
  return (
    <Link href={href} className="card group block">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-body-text mb-4">{description}</p>
      {price && (
        <p className="text-accent font-semibold">{price}</p>
      )}
      <div className="mt-4 flex items-center text-accent font-medium">
        Learn More
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
