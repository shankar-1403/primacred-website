import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { CTASection } from '@/components/sections/CTA'
import { principles } from '@/data/methodology'
import { seo } from '@/data/seo'
import { cn } from '@/lib/cn'

const themes = [
  'border-gold/25 bg-gradient-to-br from-[#faf6ef] to-white',
  'border-navy-900/15 bg-gradient-to-br from-[#eef2f8] to-white',
  'border-navy-700/20 bg-gradient-to-br from-[#e8edf5] to-white',
  'border-gold-dim/25 bg-gradient-to-br from-[#f3ebe0] to-white',
  'border-gold/20 bg-gradient-to-br from-[#f7f3ec] to-white',
] as const

export default function WhyPrimacred() {
  return (
    <PageEnter>
      <SEO {...seo.whyPrimacred} />
      <PageHero
        eyebrow="Why PRIMACRED"
        titleLines={['Advisory With Perspective.']}
        subtitle="Because the right answer starts with the right question."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80"
      />
      <section id="content" className="page-section py-14 md:py-16">
        <div className="container-page relative space-y-3">
          {principles.map((principle, index) => (
            <Reveal key={principle.number}>
              <article
                className={cn(
                  'grid gap-4 rounded-xl border p-5 md:grid-cols-[6rem_1fr] md:p-6',
                  themes[index],
                )}
              >
                <span className="stat-number text-3xl text-gold/50 md:text-4xl">
                  {principle.number}
                </span>
                <div>
                  <h2 className="display-title text-xl text-navy-900 md:text-2xl">
                    {principle.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600 md:text-base">
                    {principle.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
