import { ArrowRight } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { contactEmail } from '../content/site'
import { useLanguage } from '../i18n/LanguageContext'

type FieldName = 'name' | 'phone' | 'email' | 'message'
type RequiredField = 'name' | 'email' | 'message'
/** Which fields failed; messages are looked up at render so they follow the language. */
type Errors = Partial<Record<RequiredField, true>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const { t } = useLanguage()
  const { contact } = t
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const value = (field: FieldName) => String(data.get(field) ?? '').trim()

    const nextErrors: Errors = {}
    if (!value('name')) nextErrors.name = true
    if (!EMAIL_PATTERN.test(value('email'))) nextErrors.email = true
    if (!value('message')) nextErrors.message = true
    setErrors(nextErrors)

    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      setSent(false)
      return
    }

    // No backend yet: hand the message to the visitor's email app, addressed to the company.
    const details = [`${contact.fields.name}: ${value('name')}`, `${contact.fields.email}: ${value('email')}`]
    if (value('phone')) details.push(`${contact.fields.phone}: ${value('phone')}`)
    const body = `${details.join('\n')}\n\n${value('message')}`
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(contact.subject(value('name')))}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const clearError = (field: keyof Errors) => {
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const fieldClass = 'flex flex-col'
  const labelClass = 'eyebrow text-ink/60'
  const errorClass = 'mt-2 text-sm text-danger'

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
      <div className={fieldClass}>
        <label htmlFor="contact-name" className={labelClass}>
          {contact.fields.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder={contact.placeholders.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          onInput={() => clearError('name')}
          className="field-input"
        />
        {errors.name && (
          <p id="contact-name-error" className={errorClass}>
            {contact.errors.name}
          </p>
        )}
      </div>

      <div className={fieldClass}>
        <label htmlFor="contact-phone" className={labelClass}>
          {contact.fields.phone} <span className="text-ink/35 normal-case">({contact.fields.optional})</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder={contact.placeholders.phone}
          className="field-input"
        />
      </div>

      <div className={`${fieldClass} sm:col-span-2`}>
        <label htmlFor="contact-email" className={labelClass}>
          {contact.fields.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder={contact.placeholders.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          onInput={() => clearError('email')}
          className="field-input"
        />
        {errors.email && (
          <p id="contact-email-error" className={errorClass}>
            {contact.errors.email}
          </p>
        )}
      </div>

      <div className={`${fieldClass} sm:col-span-2`}>
        <label htmlFor="contact-message" className={labelClass}>
          {contact.fields.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          placeholder={contact.placeholders.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          onInput={() => clearError('message')}
          className="field-input resize-y"
        />
        {errors.message && (
          <p id="contact-message-error" className={errorClass}>
            {contact.errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p role="status" className="text-sm text-ink/65">
          {sent ? contact.sent : ''}
        </p>
        <button
          type="submit"
          className="group inline-flex min-h-12 items-center justify-center gap-4 bg-ink px-6 text-sm font-medium text-void transition duration-150 ease-ui hover:-translate-y-px hover:bg-ink/90 active:translate-y-px active:scale-[0.985] sm:order-last"
        >
          {contact.submit}
          <ArrowRight className="size-4 transition-transform duration-150 ease-ui group-hover:translate-x-[3px]" strokeWidth={1.75} aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}
