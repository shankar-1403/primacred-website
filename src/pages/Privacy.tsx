import { PageEnter } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { CTASection } from '@/components/sections/CTA'
import { seo } from '@/data/seo'

function LegalSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-semibold text-navy-900">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-stone-600">{children}</div>
    </section>
  )
}

export default function Privacy() {
  return (
    <PageEnter>
      <SEO {...seo.privacy} />
      <PageHero eyebrow="Legal" titleLines={['Privacy Policy']} compact />
      <section
        id="content"
        className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f8fa_0%,#eef1f5_48%,#faf6ef_100%)] before:pointer-events-none before:absolute before:-left-20 before:top-0 before:size-64 before:rounded-full before:bg-gold/14 before:blur-[64px] before:content-[''] after:pointer-events-none after:absolute after:-right-16 after:bottom-0 after:size-72 after:rounded-full after:bg-navy-900/8 after:blur-[64px] after:content-[''] py-14 md:py-16"
      >
        <div className='relative mx-auto w-full px-4 sm:px-5 md:px-8 lg:px-12 max-w-[1320px]'>
          <div className="space-y-8 rounded-2xl border border-navy-900/10 bg-white p-6 shadow-soft md:p-8 lg:px-12">
            <div className="space-y-3 border-b border-line-light pb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dim">
                Effective Date: 19 August 2026
              </p>
              <p className="text-sm leading-relaxed text-stone-600">
                PrimaCred (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is
                committed to protecting the information you provide through our website,{' '}
                <a
                  href="https://primacred.in/"
                  className="font-medium text-navy-900 underline decoration-gold/40 underline-offset-2 hover:decoration-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://primacred.in/
                </a>
                .
              </p>
            </div>

            <LegalSection title="1. Information We Collect">
              <p>
                When you contact us or submit an enquiry through our Website, we may collect
                information such as:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Name</li>
                <li>Company name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Business requirements or enquiry details</li>
              </ul>
              <p>
                We may also collect basic technical information such as browser type, device
                information, IP address, and Website usage data.
              </p>
            </LegalSection>

            <LegalSection title="2. How We Use Your Information">
              <p>We use the information collected to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Respond to your enquiries</li>
                <li>Understand your business requirements</li>
                <li>Communicate with you</li>
                <li>Provide information about our services</li>
                <li>Improve our Website and services</li>
                <li>Maintain Website security</li>
              </ul>
            </LegalSection>

            <LegalSection title="3. Information Sharing">
              <p>
                PrimaCred does not sell, rent, trade, or share your personal information with
                third parties for commercial or marketing purposes.
              </p>
              <p>
                Information provided to us is used solely for legitimate PrimaCred business
                purposes and to respond to your requests.
              </p>
              <p>
                We may disclose information only when required by applicable law, regulation,
                court order, or a lawful request from a government or regulatory authority.
              </p>
            </LegalSection>

            <LegalSection title="4. Data Security">
              <p>
                We take reasonable measures to protect your information from unauthorised
                access, misuse, alteration, or disclosure.
              </p>
              <p>
                However, no method of transmitting or storing information online can be
                guaranteed to be completely secure.
              </p>
            </LegalSection>

            <LegalSection title="5. Cookies">
              <p>
                Our Website may use cookies or similar technologies to improve Website
                functionality and understand Website usage.
              </p>
              <p>
                You may manage or disable cookies through your browser settings. Disabling
                cookies may affect certain Website functionality.
              </p>
            </LegalSection>

            <LegalSection title="6. Data Retention">
              <p>
                We retain personal information only for as long as reasonably necessary to
                fulfil the purpose for which it was collected or to meet applicable legal and
                business requirements.
              </p>
            </LegalSection>

            <LegalSection title="7. Your Privacy Rights">
              <p>
                You may contact us to request access to, correction of, or deletion of your
                personal information, subject to applicable laws and requirements.
              </p>
            </LegalSection>

            <LegalSection title="8. Changes to This Privacy Policy">
              <p>
                PrimaCred may update this Privacy Policy from time to time. Any changes will
                be posted on this page with the updated effective date.
              </p>
            </LegalSection>

            <LegalSection title="9. Contact Us">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy
                or your personal information, please contact us through the details provided
                below.
              </p>
              <div className="rounded-xl border border-line-light bg-cream/50 p-4 text-sm text-stone-600">
                <p className="font-semibold text-navy-900">PrimaCred</p>
                <p className="mt-2">
                  Website:{' '}
                  <a
                    href="https://primacred.in/"
                    className="font-medium text-navy-900 underline decoration-gold/40 underline-offset-2 hover:decoration-gold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://primacred.in/
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:info@primacred.in"
                    className="font-medium text-navy-900 underline decoration-gold/40 underline-offset-2 hover:decoration-gold"
                  >
                    info@primacred.in
                  </a>
                </p>
                <p>Phone: +91 22 3512 0060</p>
              </div>
            </LegalSection>

            <p className="border-t border-line-light pt-6 text-xs text-stone-500">
              Last Updated: 19 August 2026
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
