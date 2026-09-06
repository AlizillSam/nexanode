import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check, Tag, Users } from 'lucide-react'
import { getSubService, services } from '@/lib/site'
import { PageHeader } from '@/components/page-header'
import { Container, LinkButton, accent } from '@/components/ui-kit'
import { DynamicIcon } from '@/components/service-icon'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { cn } from '@/lib/utils'

export function generateStaticParams() {
  return services.flatMap((s) => s.subServices.map((sub) => ({ slug: s.slug, sub: sub.slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; sub: string }>
}): Promise<Metadata> {
  const { slug, sub } = await params
  const data = getSubService(slug, sub)
  if (!data) return {}
  return { title: `${data.sub.name} — ${data.service.name}`, description: data.sub.description }
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ slug: string; sub: string }>
}) {
  const { slug, sub } = await params
  const data = getSubService(slug, sub)
  if (!data) notFound()
  const { service, sub: item } = data
  const c = accent(service.color)
  const related = service.subServices.filter((s) => s.slug !== item.slug).slice(0, 3)

  return (
    <>
      <PageHeader
        eyebrow={service.name}
        title={item.name}
        description={item.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.name, href: `/services/${service.slug}` },
          { label: item.name },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <LinkButton href={`/contact?service=${service.slug}`} withArrow>
            Book This Service
          </LinkButton>
          <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold">
            <Tag className={cn('h-4 w-4', c.text)} />
            {item.price}
          </span>
        </div>
      </PageHeader>

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold">What you get</h2>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {item.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                        <span className={cn('mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full', c.bg, c.text)}>
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm text-foreground/90">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2 font-semibold">
                    <Users className={cn('h-5 w-5', c.text)} />
                    Who it&apos;s for
                  </div>
                  <p className="mt-2 text-muted-foreground">{item.whoFor}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="sticky top-24 space-y-4 rounded-2xl border border-border bg-card p-6">
                <span className={cn('flex h-12 w-12 items-center justify-center rounded-xl', c.bg, c.text)}>
                  <DynamicIcon name={service.icon} className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Starting at</p>
                  <p className={cn('text-2xl font-bold', c.text)}>{item.price}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Includes a free consultation. Final pricing is confirmed after we scope your needs.
                </p>
                <LinkButton href={`/contact?service=${service.slug}`} className="w-full" withArrow>
                  Request a Quote
                </LinkButton>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <ArrowLeft className="h-4 w-4" /> All {service.name}
                </Link>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <h2 className="mb-6 text-xl font-bold">Other {service.name} packages</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${service.slug}/${r.slug}`}
                className="group flex flex-col gap-2 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <h3 className="font-bold">{r.name}</h3>
                <p className="text-sm text-muted-foreground">{r.short}</p>
                <span className={cn('mt-2 text-sm font-semibold', c.text)}>{r.price}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title={`Interested in ${item.name}?`}
        description="Tell us about your setup and we'll send a tailored quote — no obligation."
      />
    </>
  )
}
