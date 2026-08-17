import { useId, useState } from 'react'

type CapabilityListProps = {
  items: readonly string[]
  notes?: Record<string, string>
}

const defaultNote =
  'Capability offered as part of PRIMACRED’s integrated advisory platform.'

export function CapabilityList({ items, notes }: CapabilityListProps) {
  const [open, setOpen] = useState<string | null>(null)
  const headingId = useId()

  return (
    <ul
      aria-labelledby={headingId}
      className="overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-soft"
    >
      <span id={headingId} className="sr-only">
        Capabilities
      </span>
      {items.map((item, index) => {
        const isOpen = open === item
        return (
          <li
            key={item}
            className="capability-item border-t border-line-light first:border-t-0"
            data-open={isOpen}
          >
            <button
              type="button"
              className="flex w-full items-baseline justify-between gap-6 px-5 py-4 text-left transition-colors hover:bg-[#faf6ef] md:px-6 md:py-5"
              onClick={() => setOpen(isOpen ? null : item)}
              aria-expanded={isOpen}
            >
              <span className="flex min-w-0 items-baseline gap-4 md:gap-6">
                <span className="stat-number w-8 shrink-0 text-sm text-gold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-base font-semibold text-navy-900 md:text-lg">
                  {item}
                </span>
              </span>
              <span className="hidden text-[0.65rem] font-semibold tracking-[0.16em] uppercase text-gold-dim md:inline">
                {isOpen ? 'Close' : 'View'}
              </span>
            </button>
            <div className="capability-body">
              <div className="overflow-hidden">
                <p className="px-5 pb-5 pl-[3.25rem] text-sm leading-relaxed text-stone-600 md:px-6 md:pl-16">
                  {notes?.[item] ?? defaultNote}
                </p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
