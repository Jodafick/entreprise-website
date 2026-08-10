import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { DemoBanner } from '@/components/DemoBanner'
import { Button } from '@/components/Button'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getServiceBySlug } from '@/data/services'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined
  const Icon = service?.icon

  usePageMeta({
    title: service?.title ?? 'Service',
    description: service?.shortDescription,
    path: slug ? `/services/${slug}` : '/services',
    ogImage: service?.image,
  })

  if (!service) return <NotFoundPage />

  return (
    <>
      <PageHero breadcrumb="Service · Démo" title={service.title} />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-800 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Retour aux services
        </Link>
        <DemoBanner className="mt-6" />
        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {Icon && (
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-800">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
            )}
            <img
              src={service.image}
              alt={service.imageAlt}
              className="aspect-video w-full rounded-2xl object-cover"
            />
            <p className="mt-6 text-muted">{service.shortDescription}</p>
            <section className="mt-8">
              <h2 className="font-display text-xl font-semibold text-brand-900">Problématique client</h2>
              <p className="mt-3 text-muted">{service.clientProblem}</p>
            </section>
            <section className="mt-8">
              <h2 className="font-display text-xl font-semibold text-brand-900">Approche</h2>
              <p className="mt-3 text-muted">{service.approach}</p>
            </section>
            <section className="mt-8">
              <h2 className="font-display text-xl font-semibold text-brand-900">Bénéfices</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                {service.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
            <section className="mt-8">
              <h2 className="font-display text-xl font-semibold text-brand-900">Processus type</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
                {service.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>
          </div>
          <aside className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm text-muted">
                Discutons de votre besoin — sans engagement, informations provisoires.
              </p>
              <Button to="/contact" className="mt-6 w-full">
                Nous contacter
              </Button>
              <Button to="/contact" variant="outline" className="mt-3 w-full">
                Demander un accompagnement
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
