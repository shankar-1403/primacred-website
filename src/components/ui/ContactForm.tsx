import { useState, type FormEvent } from 'react'
import { Button } from './Button'
import { cn } from '@/lib/cn'

type Fields = {
  name: string
  organisation: string
  designation: string
  email: string
  phone: string
  requirement: string
}

type FieldName = keyof Fields
type Errors = Partial<Record<FieldName, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const initial: Fields = {
  name: '',
  organisation: '',
  designation: '',
  email: '',
  phone: '',
  requirement: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[+]?[\d\s()-]{8,20}$/

function validate(values: Fields): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (values.organisation.trim().length < 2)
    errors.organisation = 'Please enter your organisation.'
  if (values.designation.trim().length < 2)
    errors.designation = 'Please enter your designation.'
  if (!emailPattern.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.'
  if (!phonePattern.test(values.phone.trim()))
    errors.phone = 'Please enter a valid phone number.'
  if (values.requirement.trim().length < 20)
    errors.requirement = 'Please describe your requirement in a little more detail.'
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<Fields>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  function update(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current }
        delete next[field]
        return next
      })
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }

    setStatus('submitting')
    try {
      await new Promise((resolve) => setTimeout(resolve, 700))
      setStatus('success')
      setValues(initial)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="surface-elevated rounded-2xl px-8 py-12"
        role="status"
      >
        <p className="label-caps text-gold-dim">Enquiry received</p>
        <h3 className="display-title mt-4 text-2xl text-navy-900">Thank you.</h3>
        <p className="mt-4 max-w-md leading-relaxed text-stone-600">
          Your enquiry has been recorded. A member of the advisory team will
          respond in due course.
        </p>
        <button
          type="button"
          className="mt-8 text-sm font-semibold tracking-[0.12em] text-gold-dim uppercase"
          onClick={() => setStatus('idle')}
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="surface-elevated space-y-6 rounded-2xl p-8 md:p-10">
      <Field
        label="Name"
        name="name"
        value={values.name}
        error={errors.name}
        onChange={update}
        autoComplete="name"
      />
      <Field
        label="Organisation"
        name="organisation"
        value={values.organisation}
        error={errors.organisation}
        onChange={update}
        autoComplete="organization"
      />
      <Field
        label="Designation"
        name="designation"
        value={values.designation}
        error={errors.designation}
        onChange={update}
        autoComplete="organization-title"
      />
      <Field
        label="Email Address"
        name="email"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={update}
        autoComplete="email"
      />
      <Field
        label="Phone Number"
        name="phone"
        type="tel"
        value={values.phone}
        error={errors.phone}
        onChange={update}
        autoComplete="tel"
      />
      <Field
        label="Tell us about your requirement"
        name="requirement"
        value={values.requirement}
        error={errors.requirement}
        onChange={update}
        multiline
      />

      {status === 'error' ? (
        <p className="text-sm text-red-600" role="alert">
          The enquiry could not be sent. Please try again.
        </p>
      ) : null}

      <Button type="submit" variant="primary" disabled={status === 'submitting'} arrow>
        {status === 'submitting' ? 'Submitting…' : 'Submit Enquiry'}
      </Button>
    </form>
  )
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
  type = 'text',
  multiline = false,
  autoComplete,
}: {
  label: string
  name: FieldName
  value: string
  error?: string
  onChange: (name: FieldName, value: string) => void
  type?: string
  multiline?: boolean
  autoComplete?: string
}) {
  const id = `field-${name}`
  const describedBy = error ? `${id}-error` : undefined
  const fieldClass = cn(
    'w-full rounded-lg border bg-white px-4 py-3 text-navy-900 placeholder:text-stone-400 focus:ring-2 focus:ring-gold/30 focus:outline-none',
    error ? 'border-red-400' : 'border-line-light focus:border-gold',
  )

  return (
    <div>
      <label htmlFor={id} className="label-caps text-stone-500">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          value={value}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={cn(fieldClass, 'mt-2 resize-y')}
          onChange={(event) => onChange(name, event.target.value)}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={cn(fieldClass, 'mt-2')}
          onChange={(event) => onChange(name, event.target.value)}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
