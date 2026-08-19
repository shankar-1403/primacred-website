import { PageEnter } from '@/components/ui/Reveal'
import { SEO } from '@/components/ui/SEO'
import { Hero } from '@/components/sections/Hero'
import { AdvisoryIntro } from '@/components/sections/AdvisoryIntro'
import { Ecosystem } from '@/components/sections/Ecosystem'
import { ServicesSection } from '@/components/sections/Services'
import { WhyPrimacredSection } from '@/components/sections/WhyPrimacred'
import { CTASection } from '@/components/sections/CTA'
import { seo } from '@/data/seo'

export default function Home() {
  return (
    <PageEnter>
      <SEO {...seo.home} />
      <Hero />
      <AdvisoryIntro />
      <Ecosystem />
      <ServicesSection />
      <WhyPrimacredSection />
      {/* <InsightsTeaser /> */}
      <CTASection />
    </PageEnter>
  )
}
