import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { AtmosphericImage } from '@/components/ui/AtmosphericImage'
import { SEO } from '@/components/ui/SEO'
import { ContactForm } from '@/components/ui/ContactForm'
import { services } from '@/data/services'
import { seo } from '@/data/seo'

const contactImage = '/images/pages/contact.png'

export default function Contact() {
  return (
    <PageEnter>
      <SEO {...seo.contact} />
      <PageHero
        eyebrow="Contact"
        titleLines={["Let's Talk About", 'What Comes Next.']}
        subtitle="Every business challenge starts with a conversation."
        compact
        image="/images/pages/contact.png"
      />
      <section id="content" className="bg-white py-14 md:py-16">
        <div className="container-page grid gap-3 sm:gap-4 lg:grid-cols-12 lg:items-stretch">
          {/* Left — image panel */}
          <Reveal className="h-full lg:col-span-5">
            <div className="relative isolate flex min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl border border-line-light shadow-soft lg:min-h-full">
              <AtmosphericImage
                src={contactImage}
                alt="Modern workspace for advisory conversations"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="cta-banner-overlay absolute inset-0" aria-hidden />
              <div
                className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-gold-soft to-transparent"
                aria-hidden
              />
              <div className="relative p-6 md:p-7">
                <p className="label-caps text-gold-soft">Conversation</p>
                <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-[0.9375rem]">
                  Whether you are evaluating a growth opportunity, restructuring
                  your financial position, strengthening risk management or
                  preparing for uncertainty, PRIMACRED can help you approach the
                  decision with greater clarity.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal className="lg:col-span-7" delay={0.08}>
            <div className="h-full overflow-hidden rounded-2xl border border-line-light bg-white shadow-soft">
              <div className="border-b border-line-light bg-gradient-to-r from-[#faf6ef] to-white px-6 py-5 md:px-8">
                <p className="label-caps text-gold-dim">Enquiry form</p>
                <h2 className="display-title mt-2 text-xl text-navy-900 md:text-2xl">
                  Tell us what you are working through.
                </h2>
                <p className="mt-2 text-sm text-stone-600">
                  We advise across{' '}
                  {services.map((s) => s.title.toLowerCase()).join(', ')}.
                </p>
              </div>
              <div className="p-6 md:p-8">
                <ContactForm embedded />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageEnter>
  )
}
