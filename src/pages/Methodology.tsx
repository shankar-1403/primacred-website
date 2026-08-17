import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { CTASection } from '@/components/sections/CTA'
import { methodologyStages } from '@/data/methodology'
import { seo } from '@/data/seo'
import { cn } from '@/lib/cn'

const themes = [
  'border-gold/25 bg-gradient-to-br from-[#faf6ef] to-white',
  'border-navy-900/15 bg-gradient-to-br from-[#eef2f8] to-white',
  'border-navy-700/20 bg-gradient-to-br from-[#e8edf5] to-white',
  'border-gold-dim/25 bg-gradient-to-br from-[#f3ebe0] to-white',
  'border-gold/20 bg-gradient-to-br from-[#f7f3ec] to-white',
  'border-navy-900/15 bg-gradient-to-br from-[#eef2f8] to-white',
] as const

export default function Methodology() {
  return (
    <PageEnter>
      <SEO {...seo.methodology} />
      <PageHero
        eyebrow="Methodology"
        titleLines={['From Complexity', 'to Clarity.']}
        subtitle="A disciplined six-stage approach to advisory."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80"
      />
      <section id="content" className="page-section py-14 md:py-16">
        <div className="container-page relative grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {methodologyStages.map((stage, index) => (
            <Reveal key={stage.number} delay={index * 0.05}>
              <article
                className={cn(
                  'h-full rounded-xl border p-5 md:p-6',
                  themes[index],
                )}
              >
                <p className="stat-number text-3xl text-gold/45">{stage.number}</p>
                <h2 className="display-title mt-3 text-xl text-navy-900">
                  {stage.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {stage.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
