'use client'

import { useEffect, useState } from 'react'

type Parts = { days: number; hours: number; minutes: number; seconds: number; done: boolean }

function diff(target: Date): Parts {
  const ms = target.getTime() - Date.now()
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  const days = Math.floor(ms / 86400000)
  const hours = Math.floor((ms % 86400000) / 3600000)
  const minutes = Math.floor((ms % 3600000) / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)
  return { days, hours, minutes, seconds, done: false }
}

const pad = (n: number) => n.toString().padStart(2, '0')

export function endOfMonth(): Date {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
}

export function CountdownTimer({
  targetDate,
  variant = 'full',
}: {
  targetDate: Date
  variant?: 'full' | 'inline'
}) {
  const [parts, setParts] = useState<Parts>(() => diff(targetDate))

  useEffect(() => {
    setParts(diff(targetDate))
    const id = setInterval(() => setParts(diff(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  if (variant === 'inline') {
    return (
      <span className="tabular font-mono text-sm font-semibold text-success" aria-label="offer countdown">
        {pad(parts.days)}:{pad(parts.hours)}:{pad(parts.minutes)}:{pad(parts.seconds)}
      </span>
    )
  }

  const blocks = [
    { label: 'Days', value: parts.days },
    { label: 'Hrs', value: parts.hours },
    { label: 'Min', value: parts.minutes },
    { label: 'Sec', value: parts.seconds },
  ]

  return (
    <div className="flex items-center gap-2" role="timer" aria-label="offer countdown">
      {blocks.map((b, i) => (
        <div key={b.label} className="flex items-center gap-2">
          <div className="flex min-w-[3.25rem] flex-col items-center rounded-lg border border-border bg-background/60 px-2 py-1.5">
            <span className="tabular font-mono text-xl font-bold text-foreground">{pad(b.value)}</span>
            <span className="text-[0.6rem] uppercase tracking-wider text-muted-foreground">{b.label}</span>
          </div>
          {i < blocks.length - 1 && <span className="text-lg font-bold text-muted-foreground">:</span>}
        </div>
      ))}
    </div>
  )
}
