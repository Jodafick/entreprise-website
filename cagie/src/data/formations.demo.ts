/**
 * DONNÉES DE DÉMONSTRATION — formations fictives pour maquette.
 * Remplacer ce fichier (ou son contenu) par le catalogue officiel du CAGIE.
 */
import type { Formation } from '@/types'

export const DEMO_FORMATIONS: Formation[] = [
  {
    slug: 'gestion-des-organisations',
    name: 'Gestion des organisations',
    level: '[Niveau à confirmer]',
    duration: '[Durée à confirmer]',
    description:
      'Exemple de programme orienté management, pilotage et performance des organisations. Contenu indicatif en attente de validation institutionnelle.',
    admission: '[Conditions d’admission à confirmer par le CAGIE]',
    outcomes: '[Débouchés à documenter avec l’établissement]',
    image:
      'https://images.unsplash.com/photo-1521737711862-e3b97375f902?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Étudiants en discussion — photo d’illustration, pas le campus CAGIE',
  },
  {
    slug: 'ingenierie-des-entreprises',
    name: 'Ingénierie des entreprises',
    level: '[Niveau à confirmer]',
    duration: '[Durée à confirmer]',
    description:
      'Exemple de parcours axé sur l’analyse, la conception et l’optimisation des systèmes d’entreprise. Données de démonstration uniquement.',
    admission: '[Conditions d’admission à confirmer par le CAGIE]',
    outcomes: '[Débouchés à documenter avec l’établissement]',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Réunion professionnelle — photo d’illustration',
  },
  {
    slug: 'entrepreneuriat-et-innovation',
    name: 'Entrepreneuriat et innovation',
    level: '[Niveau à confirmer]',
    duration: '[Durée à confirmer]',
    description:
      'Exemple de formation mettant l’accent sur la création de valeur, l’innovation et le développement de projets. À remplacer par l’offre réelle.',
    admission: '[Conditions d’admission à confirmer par le CAGIE]',
    outcomes: '[Débouchés à documenter avec l’établissement]',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Présentation en entreprise — photo d’illustration',
  },
  {
    slug: 'finance-et-controle',
    name: 'Finance et contrôle de gestion',
    level: '[Niveau à confirmer]',
    duration: '[Durée à confirmer]',
    description:
      'Exemple de cursus autour de la finance, du contrôle et de la prise de décision. Données provisoires pour structure du site.',
    admission: '[Conditions d’admission à confirmer par le CAGIE]',
    outcomes: '[Débouchés à documenter avec l’établissement]',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Analyse financière — photo d’illustration',
  },
]

export function getFormationBySlug(slug: string): Formation | undefined {
  return DEMO_FORMATIONS.find((f) => f.slug === slug)
}
