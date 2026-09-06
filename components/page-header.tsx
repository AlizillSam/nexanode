import type { ReactNode } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Container, Eyebrow } from '@/components/ui-kit'

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  breadcrumbs?: { label: string; href?: string }[]
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-motif absolute inset-0 opacity-40" aria-hidden />
      <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" aria-hidden />
      <Container className="relative py-16 sm:py-20">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              {breadcrumbs.map((b, i) => (
                <li key={b.label} className="flex items-center gap-1">
                  {b.href ? (
                    <Link href={b.href} className="transition-colors hover:text-primary">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{b.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
          <h1 className="text-balance text-4xl font-bold leading-[1.1] sm:text-5xl">{title}</h1>
          {description && (
            <p className="mt-5 text-pretty text-lg text-muted-foreground">{description}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  )
}
