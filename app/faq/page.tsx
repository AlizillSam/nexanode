import type { Metadata } from 'next'
import { faqs, brand } from '@/lib/site'
import { PageHeader } from '@/components/page-header'
import { Container } from '@/components/ui-kit'
import { FaqAccordion } from '@/components/faq-accordion'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'FAQ',
  description: `Answers to common questions about working with ${brand.name} — consultations, timelines, pricing, and support.`,
}

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Can't find what you're looking for? Send us a message and we'll get back to you personally."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />

      <section className="py-16">
        <Container className="max-w-3xl">
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
