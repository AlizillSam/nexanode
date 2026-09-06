'use client'

import { useMemo, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, Paperclip } from 'lucide-react'
import { serviceOptions, brand } from '@/lib/site'
import { cn } from '@/lib/utils'

const heardFromOptions = ['Google', 'Social Media', 'Referral', 'Other']
const budgetOptions = ['Under 100k', '100k – 500k', '500k – 1M', '1M+', 'Not sure']

// Maps a service page's slug (from ?service=<slug> links) to the matching
// label in `serviceOptions` so "Request This Service" buttons prefill correctly.
const slugToServiceOption: Record<string, string> = {
  'home-iot': 'Home IoT',
  'industrial-iot': 'Industrial IoT',
  'rpa-automation': 'RPA',
  'ai-content': 'AI Content',
  maintenance: 'Maintenance',
}

const inputClass =
  'w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/20'
const labelClass = 'mb-1.5 block text-sm font-medium text-foreground'
const errorClass = 'mt-1 text-xs text-red-400'

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      {children}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  )
}

function SuccessPanel({ name, onReset }: { name: string; onReset: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-success/30 bg-success/10 p-10 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success/20 text-success">
        <CheckCircle2 className="h-8 w-8" />
      </span>
      <div>
        <h3 className="text-xl font-bold">Thanks{name ? `, ${name}` : ''}!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          We&apos;ve received your request — a member of the {brand.name} team will reach out within 24 hours.
        </p>
      </div>
      <button
        onClick={onReset}
        className="rounded-xl border border-border bg-card px-5 py-2 text-sm font-medium transition-colors hover:border-primary/50"
      >
        Send another request
      </button>
    </div>
  )
}

/**
 * NOTE FOR DEVELOPER: These forms currently use a mock submit handler
 * (simulated delay, no network call). Wire `handleSubmit` up to a real
 * endpoint (e.g. Formspree, a serverless API route, or your CRM webhook)
 * before going live.
 */
export function ContactForms() {
  const searchParams = useSearchParams()
  const rawService = searchParams.get('service') ?? ''
  const presetService = slugToServiceOption[rawService] ?? rawService
  const [tab, setTab] = useState<'consult' | 'request'>('consult')

  return (
    <div>
      <div className="mb-8 flex gap-2 rounded-2xl border border-border bg-card p-1.5">
        <button
          onClick={() => setTab('consult')}
          className={cn(
            'flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors',
            tab === 'consult' ? 'bg-grad-accent text-white shadow-lg shadow-primary/20' : 'text-muted-foreground hover:text-foreground',
          )}
        >
          Book Free Consultation
        </button>
        <button
          onClick={() => setTab('request')}
          className={cn(
            'flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors',
            tab === 'request' ? 'bg-grad-accent text-white shadow-lg shadow-primary/20' : 'text-muted-foreground hover:text-foreground',
          )}
        >
          General Request
        </button>
      </div>

      {tab === 'consult' ? <ConsultationForm presetService={presetService} /> : <RequestForm presetService={presetService} />}
    </div>
  )
}

function ConsultationForm({ presetService }: { presetService: string }) {
  const initialService = useMemo(
    () => serviceOptions.find((s) => s.toLowerCase() === presetService.toLowerCase()) ?? '',
    [presetService],
  )

  const [values, setValues] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: initialService,
    date: '',
    time: '',
    message: '',
    heardFrom: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (key: keyof typeof values) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }))

  function validate() {
    const next: Record<string, string> = {}
    if (!values.name.trim()) next.name = 'Full name is required.'
    if (!/^\+?[0-9\s-]{7,15}$/.test(values.phone.trim())) next.phone = 'Enter a valid phone / WhatsApp number.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = 'Enter a valid email address.'
    if (!values.service) next.service = 'Please select a service.'
    if (values.message.trim().length < 20) next.message = 'Please add at least 20 characters describing your project.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // Mock submission — replace with a real endpoint (Formspree / API route / CRM webhook).
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  if (submitted) return <SuccessPanel name={values.name} onReset={() => setSubmitted(false)} />

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required error={errors.name}>
          <input className={inputClass} value={values.name} onChange={update('name')} placeholder="Your name" />
        </Field>
        <Field label="Company Name">
          <input className={inputClass} value={values.company} onChange={update('company')} placeholder="Optional" />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone / WhatsApp Number" required error={errors.phone}>
          <input className={inputClass} value={values.phone} onChange={update('phone')} placeholder="+92 300 1234567" />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input type="email" className={inputClass} value={values.email} onChange={update('email')} placeholder="you@company.com" />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Service Interested In" required error={errors.service}>
          <select className={inputClass} value={values.service} onChange={update('service')}>
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="How did you hear about us?">
          <select className={inputClass} value={values.heardFrom} onChange={update('heardFrom')}>
            <option value="">Select an option</option>
            {heardFromOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Preferred Date">
          <input type="date" className={inputClass} value={values.date} onChange={update('date')} />
        </Field>
        <Field label="Preferred Time">
          <input type="time" className={inputClass} value={values.time} onChange={update('time')} />
        </Field>
      </div>
      <Field label="Project Description" required error={errors.message}>
        <textarea
          className={cn(inputClass, 'min-h-[120px] resize-y')}
          value={values.message}
          onChange={update('message')}
          placeholder="Tell us a bit about what you'd like to automate or set up..."
        />
      </Field>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-grad-accent px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {loading ? 'Sending…' : 'Book My Free Consultation'}
      </button>
    </form>
  )
}

