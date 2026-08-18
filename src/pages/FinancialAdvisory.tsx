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
        image="/images/pages/financial.png"
      />
      <section id="content" className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f8fa_0%,#eef1f5_48%,#faf6ef_100%)] before:pointer-events-none before:absolute before:-left-20 before:top-0 before:size-64 before:rounded-full before:bg-gold/14 before:blur-[64px] before:content-[''] after:pointer-events-none after:absolute after:-right-16 after:bottom-0 after:size-72 after:rounded-full after:bg-navy-900/8 after:blur-[64px] after:content-[''] py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative grid items-start gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5">
            <div className="relative isolate overflow-hidden rounded-2xl bg-navy-900 shadow-[0_16px_48px_rgba(15,33,64,0.18)] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(212,188,150,0.14)_0%,transparent_55%)] before:content-[''] p-6 md:p-7">
              <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">Capabilities</p>
              <h2 className="relative font-sans font-semibold leading-tight tracking-[-0.035em] mt-3 text-[clamp(1.6rem,3vw,2.15rem)] text-white">
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
