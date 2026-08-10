import { useState, type FormEvent } from 'react'
import { DEMO_SERVICES } from '@/data/services'
import { Button } from '@/components/Button'

type ContactFormProps = {
  idPrefix?: string
}

export function ContactForm({ idPrefix = 'contact' }: ContactFormProps) {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 800)
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100'

  if (sent) {
    return (
      <div className="rounded-2xl border border-brand-100 bg-brand-50 p-8 text-center" role="status">
        <p className="font-semibold text-brand-900">Demande enregistrée (démonstration)</p>
        <p className="mt-2 text-sm text-muted">
          Aucun envoi réel — connectez ce formulaire à votre CRM ou boîte mail.
        </p>
        <Button type="button" variant="outline" className="mt-6" onClick={() => setSent(false)}>
          Nouvelle demande
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-white p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold text-brand-900">Formulaire de contact</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-name`} className="mb-1.5 block text-sm font-medium">
            Nom
          </label>
          <input id={`${idPrefix}-name`} name="name" required className={inputClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-company`} className="mb-1.5 block text-sm font-medium">
            Entreprise
          </label>
          <input id={`${idPrefix}-company`} name="company" className={inputClass} autoComplete="organization" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-email`} className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input id={`${idPrefix}-email`} name="email" type="email" required className={inputClass} autoComplete="email" />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-phone`} className="mb-1.5 block text-sm font-medium">
            Téléphone
          </label>
          <input id={`${idPrefix}-phone`} name="phone" type="tel" className={inputClass} autoComplete="tel" />
        </div>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-subject`} className="mb-1.5 block text-sm font-medium">
          Objet
        </label>
        <input id={`${idPrefix}-subject`} name="subject" required className={inputClass} />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-service`} className="mb-1.5 block text-sm font-medium">
          Service recherché
        </label>
        <select id={`${idPrefix}-service`} name="service" className={inputClass} defaultValue="">
          <option value="">— Sélectionner (démo) —</option>
          {DEMO_SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-message`} className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea id={`${idPrefix}-message`} name="message" rows={5} required className={inputClass} />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? 'Envoi…' : 'Envoyer ma demande'}
      </Button>
      <p className="text-xs text-muted">Frontend uniquement — données non transmises.</p>
    </form>
  )
}
