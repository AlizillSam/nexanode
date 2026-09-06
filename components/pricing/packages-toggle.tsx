'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { packages } from '@/lib/site'
import { LinkButton } from '@/components/ui-kit'
import { RevealStagger, RevealItem } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function PackagesToggle() {
  const [monthly, setMonthly] = useState(false)

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <span className={cn('text-sm font-medium', !monthly ? 'text-foreground' : 'text-muted-foreground')}>
          One-time Project
        </span>
        <button
          role="switch"
          aria-checked={monthly}
          aria-label="Toggle between one-time project and monthly retainer pricing"
          onClick={() => setMonthly((v) => !v)}
          className="relative h-7 w-14 rounded-full border border-border bg-card transition-colors"
        >
          <span
            className={cn(
              'absolute top-0.5 h-5 w-5 rounded-full bg-grad-accent transition-transform',
              monthly ? 'translate-x-7' : 'translate-x-0.5',
            )}
          />
        </button>
        <span className={cn('text-sm font-medium', monthly ? 'text-foreground' : 'text-muted-foreground')}>
          Monthly Retainer
        </span>
      </div>

      <RevealStagger className="mt-10 grid gap-6 lg:grid-cols-3">
        {packages.map((pkg) => (
          <RevealItem key={pkg.name} as="article">
            <div
              className={cn(
                'relative flex h-full flex-col rounded-3xl border p-7',
                pkg.popular ? 'border-primary/50 bg-card shadow-xl shadow-primary/10' : 'border-border bg-card',
              )}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-grad-accent px-3 py-1 text-xs font-bold text-white shadow-lg">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{pkg.bestFor}</p>
              <p className="mt-5 text-3xl font-bold text-gradient font-[family-name:var(--font-space-grotesk)]">
                {monthly ? pkg.monthlyPrice : pkg.oneTimePrice}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <LinkButton
                href="/contact"
                className="mt-7 w-full"
                variant={pkg.popular ? 'primary' : 'outline'}
                withArrow
              >
                {pkg.cta}
              </LinkButton>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </div>
  )
}
