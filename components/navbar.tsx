'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import { brand, services } from '@/lib/site'
import { useTheme } from '@/components/theme-provider'
import { DynamicIcon } from '@/components/service-icon'
import { LinkButton, accent } from '@/components/ui-kit'
import { CountdownTimer, endOfMonth } from '@/components/countdown-timer'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', hasMenu: true },
  { href: '/pricing', label: 'Pricing' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'More', hasMoreMenu: true },
  { href: '/contact', label: 'Contact' },
]

const moreLinks = [
  { href: '/blog', label: 'Blog', description: 'Insights on automation & AI' },
  { href: '/faq', label: 'FAQ', description: 'Answers to common questions' },
  { href: '/careers', label: 'Careers', description: "We're building the team" },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [bannerDismissed, setBannerDismissed] = useState(false)
  const [target] = useState(() => endOfMonth())

  useEffect(() => {
    if (sessionStorage.getItem('nexanode-banner-dismissed')) setBannerDismissed(true)
  }, [])

  const dismissBanner = () => {
    setBannerDismissed(true)
    sessionStorage.setItem('nexanode-banner-dismissed', '1')
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMoreOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass border-b border-border' : 'bg-transparent',
      )}
    >
      <div
        className={cn(
          'overflow-hidden border-b border-primary/20 bg-primary/10 transition-all duration-300',
          !bannerDismissed && !scrolled ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="mx-auto flex h-9 w-full max-w-6xl items-center justify-center gap-3 px-4 text-center sm:px-6 lg:px-8">
          <p className="truncate text-xs font-medium text-foreground sm:text-sm">
            🎁 Free consultation for first-time clients —{' '}
            <span className="font-semibold text-primary">{brand.slotsLeft} slots left</span> this month
          </p>
          <span className="hidden shrink-0 items-center gap-1.5 sm:flex">
            <span className="text-xs text-muted-foreground">Ends in</span>
            <CountdownTimer targetDate={target} variant="inline" />
          </span>
          <button
            onClick={dismissBanner}
            aria-label="Dismiss offer banner"
            className="shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label={`${brand.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-grad-accent text-white shadow-lg shadow-primary/30">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <circle cx="5" cy="12" r="2.4" />
              <circle cx="19" cy="6" r="2.4" />
              <circle cx="19" cy="18" r="2.4" />
              <path d="M7 11 17 6.8M7 13l10 4.2" />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight font-[family-name:var(--font-space-grotesk)]">
            {brand.nameParts[0]}
            <span className="text-primary">{brand.nameParts[1]}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.hasMenu ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                    pathname.startsWith('/services') ? 'text-primary' : 'text-foreground',
                  )}
                >
                  {link.label}
                  <ChevronDown className={cn('h-4 w-4 transition-transform', servicesOpen && 'rotate-180')} aria-hidden />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full w-[30rem] -translate-x-1/2 pt-2">
                    <div className="glass grid grid-cols-1 gap-1 rounded-2xl border border-border p-2 shadow-2xl">
                      {services.map((s) => {
                        const c = accent(s.color)
                        return (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-background/60"
                          >
                            <span className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-lg', c.bg, c.text)}>
                              <DynamicIcon name={s.icon} className="h-5 w-5" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold">{s.name}</span>
                              <span className="block text-xs text-muted-foreground">{s.navDescription}</span>
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : link.hasMoreMenu ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setMoreOpen(false)}
              >
                <button
                  className={cn(
                    'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                    ['/blog', '/faq', '/careers'].some((p) => pathname.startsWith(p)) ? 'text-primary' : 'text-foreground',
                  )}
                >
                  {link.label}
                  <ChevronDown className={cn('h-4 w-4 transition-transform', moreOpen && 'rotate-180')} aria-hidden />
                </button>
                {moreOpen && (
                  <div className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-2">
                    <div className="glass grid grid-cols-1 gap-1 rounded-2xl border border-border p-2 shadow-2xl">
                      {moreLinks.map((m) => (
                        <Link
                          key={m.href}
                          href={m.href}
                          className="rounded-xl p-3 transition-colors hover:bg-background/60"
                        >
                          <span className="block text-sm font-semibold">{m.label}</span>
                          <span className="block text-xs text-muted-foreground">{m.description}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary' : 'text-foreground',
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:border-primary/50"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <div className="hidden lg:block">
            <LinkButton href="/contact" withArrow>
              Free Consultation
            </LinkButton>
          </div>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="glass border-t border-border lg:hidden">
          <div className="max-h-[calc(100vh-4rem)] space-y-1 overflow-y-auto px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.hasMoreMenu ? '/blog' : link.href}
                  className={cn(
                    'block rounded-lg px-3 py-2.5 text-base font-medium',
                    pathname === link.href ? 'bg-primary/10 text-primary' : 'text-foreground',
                  )}
                >
                  {link.label}
                </Link>
                {link.hasMenu && (
                  <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
                {link.hasMoreMenu && (
                  <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
                    {moreLinks.map((m) => (
                      <Link
                        key={m.href}
                        href={m.href}
                        className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                      >
                        {m.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <LinkButton href="/contact" className="w-full" withArrow>
                Free Consultation
              </LinkButton>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
