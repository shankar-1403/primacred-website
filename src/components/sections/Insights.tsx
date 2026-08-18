import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { insights, type Insight, type InsightCategory } from '@/data/insights'
import { routes } from '@/data/site'
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

function InsightCard({ insight, index }: { insight: Insight; index: number }) {
  const theme = categoryThemes[insight.category]

  return (
    <Link
      to={routes.insights}
      className={cn(
        'group relative flex h-full flex-col rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-soft',
        theme.card,
      )}
    >
      <span
        className={cn('absolute inset-y-0 left-0 w-1 rounded-l-xl', theme.bar)}
        aria-hidden
      />

      <div className="flex items-center justify-between gap-2 pl-2">
        <span className={cn('text-xs font-semibold uppercase tracking-[0.16em] text-[0.65rem]', theme.text)}>
          {insight.category}
        </span>
        <span className="font-sans font-bold tabular-nums tracking-[-0.04em] text-sm text-navy-900/20">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-2 pl-2 text-sm font-semibold leading-snug text-navy-900 line-clamp-2">
        {insight.title}
      </h3>
      <p className="mt-1.5 flex-1 pl-2 text-xs leading-relaxed text-stone-600 line-clamp-2">
        {insight.description}
      </p>

      <span className="mt-3 inline-flex items-center gap-1 pl-2 text-[0.65rem] font-semibold uppercase tracking-wide text-navy-900/70 group-hover:text-gold-dim">
        Read
        <ArrowUpRight className="size-3" strokeWidth={1.75} />
      </span>
    </Link>
  )
}

export function InsightsTeaser() {
  const featured = insights.slice(0, 3)

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f8fa_0%,#eef1f5_48%,#faf6ef_100%)] before:pointer-events-none before:absolute before:-left-20 before:top-0 before:size-64 before:rounded-full before:bg-gold/14 before:blur-[64px] before:content-[''] after:pointer-events-none after:absolute after:-right-16 after:bottom-0 after:size-72 after:rounded-full after:bg-navy-900/8 after:blur-[64px] after:content-[''] py-12 md:py-14">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dim">Insights</p>
            <h2 className="font-sans font-semibold leading-tight tracking-[-0.035em] mt-2 text-[clamp(1.5rem,2.8vw,2rem)] text-navy-900">
              Perspectives That Help Businesses Think Ahead.
            </h2>
          </div>
          <Link
            to={routes.insights}
            className="group inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy-900 hover:text-gold-dim"
          >
            All insights
            <ArrowRight
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </Reveal>

        <div className="mt-5 grid gap-2.5 md:grid-cols-3">
          {featured.map((insight, index) => (
            <Reveal key={insight.slug} delay={0.04 + index * 0.04}>
              <InsightCard insight={insight} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
