import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteChrome } from '@/components/site-chrome'
import { brand } from '@/lib/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nexanode.pk'),
  title: {
    default: `${brand.name} — Where Automation Meets Intelligence`,
    template: `%s | ${brand.name}`,
  },
  description: brand.metaDescription,
  keywords: [
    'IoT Pakistan',
    'RPA automation',
    'AI content generation',
    'industrial IoT',
    'smart home Pakistan',
    'process automation',
  ],
  openGraph: {
    type: 'website',
    title: `${brand.name} — Where Automation Meets Intelligence`,
    description: brand.metaDescription,
    siteName: brand.name,
    locale: 'en_PK',
  },
  generator: brand.name,
}

export const viewport: Viewport = {
  themeColor: '#0a0e17',
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider>
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
