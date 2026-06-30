import Link from 'next/link'
import { BOOKING_URL } from '@/lib/brand'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Active Energy Health',
  description: 'Physician-directed hormone health and aesthetic medicine in Saskatoon. Meet the team behind Active Energy Health.',
}

export default function AboutPage() {
  return (
    <div className="pt-16">

      {/* Page header */}
      <div className="bg-white border-b border-navy/[0.07] py-16 px-4 sm:px-[clamp(1rem,4vw,3rem)]">
        <div className="max-w-content mx-auto max-w-3xl">
          <p className="kicker mb-4">About</p>
          <h1
            className="font-heading text-hero text-navy"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            A clinic built on{' '}
            <span className="italic text-electric">clinical standards.</span>
          </h1>
        </div>
      </div>

      {/* Mission */}
      <section className="py-[clamp(4rem,8vw,6rem)] border-b border-navy/[0.07]">
        <div className="max-w-content mx-auto px-4 sm:px-[clamp(1rem,4vw,3rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="kicker mb-4">Our approach</p>
              <h2
                className="font-heading text-section text-navy mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Hormone health is medicine.{' '}
                <span className="italic text-electric">We treat it that way.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-5 text-navy/65 font-body text-[1rem] leading-[1.8]">
              <p>
                Active Energy Health was built on a straightforward premise: most people in their 40s and 50s are under-optimised, and most of the solutions they've been offered are either inadequate or inaccessible.
              </p>
              <p>
                We focus on testosterone and hormone replacement therapy because the evidence is strong, the outcomes are measurable, and the impact on quality of life is significant. We combine that with aesthetic medicine because appearance and function are not separate concerns for most of our patients.
              </p>
              <p>
                Every protocol is built by a physician and monitored with labs. We don't guess, and we don't dose by anecdote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-[clamp(4rem,8vw,6rem)] border-b border-navy/[0.07]">
        <div className="max-w-content mx-auto px-4 sm:px-[clamp(1rem,4vw,3rem)]">
          <p className="kicker mb-4">The team</p>
          <h2
            className="font-heading text-section text-navy mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Credentials behind{' '}
            <span className="italic text-electric">every appointment.</span>
          </h2>

          {/* Team grid - placeholder for headshots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Dr. [Name1]', credentials: 'MD, CCFP-EM', role: 'Medical Director', bio: 'Emergency medicine physician with a focus on hormonal optimisation and evidence-based preventive care.' },
              { name: '[Name2]', credentials: 'RN, BScN', role: 'Clinical Nurse', bio: 'Registered nurse specialising in hormone protocols, IV therapy, and patient education.' },
              { name: '[Name3]', credentials: 'R.Aes', role: 'Medical Aesthetician', bio: 'Certified medical aesthetician with advanced training in laser, injectables, and skin health.' },
            ].map((member) => (
              <div key={member.role} className="rounded-card border border-navy/[0.07] overflow-hidden">
                {/* Headshot placeholder */}
                <div className="aspect-[4/5] bg-navy/[0.03] flex items-center justify-center border-b border-navy/[0.07]">
                  <div className="flex flex-col items-center gap-2 text-navy/20">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="15" r="8" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M4 38c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="font-body text-xs uppercase tracking-wider">Photo coming</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-heading text-navy mb-0.5" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>
                    {member.name}
                  </p>
                  <p className="font-body text-xs text-electric font-500 mb-1">{member.credentials}</p>
                  <p className="font-body text-xs text-navy/40 uppercase tracking-[0.1em] mb-4">{member.role}</p>
                  <p className="font-body text-sm text-navy/55 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[clamp(4rem,8vw,6rem)] bg-navy">
        <div className="max-w-content mx-auto px-4 sm:px-[clamp(1rem,4vw,3rem)]">
          <p className="kicker text-white/30 mb-4">What we stand for</p>
          <h2
            className="font-heading text-section text-white mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our commitments to{' '}
            <span className="italic text-blue-medium">every patient.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { heading: 'Transparency', body: 'We tell you what we can do, what we can\'t, and what the evidence actually says — before you commit to anything.' },
              { heading: 'Clinical accountability', body: 'A physician is responsible for every treatment plan. Full stop.' },
              { heading: 'No upselling', body: 'You get what you need, not what\'s most profitable. We\'d rather lose a sale than damage a patient relationship.' },
              { heading: 'Continuity', body: 'Hormone optimisation is not a one-time appointment. We monitor, adjust, and follow up because that\'s what works.' },
            ].map((v) => (
              <div key={v.heading} className="border-t border-white/[0.08] pt-6">
                <h3 className="font-heading text-white mb-3" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem' }}>
                  {v.heading}
                </h3>
                <p className="font-body text-sm text-white/50 leading-[1.7]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-white py-16 px-4 sm:px-[clamp(1rem,4vw,3rem)] border-t border-navy/[0.07]">
        <div className="max-w-content mx-auto text-center">
          <h2
            className="font-heading text-navy mb-5"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.875rem, 3vw, 2.5rem)' }}
          >
            Come in and meet us.{' '}
            <span className="italic text-electric">First visit is free.</span>
          </h2>
          <Link
            href={BOOKING_URL}
            className="inline-flex items-center font-body text-sm font-600 uppercase tracking-[0.1em] bg-electric text-white px-8 py-4 rounded-sm hover:bg-blue-light transition-colors duration-200"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}