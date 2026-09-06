import type { Metadata } from 'next'
import { brand } from '@/lib/site'
import { PageHeader } from '@/components/page-header'
import { Container } from '@/components/ui-kit'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms governing the use of ${brand.name}'s website and services.`,
}

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        description={`Last updated: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]}
      />
      <section className="py-16">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-foreground/90">
          <p>
            {/* PLACEHOLDER CONTENT: replace with your reviewed legal copy before launch */}
            This is placeholder terms-of-service content for {brand.name}. Replace it with copy reviewed by a legal
            professional before launch, covering service scope, payment terms, cancellation, liability, and
            intellectual property ownership for delivered work.
          </p>
          <h2 className="text-lg font-bold text-foreground">Services</h2>
          <p>
            Pricing shown on this site reflects starting prices for the described scope. Final pricing and timelines
            are confirmed in a written proposal after a consultation.
          </p>
          <h2 className="text-lg font-bold text-foreground">Payment</h2>
          <p>
            Most projects run on milestone-based payments. Monthly retainers are billed in advance and can be
            cancelled with 30 days' notice, as detailed in your service agreement.
          </p>
          <h2 className="text-lg font-bold text-foreground">Ownership</h2>
          <p>
            Unless otherwise agreed in writing, deliverables (including AI-generated content) become the client's
            property upon full payment.
          </p>
          <h2 className="text-lg font-bold text-foreground">Contact</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a href={`mailto:${brand.email}`} className="text-primary hover:underline">
              {brand.email}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  )
}
