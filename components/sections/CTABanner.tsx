import Link from 'next/link'
import { BOOKING_URL, PHONE } from '@/lib/brand'

export default function CTABanner() {
  return (
    <section className="py-[clamp(4rem,8vw,6rem)] bg-white border-t border-navy/[0.07]">
      <div className="max-w-content mx-auto px-4 sm:px-[clamp(1rem,4vw,3rem)] text-center">

        <p className="kicker mb-4">Ready to start</p>
        <h2
          className="font-heading text-section text-navy mb-5 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Your first consultation is{' '}
          <span className="italic text-electric">free.</span>
        </h2>
        <p className="font-body text-navy/60 text-[1rem] mb-10 max-w-lg mx-auto leading-relaxed">
          Bring your questions, your labs, your goals. We'll tell you exactly what we can do and whether we're the right fit.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={BOOKING_URL}
            className="font-body text-sm font-600 uppercase tracking-[0.1em] bg-electric text-white px-8 py-4 rounded-sm hover:bg-blue-light transition-colors duration-200 min-h-[44px] flex items-center"
          >
            Book a Free Consultation
          </Link>
          <a
            href={`tel:${PHONE}`}
            className="font-body text-sm font-600 uppercase tracking-[0.1em] text-navy border border-navy/20 px-8 py-4 rounded-sm hover:border-navy/40 transition-colors duration-200 min-h-[44px] flex items-center"
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  )
}
