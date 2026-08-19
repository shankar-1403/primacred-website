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
        image="/images/pages/why.webp"
      />
      <section id="content" className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f8fa_0%,#eef1f5_48%,#faf6ef_100%)] before:pointer-events-none before:absolute before:-left-20 before:top-0 before:size-64 before:rounded-full before:bg-gold/14 before:blur-[64px] before:content-[''] after:pointer-events-none after:absolute after:-right-16 after:bottom-0 after:size-72 after:rounded-full after:bg-navy-900/8 after:blur-[64px] after:content-[''] py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative space-y-3">
          {principles.map((principle, index) => (
            <Reveal key={principle.number}>
              <article
                className={cn(
                  'grid gap-4 rounded-xl border p-5 md:grid-cols-[6rem_1fr] md:p-6',
                  themes[index],
                )}
              >
                <span className="font-sans font-bold tabular-nums tracking-[-0.04em] text-3xl text-gold/50 md:text-4xl">
                  {principle.number}
                </span>
                <div>
                  <h2 className="font-sans font-semibold leading-tight tracking-[-0.035em] text-xl text-navy-900 md:text-2xl">
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
