import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { DemoBanner } from '@/components/DemoBanner'
import { usePageMeta } from '@/hooks/usePageMeta'
import { getNewsBySlug } from '@/data/news.demo'
import { formatDateFr } from '@/lib/utils'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getNewsBySlug(slug) : undefined

  usePageMeta({
    title: article?.title ?? 'Article',
    description: article?.excerpt,
    path: slug ? `/actualites/${slug}` : '/actualites',
    ogImage: article?.image,
  })

  if (!article) return <NotFoundPage />

  return (
    <>
      <PageHero breadcrumb={article.category} title={article.title} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          to="/actualites"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-800 hover:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Retour aux actualités
        </Link>
        <DemoBanner className="mt-6" />
        <p className="mt-6 text-sm text-muted">
          <time dateTime={article.date}>{formatDateFr(article.date)}</time>
          <span className="mx-2">·</span>
          <span className="rounded bg-amber-50 px-1.5 py-0.5 text-amber-900">Article démo</span>
        </p>
        <img
          src={article.image}
          alt={article.imageAlt}
          className="mt-8 aspect-video w-full rounded-2xl object-cover"
        />
        <div className="prose prose-neutral mt-8 max-w-none space-y-4 text-muted">
          {article.content.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </article>
    </>
  )
}
