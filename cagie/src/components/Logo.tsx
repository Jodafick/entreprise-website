import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { SITE } from '@/data/site'

type LogoProps = {
  className?: string
  showSubtitle?: boolean
  compact?: boolean
}

export function Logo({ className, showSubtitle = true, compact = false }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn('group flex items-center gap-3 focus-visible:rounded-lg', className)}
      aria-label={`${SITE.name} — accueil`}
    >
      <span
        className={cn(
          'flex shrink-0 items-center justify-center rounded-xl bg-brand-900 font-display font-bold text-white shadow-sm',
          compact ? 'h-9 w-9 text-sm' : 'h-11 w-11 text-base',
        )}
        aria-hidden
      >
        C
      </span>
      <span className="min-w-0 leading-tight">
        <span
          className={cn(
            'block font-display font-semibold tracking-tight text-brand-900',
            compact ? 'text-base' : 'text-lg sm:text-xl',
          )}
        >
          {SITE.name}
        </span>
        {showSubtitle && !compact && (
          <span className="hidden max-w-[220px] truncate text-[0.65rem] font-medium uppercase tracking-wide text-muted sm:block lg:max-w-none lg:text-xs">
            {SITE.fullName}
          </span>
        )}
      </span>
    </Link>
  )
}
