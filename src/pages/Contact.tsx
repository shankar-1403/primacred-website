import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { ContactForm } from '@/components/ui/ContactForm'
import { seo } from '@/data/seo'

export default function Contact() {
  return (
    <PageEnter>
      <SEO {...seo.contact} />
      <PageHero
        eyebrow="Contact"
        titleLines={["Let's Talk About", 'What Comes Next.']}
        subtitle="Every business challenge starts with a conversation."
        compact
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80"
      />
      <section id="content" className="page-section py-14 md:py-16">
        <div className="container-page relative grid items-start gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5">
            <div className="navy-panel p-6 md:p-7">
              <p className="relative label-caps text-gold-soft">Conversation</p>
              <p className="relative mt-4 text-sm leading-relaxed text-white/75 md:text-base">
                Whether you are evaluating a growth opportunity, restructuring
                your financial position, strengthening risk management or
                preparing for uncertainty, PRIMACRED can help you approach the
                decision with greater clarity.
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </PageEnter>
  )
}
