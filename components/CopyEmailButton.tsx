'use client'

import { useState } from 'react'

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard API unavailable — silently do nothing, mailto link above still works
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="font-body text-xs text-navy/40 hover:text-navy/60 transition-colors duration-200 underline underline-offset-2"
    >
      {copied ? 'Copied to clipboard' : `or copy: ${email}`}
    </button>
  )
}
