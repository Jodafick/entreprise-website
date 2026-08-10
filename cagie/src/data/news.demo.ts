/**
 * DONNÉES DE DÉMONSTRATION — articles insights B2B.
 */
import type { NewsArticle } from '@/types'
import { IMAGES } from '@/data/images'

export const DEMO_NEWS: NewsArticle[] = [
  {
    slug: 'gestion-pme-afrique',
    title: 'Gestion des PME en Afrique [article démo]',
    excerpt:
      'Placeholder d’article sur les enjeux de gestion — contenu éditorial à produire par le CAGIE.',
    content: [
      'Cet article est une démonstration de mise en page. Il ne constitue pas une publication officielle du CAGIE.',
      'Thèmes possibles : pilotage, trésorerie, organisation interne, croissance maîtrisée.',
    ],
    date: '2026-02-10',
    category: 'Gestion',
    image: IMAGES.consulting.url,
    imageAlt: IMAGES.consulting.alt,
  },
  {
    slug: 'strategie-transformation',
    title: 'Stratégie et transformation [article démo]',
    excerpt: 'Insights sur la transformation des organisations — contenu provisoire.',
    content: [
      'Structure prête pour un futur CMS ou blog institutionnel.',
      'Remplacez par des analyses signées CAGIE lorsque disponibles.',
    ],
    date: '2026-02-18',
    category: 'Stratégie',
    image: IMAGES.hero.url,
    imageAlt: IMAGES.hero.alt,
  },
  {
    slug: 'innovation-entrepreneuriat',
    title: 'Innovation et entrepreneuriat [article démo]',
    excerpt: 'Placeholder — entrepreneuriat et innovation en contexte africain.',
    content: ['Article fictif pour maquette commerciale.'],
    date: '2026-03-01',
    category: 'Innovation',
    image: IMAGES.workshop.url,
    imageAlt: IMAGES.workshop.alt,
  },
]

export const NEWS_CATEGORIES = ['Tous', 'Gestion', 'Stratégie', 'Innovation', 'Économie'] as const

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return DEMO_NEWS.find((n) => n.slug === slug)
}
