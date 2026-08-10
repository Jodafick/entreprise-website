import type { StatItem, TeamMember, FAQItem } from '@/types'
import { IMAGES } from '@/data/images'

export const DEMO_STATS: StatItem[] = [
  {
    id: 'clients',
    value: '+XX',
    label: 'Entreprises accompagnées',
    note: 'Chiffre à confirmer',
  },
  {
    id: 'years',
    value: 'XX ans',
    label: 'Années d’expérience',
    note: 'Historique à documenter',
  },
  {
    id: 'projects',
    value: 'XX',
    label: 'Projets réalisés',
    note: 'Portfolio officiel à venir',
  },
  {
    id: 'team',
    value: 'XX',
    label: 'Collaborateurs',
    note: 'Effectif à confirmer',
  },
]

export const ABOUT_CONTENT = {
  presentation:
    "Le Centre Africain de Gestion et d’Ingénierie des Entreprises (CAGIE) est présenté ici comme un partenaire professionnel pour les entreprises et organisations. Cette présentation est provisoire et sera alignée sur le discours officiel du CAGIE.",
  mission: '[Mission institutionnelle — texte officiel à intégrer]',
  vision: '[Vision — texte officiel à intégrer]',
  values: [
    { title: 'Excellence', text: '[Définition officielle à confirmer]' },
    { title: 'Intégrité', text: '[Définition officielle à confirmer]' },
    { title: 'Innovation', text: '[Définition officielle à confirmer]' },
    { title: 'Impact', text: '[Définition officielle à confirmer]' },
  ],
  directorMessage: {
    title: 'Mot de la direction',
    body: '[Message du ou de la dirigeant(e) — contenu officiel à fournir par le CAGIE.]',
    signature: '[Nom et titre — à confirmer]',
  },
  history: [
    {
      year: '[Année]',
      title: 'Origines',
      text: '[Étape historique à documenter avec le CAGIE.]',
    },
    {
      year: '[Année]',
      title: 'Développement',
      text: '[Placeholder — faits vérifiables uniquement.]',
    },
    {
      year: 'Aujourd’hui',
      title: 'Présent',
      text: '[Positionnement actuel — texte officiel à intégrer.]',
    },
  ],
}

export const DEMO_TEAM: TeamMember[] = [
  {
    id: '1',
    name: '[Nom — direction]',
    role: '[Fonction officielle]',
    bio: '[Biographie courte à valider par le CAGIE.]',
    image: IMAGES.consulting.url,
    isPlaceholder: true,
  },
  {
    id: '2',
    name: '[Nom — conseil]',
    role: '[Fonction officielle]',
    bio: '[Biographie — placeholder.]',
    image: IMAGES.strategy.url,
    isPlaceholder: true,
  },
  {
    id: '3',
    name: '[Nom — opérations]',
    role: '[Fonction officielle]',
    bio: '[Biographie — placeholder.]',
    image: IMAGES.teamMeeting.url,
    isPlaceholder: true,
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'services',
    question: 'Quels services propose le CAGIE ?',
    answer:
      'La liste affichée sur ce site est composée de placeholders pour illustrer la structure. Les services réellement proposés seront publiés dès validation par le CAGIE.',
  },
  {
    id: 'clients',
    question: 'À qui s’adresse le CAGIE ?',
    answer:
      'Le positionnement visé est B2B : entreprises, organisations et institutions. Les segments listés (PME, startups, etc.) sont des exemples temporaires.',
  },
  {
    id: 'contact',
    question: 'Comment contacter le CAGIE ?',
    answer:
      'Utilisez la page Contact. Les coordonnées marquées « à confirmer » seront remplacées par les informations officielles.',
  },
  {
    id: 'localisation',
    question: 'Où se trouve le CAGIE ?',
    answer: 'L’adresse exacte sera ajoutée sur la page Contact lorsque confirmée.',
  },
]
