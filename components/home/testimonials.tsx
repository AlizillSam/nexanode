import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/site'
import { Container, SectionHeading } from '@/components/ui-kit'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'

export function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Client Words"
            title="Trusted across factories, offices, and homes"
          />
        </Reveal>
        <RevealStagger className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <RevealItem key={t.name} as="article">
              <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6">
                <Quote className="h-7 w-7 text-primary/50" aria-hidden />
                <blockquote className="text-pretty text-foreground/90">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-grad-accent text-sm font-bold text-white">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {t.role} — {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  )
}
