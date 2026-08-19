import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { IndustryCard } from '@/components/ui/IndustryCard'
import { CTASection } from '@/components/sections/CTA'
import { industries } from '@/data/industries'
import { seo } from '@/data/seo'

export default function Industries() {
  return (
    <PageEnter>
      <SEO {...seo.industries} />
      <PageHero
        eyebrow="Industries"
        titleLines={['Understanding the Context', 'Behind the Challenge.']}
        subtitle="Advisory informed by the operating environment in which decisions are made."
        image="/images/pages/industries.webp"
      />
      <section id="content" className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f8fa_0%,#eef1f5_48%,#faf6ef_100%)] before:pointer-events-none before:absolute before:-left-20 before:top-0 before:size-64 before:rounded-full before:bg-gold/14 before:blur-[64px] before:content-[''] after:pointer-events-none after:absolute after:-right-16 after:bottom-0 after:size-72 after:rounded-full after:bg-navy-900/8 after:blur-[64px] after:content-[''] py-10 md:py-12">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className='relative overflow-hidden rounded-2xl border border-navy-900/10'>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry, index) => (
                <Reveal key={industry.name} delay={index * 0.03}>
                  <IndustryCard industry={industry} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
