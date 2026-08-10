import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { ContactForm } from '@/components/ContactForm'
import { DemoBanner } from '@/components/DemoBanner'
import { usePageMeta } from '@/hooks/usePageMeta'
import { CONTACT } from '@/data/site'

export function ContactPage() {
  usePageMeta({
    title: 'Contact',
    description: 'Contactez le CAGIE pour un accompagnement professionnel — coordonnées placeholders.',
    path: '/contact',
  })

  return (
    <>
      <PageHero
        breadcrumb="Nous joindre"
        title="Contact"
        subtitle="Informations provisoires — mettez à jour src/data/site.ts avec les coordonnées officielles."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <DemoBanner />
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <ul className="space-y-5 text-sm">
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-brand-700" aria-hidden />
                  <span>
                    <strong className="block text-brand-900">Téléphone</strong>
                    <a href={CONTACT.phoneHref} className="text-muted hover:text-brand-800">
                      {CONTACT.phone}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-brand-700" aria-hidden />
                  <span>
                    <strong className="block text-brand-900">Email</strong>
                    <a href={CONTACT.emailHref} className="text-muted hover:text-brand-800">
                      {CONTACT.email}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-700" aria-hidden />
                  <span>
                    <strong className="block text-brand-900">Adresse</strong>
                    {CONTACT.address}
                    <br />
                    {CONTACT.city}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-brand-700" aria-hidden />
                  <span>
                    <strong className="block text-brand-900">Horaires</strong>
                    {CONTACT.hours}
                  </span>
                </li>
              </ul>
              <a
                href={CONTACT.whatsappHref}
                className="mt-6 inline-flex rounded-full bg-brand-900 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800"
              >
                WhatsApp : {CONTACT.whatsapp}
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-brand-100">
              {CONTACT.mapEmbedUrl ? (
                <iframe
                  title="Plan d’accès CAGIE"
                  src={CONTACT.mapEmbedUrl}
                  className="h-64 w-full border-0"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-64 items-center justify-center p-6 text-center text-sm text-muted">
                  Carte Google Maps — ajoutez <code className="text-xs">mapEmbedUrl</code> dans{' '}
                  <code className="text-xs">src/data/site.ts</code>
                </div>
              )}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  )
}
