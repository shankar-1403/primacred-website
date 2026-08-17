import { PageEnter } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { seo } from '@/data/seo'
import { routes } from '@/data/site'

export default function NotFound() {
  return (
    <PageEnter>
      <SEO {...seo.notFound} />
      <PageHero
        eyebrow="404"
        titleLines={['This page is not available.']}
        subtitle="The address may be incorrect, or the page may have been moved."
        compact
        cta={{ label: 'Return home', to: routes.home }}
      />
    </PageEnter>
  )
}
