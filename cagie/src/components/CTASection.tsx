import { Button } from '@/components/Button'

type CTASectionProps = {
  title: string
  description: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export function CTASection({
  title,
  description,
  primaryLabel = 'Candidater',
  primaryTo = '/admissions',
  secondaryLabel = 'Nous contacter',
  secondaryTo = '/contact',
}: CTASectionProps) {
  return (
    <section className="bg-brand-900 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl text-balance">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-brand-100/85 sm:text-lg">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to={primaryTo} variant="secondary" size="lg" className="min-w-[200px]">
            {primaryLabel}
          </Button>
          <Button
            to={secondaryTo}
            variant="outline"
            size="lg"
            className="min-w-[200px] border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
