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
        image="/images/pages/underwriting.png"
      />
      <section id="content" className="page-section py-14 md:py-16">
        <div className="container-page relative">
          <Reveal>
            <div className="navy-panel max-w-3xl p-6 md:p-7">
              <p className="relative label-caps text-gold-soft">Process</p>
              <h2 className="relative display-title mt-3 text-[clamp(1.6rem,3vw,2.15rem)] text-white">
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
