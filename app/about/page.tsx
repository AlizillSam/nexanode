import type { Metadata } from 'next'
import Image from 'next/image'
import { brand, team, milestones, values } from '@/lib/site'
import { PageHeader } from '@/components/page-header'
import { Container, SectionHeading } from '@/components/ui-kit'
import { DynamicIcon } from '@/components/service-icon'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About Us',
  description: `The story, mission, and team behind ${brand.name} — a Pakistan-based IoT, automation, and AI content company.`,
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Bringing enterprise-grade automation home"
        description={`${brand.name} is a new Pakistan-based company built to bring the kind of IoT, RPA, and AI content production local businesses have only ever seen done abroad — with transparent pricing and a team that actually shows up.`}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      {/* Mission & Vision */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Mission</span>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/90">{brand.mission}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our Vision</span>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/90">
                  A Pakistan where every business — from a single smart home to a multi-site factory floor — runs on
                  automation and AI that is affordable, locally supported, and built to last, not imported and
                  abandoned after handover.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="What We Stand For" title="Our values" />
          </Reveal>
          <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <DynamicIcon name={v.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{v.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* Milestones */}
      <section className="py-16">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Our Journey" title="Milestones so far" align="left" />
          </Reveal>
          <div className="relative mt-12 space-y-6 border-l border-border pl-8">
            {milestones.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.05}>
                <div className="relative">
                  <span
                    className={cn(
                      'absolute -left-[2.35rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background',
                      m.future ? 'bg-border' : 'bg-grad-accent',
                    )}
                    aria-hidden
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{m.year}</span>
                  <h3 className="mt-1 font-bold">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Behind the scenes — AI content studio */}
      <section className="py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border">
                {/* PLACEHOLDER MEDIA: replace with real project footage/photos */}
                <Image
                  src="/images/studio-setup.png"
                  alt="Behind the scenes of the NexaNode AI content studio"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="text-xs font-semibold uppercase tracking-wider text-violet">Behind the Scenes</span>
              <h2 className="mt-3 text-3xl font-bold">Our 4-machine AI content studio</h2>
              <p className="mt-4 text-muted-foreground">
                Every piece of content we produce moves through four dedicated machines, each owning one stage of
                production — scripting, audio, video, and final publish. Specialised stages, not one tool trying to
                do everything, is what keeps quality consistent at volume.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/90">
                <li>🖥️ PC1 — Scripting: platform-tuned scripts in your brand voice</li>
                <li>🎙️ PC2 — Audio: AI voiceover, narration, and mastering</li>
                <li>🎬 PC3 — Video: generation, editing, captions, motion graphics</li>
                <li>📤 PC4 — Publish: final QC, rendering, and multi-platform scheduling</li>
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Our Team" title="The people behind the pipeline" />
          </Reveal>
          <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((t) => (
              <RevealItem key={t.name} as="article">
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-grad-accent text-lg font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <h3 className="font-bold">{t.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <CtaBand
        title="Want to work with a local team that ships?"
        description="Book a free consultation and see how we'd approach your project."
      />
    </>
  )
}
