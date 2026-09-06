import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Container } from '@/components/ui-kit'
import { ServicesGrid } from '@/components/services-grid'
import { Process } from '@/components/home/process'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'IoT, RPA automation, AI content, and maintenance services from NexaNode — with transparent starting prices and local Pakistani support.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Automation that fits your business — and your budget"
        description="Five core services, each with a range of packages from starter setups to enterprise rollouts. Every one starts with a free consultation."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />
      <section className="py-16">
        <Container>
          <ServicesGrid />
        </Container>
      </section>
      <Process />
      <CtaBand />
    </>
  )
}
