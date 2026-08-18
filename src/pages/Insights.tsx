import { useMemo, useState } from 'react'
import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { InsightCard } from '@/components/ui/InsightCard'
import { CTASection } from '@/components/sections/CTA'
import { insightCategories, insights, type InsightCategory } from '@/data/insights'
import { seo } from '@/data/seo'
import { cn } from '@/lib/cn'

export default function Insights() {
  const [category, setCategory] = useState<InsightCategory | 'All'>('All')
  const filtered = useMemo(
    () =>
      category === 'All'
        ? insights
        : insights.filter((item) => item.category === category),
    [category],
  )

  return (
    <PageEnter>
      <SEO {...seo.insights} />
      <PageHero
        eyebrow="Insights"
        titleLines={['Perspectives That Help', 'Businesses Think Ahead.']}
        subtitle="Placeholder articles for editorial structure. These are not published opinions or client case studies."
        image="/images/pages/insights.png"
      />
      <section id="content" className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f8fa_0%,#eef1f5_48%,#faf6ef_100%)] before:pointer-events-none before:absolute before:-left-20 before:top-0 before:size-64 before:rounded-full before:bg-gold/14 before:blur-[64px] before:content-[''] after:pointer-events-none after:absolute after:-right-16 after:bottom-0 after:size-72 after:rounded-full after:bg-navy-900/8 after:blur-[64px] after:content-[''] py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative">
          <div className="flex flex-wrap gap-2">
            {(['All', ...insightCategories] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  'rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors',
                  category === item
                    ? 'border-navy-900 bg-navy-900 text-gold-soft'
                    : 'border-line-light bg-white text-stone-600 hover:border-gold/40',
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {filtered.map((insight, index) => (
              <Reveal key={insight.slug} delay={index * 0.04}>
                <InsightCard insight={insight} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
