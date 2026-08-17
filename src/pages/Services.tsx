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
        image="/images/pages/services.png"
      />
      <section id="content" className="page-section py-14 md:py-16">
        <div className="container-page relative">
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
