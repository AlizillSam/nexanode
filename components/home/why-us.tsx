import { whyChooseUs } from '@/lib/site'
import { Container, SectionHeading } from '@/components/ui-kit'
import { DynamicIcon } from '@/components/service-icon'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'

export function WhyUs() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why NexaNode"
            title="Enterprise technology, built for Pakistani businesses"
            description="We pair global-grade automation with a local team that shows up, prices transparently, and stays after handover."
          />
        </Reveal>
        <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <RevealItem key={item.title} as="article">
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <DynamicIcon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  )
}
