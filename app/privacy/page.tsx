import type { Metadata } from 'next'
import { brand } from '@/lib/site'
import { PageHeader } from '@/components/page-header'
import { Container } from '@/components/ui-kit'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${brand.name} collects, uses, and protects your information.`,
}

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description={`Last updated: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
      />
      <section className="py-16">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-foreground/90">
          <p>
            {/* PLACEHOLDER CONTENT: replace with your reviewed legal copy before launch */}
            This is placeholder privacy policy content for {brand.name}. It should be replaced with copy reviewed by
            a legal professional before the site goes live, covering what information is collected through this
            site's forms, how it is stored and used, how long it is retained, and how visitors can request access to
            or deletion of their data.
          </p>
          <h2 className="text-lg font-bold text-foreground">Information We Collect</h2>
          <p>
            Information submitted via our consultation and request forms — including name, contact details, and
            project information — is used solely to respond to your enquiry and deliver services you request.
          </p>
          <h2 className="text-lg font-bold text-foreground">How We Use Your Information</h2>
          <p>
            We do not sell or share your personal information with third parties, except as required to deliver the
            services you've requested (e.g. scheduling tools, payment processors) or as required by law.
          </p>
          <h2 className="text-lg font-bold text-foreground">Contact</h2>
          <p>
            Questions about this policy can be sent to{' '}
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
