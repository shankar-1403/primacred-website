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
        image="/images/pages/industries.png"
      />
      <section id="content" className="page-section py-10 md:py-12">
        <div className="container-page relative overflow-hidden rounded-2xl border border-navy-900/10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Reveal key={industry.name} delay={index * 0.03}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
