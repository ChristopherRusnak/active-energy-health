import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Active Energy Health | Hormone Health & Aesthetic Medicine — Saskatoon',
  description: 'Clinician-led hormone health, TRT, HRT, and aesthetic medicine in Saskatoon. Evidence-based care for men and women.',
  keywords: 'TRT Saskatoon, hormone replacement therapy Saskatoon, HRT Saskatoon, testosterone replacement, menopause treatment, Botox Saskatoon, medical spa Saskatoon',
  openGraph: {
    title: 'Active Energy Health',
    description: 'Clinician-led hormone health and aesthetic medicine in Saskatoon.',
    url: 'https://activeenergyhealth.ca',
    siteName: 'Active Energy Health',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
