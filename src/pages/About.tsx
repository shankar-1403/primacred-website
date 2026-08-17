import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { CTASection } from '@/components/sections/CTA'
import { seo } from '@/data/seo'

export default function About() {
  return (
    <PageEnter>
      <SEO {...seo.about} />
      <PageHero
        eyebrow="About"
        titleLines={['A Different Perspective', 'on Advisory.']}
        subtitle="Financial strength. Risk intelligence. Strategic clarity."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
      />
      <section id="content" className="page-section py-14 md:py-16">
        <div className="container-page relative grid items-stretch gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5">
            <div className="navy-panel h-full p-6 md:p-7">
              <p className="label-caps text-gold-soft">Firm</p>
              <p className="text-quote mt-4 text-xl text-white md:text-2xl">
                PRIMACRED is a strategic advisory and risk consulting firm focused
                on finance, risk, underwriting, insurance risk and business growth.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            <Reveal>
              <article className="h-full rounded-xl border border-gold/25 bg-gradient-to-br from-[#faf6ef] to-white p-5">
                <p className="label-caps text-gold-dim">Vision</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  To become a trusted advisory and risk consulting partner for
                  businesses seeking confident, resilient and financially stronger
                  growth.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.05}>
              <article className="h-full rounded-xl border border-navy-900/15 bg-gradient-to-br from-[#eef2f8] to-white p-5">
                <p className="label-caps text-navy-800">Mission</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  To deliver practical financial solutions, strategic advisory and
                  comprehensive risk consulting that enable organisations to
                  identify opportunities, manage uncertainty and build sustainable
                  businesses.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.1} className="sm:col-span-2">
              <article className="rounded-xl border border-gold-dim/25 bg-gradient-to-br from-[#f3ebe0] to-white p-5">
                <p className="label-caps text-gold-dim">Philosophy</p>
                <p className="display-title mt-3 text-xl text-navy-900 md:text-2xl">
                  Better Decisions Begin With Better Understanding.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
