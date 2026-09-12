'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { CONCERNS, SERVICES, TABS, type TabId } from '@/lib/services'
import { BOOKING_URL } from '@/lib/brand'

/** Resolve a URL hash to a tab, honouring the legacy anchors linked from the Footer and home page. */
function tabFromHash(hash: string): TabId | null {
  const key = hash.replace(/^#/, '').toLowerCase()
  if (!key) return null
  const match = TABS.find((t) => t.aliases.includes(key))
  return match ? match.id : null
}

function ServiceCard({
  name,
  description,
  concerns,
  note,
  image,
  priceFrom,
}: {
  name: string
  description: string
  concerns: string[]
  note: string
  image: string
  priceFrom?: string
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-card border border-navy/[0.07] bg-white transition-shadow duration-200 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy/5">
        {/*
          Decorative brand artwork — the heading immediately below names the service,
          so an empty alt avoids a duplicate announcement. If a real photograph
          replaces this, give it a descriptive alt instead.
          eslint-disable-next-line @next/next/no-img-element
        */}
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute bottom-3 left-3 rounded-sm bg-white/[0.92] px-2.5 py-1 font-body text-[0.62rem] font-600 uppercase tracking-[0.11em] text-navy backdrop-blur-sm">
          {note}
        </span>
        {/*
          Deliberately omitted for injectables, fillers, and GLP-1s — see the compliance
          note in lib/services.ts. Only render this badge when the service sets priceFrom.
        */}
        {priceFrom && (
          <span className="absolute bottom-3 right-3 rounded-sm bg-electric px-2.5 py-1 font-body text-[0.62rem] font-600 uppercase tracking-[0.11em] text-white backdrop-blur-sm">
            From {priceFrom}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3
          className="font-heading text-navy"
          style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 400, lineHeight: 1.25 }}
        >
          {name}
        </h3>

        <p className="mt-3 font-body text-sm leading-[1.7] text-navy/60">{description}</p>

        <p className="mt-6 font-body text-[0.62rem] font-600 uppercase tracking-[0.12em] text-navy/35">
          Patients book this for
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {concerns.map((c) => (
            <li
              key={c}
              className="rounded-sm border border-navy/[0.09] bg-navy/[0.02] px-2.5 py-1 font-body text-[0.72rem] text-navy/65"
            >
              {c}
            </li>
          ))}
        </ul>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 self-start border-b border-electric/25 pt-7 pb-0.5 font-body text-[0.72rem] font-600 uppercase tracking-[0.1em] text-electric transition-colors duration-200 hover:border-electric"
        >
          Book this <span aria-hidden="true">→</span>
          <span className="sr-only">— {name}</span>
        </a>
      </div>
    </article>
  )
}

export default function ServiceExplorer() {
  const [activeTab, setActiveTab] = useState<TabId>('hormones')
  const [activeConcern, setActiveConcern] = useState<string | null>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const gridTop = useRef<HTMLDivElement | null>(null)

  // Honour deep links on load (Footer + home page still point at #hormone-health,
  // #aesthetics and #longevity) and respond to in-page hash changes.
  useEffect(() => {
    const apply = () => {
      const t = tabFromHash(window.location.hash)
      if (t) {
        setActiveTab(t)
        setActiveConcern(null)
      }
    }
    apply()
    window.addEventListener('hashchange', apply)
    return () => window.removeEventListener('hashchange', apply)
  }, [])

  const selectTab = useCallback((id: TabId, clearConcern = true) => {
    setActiveTab(id)
    if (clearConcern) setActiveConcern(null)
    // Keep the URL shareable without triggering the browser's own scroll jump.
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${id}`)
    }
  }, [])

  const selectConcern = useCallback(
    (label: string, tab: TabId) => {
      const next = activeConcern === label ? null : label
      setActiveTab(tab)
      setActiveConcern(next)
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', `#${tab}`)
        if (next) gridTop.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },
    [activeConcern],
  )

  // Roving-tabindex keyboard support, as expected of a tablist.
  const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    const keys: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: TABS.length - 1,
    }
    const target = keys[e.key]
    if (target === undefined) return
    e.preventDefault()
    const next = (target + TABS.length) % TABS.length
    selectTab(TABS[next].id)
    tabRefs.current[next]?.focus()
  }

  const tab = TABS.find((t) => t.id === activeTab) ?? TABS[0]

  const visible = useMemo(() => {
    const inTab = SERVICES.filter((s) => s.tabs.includes(activeTab))
    if (!activeConcern) return inTab
    const concern = CONCERNS.find((c) => c.label === activeConcern)
    if (!concern) return inTab
    return inTab.filter((s) => concern.services.includes(s.id))
  }, [activeTab, activeConcern])

  return (
    <div>
      {/* Concern-first entry point — patients pick the problem, not the procedure. */}
      <div className="border-b border-navy/[0.07] py-[clamp(2.5rem,5vw,4rem)]">
        <p className="kicker mb-4">Start here</p>
        <h2
          className="font-heading text-section text-navy"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          What brings you{' '}
          <span className="italic text-electric">in?</span>
        </h2>
        <p className="mt-4 max-w-xl font-body text-[0.95rem] leading-relaxed text-navy/55">
          Pick what you would like to sort out and we will show you what we would consider for it. Not
          on the list, or not sure? That is exactly what the free consultation is for.
        </p>

        <ul className="mt-8 flex flex-wrap gap-2.5">
          {CONCERNS.map((c) => {
            const on = activeConcern === c.label
            return (
              <li key={c.label}>
                <button
                  type="button"
                  onClick={() => selectConcern(c.label, c.tab)}
                  aria-pressed={on}
                  className={`min-h-[44px] rounded-sm border px-4 py-2 font-body text-[0.82rem] transition-colors duration-200 ${
                    on
                      ? 'border-electric bg-electric text-white'
                      : 'border-navy/[0.12] bg-white text-navy/70 hover:border-electric/40 hover:text-navy'
                  }`}
                >
                  {c.label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Tabs */}
      <div ref={gridTop} className="scroll-mt-24 pt-[clamp(2.5rem,5vw,4rem)]">
        <div role="tablist" aria-label="Browse services by concern" className="flex flex-wrap gap-x-8 gap-y-3 border-b border-navy/[0.09]">
          {TABS.map((t, i) => {
            const on = t.id === activeTab
            return (
              <button
                key={t.id}
                id={`tab-${t.id}`}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                role="tab"
                type="button"
                aria-selected={on}
                aria-controls={`panel-${t.id}`}
                tabIndex={on ? 0 : -1}
                onClick={() => selectTab(t.id)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                className={`-mb-px min-h-[44px] border-b-2 pb-3 font-body text-[0.82rem] font-600 uppercase tracking-[0.1em] transition-colors duration-200 ${
                  on ? 'border-electric text-electric' : 'border-transparent text-navy/45 hover:text-navy/75'
                }`}
              >
                {t.label}
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          tabIndex={-1}
          className="pb-[clamp(3rem,6vw,5rem)] pt-10"
        >
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <p className="max-w-xl font-body text-[0.95rem] leading-relaxed text-navy/55">{tab.intro}</p>

            {activeConcern && (
              <button
                type="button"
                onClick={() => setActiveConcern(null)}
                className="min-h-[44px] shrink-0 rounded-sm border border-electric/30 bg-electric/[0.04] px-3.5 py-1.5 font-body text-[0.75rem] text-navy/70 transition-colors duration-200 hover:border-electric/60"
              >
                Filtered by <span className="font-500 text-electric">{activeConcern}</span>
                <span className="ml-2 text-navy/40" aria-hidden="true">
                  ✕
                </span>
                <span className="sr-only">Clear filter</span>
              </button>
            )}
          </div>

          <div aria-live="polite" className="sr-only">
            {visible.length} {visible.length === 1 ? 'service' : 'services'} shown
            {activeConcern ? ` for ${activeConcern}` : ''}.
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((s) => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
