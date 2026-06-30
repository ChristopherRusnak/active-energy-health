import Image from 'next/image'
import Link from 'next/link'
import { BOOKING_URL } from '@/lib/brand'

export default function Hero() {
  return (
    <section className="relative h-[92vh] max-h-[92vh] bg-white pt-16 overflow-hidden">
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-[55%_45%]">
        {/* Text — left column */}
        <div className="relative z-10 flex items-center px-4 sm:px-[clamp(1rem,4vw,3rem)]">
          <div className="max-w-3xl py-8">
            {/* Kicker */}
            <p className="kicker mb-6">Saskatoon · Hormone Health · Aesthetic Medicine</p>

            {/* Hero headline */}
            <h1
              className="font-heading text-hero text-navy mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Optimise your hormones.{' '}
              <span className="italic text-electric">
                Perform at your best.
              </span>
            </h1>

            {/* Subhead */}
            <p className="font-body text-[1.125rem] text-navy/65 leading-[1.7] max-w-xl mb-10">
              Clinician-led TRT and HRT programmes for men and women, combined with precision aesthetic medicine. Rooted in evidence. Focused on outcomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={BOOKING_URL}
                className="font-body text-sm font-600 uppercase tracking-[0.1em] bg-electric text-white px-7 py-4 rounded-sm hover:bg-blue-light transition-colors duration-200 min-h-[44px] flex items-center"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/services"
                className="font-body text-sm font-600 uppercase tracking-[0.1em] text-navy border border-navy/20 px-7 py-4 rounded-sm hover:border-navy/40 transition-colors duration-200 min-h-[44px] flex items-center"
              >
                Our Services →
              </Link>
            </div>

            {/* Trust line */}
            <p className="font-body text-xs text-navy/35 mt-8 tracking-wide">
              Physician-directed care · Lab-informed protocols · In-clinic and ongoing support
            </p>
          </div>
        </div>

        {/* Clinic photo — right column, desktop only */}
        <div aria-hidden className="hidden md:block relative h-full min-h-0 overflow-hidden">
          <Image
            src="/hero-clinic.jpg"
            alt=""
            fill
            priority
            sizes="45vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-y-0 left-0 w-2/5 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.85) 35%, transparent 100%)',
            }}
          />
        </div>
      </div>

      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,86,193,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Hairline bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-navy/[0.07] z-10" />
    </section>
  )
}
