export type Formation = {
  slug: string
  name: string
  level: string
  duration: string
  description: string
  admission: string
  outcomes: string
  image: string
  imageAlt: string
}

export type NewsArticle = {
  slug: string
  title: string
  excerpt: string
  content: string[]
  date: string
  category: string
  image: string
  imageAlt: string
}

export type GalleryItem = {
  id: string
  title: string
  category: GalleryCategory
  image: string
  imageAlt: string
}

export type GalleryCategory =
  | 'campus'
  | 'evenements'
  | 'etudiants'
  | 'activites'

export type Testimonial = {
  id: string
  quote: string
  author: string
  role: string
  isPlaceholder: true
}

export type FAQItem = {
  id: string
  question: string
  answer: string
}

export type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  image: string
  isPlaceholder: boolean
}

export type StatItem = {
  id: string
  value: string
  label: string
  note: string
}

export type NavLink = {
  label: string
  href: string
}
