'use client'

import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react'
import { brand, stats } from '@/lib/site'
import { Container, LinkButton } from '@/components/ui-kit'
import { ParticleNetwork } from '@/components/particle-network'
import { Counter } from '@/components/counter'
import { CountdownTimer, endOfMonth } from '@/components/countdown-timer'
import { useState } from 'react'

const easeOut = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const [target] = useState(() => endOfMonth())

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ParticleNetwork className="h-full w-full opacity-70" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/40 to-background" aria-hidden />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]" aria-hidden />

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              20% off first projects — code {brand.promoCode}
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: easeOut }}
          >
            Where Automation Meets{' '}
            <span className="text-gradient">Intelligence</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
          >
            {brand.name} deploys industrial &amp; home IoT, enterprise automation bots, and an in-house AI content
            studio for Pakistani businesses — with a local team that actually shows up.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: easeOut }}
          >
            <LinkButton href="/contact" size="lg" withArrow>
              Book Free Consultation
            </LinkButton>
            <LinkButton href="/services" size="lg" variant="outline">
              Explore Services
            </LinkButton>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Launch offer ends in</span>
            <CountdownTimer targetDate={target} />
          </motion.div>
        </div>

        <motion.dl
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: easeOut }}
        >
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card/60 p-5 text-center backdrop-blur">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-bold text-foreground sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  )
}
