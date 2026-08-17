import { ArrowUpRight } from 'lucide-react'
import type { Insight, InsightCategory } from '@/data/insights'
import { cn } from '@/lib/cn'

const categoryThemes: Record<
  InsightCategory,
  { card: string; text: string; bar: string }
> = {
  Finance: {
    card: 'border-gold/25 bg-gradient-to-br from-[#faf6ef] to-white',
    text: 'text-gold-dim',
    bar: 'bg-gold',
  },
  Risk: {
    card: 'border-navy-900/15 bg-gradient-to-br from-[#eef2f8] to-white',
    text: 'text-navy-800',
    bar: 'bg-navy-900',
  },
  Insurance: {
    card: 'border-gold-dim/25 bg-gradient-to-br from-[#f3ebe0] to-white',
    text: 'text-gold-dim',
    bar: 'bg-gold-dim',
  },
  'Business Resilience': {
    card: 'border-navy-700/25 bg-gradient-to-br from-[#e8edf5] to-white',
    text: 'text-navy-700',
    bar: 'bg-navy-700',
  },
}

export function InsightCard({ insight }: { insight: Insight }) {
  const theme = categoryThemes[insight.category]

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card',
        theme.card,
      )}
    >
      <span className={cn('absolute inset-y-0 left-0 w-1', theme.bar)} aria-hidden />
      <div className="flex items-center justify-between gap-3 pl-2">
        <p className={cn('label-caps', theme.text)}>{insight.category}</p>
        {insight.placeholder ? (
          <span className="label-caps text-stone-400">Placeholder</span>
        ) : null}
      </div>
      <h3 className="display-title mt-4 pl-2 text-xl leading-snug text-navy-900 md:text-2xl">
        {insight.title}
      </h3>
      <p className="mt-3 flex-1 pl-2 text-sm leading-relaxed text-stone-600">
        {insight.description}
      </p>
      <p className="mt-6 inline-flex items-center gap-2 pl-2 text-sm font-semibold text-navy-900">
        Read Article
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
          aria-hidden
        />
      </p>
    </article>
  )
}
