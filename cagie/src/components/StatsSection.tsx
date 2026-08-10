import type { StatItem } from '@/types'

type StatsSectionProps = {
  stats: StatItem[]
  className?: string
}

export function StatsSection({ stats, className = '' }: StatsSectionProps) {
  return (
    <dl className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-border"
        >
          <dt className="text-sm font-medium text-muted">{stat.label}</dt>
          <dd className="mt-2 font-display text-4xl font-semibold text-brand-900">{stat.value}</dd>
          <dd className="mt-1 text-xs text-amber-800">{stat.note}</dd>
        </div>
      ))}
    </dl>
  )
}
