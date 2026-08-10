import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Hero } from '@/components/Hero'
import { SectionTitle } from '@/components/SectionTitle'
import { ServiceCard } from '@/components/ServiceCard'
import { ProjectCard } from '@/components/ProjectCard'
import { NewsCard } from '@/components/NewsCard'
import { CTASection } from '@/components/CTASection'
import { DemoBanner } from '@/components/DemoBanner'
import { StatsSection } from '@/components/StatsSection'
import { Button } from '@/components/Button'
import { usePageMeta } from '@/hooks/usePageMeta'
import { SITE, CLIENT_SEGMENTS, WHY_TRUST } from '@/data/site'
import { DEMO_SERVICES } from '@/data/services'
import { DEMO_PROJECTS } from '@/data/projects.demo'
import { DEMO_NEWS } from '@/data/news.demo'
import { DEMO_STATS } from '@/data/content'
import { IMAGES } from '@/data/images'

export function HomePage() {
  usePageMeta({
    title: SITE.fullName,
    description: SITE.description,
    path: '/',
  })

  return (
    <>
      <Hero />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DemoBanner message="Site de démonstration B2B — services et chiffres = placeholders en attente du CAGIE." />
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
            <SectionTitle
              eyebrow="Présentation"
              title="Un partenaire pour les entreprises"
              subtitle="Le CAGIE accompagne les entreprises et organisations dans leurs enjeux de gestion, de développement et d’ingénierie. Texte provisoire, modifiable dès validation du positionnement officiel."
            />
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={IMAGES.presentation.url}
                alt={IMAGES.presentation.alt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <Button to="/a-propos" variant="outline" className="mt-8">
            En savoir plus
          </Button>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Offre"
            title="Nos services"
            subtitle="Exemples de catégories — remplacez src/data/services.ts par l’offre réelle."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DEMO_SERVICES.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} compact />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/services" variant="outline">
              Tous les services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Confiance"
            title="Pourquoi faire confiance au CAGIE ?"
            subtitle="Arguments génériques — à valider institutionnellement."
            align="center"
            className="mx-auto"
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {WHY_TRUST.map((item) => (
              <li key={item.title} className="rounded-2xl border border-border bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-brand-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-brand-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Clients"
            title="Domaines d’intervention"
            subtitle="Types d’organisations potentiellement accompagnées — liste indicative, non confirmée."
            align="center"
            className="mx-auto"
          />
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {CLIENT_SEGMENTS.map((seg) => (
              <li
                key={seg}
                className="rounded-full border border-brand-200 bg-white px-5 py-2.5 text-sm font-medium text-brand-900"
              >
                {seg}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Impact"
            title="Chiffres clés"
            subtitle="Statistiques provisoires (XX) — à remplacer par des données vérifiées."
            align="center"
            className="mx-auto"
          />
          <StatsSection stats={DEMO_STATS} className="mt-12" />
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Portfolio" title="Nos réalisations" subtitle="Cas fictifs pour maquette." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {DEMO_PROJECTS.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/realisations" className="text-sm font-semibold text-brand-800 hover:underline">
              Voir toutes les réalisations
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Insights" title="Actualités & insights" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {DEMO_NEWS.map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/actualites" variant="outline">
              Tous les articles
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Parlons de votre projet"
        description="Vous avez un projet, une problématique ou un besoin d’accompagnement ? Échangeons avec notre équipe."
        primaryLabel="Nous contacter"
        primaryTo="/contact"
        secondaryLabel="Demander un accompagnement"
        secondaryTo="/contact"
      />
    </>
  )
}
