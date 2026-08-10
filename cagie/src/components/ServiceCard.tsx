import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ServiceItem } from '@/data/services'

type ServiceCardProps = {
  service: ServiceItem
  compact?: boolean
}

export function ServiceCard({ service, compact }: ServiceCardProps) {
  const Icon = service.icon
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-800">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="rounded bg-amber-50 px-2 py-0.5 text-[0.65rem] font-semibold uppercase text-amber-900">
          Démo
        </span>
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">{service.title}</h3>
      <p className={compact ? 'mt-2 line-clamp-2 text-sm text-muted' : 'mt-2 text-sm leading-relaxed text-muted'}>
        {service.shortDescription}
      </p>
      <Link
        to={`/services/${service.slug}`}
        className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand-800 transition group-hover:gap-2"
      >
        En savoir plus
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </Link>
    </article>
  )
}
