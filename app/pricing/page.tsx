import type { Metadata } from 'next'
import { Sparkles } from 'lucide-react'
import { brand } from '@/lib/site'
import { PageHeader } from '@/components/page-header'
import { Container, SectionHeading, Eyebrow } from '@/components/ui-kit'
import { Reveal } from '@/components/reveal'
import { CountdownTimer, endOfMonth } from '@/components/countdown-timer'
import { PackagesToggle } from '@/components/pricing/packages-toggle'
import { FullPriceTable } from '@/components/pricing/full-price-table'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Pricing',
  description: `Transparent starting prices for IoT, RPA, and AI content services from ${brand.name} — bundle packages and full à la carte pricing.`,
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Transparent pricing — no mystery quotes"
        description="Every package starts with a free consultation. Prices below are starting points; final scope is confirmed after we understand your needs."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]}
      />

      {/* Sticky-feel discount banner */}
      <section className="py-10">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-success/30 bg-success/10 px-6 py-4 text-center sm:flex-row sm:justify-between sm:text-left">
              <div className="flex items-center gap-2 text-sm font-semibold text-success">
                <Sparkles className="h-4 w-4" />
                Launch Special — 20% off your first booking · Code {brand.promoCode} · {brand.slotsLeft} slots left
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Ends in</span>
                <CountdownTimer targetDate={endOfMonth()} variant="inline" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Bundle packages */}
      <section className="pb-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Bundle Packages"
              title="Pick a starting point"
              description="Mix services together at a better combined rate, or start with a single service and grow later."
            />
          </Reveal>
          <div className="mt-12">
            <PackagesToggle />
          </div>
        </Container>
      </section>

      {/* Full à la carte pricing */}
      <section className="py-16">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="À La Carte"
              title="Every sub-service, one place"
              description="Filter by service line to see exact starting prices for each package."
            />
          </Reveal>
          <div className="mt-12">
            <FullPriceTable />
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="max-w-2xl text-center">
          <Eyebrow>Not sure what fits?</Eyebrow>
          <p className="mt-4 text-muted-foreground">
            Every engagement — big or small — starts with a free, no-obligation consultation where we recommend the
            right package for your budget and goals.
          </p>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
