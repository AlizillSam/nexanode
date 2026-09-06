import { projects } from '@/lib/site'
import { Container, SectionHeading, LinkButton } from '@/components/ui-kit'
import { ProjectTimerCard } from '@/components/project-timer-card'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'

export function LiveProjects() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Live Right Now"
            title="Projects currently in deployment"
            description="Real engagements we're actively delivering — with live timers counting since kickoff."
          />
        </Reveal>
        <RevealStagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <RevealItem key={p.title} as="div">
              <ProjectTimerCard project={p} />
            </RevealItem>
          ))}
        </RevealStagger>
        <div className="mt-10 flex justify-center">
          <LinkButton href="/portfolio" variant="outline" withArrow>
            View full portfolio
          </LinkButton>
        </div>
      </Container>
    </section>
  )
}
