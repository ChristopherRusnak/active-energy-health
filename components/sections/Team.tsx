const team = [
  {
    name: 'Dr. [Name]',
    credentials: 'MD, CCFP-EM',
    role: 'Medical Director',
    placeholder: true,
  },
  {
    name: '[Name]',
    credentials: 'RN, BScN',
    role: 'Clinical Nurse',
    placeholder: true,
  },
  {
    name: '[Name]',
    credentials: 'R.Aes',
    role: 'Medical Aesthetician',
    placeholder: true,
  },
]

export default function Team() {
  return (
    <section className="py-[clamp(4rem,8vw,7rem)] bg-white border-t border-navy/[0.07]">
      <div className="max-w-content mx-auto px-4 sm:px-[clamp(1rem,4vw,3rem)]">

        <div className="mb-14">
          <p className="kicker mb-3">The team</p>
          <h2
            className="font-heading text-section text-navy"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Credentials behind{' '}
            <span className="italic text-electric">every appointment.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.role}
              className="rounded-card border border-navy/[0.07] overflow-hidden"
            >
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

              {/* Info */}
              <div className="p-5">
                <p
                  className="font-heading text-navy mb-0.5"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem' }}
                >
                  {member.name}
                </p>
                <p className="font-body text-xs text-electric font-500 mb-1">{member.credentials}</p>
                <p className="font-body text-xs text-navy/45 uppercase tracking-[0.1em]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
