import Link from 'next/link'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { brand, services } from '@/lib/site'
import { Container } from '@/components/ui-kit'
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from '@/components/brand-icons'

const company = [
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
]

const legal = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
]

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card/40">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-grad-accent text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="5" cy="12" r="2.4" />
                  <circle cx="19" cy="6" r="2.4" />
                  <circle cx="19" cy="18" r="2.4" />
                  <path d="M7 11 17 6.8M7 13l10 4.2" />
                </svg>
              </span>
              <span className="text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
                {brand.nameParts[0]}
                <span className="text-primary">{brand.nameParts[1]}</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{brand.mission}</p>
            <div className="mt-5 flex gap-3">
              <a href={brand.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a href={brand.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href={brand.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href={brand.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-success/50 hover:text-success">
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span>{brand.address}</span>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="flex items-center gap-2 transition-colors hover:text-primary">
                  <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 transition-colors hover:text-primary">
                  <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <span>{brand.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
