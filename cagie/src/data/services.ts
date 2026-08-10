/**
 * DONNÉES TEMPORAIRES — exemples de catégories de services.
 * À remplacer par l’offre officielle du CAGIE dès communication des services réels.
 */
import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Building2,
  ClipboardCheck,
  GraduationCap,
  Lightbulb,
  LineChart,
  Search,
  Settings2,
  Target,
  Users,
} from 'lucide-react'

export type ServiceItem = {
  slug: string
  title: string
  shortDescription: string
  icon: LucideIcon
  image: string
  imageAlt: string
  clientProblem: string
  approach: string
  benefits: string[]
  process: string[]
}

export const DEMO_SERVICES: ServiceItem[] = [
  {
    slug: 'conseil-aux-entreprises',
    title: 'Conseil aux entreprises',
    shortDescription:
      'Placeholder — accompagnement conseil pour clarifier les enjeux et orienter les décisions.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1594744803329-e583b2d547c1?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Dirigeant africain — illustration',
    clientProblem: '[Problématique type — à définir avec le CAGIE]',
    approach: '[Méthodologie — contenu officiel à intégrer]',
    benefits: ['[Bénéfice 1 à confirmer]', '[Bénéfice 2 à confirmer]', '[Bénéfice 3 à confirmer]'],
    process: ['Diagnostic', 'Proposition', 'Mise en œuvre', 'Suivi'],
  },
  {
    slug: 'gestion-accompagnement-organisations',
    title: 'Gestion & accompagnement des organisations',
    shortDescription:
      'Placeholder — structuration, pilotage et amélioration des pratiques de gestion.',
    icon: Settings2,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Professionnelle africaine — illustration',
    clientProblem: '[Problématique — placeholder]',
    approach: '[Approche — placeholder]',
    benefits: ['[Bénéfice — placeholder]', '[Bénéfice — placeholder]'],
    process: ['Cadrage', 'Plan d’action', 'Déploiement', 'Évaluation'],
  },
  {
    slug: 'ingenierie-entreprise',
    title: 'Ingénierie d’entreprise',
    shortDescription:
      'Placeholder — conception et optimisation des systèmes et processus organisationnels.',
    icon: LineChart,
    image: 'https://images.unsplash.com/photo-1619895862022-09118b34116f?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Équipe africaine — illustration',
    clientProblem: '[Problématique — placeholder]',
    approach: '[Approche — placeholder]',
    benefits: ['[Bénéfice — placeholder]'],
    process: ['Analyse', 'Modélisation', 'Implémentation'],
  },
  {
    slug: 'etudes-accompagnement-projets',
    title: 'Études & accompagnement de projets',
    shortDescription: 'Placeholder — appui à la structuration et au suivi de projets d’entreprise.',
    icon: ClipboardCheck,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Collaboration professionnelle — illustration',
    clientProblem: '[Problématique — placeholder]',
    approach: '[Approche — placeholder]',
    benefits: ['[Bénéfice — placeholder]'],
    process: ['Initialisation', 'Pilotage', 'Clôture'],
  },
  {
    slug: 'developpement-entreprises',
    title: 'Développement des entreprises',
    shortDescription: 'Placeholder — leviers de croissance et renforcement des capacités.',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1573497019236-5166d8d2a826?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Professionnelle africaine — illustration',
    clientProblem: '[Problématique — placeholder]',
    approach: '[Approche — placeholder]',
    benefits: ['[Bénéfice — placeholder]'],
    process: ['Diagnostic', 'Plan de développement', 'Suivi'],
  },
  {
    slug: 'audit-diagnostic',
    title: 'Audit & diagnostic',
    shortDescription: 'Placeholder — analyse de situation et recommandations.',
    icon: Search,
    image: 'https://images.unsplash.com/photo-1664575190621-081b692d950e?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Contexte professionnel — illustration',
    clientProblem: '[Problématique — placeholder]',
    approach: '[Approche — placeholder]',
    benefits: ['[Bénéfice — placeholder]'],
    process: ['Collecte', 'Analyse', 'Restitution'],
  },
  {
    slug: 'accompagnement-strategique',
    title: 'Accompagnement stratégique',
    shortDescription: 'Placeholder — réflexion stratégique et priorisation des actions.',
    icon: Lightbulb,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Réunion stratégique — illustration',
    clientProblem: '[Problématique — placeholder]',
    approach: '[Approche — placeholder]',
    benefits: ['[Bénéfice — placeholder]'],
    process: ['Vision', 'Stratégie', 'Déclinaison'],
  },
  {
    slug: 'formation-professionnelle',
    title: 'Formation professionnelle',
    shortDescription:
      'Placeholder — modules de montée en compétences pour équipes et dirigeants (à confirmer).',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1627161683237-bd1413b4aabe?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Session professionnelle — illustration',
    clientProblem: '[Problématique — placeholder]',
    approach: '[Approche — placeholder]',
    benefits: ['[Bénéfice — placeholder]'],
    process: ['Besoins', 'Conception', 'Animation', 'Évaluation'],
  },
  {
    slug: 'assistance-organisations',
    title: 'Assistance aux organisations',
    shortDescription: 'Placeholder — appui opérationnel et technique aux structures.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Consultante africaine — illustration',
    clientProblem: '[Problématique — placeholder]',
    approach: '[Approche — placeholder]',
    benefits: ['[Bénéfice — placeholder]'],
    process: ['Mission', 'Intervention', 'Transfert'],
  },
  {
    slug: 'pilotage-performance',
    title: 'Pilotage & performance',
    shortDescription: 'Placeholder — indicateurs, tableaux de bord et amélioration continue.',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Analyse de performance — illustration',
    clientProblem: '[Problématique — placeholder]',
    approach: '[Approche — placeholder]',
    benefits: ['[Bénéfice — placeholder]'],
    process: ['Mesure', 'Analyse', 'Action'],
  },
]

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return DEMO_SERVICES.find((s) => s.slug === slug)
}
