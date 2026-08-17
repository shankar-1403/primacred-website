import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { AtmosphericImage } from '@/components/ui/AtmosphericImage'
import { SEO } from '@/components/ui/SEO'
import { CTASection } from '@/components/sections/CTA'
import { seo } from '@/data/seo'

const firmImage =
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80'

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
      <section id="content" className="bg-white py-14 md:py-16">
        <div className="container-page">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-12 md:grid-rows-2">
            {/* Firm — tall left cell */}
            <Reveal className="md:col-span-5 md:row-span-2">
              <div className="relative isolate flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl p-6 shadow-[0_16px_48px_rgba(15,33,64,0.18)] md:min-h-full md:p-8">
                <AtmosphericImage
                  src={firmImage}
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                />
                <div
                  className="cta-banner-overlay absolute inset-0"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(212,188,150,0.12)_0%,transparent_55%)]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-gold-soft to-transparent"
                  aria-hidden
                />
                <p className="relative label-caps text-gold-soft">Firm</p>
                <p className="text-quote relative mt-4 text-xl text-white md:text-2xl">
                  PRIMACRED is a strategic advisory and risk consulting firm
                  focused on finance, risk, underwriting, insurance risk and
                  business growth.
                </p>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal className="md:col-span-4 md:col-start-6">
              <article className="flex h-full min-h-[180px] flex-col rounded-2xl border border-gold/25 bg-gradient-to-br from-[#faf6ef] to-white p-5 shadow-soft md:min-h-[200px] md:p-6">
                <p className="label-caps text-gold-dim">Vision</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 sm:text-[0.9375rem]">
                  To become a trusted advisory and risk consulting partner for
                  businesses seeking confident, resilient and financially
                  stronger growth.
                </p>
              </article>
            </Reveal>

            {/* Mission */}
            <Reveal delay={0.05} className="md:col-span-3">
              <article className="flex h-full min-h-[180px] flex-col rounded-2xl border border-navy-900/15 bg-gradient-to-br from-[#eef2f8] to-white p-5 shadow-soft md:min-h-[200px] md:p-6">
                <p className="label-caps text-navy-800">Mission</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 sm:text-[0.9375rem]">
                  To deliver practical financial solutions, strategic advisory
                  and comprehensive risk consulting that enable organisations to
                  identify opportunities, manage uncertainty and build
                  sustainable businesses.
                </p>
              </article>
            </Reveal>

            {/* Philosophy — wide bottom cell */}
            <Reveal
              delay={0.1}
              className="md:col-span-7 md:col-start-6 md:row-start-2"
            >
              <article className="flex h-full min-h-[160px] flex-col justify-center rounded-2xl border border-gold-dim/25 bg-gradient-to-br from-[#f3ebe0] to-white p-5 shadow-soft md:min-h-full md:p-7">
                <p className="label-caps text-gold-dim">Philosophy</p>
                <p className="display-title mt-3 max-w-3xl text-balance text-xl text-navy-900 md:text-[clamp(1.35rem,2.5vw,2rem)]">
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
