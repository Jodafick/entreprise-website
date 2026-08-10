import { useMemo, useState } from 'react'
import { PageHero } from '@/components/PageHero'
import { NewsCard } from '@/components/NewsCard'
import { DemoBanner } from '@/components/DemoBanner'
import { usePageMeta } from '@/hooks/usePageMeta'
import { DEMO_NEWS, NEWS_CATEGORIES } from '@/data/news.demo'
import { cn } from '@/lib/utils'

export function NewsPage() {
  usePageMeta({
    title: 'Actualités',
    description: 'Fil d’actualités institutionnel du CAGIE — architecture prête pour un CMS.',
    path: '/actualites',
  })

  const [category, setCategory] = useState<string>('Tous')

  const filtered = useMemo(() => {
    if (category === 'Tous') return DEMO_NEWS
    return DEMO_NEWS.filter((n) => n.category === category)
  }, [category])

  return (
    <>
      <PageHero
        breadcrumb="Communication"
        title="Actualités & insights"
        subtitle="Articles de démonstration — entrepreneuriat, gestion, stratégie et innovation."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <DemoBanner message="Articles fictifs dans src/data/news.demo.ts" />
        <div className="mt-8 flex flex-wrap gap-2">
          {NEWS_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition',
                category === cat
                  ? 'bg-brand-900 text-white'
                  : 'bg-surface text-muted hover:bg-brand-50',
              )}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <NewsCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </>
  )
}
