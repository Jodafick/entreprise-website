import { Info } from 'lucide-react'
import { cn } from '@/lib/utils'

type DemoBannerProps = {
  message?: string
  className?: string
}

export function DemoBanner({
  message = 'Certaines informations de cette page sont des placeholders ou des données de démonstration en attente de validation par le CAGIE.',
  className,
}: DemoBannerProps) {
  return (
    <div
      className={cn(
        'flex gap-3 rounded-xl border border-amber-200/80 bg-amber-50 px-4 py-3 text-sm text-amber-950',
        className,
      )}
      role="note"
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <p>{message}</p>
    </div>
  )
}
