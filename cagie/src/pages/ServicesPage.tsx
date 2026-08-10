import { PageHero } from '@/components/PageHero'
import { SectionTitle } from '@/components/SectionTitle'
import { ServiceCard } from '@/components/ServiceCard'
import { DemoBanner } from '@/components/DemoBanner'
import { usePageMeta } from '@/hooks/usePageMeta'
import { DEMO_SERVICES } from '@/data/services'

export function ServicesPage() {
  usePageMeta({
    title: 'Services',
    description: 'Services professionnels du CAGIE — placeholders en attente de l’offre officielle.',
    path: '/services',
  })

  return (
    <>
      <PageHero
        breadcrumb="Expertise"
        title="Nos services"
        subtitle="Structure modulaire pour accueillir les services réels du CAGIE dès qu’ils seront communiqués."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <DemoBanner message="Données temporaires : src/data/services.ts" />
        <SectionTitle
          className="mt-10"
          title="Catalogue (démonstration)"
          subtitle="Chaque fiche détaille problématique, approche et bénéfices — contenu à valider."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DEMO_SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </>
  )
}
