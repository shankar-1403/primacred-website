import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { CapabilityList } from '@/components/ui/CapabilityList'
import { CTASection } from '@/components/sections/CTA'
import { insuranceCapabilities, riskTransferSteps } from '@/data/services'
import { seo } from '@/data/seo'

export default function InsuranceRiskAdvisory() {
  return (
    <PageEnter>
      <SEO {...seo.insuranceRiskAdvisory} />
      <PageHero
        eyebrow="Insurance Risk Advisory"
        titleLines={['Insurance Should Protect', 'the Business.', 'Not Simply Complete the Checklist.']}
        subtitle="Designing protection around actual business risk."
        image="https://images.unsplash.com/photo-1464938050520-ef265f458e50?auto=format&fit=crop&w=2000&q=80"
      />
      <section id="content" className="page-section py-14 md:py-16">
        <div className="container-page relative grid items-start gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5">
            <div className="navy-panel p-6 md:p-7">
              <p className="relative label-caps text-gold-soft">Capabilities</p>
              <h2 className="relative display-title mt-3 text-[clamp(1.6rem,3vw,2.15rem)] text-white">
                Protection aligned with the exposure.
              </h2>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <CapabilityList items={insuranceCapabilities} />
          </Reveal>
        </div>
      </section>
      <section className="relative overflow-hidden bg-navy-900 py-14 md:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(212,188,150,0.12)_0%,transparent_50%)]"
          aria-hidden
        />
        <div className="container-page relative">
          <Reveal>
            <p className="label-caps text-gold-soft">Risk transfer</p>
            <h2 className="display-title mt-3 text-[clamp(1.6rem,3vw,2.35rem)] text-white">
              From exposure to resilience.
            </h2>
          </Reveal>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {riskTransferSteps.map((step, index) => (
              <li
                key={step}
                className="rounded-xl border border-white/10 bg-white/[0.06] p-5"
              >
                <p className="stat-number text-sm text-gold/60">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-3 text-base font-semibold text-white">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
