import Link from 'next/link'
import { BRAND_NAME, PHONE, EMAIL, ADDRESS, BOOKING_URL } from '@/lib/brand'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-content mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col leading-none mb-4">
              <span
                className="font-heading text-white tracking-[0.08em] text-[1.1rem]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                ACTIVE ENERGY
              </span>
              <span className="font-body text-[0.6rem] font-600 uppercase tracking-[0.18em] text-white/40 mt-0.5">
                HEALTH
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed text-white/50 max-w-xs">
              Clinician-led hormone health and aesthetic medicine. Evidence-based care for how you want to live.
            </p>
          </div>

          {/* Care */}
          <div>
            <p className="kicker text-white/30 mb-4">Care</p>
            <div className="flex flex-col gap-2.5">
              <Link href="/services#hormone-health" className="font-body text-sm text-white/60 hover:text-white transition-colors">Hormone Health</Link>
              <Link href="/services#aesthetics" className="font-body text-sm text-white/60 hover:text-white transition-colors">Aesthetic Medicine</Link>
              <Link href="/services#longevity" className="font-body text-sm text-white/60 hover:text-white transition-colors">Longevity</Link>
              <Link href={BOOKING_URL} className="font-body text-sm text-white/60 hover:text-white transition-colors">Book a Consultation</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="kicker text-white/30 mb-4">Contact</p>
            <div className="flex flex-col gap-2.5">
              <a href={`tel:${PHONE}`} className="font-body text-sm text-white/60 hover:text-white transition-colors">{PHONE}</a>
              <a href={`mailto:${EMAIL}`} className="font-body text-sm text-white/60 hover:text-white transition-colors">{EMAIL}</a>
              <p className="font-body text-sm text-white/40 leading-snug">{ADDRESS}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-body text-xs text-white/30">
            © {year} Active Energy Health Inc. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="font-body text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/privacy#medical-disclaimer" className="font-body text-xs text-white/30 hover:text-white/60 transition-colors">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
