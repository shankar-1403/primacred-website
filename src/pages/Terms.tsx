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

export default function Terms() {
  return (
    <PageEnter>
      <SEO {...seo.terms} />
      <PageHero eyebrow="Legal" titleLines={['Terms & Conditions']} compact />
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
                Welcome to the Primacred website,{' '}
                <a
                  href="https://primacred.in/"
                  className="font-medium text-navy-900 underline decoration-gold/40 underline-offset-2 hover:decoration-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://primacred.in/
                </a>
                . By accessing or using this Website, you agree to comply with and be bound by
                the following Terms &amp; Conditions. If you do not agree with these terms,
                please do not use the Website.
              </p>
            </div>

            <LegalSection title="1. About Primacred">
              <p>
                Primacred provides corporate advisory, financial consulting, and related business
                advisory services. The information available on this Website is provided for
                general informational purposes and does not constitute a guarantee of any
                financial, commercial, investment, or business outcome.
              </p>
            </LegalSection>

            <LegalSection title="2. Use of the Website">
              <p>You agree to use this Website only for lawful purposes.</p>
              <p>You must not:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Use the Website for any unlawful or unauthorised purpose</li>
                <li>Attempt to gain unauthorised access to the Website or its systems</li>
                <li>Copy, reproduce, modify, or distribute Website content without permission</li>
                <li>Interfere with the operation, security, or functionality of the Website</li>
              </ul>
            </LegalSection>

            <LegalSection title="3. Information and Content">
              <p>
                We make reasonable efforts to ensure that the information provided on the Website
                is accurate and up to date. However, Primacred does not guarantee that all
                information is complete, accurate, current, or error-free.
              </p>
              <p>
                Website content may be changed, updated, or removed at any time without prior
                notice.
              </p>
            </LegalSection>

            <LegalSection title="4. No Guarantee of Services or Outcomes">
              <p>
                Any information regarding financial solutions, advisory services, funding,
                business opportunities, or other services on the Website is provided for general
                information.
              </p>
              <p>
                Submission of an enquiry or request does not guarantee approval, financing,
                funding, investment, or any particular business outcome.
              </p>
              <p>
                Any service or financial facility is subject to applicable eligibility
                requirements, documentation, assessment, approval, and the terms of the relevant
                service provider or financial institution.
              </p>
            </LegalSection>

            <LegalSection title="5. Intellectual Property">
              <p>
                All content available on the Website, including text, graphics, logos, designs,
                images, trademarks, and other materials, is owned by or licensed to Primacred
                unless otherwise stated.
              </p>
              <p>
                You may not reproduce, copy, modify, distribute, publish, or use such content for
                commercial purposes without prior written permission from Primacred.
              </p>
            </LegalSection>

            <LegalSection title="6. User Information">
              <p>
                When you submit information through the Website, you confirm that the information
                provided by you is accurate and that you have the right to provide such
                information.
              </p>
              <p>
                Primacred will handle personal information in accordance with its Privacy Policy.
              </p>
            </LegalSection>

            <LegalSection title="7. Website Availability">
              <p>
                We aim to keep the Website available and functioning properly. However, we do not
                guarantee uninterrupted, secure, or error-free access to the Website.
              </p>
              <p>
                We may suspend, modify, or discontinue any part of the Website without prior
                notice.
              </p>
            </LegalSection>

            <LegalSection title="8. Limitation of Liability">
              <p>
                To the maximum extent permitted by applicable law, Primacred shall not be liable
                for any direct, indirect, incidental, consequential, or other loss arising from
                the use of, or reliance on, information available through the Website.
              </p>
              <p>
                Users are responsible for independently evaluating information and obtaining
                appropriate professional advice where required.
              </p>
            </LegalSection>

            <LegalSection title="9. Indemnification">
              <p>
                You agree to indemnify and hold Primacred, its directors, employees,
                representatives, and affiliates harmless from claims, losses, damages, or
                expenses arising from your misuse of the Website or violation of these Terms
                &amp; Conditions.
              </p>
            </LegalSection>

            <LegalSection title="10. Changes to These Terms">
              <p>
                Primacred may update or modify these Terms &amp; Conditions from time to time.
                Updated terms will be posted on this page with the revised effective date.
              </p>
              <p>
                Your continued use of the Website after any changes constitutes acceptance of the
                updated Terms &amp; Conditions.
              </p>
            </LegalSection>

            <LegalSection title="11. Governing Law">
              <p>
                These Terms &amp; Conditions shall be governed by and interpreted in accordance
                with the laws of India.
              </p>
              <p>
                Any disputes arising in connection with the Website or these Terms &amp;
                Conditions shall be subject to the applicable jurisdiction of the courts in
                India.
              </p>
            </LegalSection>

            <LegalSection title="12. Contact Us">
              <p>
                If you have any questions regarding these Terms &amp; Conditions, please contact
                us through the details provided below.
              </p>
              <div className="rounded-xl border border-line-light bg-cream/50 p-4 text-sm text-stone-600">
                <p className="font-semibold text-navy-900">Primacred</p>
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
