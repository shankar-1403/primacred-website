import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { insights, type Insight, type InsightCategory } from '@/data/insights'
import { routes } from '@/data/site'
import { cn } from '@/lib/cn'

const categoryThemes: Record<
  InsightCategory,
  { accent: string; bg: string; text: string; border: string }
> = {
  Finance: {
    accent: 'bg-gold',
    bg: 'from-[#faf6ef] to-white',
    text: 'text-gold-dim',
    border: 'border-gold/30',
  },
  Risk: {
    accent: 'bg-navy-900',
    bg: 'from-[#eef2f8] to-white',
    text: 'text-navy-800',
    border: 'border-navy-900/20',
  },
  Insurance: {
    accent: 'bg-gold-dim',
    bg: 'from-[#f3ebe0] to-white',
    text: 'text-gold-dim',
    border: 'border-gold-dim/30',
  },
  'Business Resilience': {
    accent: 'bg-navy-700',
    bg: 'from-[#e8edf5] to-white',
    text: 'text-navy-700',
    border: 'border-navy-700/25',
  },
}

function FeaturedInsight({ insight }: { insight: Insight }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-navy-900 p-7 shadow-[0_20px_60px_rgba(15,33,64,0.2)] md:p-9">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(212,188,150,0.16)_0%,transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />

      <div className="relative flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-gold/20 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold-soft">
          {insight.category}
        </span>
        {insight.placeholder ? (
          <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-white/45">
            Placeholder
          </span>
        ) : null}
      </div>

      <h3 className="relative mt-6 max-w-2xl display-title text-[clamp(1.65rem,3vw,2.35rem)] text-white">
        {insight.title}
      </h3>
      <p className="relative mt-4 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
        {insight.description}
      </p>

      <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft transition-colors group-hover:text-white">
        Read article
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-1"
          strokeWidth={1.75}
        />
      </span>
    </article>
  )
}

function CompactInsight({
  insight,
  index,
}: {
  insight: Insight
  index: number
}) {
  const theme = categoryThemes[insight.category]

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-xl border bg-gradient-to-br p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card',
        theme.bg,
        theme.border,
      )}
    >
      <span
        className={cn('absolute inset-y-0 left-0 w-1', theme.accent)}
        aria-hidden
      />

      <div className="flex items-start justify-between gap-3 pl-2">
        <span className={cn('label-caps', theme.text)}>{insight.category}</span>
        <span className="stat-number text-2xl leading-none text-navy-900/15">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-4 pl-2 text-base font-semibold leading-snug text-navy-900">
        {insight.title}
      </h3>
      <p className="mt-2 flex-1 pl-2 text-xs leading-relaxed text-stone-600 line-clamp-3">
        {insight.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3 pl-2">
        {insight.placeholder ? (
          <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-stone-400">
            Placeholder
          </span>
        ) : (
          <span />
        )}
        <span className="inline-flex size-8 items-center justify-center rounded-full border border-line-light bg-white text-navy-900 transition-colors group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-white">
          <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
        </span>
      </div>
    </article>
  )
}

export function InsightsTeaser() {
  const [featured, ...rest] = insights

  return (
    <section className="page-section py-14 md:py-16">
      <div className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-navy-900/5 blur-3xl" />

      <div className="container-page relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Section intro */}
          <Reveal className="lg:col-span-4 lg:pt-2">
            <p className="label-caps text-gold-dim">Insights</p>
            <h2 className="display-title mt-3 text-balance text-[clamp(1.75rem,3vw,2.5rem)] text-navy-900">
              Perspectives That Help Businesses Think Ahead.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Editorial perspectives on finance, risk and resilience — structured
              for clarity, not noise.
            </p>
            <Link
              to={routes.insights}
              className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 shadow-soft transition-all hover:border-navy-900/30 hover:shadow-card"
            >
              All insights
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </Reveal>

          {/* Articles */}
          <div className="flex flex-col gap-4 lg:col-span-8">
            <Reveal delay={0.06}>
              <FeaturedInsight insight={featured} />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {rest.slice(0, 2).map((insight, index) => (
                <Reveal key={insight.slug} delay={0.1 + index * 0.06}>
                  <CompactInsight insight={insight} index={index + 1} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
