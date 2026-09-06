'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { X, Sparkles } from 'lucide-react'
import { brand } from '@/lib/site'
import { CountdownTimer } from '@/components/countdown-timer'
import { endOfMonth } from '@/lib/dates'

export function PromoPopup() {
  const [open, setOpen] = useState(false)
  const [target] = useState(() => endOfMonth())

  useEffect(() => {
    if (sessionStorage.getItem('nexanode-promo-dismissed')) return

    const trigger = () => {
      if (!sessionStorage.getItem('nexanode-promo-dismissed')) setOpen(true)
    }
    const timer = setTimeout(trigger, 18000)
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger()
    }
    document.addEventListener('mouseleave', onLeave)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const close = () => {
    setOpen(false)
    sessionStorage.setItem('nexanode-promo-dismissed', '1')
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={close} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
      >
        <div className="grid-motif absolute inset-0 opacity-40" aria-hidden />
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" aria-hidden />
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="relative p-7 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Launch Offer
          </span>
          <h2 id="promo-title" className="mt-4 text-2xl font-bold text-balance">
            Get <span className="text-gradient">20% Off</span> Your First Project
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Only <span className="font-semibold text-foreground">{brand.slotsLeft} onboarding slots</span> left this
            month. Book a free consultation and use code:
          </p>
          <div className="mt-4 rounded-xl border border-dashed border-primary/40 bg-primary/5 py-3 text-lg font-bold tracking-[0.2em] text-primary">
            {brand.promoCode}
          </div>
          <div className="mt-4 flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Offer ends in</span>
            <CountdownTimer targetDate={target} />
          </div>
          <Link
            href="/contact"
            onClick={close}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-grad-accent px-6 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
          >
            Claim My Discount
          </Link>
          <button onClick={close} className="mt-3 text-xs text-muted-foreground underline-offset-4 hover:underline">
            No thanks, maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
