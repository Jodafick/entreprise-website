import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock, GraduationCap } from 'lucide-react'
import type { Formation } from '@/types'

type FormationCardProps = {
  formation: Formation
  compact?: boolean
}

export function FormationCard({ formation, compact }: FormationCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5">
      <div className={compact ? 'aspect-[16/10]' : 'aspect-[16/11]'}>
        <img
          src={formation.image}
          alt={formation.imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
          width={800}
          height={500}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-wider text-accent">Démo</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-brand-900">{formation.name}</h3>
        <dl className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
          <div className="flex items-center gap-1.5">
            <GraduationCap className="h-4 w-4 text-brand-600" aria-hidden />
            <dt className="sr-only">Niveau</dt>
            <dd>{formation.level}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-brand-600" aria-hidden />
            <dt className="sr-only">Durée</dt>
            <dd>{formation.duration}</dd>
          </div>
        </dl>
        {!compact && (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{formation.description}</p>
        )}
        <Link
          to={`/formations/${formation.slug}`}
          className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand-800 transition group-hover:gap-2"
        >
          En savoir plus
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
