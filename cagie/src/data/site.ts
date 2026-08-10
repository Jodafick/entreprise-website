/**
 * Informations institutionnelles — remplacer les placeholders par les données officielles.
 */
import { IMAGES } from '@/data/images'

export const SITE = {
  name: 'CAGIE',
  fullName: "Centre Africain de Gestion et d'Ingénierie des Entreprises",
  /** Proposition de valeur temporaire — à valider avec le CAGIE */
  taglinePlaceholder:
    'Des solutions professionnelles pour accompagner la croissance et la transformation des entreprises.',
  description:
    "Le CAGIE est présenté ici comme une structure professionnelle d’accompagnement des entreprises et organisations. Les textes et services affichés sont provisoires en attente des informations officielles.",
  copyright: '© 2026 CAGIE — Centre Africain de Gestion et d’Ingénierie des Entreprises. Tous droits réservés.',
  defaultOgImage: IMAGES.hero.url,
} as const

/** Coordonnées — placeholders à remplacer */
export const CONTACT = {
  phone: '[Numéro à confirmer]',
  phoneHref: '#',
  whatsapp: '[WhatsApp à confirmer]',
  whatsappHref: '#',
  email: 'contact@cagie.example',
  emailHref: 'mailto:contact@cagie.example',
  address: '[Adresse du siège — à confirmer]',
  city: '[Ville, Pays — à confirmer]',
  hours: 'Lundi – Vendredi : [horaires à confirmer]',
  mapEmbedUrl: '',
  mapLink: '#',
  social: {
    facebook: '#',
    linkedin: '#',
    instagram: '#',
    youtube: '#',
  },
} as const

export const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Services', href: '/services' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Actualités', href: '/actualites' },
  { label: 'Contact', href: '/contact' },
] as const

export const FOOTER_SERVICE_LINKS = [
  { label: 'Nos services', href: '/services' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Actualités', href: '/actualites' },
] as const

export const CLIENT_SEGMENTS = [
  'PME',
  'Grandes entreprises',
  'Startups',
  'Organisations',
  'Institutions',
  'Entrepreneurs',
] as const

export const WHY_TRUST = [
  {
    title: 'Expertise',
    text: 'Placeholder — savoir-faire et compétences à documenter officiellement.',
  },
  {
    title: 'Approche personnalisée',
    text: 'Placeholder — méthode d’accompagnement adaptée à chaque contexte client.',
  },
  {
    title: 'Contexte africain',
    text: 'Placeholder — compréhension des réalités économiques et organisationnelles locales.',
  },
  {
    title: 'Accompagnement des entreprises',
    text: 'Placeholder — relation de proximité avec les dirigeants et équipes.',
  },
  {
    title: 'Solutions sur mesure',
    text: 'Placeholder — réponses ajustées aux besoins exprimés, sans promesse non validée.',
  },
] as const
