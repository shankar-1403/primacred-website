import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { CapabilityList } from '@/components/ui/CapabilityList'
import { CTASection } from '@/components/sections/CTA'
import { financialCapabilities } from '@/data/services'
import { seo } from '@/data/seo'

export default function FinancialAdvisory() {
  return (
    <PageEnter>
      <SEO {...seo.financialAdvisory} />
      <PageHero
        eyebrow="Financial Advisory"
        titleLines={['Strengthening the', 'Financial Foundations', 'of Business.']}
        subtitle="Strategic financial advice for businesses navigating change, complexity and growth."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80"
      />
      <section id="content" className="page-section py-14 md:py-16">
        <div className="container-page relative grid items-start gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5">
            <div className="navy-panel p-6 md:p-7">
              <p className="relative label-caps text-gold-soft">Capabilities</p>
              <h2 className="relative display-title mt-3 text-[clamp(1.6rem,3vw,2.15rem)] text-white">
                Build stronger financial foundations.
              </h2>
              <p className="relative mt-4 text-sm leading-relaxed text-white/70">
                Make informed capital and growth decisions with structured
                financial advisory across restructuring, funding, modelling and
                expansion.
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <CapabilityList items={financialCapabilities} />
          </Reveal>
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
