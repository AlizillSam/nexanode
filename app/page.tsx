import { Hero } from '@/components/home/hero'
import { WhyUs } from '@/components/home/why-us'
import { Process } from '@/components/home/process'
import { LiveProjects } from '@/components/home/live-projects'
import { Testimonials } from '@/components/home/testimonials'
import { ServicesGrid } from '@/components/services-grid'
import { CtaBand } from '@/components/cta-band'
import { Container, SectionHeading } from '@/components/ui-kit'
import { Reveal } from '@/components/reveal'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Five ways we put automation to work"
              description="From smart homes to enterprise bot fleets and an AI content studio — one team, transparent pricing, local support."
            />
          </Reveal>
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </Container>
      </section>

      <WhyUs />
      <Process />
      <LiveProjects />
      <Testimonials />
      <CtaBand />
    </>
  )
}
