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
        image="/images/pages/insurance.webp"
      />
      <section id="content" className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f8fa_0%,#eef1f5_48%,#faf6ef_100%)] before:pointer-events-none before:absolute before:-left-20 before:top-0 before:size-64 before:rounded-full before:bg-gold/14 before:blur-[64px] before:content-[''] after:pointer-events-none after:absolute after:-right-16 after:bottom-0 after:size-72 after:rounded-full after:bg-navy-900/8 after:blur-[64px] after:content-[''] py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative grid items-start gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5">
            <div className="relative isolate overflow-hidden rounded-2xl bg-navy-900 shadow-[0_16px_48px_rgba(15,33,64,0.18)] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(212,188,150,0.14)_0%,transparent_55%)] before:content-[''] p-6 md:p-7">
              <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">Capabilities</p>
              <h2 className="relative font-sans font-semibold leading-tight tracking-[-0.035em] mt-3 text-[clamp(1.6rem,3vw,2.15rem)] text-white">
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
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">Risk transfer</p>
            <h2 className="font-sans font-semibold leading-tight tracking-[-0.035em] mt-3 text-[clamp(1.6rem,3vw,2.35rem)] text-white">
              From exposure to resilience.
            </h2>
          </Reveal>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {riskTransferSteps.map((step, index) => (
              <li
                key={step}
                className="rounded-xl border border-white/10 bg-white/[0.06] p-5"
              >
                <p className="font-sans font-bold tabular-nums tracking-[-0.04em] text-sm text-gold/60">
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
