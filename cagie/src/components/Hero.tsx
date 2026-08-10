import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/Button'
import { SITE } from '@/data/site'
import { IMAGES } from '@/data/images'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-[4.25rem]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24 lg:px-8">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Cabinet &amp; ingénierie des entreprises
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-brand-900 sm:text-5xl lg:text-[3.25rem] text-balance">
            {SITE.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-brand-700 sm:text-xl">{SITE.fullName}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            <span className="text-xs font-semibold uppercase tracking-wide text-amber-800">
              Proposition temporaire
            </span>
            <br />
            {SITE.taglinePlaceholder}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button to="/services" size="lg">
              Découvrir nos services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Nous contacter
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-brand-100 shadow-xl shadow-brand-900/10 ring-1 ring-border">
            <img
              src={IMAGES.hero.url}
              alt={IMAGES.hero.alt}
              className="h-full w-full object-cover"
              width={1400}
              height={1050}
              fetchPriority="high"
            />
          </div>
          <p className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2 py-1 text-[0.65rem] font-medium text-muted shadow-sm">
            Photo d’illustration — non CAGIE
          </p>
        </div>
      </div>
    </section>
  )
}
