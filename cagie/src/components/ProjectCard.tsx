import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ProjectItem } from '@/data/projects.demo'

type ProjectCardProps = {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-white transition hover:shadow-lg">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-accent">{project.sector}</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-brand-900">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{project.problem}</p>
        <Link
          to={`/realisations/${project.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-800"
        >
          Voir le cas
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
