import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { CapabilityList } from '@/components/ui/CapabilityList'
import { CTASection } from '@/components/sections/CTA'
import { riskDomains } from '@/data/services'
import { seo } from '@/data/seo'

export default function RiskConsulting() {
  return (
    <PageEnter>
      <SEO {...seo.riskConsulting} />
      <PageHero
        eyebrow="Risk Consulting"
        titleLines={['Risk Is Not Simply a Constraint.', 'It Is a Strategic Variable.']}
        subtitle="Understand risk before it becomes disruption."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
      />
      <section id="content" className="page-section py-14 md:py-16">
        <div className="container-page relative space-y-8">
          {riskDomains.map((domain, index) => (
            <Reveal key={domain.title} delay={index * 0.04}>
              <div className="grid items-start gap-4 lg:grid-cols-12 lg:gap-6">
                <div className="navy-panel p-5 lg:col-span-4 md:p-6">
                  <p className="relative label-caps text-gold-soft">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="relative display-title mt-3 text-xl text-white md:text-2xl">
                    {domain.title}
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <CapabilityList items={domain.capabilities} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
