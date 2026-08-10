/**
 * DONNÉES DE DÉMONSTRATION — galerie (images Unsplash, pas le campus CAGIE).
 */
import type { GalleryItem } from '@/types'

export const DEMO_GALLERY: GalleryItem[] = [
  {
    id: '1',
    title: 'Espace d’apprentissage [illustration]',
    category: 'campus',
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Bâtiment universitaire — photo stock',
  },
  {
    id: '2',
    title: 'Salle de cours [illustration]',
    category: 'campus',
    image:
      'https://images.unsplash.com/photo-1541339907192-e58743dff5e2?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Salle de cours — photo stock',
  },
  {
    id: '3',
    title: 'Événement institutionnel [placeholder]',
    category: 'evenements',
    image:
      'https://images.unsplash.com/photo-1505373877841-8d25f39d466a?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Événement — photo stock',
  },
  {
    id: '4',
    title: 'Travaux en groupe [illustration]',
    category: 'etudiants',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Étudiants — photo stock',
  },
  {
    id: '5',
    title: 'Atelier pratique [placeholder]',
    category: 'activites',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Atelier — photo stock',
  },
  {
    id: '6',
    title: 'Cérémonie [à documenter]',
    category: 'evenements',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Graduation — photo stock',
  },
]

export const GALLERY_FILTERS: { id: 'all' | GalleryItem['category']; label: string }[] = [
  { id: 'all', label: 'Toutes' },
  { id: 'campus', label: 'Campus' },
  { id: 'evenements', label: 'Événements' },
  { id: 'etudiants', label: 'Étudiants' },
  { id: 'activites', label: 'Activités' },
]
