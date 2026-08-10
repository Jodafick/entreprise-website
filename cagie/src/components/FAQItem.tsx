import { ChevronDown } from 'lucide-react'
import type { FAQItem } from '@/types'
import { cn } from '@/lib/utils'

type FAQItemProps = {
  item: FAQItem
  open: boolean
  onToggle: () => void
}

export function FAQAccordionItem({ item, open, onToggle }: FAQItemProps) {
  const panelId = `faq-panel-${item.id}`
  const buttonId = `faq-button-${item.id}`

  return (
    <div className="border-b border-border">
      <h3>
        <button
          type="button"
          id={buttonId}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-brand-900 transition hover:text-brand-700"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          {item.question}
          <ChevronDown
            className={cn('h-5 w-5 shrink-0 text-muted transition', open && 'rotate-180')}
            aria-hidden
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="pb-5 text-sm leading-relaxed text-muted"
      >
        {item.answer}
      </div>
    </div>
  )
}
