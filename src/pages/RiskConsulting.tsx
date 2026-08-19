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
        image="/images/pages/risk.webp"
      />
      <section id="content" className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f8fa_0%,#eef1f5_48%,#faf6ef_100%)] before:pointer-events-none before:absolute before:-left-20 before:top-0 before:size-64 before:rounded-full before:bg-gold/14 before:blur-[64px] before:content-[''] after:pointer-events-none after:absolute after:-right-16 after:bottom-0 after:size-72 after:rounded-full after:bg-navy-900/8 after:blur-[64px] after:content-[''] py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative space-y-8">
          {riskDomains.map((domain, index) => (
            <Reveal key={domain.title} delay={index * 0.04}>
              <div className="grid items-start gap-4 lg:grid-cols-12 lg:gap-6">
                <div className="relative isolate overflow-hidden rounded-2xl bg-navy-900 shadow-[0_16px_48px_rgba(15,33,64,0.18)] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(212,188,150,0.14)_0%,transparent_55%)] before:content-[''] p-5 lg:col-span-4 md:p-6">
                  <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="relative font-sans font-semibold leading-tight tracking-[-0.035em] mt-3 text-xl text-white md:text-2xl">
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
