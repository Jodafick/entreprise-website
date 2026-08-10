import { PageHero } from '@/components/PageHero'
import { SectionTitle } from '@/components/SectionTitle'
import { DemoBanner } from '@/components/DemoBanner'
import { TeamCard } from '@/components/TeamCard'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ABOUT_CONTENT, DEMO_TEAM } from '@/data/content'

export function AboutPage() {
  usePageMeta({
    title: 'À propos',
    description: 'Présentation institutionnelle du CAGIE — cabinet d’accompagnement des entreprises.',
    path: '/a-propos',
  })

  return (
    <>
      <PageHero
        breadcrumb="Institution"
        title="À propos du CAGIE"
        subtitle="Organisation professionnelle — contenus officiels à compléter."
      />
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <DemoBanner />

        <section>
          <SectionTitle eyebrow="Présentation" title="Qui sommes-nous ?" subtitle={ABOUT_CONTENT.presentation} />
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="font-display text-2xl font-semibold text-brand-900">Mission</h2>
            <p className="mt-4 text-muted">{ABOUT_CONTENT.mission}</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="font-display text-2xl font-semibold text-brand-900">Vision</h2>
            <p className="mt-4 text-muted">{ABOUT_CONTENT.vision}</p>
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="Valeurs" title="Nos principes" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_CONTENT.values.map((v) => (
              <li key={v.title} className="rounded-2xl border border-border bg-white p-6">
                <h3 className="font-semibold text-brand-900">{v.title}</h3>
                <p className="mt-2 text-sm text-muted">{v.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-brand-100 bg-brand-50 p-8 sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-brand-900">
            {ABOUT_CONTENT.directorMessage.title}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{ABOUT_CONTENT.directorMessage.body}</p>
          <p className="mt-6 font-semibold text-brand-900">{ABOUT_CONTENT.directorMessage.signature}</p>
        </section>

        <section>
          <SectionTitle eyebrow="Historique" title="Notre parcours" />
          <ol className="mt-8 space-y-6 border-l-2 border-brand-200 pl-6">
            {ABOUT_CONTENT.history.map((h) => (
              <li key={h.title} className="relative">
                <span className="absolute -left-[1.6rem] top-1 h-3 w-3 rounded-full bg-brand-700" aria-hidden />
                <p className="text-sm font-bold text-accent">{h.year}</p>
                <h3 className="font-display text-lg font-semibold text-brand-900">{h.title}</h3>
                <p className="mt-1 text-sm text-muted">{h.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionTitle
            eyebrow="Équipe"
            title="Direction & experts"
            subtitle="Profils placeholders — noms et photos officiels à fournir."
          />
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {DEMO_TEAM.map((m) => (
              <TeamCard key={m.id} member={m} />
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
