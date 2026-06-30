import Link from 'next/link'
import { BOOKING_URL } from '@/lib/brand'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Active Energy Health',
  description: 'TRT, HRT, aesthetic medicine, and longevity programmes in Saskatoon. Clinician-led care with lab-informed protocols.',
}

const hormoneServices = [
  {
    name: "Men's Testosterone Replacement (TRT)",
    description: "Comprehensive assessment and treatment for low testosterone. Includes full hormone panel, symptom review, personalised protocol, and ongoing monitoring. We treat the patient, not just the number.",
  },
  {
    name: "Women's HRT & Menopause Care",
    description: "Hormone replacement therapy for perimenopause and menopause. Addresses energy, sleep, mood, body composition, sexual health, and cycle changes through evidence-based, individualised protocols.",
  },
  {
    name: "Hormone Panels & Lab Review",
    description: "Comprehensive blood work including sex hormones, thyroid, metabolic markers, and more. We review your results with you in clinical detail.",
  },
]

const aestheticServices = [
  {
    name: "Botox & Dysport",
    description: "Precision neuromodulator injections for expression lines. Conservative, natural results — administered by trained medical practitioners.",
  },
  {
    name: "Dermal Fillers",
    description: "Hyaluronic acid fillers for volume restoration in the face, lips, and cheeks. Subtle correction, not transformation.",
  },
  {
    name: "Laser Hair Removal",
    description: "Medical-grade laser with melanin reader technology for safe treatment across all skin types. Permanent reduction in 6–8 sessions.",
  },
  {
    name: "Laser Skin Resurfacing",
    description: "Non-ablative laser treatment to address texture, pigmentation, fine lines, and redness. No downtime.",
  },
  {
    name: "IPL Photofacial",
    description: "Intense pulsed light for sun damage, rosacea, cherry angiomas, and uneven tone. Results visible after the first session.",
  },
  {
    name: "Microneedling",
    description: "Collagen induction therapy for acne scarring, texture, and skin rejuvenation. Can be combined with other treatments.",
  },
  {
    name: "HydraFacial",
    description: "Medical-grade cleanse, exfoliation, and hydration infusion. The Hydrafacial Syndeo — no downtime, immediate results.",
  },
  {
    name: "Chemical Peels",
    description: "Clinical-grade peels for acne, pigmentation, and skin texture. We carry Vivier and Pro-Derm pharmaceutical-grade lines.",
  },
]

const longevityServices = [
  {
    name: "GLP-1 Weight Management",
    description: "Physician-supervised GLP-1 programmes for metabolic health and body composition. Medically appropriate candidates only — not a shortcut.",
  },
  {
    name: "NAD+ IV Therapy",
    description: "Intravenous nicotinamide adenine dinucleotide for cellular energy, recovery, and cognitive performance. Administered in-clinic.",
  },
]

function ServiceCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="rounded-card border border-navy/[0.07] p-6 hover:shadow-sm transition-shadow duration-200">
      <h3
        className="font-heading text-navy mb-3"
        style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 400 }}
      >
        {name}
      </h3>
      <p className="font-body text-sm text-navy/60 leading-[1.7]">{description}</p>
    </div>
  )
}

function SectionHeader({ kicker, heading, accent, id }: { kicker: string; heading: string; accent: string; id: string }) {
  return (
    <div className="mb-10" id={id}>
      <p className="kicker mb-3">{kicker}</p>
      <h2
        className="font-heading text-section text-navy"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {heading}{' '}
        <span className="italic text-electric">{accent}</span>
      </h2>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="pt-16">

      {/* Page header */}
      <div className="bg-white border-b border-navy/[0.07] py-16 px-4 sm:px-[clamp(1rem,4vw,3rem)]">
        <div className="max-w-content mx-auto">
          <p className="kicker mb-4">Active Energy Health</p>
          <h1
            className="font-heading text-hero text-navy max-w-2xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Services built around{' '}
            <span className="italic text-electric">your biology.</span>
          </h1>
          <p className="font-body text-navy/60 text-[1.05rem] mt-5 max-w-xl leading-relaxed">
            Every service we offer exists because it works. We don't carry treatments we can't stand behind.
          </p>
        </div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-[clamp(1rem,4vw,3rem)]">

        {/* Hormone Health */}
        <section className="py-[clamp(3rem,6vw,5rem)] border-b border-navy/[0.07]" scroll-mt-24>
          <SectionHeader
            id="hormone-health"
            kicker="Hormone Health"
            heading="TRT &"
            accent="HRT."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hormoneServices.map((s) => <ServiceCard key={s.name} {...s} />)}
          </div>
        </section>

        {/* Aesthetic Medicine */}
        <section className="py-[clamp(3rem,6vw,5rem)] border-b border-navy/[0.07]">
          <SectionHeader
            id="aesthetics"
            kicker="Aesthetic Medicine"
            heading="Precision"
            accent="aesthetics."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aestheticServices.map((s) => <ServiceCard key={s.name} {...s} />)}
          </div>
        </section>

        {/* Longevity */}
        <section className="py-[clamp(3rem,6vw,5rem)]">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <p className="kicker mb-3">Longevity</p>
              <h2
                className="font-heading text-section text-navy"
                style={{ fontFamily: 'var(--font-heading)' }}
                id="longevity"
              >
                Performance{' '}
                <span className="italic text-electric">medicine.</span>
              </h2>
            </div>
            <span className="self-start mt-2 font-body text-[0.65rem] font-600 uppercase tracking-[0.12em] text-electric border border-electric/30 px-2.5 py-1 rounded-sm whitespace-nowrap">
              Expanding
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
            {longevityServices.map((s) => <ServiceCard key={s.name} {...s} />)}
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="bg-navy py-16 px-4 sm:px-[clamp(1rem,4vw,3rem)]">
        <div className="max-w-content mx-auto text-center">
          <p className="kicker text-white/30 mb-4">Next step</p>
          <h2
            className="font-heading text-white mb-5"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.875rem, 3vw, 2.5rem)' }}
          >
            Not sure where to start?{' '}
            <span className="italic text-blue-medium">We'll tell you.</span>
          </h2>
          <p className="font-body text-white/55 text-sm mb-8 max-w-md mx-auto">
            Your free consultation is a clinical conversation — bring your labs, your symptoms, your goals.
          </p>
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
