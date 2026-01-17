import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'

const inter = Inter({ subsets: ['latin'] })
const GTM_ID = 'GTM-PFMQJL32'

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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className={`${inter.className} pb-16 lg:pb-0`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  )
}
