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
      <section id="content" className="page-section py-14 md:py-16">
        <div className="container-page relative max-w-3xl space-y-5 rounded-2xl border border-navy-900/10 bg-white p-6 text-sm leading-relaxed text-stone-600 shadow-soft md:p-8">
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
