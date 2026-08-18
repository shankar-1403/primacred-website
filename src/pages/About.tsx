import { Compass, Target } from 'lucide-react'
import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { AtmosphericImage } from '@/components/ui/AtmosphericImage'
import { SEO } from '@/components/ui/SEO'
import { CTASection } from '@/components/sections/CTA'
import { seo } from '@/data/seo'

const firmImage = '/images/pages/about-firm.png'

export default function About() {
  return (
    <PageEnter>
      <SEO {...seo.about} />
      <PageHero
        eyebrow="About"
        titleLines={['A Different Perspective', 'on Advisory.']}
        subtitle="Financial strength. Risk intelligence. Strategic clarity."
        image="/images/pages/about.png"
      />
      <section id="content" className="bg-white py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-12 md:grid-rows-2">
            {/* Firm — tall left cell */}
            <Reveal className="md:col-span-4 md:row-span-2">
              <div className="relative isolate flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl p-6 shadow-[0_16px_48px_rgba(15,33,64,0.18)] md:min-h-full md:p-8">
                <AtmosphericImage
                  src={firmImage}
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                />
                <div
                  className="bg-[linear-gradient(to_right,rgba(7,20,40,0.94)_0%,rgba(7,20,40,0.82)_38%,rgba(15,33,64,0.65)_68%,rgba(15,33,64,0.5)_100%),linear-gradient(to_top,rgba(7,20,40,0.45)_0%,transparent_45%)] absolute inset-0"
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
                <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">Firm</p>
                <p className="font-serif italic font-normal leading-[1.45] relative mt-4 text-xl text-white md:text-2xl">
                  PRIMACRED is a strategic advisory and risk consulting firm
                  focused on finance, risk, underwriting, insurance risk and
                  business growth.
                </p>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal className="md:col-span-4 md:col-start-5">
              <article className="relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-[#faf6ef] via-white to-[#f3ebe0] p-5 shadow-soft md:min-h-[220px] md:p-6">
                <div
                  className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold via-gold-soft to-transparent"
                  aria-hidden
                />
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gold text-white shadow-[0_4px_12px_rgba(184,149,106,0.35)]">
                    <Compass className="size-4" strokeWidth={1.75} />
                  </span>
                  <span className="font-sans font-bold tabular-nums tracking-[-0.04em] text-2xl leading-none text-gold/35">
                    01
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] mt-4 text-gold-dim">Vision</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-900/80 sm:text-[0.9375rem]">
                  To become a trusted advisory and risk consulting partner for
                  businesses seeking confident, resilient and financially
                  stronger growth.
                </p>
              </article>
            </Reveal>

            {/* Mission */}
            <Reveal delay={0.05} className="md:col-span-4">
              <article className="relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-2xl bg-navy-900 p-5 shadow-[0_16px_48px_rgba(15,33,64,0.18)] md:min-h-[220px] md:p-6">
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(212,188,150,0.16)_0%,transparent_55%)]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-gold-soft to-transparent"
                  aria-hidden
                />
                <div className="relative flex items-start justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gold/15 text-gold-soft">
                    <Target className="size-4" strokeWidth={1.75} />
                  </span>
                  <span className="font-sans font-bold tabular-nums tracking-[-0.04em] text-2xl leading-none text-white/20">
                    02
                  </span>
                </div>
                <p className="relative text-xs font-semibold uppercase tracking-[0.16em] mt-4 text-gold-soft">Mission</p>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white/75 sm:text-[0.9375rem]">
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
              className="md:col-span-8 md:col-start-5 md:row-start-2"
            >
              <article className="relative isolate flex h-full min-h-[160px] flex-col justify-center overflow-hidden rounded-2xl border border-gold-dim/25 bg-gradient-to-br from-[#f3ebe0] to-white p-5 shadow-soft md:min-h-full md:p-7">
                <AtmosphericImage
                  src="/images/pages/about.png"
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.88)_36%,rgba(255,255,255,0.68)_62%,rgba(255,255,255,0.82)_100%)]"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(243,235,224,0.38)_0%,transparent_45%)]"
                  aria-hidden
                />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dim">Philosophy</p>
                  <p className="font-sans font-semibold leading-tight tracking-[-0.035em] mt-3 max-w-3xl text-balance text-xl text-navy-900 md:text-[clamp(1.35rem,2.5vw,2rem)]">
                  Better Decisions Begin With Better Understanding.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
