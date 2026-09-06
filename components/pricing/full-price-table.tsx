'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/site'
import { accent } from '@/components/ui-kit'
import { cn } from '@/lib/utils'

export function FullPriceTable() {
  const [active, setActive] = useState<string>('all')

  const filtered = active === 'all' ? services : services.filter((s) => s.slug === active)

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActive('all')}
          className={cn(
            'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
            active === 'all' ? 'border-primary/50 bg-primary/10 text-primary' : 'border-border bg-card text-muted-foreground hover:text-foreground',
          )}
        >
          All Services
        </button>
        {services.map((s) => (
          <button
            key={s.slug}
            onClick={() => setActive(s.slug)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              active === s.slug ? 'border-primary/50 bg-primary/10 text-primary' : 'border-border bg-card text-muted-foreground hover:text-foreground',
            )}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-10">
        {filtered.map((s) => {
          const c = accent(s.color)
          return (
            <div key={s.slug}>
              <h3 className={cn('text-lg font-bold', c.text)}>{s.name}</h3>
              <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                      <th className="px-5 py-3 font-semibold">Sub-service</th>
                      <th className="hidden px-5 py-3 font-semibold sm:table-cell">What it's for</th>
                      <th className="px-5 py-3 text-right font-semibold">Starting Price</th>
                      <th className="w-10 px-5 py-3" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {s.subServices.map((sub) => (
                      <tr key={sub.slug} className="transition-colors hover:bg-background/40">
                        <td className="px-5 py-4 font-medium">{sub.name}</td>
                        <td className="hidden px-5 py-4 text-muted-foreground sm:table-cell">{sub.short}</td>
                        <td className={cn('px-5 py-4 text-right font-semibold whitespace-nowrap', c.text)}>{sub.price}</td>
                        <td className="px-5 py-4 text-right">
                          <Link
                            href={`/services/${s.slug}/${sub.slug}`}
                            aria-label={`View ${sub.name}`}
                            className="inline-flex text-muted-foreground transition-colors hover:text-primary"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
