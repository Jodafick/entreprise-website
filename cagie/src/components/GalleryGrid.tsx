import { useMemo, useState } from 'react'
import type { GalleryItem } from '@/types'
import { GALLERY_FILTERS } from '@/data/gallery.demo'
import { cn } from '@/lib/utils'

type GalleryGridProps = {
  items: GalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [filter, setFilter] = useState<(typeof GALLERY_FILTERS)[number]['id']>('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return items
    return items.filter((i) => i.category === filter)
  }, [items, filter])

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer la galerie">
        {GALLERY_FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition',
              filter === f.id
                ? 'bg-brand-900 text-white'
                : 'bg-surface text-muted hover:bg-brand-50 hover:text-brand-900',
            )}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <li key={item.id} className="group overflow-hidden rounded-2xl border border-border bg-white">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.imageAlt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <p className="p-4 text-sm font-medium text-brand-900">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
