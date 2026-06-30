const differentiators = [
  {
    number: '01',
    heading: 'Physician-directed',
    body: 'Every protocol is designed and overseen by a licensed physician. Not a nurse, not a technician — a doctor with clinical accountability for your care.',
  },
  {
    number: '02',
    heading: 'Lab-informed',
    body: 'Treatment begins with your bloodwork. We optimise to your numbers, not a generic dosing chart. Follow-up labs are built into every programme.',
  },
  {
    number: '03',
    heading: 'Outcome-focused',
    body: 'We measure energy, body composition, mood, and performance markers — not just whether your levels are in range. The goal is how you function, not how you score.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-[clamp(4rem,8vw,7rem)] bg-navy">
      <div className="max-w-content mx-auto px-4 sm:px-[clamp(1rem,4vw,3rem)]">

        {/* Section header */}
        <div className="mb-14">
          <p className="kicker text-white/30 mb-3">Our standard</p>
          <h2
            className="font-heading text-section text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Clinical rigour.{' '}
            <span className="italic text-blue-medium">No compromise.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {differentiators.map((d) => (
            <div key={d.number} className="flex flex-col">
              <span className="font-body text-xs font-600 text-white/20 tracking-[0.15em] mb-5">
                {d.number}
              </span>
              <div className="w-8 h-px bg-electric mb-5" />
              <h3
                className="font-heading text-white mb-4"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 400 }}
              >
                {d.heading}
              </h3>
              <p className="font-body text-sm text-white/55 leading-[1.7]">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
