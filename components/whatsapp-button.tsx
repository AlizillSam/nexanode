'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { brand } from '@/lib/site'
import { WhatsAppIcon } from '@/components/brand-icons'

export function WhatsAppButton() {
  const [showTip, setShowTip] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setShowTip(true), 4000)
    return () => clearTimeout(id)
  }, [])

  const href = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hi NexaNode! I'd like to book a free consultation.",
  )}`

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {showTip && (
        <div className="glass relative max-w-[15rem] rounded-2xl rounded-br-sm border border-border p-3 pr-8 text-sm shadow-xl">
          <button
            onClick={() => setShowTip(false)}
            aria-label="Dismiss"
            className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <p className="font-semibold">Need help getting started?</p>
          <p className="text-muted-foreground">Chat with us on WhatsApp — we usually reply within minutes.</p>
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-lg shadow-success/30 transition-transform hover:scale-105"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-30" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>
    </div>
  )
}
