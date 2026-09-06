import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ServiceColor } from '@/lib/site'

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl text-balance text-3xl font-bold sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className={cn('max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg')}>
          {description}
        </p>
      )}
    </div>
  )
}

const colorMap: Record<ServiceColor, { text: string; bg: string; border: string; ring: string }> = {
  primary: { text: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/30', ring: 'ring-primary/40' },
  cyan: { text: 'text-cyan', bg: 'bg-cyan/10', border: 'border-cyan/30', ring: 'ring-cyan/40' },
  violet: { text: 'text-violet', bg: 'bg-violet/10', border: 'border-violet/30', ring: 'ring-violet/40' },
  success: { text: 'text-success', bg: 'bg-success/10', border: 'border-success/30', ring: 'ring-success/40' },
}

export function accent(color: ServiceColor) {
  return colorMap[color]
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'md' | 'lg'
  className?: string
  withArrow?: boolean
  external?: boolean
}

export function LinkButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  withArrow,
  external,
}: ButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50'
  const sizes = { md: 'px-5 py-2.5 text-sm', lg: 'px-7 py-3.5 text-base' }
  const variants = {
    primary: 'bg-grad-accent text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5',
    outline: 'border border-border bg-card text-foreground hover:border-primary/50 hover:bg-card/80',
    ghost: 'text-foreground hover:bg-card',
  }
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />}
    </>
  )
  const cls = cn(base, sizes[size], variants[variant], className)
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  )
}
