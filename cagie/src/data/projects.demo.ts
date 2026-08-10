/**
 * DONNÉES DE DÉMONSTRATION — réalisations fictives pour maquette portfolio.
 */
export type ProjectItem = {
  slug: string
  title: string
  sector: string
  problem: string
  solution: string
  result: string
  image: string
  imageAlt: string
}

export const DEMO_PROJECTS: ProjectItem[] = [
  {
    slug: 'pme-retail-cotonou',
    title: 'Accompagnement PME — secteur commerce [démo]',
    sector: 'Commerce / distribution',
    problem: '[Problématique client fictive — placeholder]',
    solution: '[Description de l’intervention — à remplacer par cas réel]',
    result: '[Résultat — non chiffré, placeholder]',
    image: 'https://images.unsplash.com/photo-1594744803329-e583b2d547c1?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Entrepreneur africain — illustration',
  },
  {
    slug: 'organisation-diagnostic',
    title: 'Diagnostic organisationnel [démo]',
    sector: 'Services',
    problem: '[Placeholder]',
    solution: '[Placeholder]',
    result: '[Placeholder]',
    image: 'https://images.unsplash.com/photo-1619895862022-09118b34116f?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Équipe professionnelle africaine — illustration',
  },
  {
    slug: 'projet-strategique',
    title: 'Projet stratégique [démo]',
    sector: 'Industrie',
    problem: '[Placeholder]',
    solution: '[Placeholder]',
    result: '[Placeholder]',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Réunion d’affaires — illustration',
  },
]

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return DEMO_PROJECTS.find((p) => p.slug === slug)
}
