import Link from 'next/link'

const pillars = [
  {
    kicker: 'Hormone Health',
    heading: 'TRT & HRT',
    body: 'Comprehensive testosterone and hormone replacement therapy for men and women. Lab-based assessment, personalised protocols, and ongoing clinical monitoring — not a one-size prescription.',
    services: ['Men\'s Testosterone Replacement', 'Women\'s HRT & Menopause Care', 'Lab Work & Hormone Panels', 'Ongoing Protocol Management'],
    href: '/services#hormone-health',
    accent: true,
  },
  {
    kicker: 'Aesthetic Medicine',
    heading: 'Precision Aesthetics',
    body: 'Medical-grade aesthetic treatments administered by trained practitioners. Subtle, natural results — not a catalogue of procedures.',
    services: ['Botox & Dysport', 'Dermal Fillers', 'Laser Hair Removal', 'Skin Resurfacing & IPL'],
    href: '/services#aesthetics',
    accent: false,
  },
  {
    kicker: 'Longevity',
    heading: 'Performance Medicine',
    body: 'Emerging programmes focused on metabolic health, body composition, and cellular optimisation. Built for patients who want more than symptom management.',
    services: ['GLP-1 Weight Management', 'NAD+ IV Therapy', 'Metabolic Assessment', 'More coming in 2025'],
    href: '/services#longevity',
    accent: false,
    badge: 'Expanding',
  },
]

export default function ServicePillars() {
  return (
    <section className="py-[clamp(4rem,8vw,7rem)] bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-[clamp(1rem,4vw,3rem)]">

        {/* Section header */}
        <div className="mb-14">
          <p className="kicker mb-3">What we offer</p>
          <h2
            className="font-heading text-section text-navy"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Three pillars of{' '}
            <span className="italic text-electric">clinical care.</span>
          </h2>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Link
              key={pillar.heading}
              href={pillar.href}
              className={`group relative rounded-card border p-8 flex flex-col transition-all duration-200 hover:shadow-md ${
                pillar.accent
                  ? 'border-electric/20 bg-electric/[0.02]'
                  : 'border-navy/[0.07] bg-white'
              }`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-8 right-8 h-[2px] rounded-full ${pillar.accent ? 'bg-electric' : 'bg-navy/10'}`} />

              {pillar.badge && (
                <span className="inline-block mb-4 font-body text-[0.65rem] font-600 uppercase tracking-[0.12em] text-electric border border-electric/30 px-2.5 py-1 rounded-sm self-start">
                  {pillar.badge}
                </span>
              )}

              <p className="kicker mb-2">{pillar.kicker}</p>
              <h3
                className="font-heading text-card text-navy mb-4"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}
              >
                {pillar.heading}
              </h3>
              <p className="font-body text-sm text-navy/60 leading-relaxed mb-6 flex-1">
                {pillar.body}
              </p>

              <ul className="flex flex-col gap-2 mb-6">
                {pillar.services.map((s) => (
                  <li key={s} className="font-body text-sm text-navy/70 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-electric/50 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>

              <span className="font-body text-xs font-600 uppercase tracking-[0.1em] text-electric group-hover:gap-2 transition-all">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
