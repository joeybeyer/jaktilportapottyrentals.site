import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Porta Potty Rental Austin TX | Same-Day Delivery | From $75/Day',
  description: 'Professional porta potty rental in Austin, TX. Same-day delivery for events, weddings & construction. Clean units from $75/day. Call now for instant quote.',
  keywords: 'porta potty rental austin, portable toilet rental austin tx, porta potty rental near me, construction site porta potty, event porta potty rental',
  openGraph: {
    title: 'Porta Potty Rental Austin TX | Same-Day Delivery | Jaktil',
    description: 'Professional porta potty rental in Austin, TX. Same-day delivery for events, weddings & construction. Clean units from $75/day.',
    url: 'https://jaktilportapottyrentals.site',
    siteName: 'Jaktil Porta Potty Rentals',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://jaktilportapottyrentals.site',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pb-16 lg:pb-0`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  )
}
