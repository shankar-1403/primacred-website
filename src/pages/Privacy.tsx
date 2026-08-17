import { Link } from 'react-router-dom'
import { PageEnter } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { CTASection } from '@/components/sections/CTA'
import { seo } from '@/data/seo'
import { SITE_NAME } from '@/data/site'

export default function Privacy() {
  return (
    <PageEnter>
      <SEO {...seo.privacy} />
      <PageHero
        eyebrow="Legal"
        titleLines={['Privacy Policy']}
        compact
      />
      <section id="content" className="page-section py-14 md:py-16">
        <div className="container-page relative max-w-3xl space-y-5 rounded-2xl border border-navy-900/10 bg-white p-6 text-sm leading-relaxed text-stone-600 shadow-soft md:p-8">
          <p>
            This page describes, in general terms, how {SITE_NAME} treats
            information submitted through this website. It is not a substitute
            for a jurisdiction-specific legal policy.
          </p>
          <p>
            Enquiry details entered on the contact form are used only to
            respond to the request. Do not submit confidential financial,
            medical or personal data through this form.
          </p>
          <p>
            The site may collect standard technical logs such as browser type
            and pages visited, used to operate and improve the website.
          </p>
          <p>
            Questions about this notice may be sent through the{' '}
            <Link to="/contact" className="font-medium text-navy-900 underline">
              contact page
            </Link>
            .
          </p>
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
