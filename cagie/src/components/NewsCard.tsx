import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { NewsArticle } from '@/types'
import { formatDateFr } from '@/lib/utils'

type NewsCardProps = {
  article: NewsArticle
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition hover:shadow-md">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-semibold text-brand-800">
            {article.category}
          </span>
          <time dateTime={article.date} className="text-muted">
            {formatDateFr(article.date)}
          </time>
          <span className="rounded bg-amber-50 px-1.5 py-0.5 font-medium text-amber-900">Démo</span>
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold text-brand-900">{article.title}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
        <Link
          to={`/actualites/${article.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-800"
        >
          Lire l’article
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
