import { howWeWork } from '@/lib/site'
import { Container, SectionHeading } from '@/components/ui-kit'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'

export function Process() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="A simple path from problem to production"
            description="Every engagement follows the same clear, low-risk process — starting with a free consultation."
          />
        </Reveal>
        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {howWeWork.map((step, i) => (
            <RevealItem key={step.step}>
              <div className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <span className="text-4xl font-bold text-gradient font-[family-name:var(--font-space-grotesk)]">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
                {i < howWeWork.length - 1 && (
                  <span className="absolute right-6 top-8 hidden text-2xl text-border lg:block" aria-hidden>
                    →
                  </span>
                )}
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  )
}
