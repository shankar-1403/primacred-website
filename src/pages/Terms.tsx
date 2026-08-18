import { PageEnter } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { CTASection } from '@/components/sections/CTA'
import { seo } from '@/data/seo'
import { SITE_NAME } from '@/data/site'

export default function Terms() {
  return (
    <PageEnter>
      <SEO {...seo.terms} />
      <PageHero
        eyebrow="Legal"
        titleLines={['Terms & Conditions']}
        compact
      />
      <section id="content" className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f8fa_0%,#eef1f5_48%,#faf6ef_100%)] before:pointer-events-none before:absolute before:-left-20 before:top-0 before:size-64 before:rounded-full before:bg-gold/14 before:blur-[64px] before:content-[''] after:pointer-events-none after:absolute after:-right-16 after:bottom-0 after:size-72 after:rounded-full after:bg-navy-900/8 after:blur-[64px] after:content-[''] py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative max-w-3xl space-y-5 rounded-2xl border border-navy-900/10 bg-white p-6 text-sm leading-relaxed text-stone-600 shadow-soft md:p-8">
          <p>
            This website is provided by {SITE_NAME} for general information
            about its advisory services. Nothing on these pages constitutes
            financial, legal, tax, insurance or investment advice, or an offer
            of services.
          </p>
          <p>
            Content is provided without warranty as to completeness or fitness
            for a particular purpose. Engagements, if any, are governed by
            separate written terms.
          </p>
          <p>
            Insights marked as placeholder are structural examples only and are
            not published research.
          </p>
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
