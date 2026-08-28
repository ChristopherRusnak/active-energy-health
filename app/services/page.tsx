import Link from 'next/link'
import type { Metadata } from 'next'
import ServiceExplorer from '@/components/services/ServiceExplorer'
import FAQAccordion from '@/components/services/FAQAccordion'
import { CLINIC_POSTER, CLINIC_VIDEO, CONSULT, PROCESS, STANDARDS } from '@/lib/services'
import { BOOKING_URL, PHONE } from '@/lib/brand'

export const metadata: Metadata = {
  title: 'Services | Active Energy Health',
  description:
    'Browse by what you want to sort out — hormones and energy, skin, body, or longevity. Physician-designed protocols in Saskatoon, and every first consultation is free.',
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="border-b border-navy/[0.07] bg-white px-4 py-16 sm:px-[clamp(1rem,4vw,3rem)]">
        <div className="mx-auto max-w-content">
          <p className="kicker mb-4">Active Energy Health</p>
          <h1
            className="font-heading text-hero max-w-3xl text-navy"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Tell us what you want to fix.{' '}
            <span className="italic text-electric">We&apos;ll tell you what works.</span>
          </h1>
          <p className="mt-5 max-w-xl font-body text-[1.05rem] leading-relaxed text-navy/60">
            Most people arrive with a problem rather than a procedure in mind. So start with the
            problem — every service below exists because we would use it ourselves.
          </p>
        </div>
      </div>

      {/* Concern chips, tabs, and service cards */}
      <div className="mx-auto max-w-content px-4 sm:px-[clamp(1rem,4vw,3rem)]">
        <ServiceExplorer />
      </div>

      {/* Free consultation callout.
          Compliance note: the first consultation is free for hormones AND aesthetics.
          The $175 named here is the SEPARATE comprehensive HRT/TRT intake that follows
          if a patient proceeds — it is deliberately never presented as the "value" of
          the free visit, which would be an ordinary-price claim on an unpriced service. */}
      <div className="bg-electric px-4 py-[clamp(3.5rem,7vw,5.5rem)] sm:px-[clamp(1rem,4vw,3rem)]">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="kicker mb-4 text-white/50">No charge, no obligation</p>
            <h2
              className="font-heading text-white"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,3.4vw,3rem)', lineHeight: 1.15 }}
            >
              Every first consultation is{' '}
              <span className="italic text-blue-faded">free.</span>
            </h2>
            <p className="mt-5 max-w-lg font-body text-[1rem] leading-relaxed text-white/75">
              Hormones or aesthetics, the first conversation costs nothing. You sit down with one of
              our health coaches and get a straight answer about whether we can help — including when
              the answer is that we cannot.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center rounded-sm bg-white px-8 py-4 font-body text-sm font-600 uppercase tracking-[0.1em] text-electric transition-colors duration-200 hover:bg-blue-faded"
              >
                Book Now
              </a>
              <a
                href={`tel:${PHONE}`}
                className="flex min-h-[44px] items-center rounded-sm border border-white/30 px-8 py-4 font-body text-sm font-600 uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:border-white/70"
              >
                Call {PHONE}
              </a>
            </div>
          </div>

          {/* Transparent pricing panel — what is free, and what is not. */}
          <div className="rounded-card border border-white/15 bg-white/[0.07] p-8 backdrop-blur-sm">
            <p className="kicker mb-6 text-white/45">What it costs</p>

            <div className="flex items-baseline justify-between gap-6 border-b border-white/15 pb-5">
              <div>
                <p className="font-body text-[0.95rem] font-500 text-white">First consultation</p>
                <p className="mt-1 font-body text-[0.82rem] text-white/55">Hormones or aesthetics</p>
              </div>
              <p
                className="font-heading italic text-blue-faded"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', lineHeight: 1 }}
              >
                Free
              </p>
            </div>

            <div className="flex items-baseline justify-between gap-6 pt-5">
              <div>
                <p className="font-body text-[0.95rem] font-500 text-white">HRT / TRT comprehensive intake</p>
                <p className="mt-1 font-body text-[0.82rem] text-white/55">
                  Only if you decide to go ahead
                </p>
              </div>
              <p
                className="font-heading text-white"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', lineHeight: 1 }}
              >
                {CONSULT.intakeFee}
              </p>
            </div>

            <p className="mt-6 font-body text-[0.78rem] leading-relaxed text-white/50">
              Aesthetic consultations are complimentary, always. Treatment pricing is quoted in writing
              before anything is booked.
            </p>
          </div>
        </div>
      </div>

      {/* How we work.
          This band stands in for the patient-testimonial section a med spa site would
          normally carry. CPSS advertising standards restrict patient testimonials, so
          trust is built here on process and credentials. Do not add patient quotes. */}
      <div className="mx-auto max-w-content px-4 py-[clamp(4rem,8vw,6.5rem)] sm:px-[clamp(1rem,4vw,3rem)]">
        <div className="mb-14 max-w-2xl">
          <p className="kicker mb-3">How we work</p>
          <h2 className="font-heading text-section text-navy" style={{ fontFamily: 'var(--font-heading)' }}>
            What treatment here{' '}
            <span className="italic text-electric">actually looks like.</span>
          </h2>
          <p className="mt-5 font-body text-[0.98rem] leading-relaxed text-navy/55">
            We do not publish patient stories — Saskatchewan&apos;s regulatory standards restrict that,
            and frankly they tell you more about the patient than about the clinic. Here is the process
            instead, which is the part you can actually hold us to.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <li key={p.step} className="border-t-2 border-electric/20 pt-6">
              <p className="font-body text-[0.7rem] font-600 uppercase tracking-[0.14em] text-electric">
                {p.step}
              </p>
              <h3
                className="mt-4 font-heading text-navy"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 400, lineHeight: 1.3 }}
              >
                {p.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-[1.7] text-navy/60">{p.body}</p>
            </li>
          ))}
        </ol>

        {/* Inside the clinic.
            CLINIC_VIDEO in lib/services.ts is null until real footage exists; set it to a
            path under /public and this band becomes an autoplaying muted loop with the
            same still as its poster frame. Nothing here breaks while it stays null. */}
        <div className="mt-[clamp(3.5rem,7vw,5.5rem)] grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative overflow-hidden rounded-hero bg-navy">
            {CLINIC_VIDEO ? (
              <video
                className="h-full min-h-[280px] w-full object-cover"
                src={CLINIC_VIDEO}
                poster={CLINIC_POSTER}
                autoPlay
                muted
                loop
                playsInline
                aria-label="Inside the Active Energy Health clinic"
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={CLINIC_POSTER}
                alt="The treatment space at Active Energy Health in Saskatoon"
                className="h-full min-h-[280px] w-full object-cover"
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="kicker mb-2 text-white/50">Inside the clinic</p>
              <p
                className="font-heading text-white"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', lineHeight: 1.2 }}
              >
                30-401 Ledingham Way,{' '}
                <span className="italic text-blue-faded">Saskatoon.</span>
              </p>
            </div>
          </div>

          <div className="rounded-hero border border-navy/[0.09] bg-navy/[0.015] p-8">
            <p className="kicker mb-6">What you can hold us to</p>
            <ul className="flex flex-col gap-4">
              {STANDARDS.map((s) => (
                <li key={s} className="flex gap-3 font-body text-sm leading-[1.65] text-navy/70">
                  <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-electric" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="border-t border-navy/[0.07] bg-navy/[0.015] px-4 py-[clamp(4rem,8vw,6.5rem)] sm:px-[clamp(1rem,4vw,3rem)]">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="kicker mb-3">Before you book</p>
              <h2 className="font-heading text-section text-navy" style={{ fontFamily: 'var(--font-heading)' }}>
                Questions we get{' '}
                <span className="italic text-electric">every week.</span>
              </h2>
              <p className="mt-5 max-w-sm font-body text-[0.95rem] leading-relaxed text-navy/55">
                If yours is not here, ask us directly — we would rather answer it before you book than
                after.
              </p>
              <a
                href={`tel:${PHONE}`}
                className="mt-6 inline-flex min-h-[44px] items-center border-b border-electric/25 pb-0.5 font-body text-[0.75rem] font-600 uppercase tracking-[0.1em] text-electric transition-colors duration-200 hover:border-electric"
              >
                Call {PHONE}
              </a>
            </div>

            <FAQAccordion />
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="bg-navy px-4 py-16 sm:px-[clamp(1rem,4vw,3rem)]">
        <div className="mx-auto max-w-content text-center">
          <p className="kicker mb-4 text-white/30">Next step</p>
          <h2
            className="mb-5 font-heading text-white"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.875rem, 3vw, 2.5rem)' }}
          >
            Still not sure where to start?{' '}
            <span className="italic text-blue-medium">That is our job.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-md font-body text-sm text-white/55">
            Book the free consultation and bring the problem. We will work out the treatment together.
          </p>
          <Link
            href={BOOKING_URL}
            className="inline-flex items-center rounded-sm bg-electric px-8 py-4 font-body text-sm font-600 uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-blue-light"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}
