import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { ServiceGrid } from '@/components/ui/ServiceCard'
import { CTASection } from '@/components/sections/CTA'
import { services } from '@/data/services'
import { seo } from '@/data/seo'

export default function ServicesPage() {
  return (
    <PageEnter>
      <SEO {...seo.services} />
      <PageHero
        eyebrow="Services"
        titleLines={['Our Advisory Platform']}
        subtitle="Integrated expertise for complex business requirements."
        image="/images/pages/services.webp"
      />
      <section id="content" className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f8fa_0%,#eef1f5_48%,#faf6ef_100%)] before:pointer-events-none before:absolute before:-left-20 before:top-0 before:size-64 before:rounded-full before:bg-gold/14 before:blur-[64px] before:content-[''] after:pointer-events-none after:absolute after:-right-16 after:bottom-0 after:size-72 after:rounded-full after:bg-navy-900/8 after:blur-[64px] after:content-[''] py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative">
          <Reveal>
            <p className="max-w-2xl text-sm leading-relaxed text-stone-600 md:text-base">
              Financial performance, operational resilience and risk management
              are closely connected. PRIMACRED advises across these dimensions
              as one platform.
            </p>
          </Reveal>
          <Reveal className="mt-8">
            <ServiceGrid items={services} />
          </Reveal>
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
