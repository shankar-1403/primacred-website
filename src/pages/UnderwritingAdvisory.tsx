import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { ProcessTimeline } from '@/components/ui/ProcessTimeline'
import { CTASection } from '@/components/sections/CTA'
import { underwritingProcess } from '@/data/services'
import { seo } from '@/data/seo'

export default function UnderwritingAdvisory() {
  return (
    <PageEnter>
      <SEO {...seo.underwritingAdvisory} />
      <PageHero
        eyebrow="Underwriting Advisory"
        titleLines={['Better Risk Understanding.', 'Better Underwriting Decisions.']}
        subtitle="Structured analysis for informed underwriting."
        image="/images/pages/underwriting.webp"
      />
      <section id="content" className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f8fa_0%,#eef1f5_48%,#faf6ef_100%)] before:pointer-events-none before:absolute before:-left-20 before:top-0 before:size-64 before:rounded-full before:bg-gold/14 before:blur-[64px] before:content-[''] after:pointer-events-none after:absolute after:-right-16 after:bottom-0 after:size-72 after:rounded-full after:bg-navy-900/8 after:blur-[64px] after:content-[''] py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-2xl bg-navy-900 shadow-[0_16px_48px_rgba(15,33,64,0.18)] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(212,188,150,0.14)_0%,transparent_55%)] before:content-[''] max-w-3xl p-6 md:p-7">
              <p className="relative text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">Process</p>
              <h2 className="relative font-sans font-semibold leading-tight tracking-[-0.035em] mt-3 text-[clamp(1.6rem,3vw,2.15rem)] text-white">
                A structured path from profiling to portfolio review.
              </h2>
            </div>
          </Reveal>
          <Reveal className="mt-6 overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-5 shadow-soft md:p-8">
            <ProcessTimeline steps={underwritingProcess} />
            <ProcessTimeline steps={underwritingProcess} orientation="vertical" />
          </Reveal>
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
