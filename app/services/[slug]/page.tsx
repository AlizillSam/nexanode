import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, Clock, Tag, Users } from 'lucide-react'
import { getService, services } from '@/lib/site'
import { PageHeader } from '@/components/page-header'
import { Container, SectionHeading, LinkButton, accent } from '@/components/ui-kit'
import { DynamicIcon } from '@/components/service-icon'
import { FaqAccordion } from '@/components/faq-accordion'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { cn } from '@/lib/utils'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.name,
    description: service.intro,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  const c = accent(service.color)

  return (
    <>
      <PageHeader
        eyebrow={service.name}
        title={service.headline}
        description={service.intro}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.name },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <LinkButton href={`/contact?service=${service.slug}`} withArrow>
            Get a Free Quote
          </LinkButton>
          <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm">
            <Tag className={cn('h-4 w-4', c.text)} />
            {service.startingPrice}
          </span>
          <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm">
            <Clock className={cn('h-4 w-4', c.text)} />
            {service.timeline}
          </span>
        </div>
      </PageHeader>

      <section className="py-16">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border">
                <Image
                  src={service.image || '/placeholder.svg'}
                  alt={service.name}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
                <div className={cn('absolute inset-0 bg-gradient-to-t opacity-30', 'from-background to-transparent')} />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold">What&apos;s included</h2>
                  <ul className="mt-4 space-y-3">
                    {service.whatsIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className={cn('mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full', c.bg, c.text)}>
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2 font-semibold">
                    <Users className={cn('h-5 w-5', c.text)} />
                    Who it&apos;s for
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{service.whoFor}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="How We Work" title="Our process for this service" align="left" />
          </Reveal>
          <RevealStagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <RevealItem key={step.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-5">
                  <span className={cn('text-sm font-bold', c.text)}>Step {i + 1}</span>
                  <h3 className="mt-2 font-bold">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{step.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Packages"
              title="Choose the right scope"
              description="Every package below starts with a free consultation and transparent pricing."
            />
          </Reveal>
          <RevealStagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.subServices.map((sub) => (
              <RevealItem key={sub.slug} as="article">
                <Link
                  href={`/services/${service.slug}/${sub.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <span className={cn('flex h-10 w-10 items-center justify-center rounded-lg', c.bg, c.text)}>
                    <DynamicIcon name={service.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold">{sub.name}</h3>
                  <p className="text-sm text-muted-foreground">{sub.short}</p>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <span className={cn('text-sm font-semibold', c.text)}>{sub.price}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" aria-hidden />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10">
              <div className={cn('absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl', c.bg)} aria-hidden />
              <div className="relative">
                <span className={cn('text-xs font-semibold uppercase tracking-wider', c.text)}>Case Study</span>
                <h3 className="mt-3 text-2xl font-bold">{service.caseStudy.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{service.caseStudy.client}</p>
                <p className="mt-4 max-w-2xl text-pretty text-lg text-foreground/90">{service.caseStudy.result}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-12">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Questions about this service" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <FaqAccordion items={service.faqs} />
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title={`Ready to get started with ${service.name}?`}
        description="Book a free consultation and we'll scope the right package for your needs and budget."
      />
    </>
  )
}
