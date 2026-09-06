import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { brand } from '@/lib/site'
import { PageHeader } from '@/components/page-header'
import { Container } from '@/components/ui-kit'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Careers',
  description: `We're building the team at ${brand.name}. See the roles we're generally interested in and how to reach us.`,
}

const roles = [
  { title: 'IoT Engineers', body: 'Home and industrial deployment — sensors, gateways, and dashboards.' },
  { title: 'RPA Developers', body: 'Bot design and implementation on UiPath, Automation Anywhere, or Power Automate.' },
  { title: 'AI Content Creators', body: 'Scripting, AI voice, and AI video production across our 4-machine studio.' },
  { title: 'Sales & Business Development', body: 'Consultations, scoping, and client onboarding across Pakistan.' },
]

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="We're building the team"
        description={`${brand.name} is early — but growing. If you work in any of the areas below, we'd love to hear from you.`}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      />

      <section className="py-16">
        <Container>
          <RevealStagger className="grid gap-5 sm:grid-cols-2">
            {roles.map((r) => (
              <RevealItem key={r.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal>
            <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-10 text-center">
              <h2 className="text-2xl font-bold">Don&apos;t see your role listed?</h2>
              <p className="max-w-md text-muted-foreground">
                We're always open to hearing from good people. Send us your CV and a short note about what you'd want
                to work on.
              </p>
              <a
                href={`mailto:${brand.careersEmail}`}
                className="mt-2 inline-flex items-center gap-2 rounded-xl bg-grad-accent px-6 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                {brand.careersEmail}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
