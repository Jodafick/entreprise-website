import { useState, type FormEvent } from 'react'
import { DEMO_FORMATIONS } from '@/data/formations.demo'
import { Button } from '@/components/Button'

export function ApplicationForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 900)
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-brand-100 bg-brand-50 p-8" role="status">
        <p className="font-semibold text-brand-900">Candidature enregistrée (démonstration)</p>
        <p className="mt-2 text-sm text-muted">
          Connectez ce formulaire au processus d’admission réel du CAGIE.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100'

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-white p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold text-brand-900">Formulaire de candidature</h3>
      <p className="text-sm text-muted">Interface frontend — données non transmises.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="app-lastname" className="mb-1.5 block text-sm font-medium">
            Nom
          </label>
          <input id="app-lastname" name="lastname" required className={inputClass} autoComplete="family-name" />
        </div>
        <div>
          <label htmlFor="app-firstname" className="mb-1.5 block text-sm font-medium">
            Prénom
          </label>
          <input id="app-firstname" name="firstname" required className={inputClass} autoComplete="given-name" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="app-phone" className="mb-1.5 block text-sm font-medium">
            Téléphone
          </label>
          <input id="app-phone" name="phone" type="tel" required className={inputClass} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="app-email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input id="app-email" name="email" type="email" required className={inputClass} autoComplete="email" />
        </div>
      </div>
      <div>
        <label htmlFor="app-program" className="mb-1.5 block text-sm font-medium">
          Formation souhaitée
        </label>
        <select id="app-program" name="program" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Sélectionner…
          </option>
          {DEMO_FORMATIONS.map((f) => (
            <option key={f.slug} value={f.slug}>
              {f.name} (démo)
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="app-level" className="mb-1.5 block text-sm font-medium">
          Niveau d’étude
        </label>
        <input
          id="app-level"
          name="level"
          placeholder="Ex. : Baccalauréat, Licence…"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="app-message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea id="app-message" name="message" rows={4} className={inputClass} />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? 'Envoi…' : 'Commencer ma candidature'}
      </Button>
    </form>
  )
}
