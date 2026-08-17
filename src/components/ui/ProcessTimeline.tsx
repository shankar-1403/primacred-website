import { cn } from '@/lib/cn'

type ProcessTimelineProps = {
  steps: readonly string[]
  orientation?: 'horizontal' | 'vertical'
}

export function ProcessTimeline({
  steps,
  orientation = 'horizontal',
}: ProcessTimelineProps) {
  const horizontal = orientation === 'horizontal'

  return (
    <ol
      className={cn(
        horizontal
          ? 'no-scrollbar hidden md:flex md:gap-6 md:overflow-x-auto xl:grid xl:grid-cols-7 xl:gap-0 xl:overflow-visible'
          : 'flex flex-col md:hidden',
      )}
    >
      {steps.map((step, index) => (
        <li
          key={step}
          className="relative flex min-w-[160px] flex-col rounded-xl border border-line-light bg-white p-4 md:min-h-[220px] md:border-0 md:bg-transparent md:p-3"
        >
          <span className="stat-number text-2xl text-gold-dim">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-3 text-base font-semibold leading-snug text-navy-900 md:text-lg">
            {step}
          </h3>
          {index < steps.length - 1 ? (
            <span
              className="animate-pulse-line mt-6 hidden h-px w-full bg-gradient-to-r from-gold via-gold/40 to-transparent md:block"
              aria-hidden
            />
          ) : null}
          {index < steps.length - 1 ? (
            <span
              className="my-4 ml-2 block h-8 w-px bg-gradient-to-b from-gold to-transparent md:hidden"
              aria-hidden
            />
          ) : null}
        </li>
      ))}
    </ol>
  )
}
