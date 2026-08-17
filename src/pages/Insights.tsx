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
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
      />
      <section id="content" className="page-section py-14 md:py-16">
        <div className="container-page relative">
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
