import { brand } from '@/lib/site'
import { Container, LinkButton } from '@/components/ui-kit'
import { Reveal } from '@/components/reveal'

export function CtaBand({
  title = 'Ready to automate what slows you down?',
  description = 'Book a free consultation. We assess your needs and recommend a path — before you spend a rupee.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center sm:p-14">
            <div className="grid-motif absolute inset-0 opacity-40" aria-hidden />
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan/20 blur-3xl" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-bold sm:text-4xl">{title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">{description}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <LinkButton href="/contact" size="lg" withArrow>
                  Book Free Consultation
                </LinkButton>
                <LinkButton
                  href={`https://wa.me/${brand.whatsapp}`}
                  size="lg"
                  variant="outline"
                  external
                >
                  Chat on WhatsApp
                </LinkButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