function RequestForm({ presetService }: { presetService: string }) {
  const [values, setValues] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    budget: '',
    details: '',
  })
  const [servicesNeeded, setServicesNeeded] = useState<string[]>(presetService ? [presetService] : [])
  const [fileName, setFileName] = useState<string>('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (key: keyof typeof values) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }))

  function toggleService(name: string) {
    setServicesNeeded((prev) => (prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]))
  }

  function validate() {
    const next: Record<string, string> = {}
    if (!values.name.trim()) next.name = 'Full name is required.'
    if (!values.business.trim()) next.business = 'Business name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = 'Enter a valid email address.'
    if (!/^\+?[0-9\s-]{7,15}$/.test(values.phone.trim())) next.phone = 'Enter a valid phone number.'
    if (servicesNeeded.length === 0) next.services = 'Select at least one service.'
    if (values.details.trim().length < 20) next.details = 'Please add at least 20 characters of project detail.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // Mock submission — replace with a real endpoint (Formspree / API route / CRM webhook).
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  if (submitted) return <SuccessPanel name={values.name} onReset={() => setSubmitted(false)} />

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required error={errors.name}>
          <input className={inputClass} value={values.name} onChange={update('name')} placeholder="Your name" />
        </Field>
        <Field label="Business Name" required error={errors.business}>
          <input className={inputClass} value={values.business} onChange={update('business')} placeholder="Your company" />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" required error={errors.email}>
          <input type="email" className={inputClass} value={values.email} onChange={update('email')} placeholder="you@company.com" />
        </Field>
        <Field label="Phone" required error={errors.phone}>
          <input className={inputClass} value={values.phone} onChange={update('phone')} placeholder="+92 300 1234567" />
        </Field>
      </div>
      <Field label="Service(s) Needed" required error={errors.services}>
        <div className="flex flex-wrap gap-2">
          {serviceOptions
            .filter((s) => s !== 'Not Sure Yet')
            .map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => toggleService(s)}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
                  servicesNeeded.includes(s)
                    ? 'border-primary/50 bg-primary/10 text-primary'
                    : 'border-border bg-background/60 text-muted-foreground hover:text-foreground',
                )}
              >
                {s}
              </button>
            ))}
        </div>
      </Field>
      <Field label="Budget Range">
        <select className={inputClass} value={values.budget} onChange={update('budget')}>
          <option value="">Select a range</option>
          {budgetOptions.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Project Details" required error={errors.details}>
        <textarea
          className={cn(inputClass, 'min-h-[120px] resize-y')}
          value={values.details}
          onChange={update('details')}
          placeholder="Describe what you need, current setup, and timeline..."
        />
      </Field>
      <Field label="Attach a spec / requirements file (optional)">
        <label
          className={cn(
            inputClass,
            'flex cursor-pointer items-center gap-2 text-muted-foreground hover:border-primary/50',
          )}
        >
          <Paperclip className="h-4 w-4 shrink-0" />
          {fileName || 'Choose a file...'}
          <input
            type="file"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
          />
        </label>
      </Field>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-grad-accent px-6 py-3.5 font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {loading ? 'Sending…' : 'Send My Request'}
      </button>
    </form>
  )
}
