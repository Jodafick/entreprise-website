import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { DemoBanner } from '@/components/DemoBanner'
import { Button } from '@/components/Button'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getProjectBySlug } from '@/data/projects.demo'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  usePageMeta({
    title: project?.title ?? 'Réalisation',
    description: project?.problem,
    path: slug ? `/realisations/${slug}` : '/realisations',
    ogImage: project?.image,
  })

  if (!project) return <NotFoundPage />

  return (
    <>
      <PageHero breadcrumb={project.sector} title={project.title} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          to="/realisations"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-800 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Retour aux réalisations
        </Link>
        <DemoBanner className="mt-6" />
        <img
          src={project.image}
          alt={project.imageAlt}
          className="mt-8 aspect-video w-full rounded-2xl object-cover"
        />
        <dl className="mt-10 space-y-6">
          <div>
            <dt className="text-sm font-bold uppercase tracking-wide text-accent">Problématique</dt>
            <dd className="mt-2 text-muted">{project.problem}</dd>
          </div>
          <div>
            <dt className="text-sm font-bold uppercase tracking-wide text-accent">Solution</dt>
            <dd className="mt-2 text-muted">{project.solution}</dd>
          </div>
          <div>
            <dt className="text-sm font-bold uppercase tracking-wide text-accent">Résultat</dt>
            <dd className="mt-2 text-muted">{project.result}</dd>
          </div>
        </dl>
        <Button to="/contact" className="mt-10">
          Discuter d’un projet similaire
        </Button>
      </article>
    </>
  )
}
