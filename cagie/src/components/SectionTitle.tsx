import { cn } from '@/lib/utils'

type SectionTitleProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>
      )}
    </div>
  )
}
