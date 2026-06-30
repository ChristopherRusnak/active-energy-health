'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BOOKING_URL } from '@/lib/brand'

const nav = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-navy/[0.07]">
      <div className="max-w-content mx-auto px-4 sm:px-8 flex items-center justify-between h-16">

        {/* Wordmark */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="font-heading text-navy tracking-[0.08em] text-[1.1rem] font-400"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            ACTIVE ENERGY
          </span>
          <span
            className="font-body text-[0.6rem] font-600 uppercase tracking-[0.18em] text-navy/50"
          >
            HEALTH
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-[0.8rem] font-500 uppercase tracking-[0.1em] text-navy/60 hover:text-navy transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          <div className="w-px h-4 bg-navy/[0.12]" />
          <Link
            href={BOOKING_URL}
            className="font-body text-[0.75rem] font-600 uppercase tracking-[0.1em] bg-electric text-white px-5 py-2.5 rounded-sm hover:bg-blue-light transition-colors duration-200"
          >
            Book a Consultation
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-navy transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-navy transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-navy transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-navy/[0.07] px-4 py-6 flex flex-col gap-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-body text-sm font-500 uppercase tracking-[0.1em] text-navy/70 hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={BOOKING_URL}
            onClick={() => setOpen(false)}
            className="font-body text-[0.75rem] font-600 uppercase tracking-[0.1em] bg-electric text-white px-5 py-3 rounded-sm text-center"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
