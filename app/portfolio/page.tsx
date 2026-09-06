import type { Metadata } from 'next'
import { projects, brand } from '@/lib/site'
import { PageHeader } from '@/components/page-header'
import { Container } from '@/components/ui-kit'
import { ProjectTimerCard } from '@/components/project-timer-card'
import { RevealStagger, RevealItem } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: `Live and recent IoT, RPA, and AI content engagements from ${brand.name} — with real-time project timers.`,
}

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="What we're building right now"
        description="A look at engagements currently in deployment across IoT, RPA, and AI content — with live timers counting since kickoff."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]}
      />

      <section className="py-16">
        <Container>
          <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <RevealItem key={p.title}>
                <ProjectTimerCard project={p} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <CtaBand
        title="Want to see your project on this page next?"
        description="Book a free consultation and let's scope your engagement."
      />
    </>
  )
}
