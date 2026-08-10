type PageHeroProps = {
  title: string
  subtitle?: string
  breadcrumb?: string
}

export function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-surface pt-[4.25rem]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {breadcrumb && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">{breadcrumb}</p>
        )}
        <h1 className="font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl lg:text-5xl text-balance">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>}
      </div>
    </section>
  )
}
