'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'
import type { Project } from '@/lib/site'
import { accent } from '@/components/ui-kit'
import { cn } from '@/lib/utils'

function elapsed(startISO: string) {
  const start = new Date(startISO).getTime()
  const ms = Math.max(Date.now() - start, 0)
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms % 86400000) / 3600000),
    minutes: Math.floor((ms % 3600000) / 60000),
    seconds: Math.floor((ms % 60000) / 1000),
  }
}

const pad = (n: number) => n.toString().padStart(2, '0')

export function ProjectTimerCard({ project }: { project: Project }) {
  const [t, setT] = useState(() => elapsed(project.startDate))

  useEffect(() => {
    const id = setInterval(() => setT(elapsed(project.startDate)), 1000)
    return () => clearInterval(id)
  }, [project.startDate])

  const c = accent(project.serviceColor)
  const progress = Math.min(Math.round((t.days / project.estimatedDays) * 100), 98)

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className="relative h-40 overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <span
          className={cn(
            'absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold',
            c.bg,
            c.border,
            c.text,
          )}
        >
          {project.service}
        </span>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          Live
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.client}</p>
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>

        <div className="mt-auto space-y-3">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            Time elapsed
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'Days', v: t.days },
              { label: 'Hrs', v: t.hours },
              { label: 'Min', v: t.minutes },
              { label: 'Sec', v: t.seconds },
            ].map((b) => (
              <div key={b.label} className="rounded-lg border border-border bg-background/50 py-2 text-center">
                <div className="tabular font-mono text-lg font-bold">{pad(b.v)}</div>
                <div className="text-[0.6rem] uppercase tracking-wide text-muted-foreground">{b.label}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="mb-1 flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>~{project.estimatedDays}-day target</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-background">
              <div className="h-full rounded-full bg-grad-accent transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-md border border-border bg-background/50 px-2 py-0.5 text-[0.7rem] text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
