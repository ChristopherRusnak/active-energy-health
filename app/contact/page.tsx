import Link from 'next/link'
import { BOOKING_URL, PHONE, EMAIL, ADDRESS } from '@/lib/brand'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Consultation | Active Energy Health',
  description: 'Book a free consultation at Active Energy Health in Saskatoon. Hormone health, TRT, HRT, and aesthetic medicine.',
}

export default function ContactPage() {
  return (
    <div className="pt-16">

      {/* Page header */}
      <div className="bg-white border-b border-navy/[0.07] py-16 px-4 sm:px-[clamp(1rem,4vw,3rem)]">
        <div className="max-w-content mx-auto">
          <p className="kicker mb-4">Get started</p>
          <h1
            className="font-heading text-hero text-navy max-w-2xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Your first consultation is{' '}
            <span className="italic text-electric">free.</span>
          </h1>
          <p className="font-body text-navy/60 text-[1.05rem] mt-5 max-w-xl leading-relaxed">
            Bring your labs if you have them, your symptoms, your questions. We'll have a clinical conversation — no sales pitch, no obligation.
          </p>
        </div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-[clamp(1rem,4vw,3rem)] py-[clamp(4rem,8vw,6rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Booking */}
          <div>
            <p className="kicker mb-6">Book online</p>

            {/* Booking placeholder */}
            <div className="rounded-card border-2 border-dashed border-navy/15 p-12 flex flex-col items-center justify-center text-center gap-4 mb-8">
              <p className="font-heading text-navy/40" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem' }}>
                Online booking coming soon
              </p>
              <p className="font-body text-sm text-navy/40">
                In the meantime, call or email us to book your free consultation.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-3 font-body text-sm font-600 uppercase tracking-[0.1em] bg-electric text-white px-7 py-4 rounded-sm hover:bg-blue-light transition-colors duration-200 min-h-[44px]"
              >
                Call {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-center gap-3 font-body text-sm font-600 uppercase tracking-[0.1em] text-navy border border-navy/20 px-7 py-4 rounded-sm hover:border-navy/40 transition-colors duration-200 min-h-[44px]"
              >
                Email us →
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-10">

            <div>
              <p className="kicker mb-4">Location</p>
              <p className="font-body text-navy/70 leading-relaxed">{ADDRESS}</p>
              <p className="font-body text-sm text-navy/40 mt-2">Saskatoon, Saskatchewan</p>
            </div>

            <div>
              <p className="kicker mb-4">Hours</p>
              <div className="flex flex-col gap-2 font-body text-sm text-navy/65">
                <div className="flex justify-between border-b border-navy/[0.07] pb-2">
                  <span>Monday – Friday</span>
                  <span>9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-navy/[0.07] pb-2">
                  <span>Saturday</span>
                  <span>By appointment</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>Sunday</span>
                  <span className="text-navy/35">Closed</span>
                </div>
              </div>
            </div>

            <div>
              <p className="kicker mb-4">What to expect</p>
              <div className="flex flex-col gap-4">
                {[
                  { step: '01', text: 'A 30-minute clinical conversation — not a sales presentation.' },
                  { step: '02', text: 'Review of your health history, symptoms, and goals.' },
                  { step: '03', text: 'A clear recommendation. We\'ll tell you exactly what we think will help.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="font-body text-xs font-600 text-navy/25 tracking-[0.1em] pt-0.5">{item.step}</span>
                    <p className="font-body text-sm text-navy/65 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
