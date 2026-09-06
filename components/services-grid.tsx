import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/site'
import { DynamicIcon } from '@/components/service-icon'
import { RevealStagger, RevealItem } from '@/components/reveal'
import { accent } from '@/components/ui-kit'
import { cn } from '@/lib/utils'

export function ServicesGrid() {
  return (
    <RevealStagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => {
        const c = accent(s.color)
        return (
          <RevealItem key={s.slug} as="article">
            <Link
              href={`/services/${s.slug}`}
              className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span
                className={cn(
                  'flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110',
                  c.bg,
                  c.text,
                )}
              >
                <DynamicIcon name={s.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.navDescription}</p>
              </div>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className={cn('text-sm font-semibold', c.text)}>{s.startingPrice}</span>
                <span className="flex items-center gap-1 text-sm font-medium text-foreground/70 transition-colors group-hover:text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
              <span
                className={cn('absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100', c.bg.replace('/10', ''))}
                aria-hidden
              />
            </Link>
          </RevealItem>
        )
      })}
    </RevealStagger>
  )
}
