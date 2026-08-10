import { PageHero } from '@/components/PageHero'
import { ProjectCard } from '@/components/ProjectCard'
import { DemoBanner } from '@/components/DemoBanner'
import { usePageMeta } from '@/hooks/usePageMeta'
import { DEMO_PROJECTS } from '@/data/projects.demo'

export function RealisationsPage() {
  usePageMeta({
    title: 'Réalisations',
    description: 'Portfolio et études de cas CAGIE — démonstration en attente des références officielles.',
    path: '/realisations',
  })

  return (
    <>
      <PageHero
        breadcrumb="Portfolio"
        title="Nos réalisations"
        subtitle="Études de cas fictives — architecture prête pour CMS ou backend."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <DemoBanner message="src/data/projects.demo.ts — remplacer par les vraies références client." />
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {DEMO_PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </>
  )
}
