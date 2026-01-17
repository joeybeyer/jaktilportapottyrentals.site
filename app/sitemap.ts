import { MetadataRoute } from 'next'
import { CITIES, SERVICES } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jaktilportapottyrentals.site'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // City pages
  const cityPages = CITIES.map((city) => ({
    url: `${baseUrl}/${city.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Service pages
  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...cityPages, ...servicePages]
}
