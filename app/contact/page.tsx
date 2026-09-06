import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { brand } from '@/lib/site'
import { PageHeader } from '@/components/page-header'
import { Container } from '@/components/ui-kit'
import { Reveal } from '@/components/reveal'
import { ContactForms } from '@/components/contact/contact-forms'
import { WhatsAppIcon } from '@/components/brand-icons'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Book a free consultation or send a project request to ${brand.name} — IoT, RPA, and AI content specialists based in Pakistan.`,
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's talk about what you're automating"
        description="Book a free first-time consultation, or send us a detailed request if you already know what you need."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
                <Suspense fallback={null}>
                  <ContactForms />
                </Suspense>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-bold">Get in touch directly</h3>
                  <ul className="mt-4 space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <span className="text-foreground/90">{brand.address}</span>
                    </li>
                    <li>
                      <a href={`mailto:${brand.email}`} className="flex items-center gap-3 text-foreground/90 transition-colors hover:text-primary">
                        <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                        {brand.email}
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-foreground/90 transition-colors hover:text-primary">
                        <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                        {brand.phone}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <span className="text-foreground/90">{brand.hours}</span>
                    </li>
                  </ul>
                  <a
                    href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent("Hi! I'd like to book a free consultation.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-success px-5 py-3 font-semibold text-white shadow-lg shadow-success/20 transition-transform hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </div>

                {/* PLACEHOLDER MEDIA: replace with real embedded Google Map */}
                <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-border bg-card/60 text-center text-sm text-muted-foreground">
                  Map embed placeholder
                  <br />
                  ({brand.address})
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
