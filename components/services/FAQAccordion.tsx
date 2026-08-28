'use client'

import { useState } from 'react'
import { FAQS } from '@/lib/services'

export default function FAQAccordion() {
  // Single-open accordion; the first answer is visible on load so the section
  // never reads as an empty stack of headings.
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="border-t border-navy/[0.09]">
      {FAQS.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} className="border-b border-navy/[0.09]">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-electric"
              >
                <span
                  className="font-heading text-navy"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 400, lineHeight: 1.35 }}
                >
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-1.5 shrink-0 font-body text-lg leading-none text-electric transition-transform duration-200 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              hidden={!isOpen}
            >
              <p className="max-w-2xl pb-7 font-body text-[0.95rem] leading-[1.75] text-navy/60">{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
