import type { Testimonial } from '@/types'
import { Quote } from 'lucide-react'

type TestimonialCardProps = {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 sm:p-8">
      <Quote className="h-8 w-8 text-brand-200" aria-hidden />
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">{testimonial.quote}</blockquote>
      <figcaption className="mt-6 border-t border-border pt-4">
        <p className="font-semibold text-brand-900">{testimonial.author}</p>
        <p className="text-sm text-muted">{testimonial.role}</p>
        {testimonial.isPlaceholder && (
          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-amber-700">
            Témoignage placeholder
          </p>
        )}
      </figcaption>
    </figure>
  )
}
