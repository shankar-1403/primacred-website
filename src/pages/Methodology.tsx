import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { AtmosphericImage } from '@/components/ui/AtmosphericImage'
import { SEO } from '@/components/ui/SEO'
import { CTASection } from '@/components/sections/CTA'
import { methodologyStages } from '@/data/methodology'
import { seo } from '@/data/seo'
import { cn } from '@/lib/cn'

type StageCardConfig = {
  layout: string
  image: string
  imageAlt: string
}

const stageCards: StageCardConfig[] = [
  {
    layout: 'md:col-span-5 md:row-span-2',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Discovery workshop and client consultation',
  },
  {
    layout: 'md:col-span-4 md:col-start-6',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Financial assessment and data review',
  },
  {
    layout: 'md:col-span-3 md:col-start-10',
    image:
      'https://images.unsplash.com/photo-1464938050520-ef265f458e50?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Analysis of market and risk exposures',
  },
  {
    layout: 'md:col-span-7 md:col-start-6 md:row-start-2',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Strategic advisory session',
  },
  {
    layout: 'md:col-span-5 md:row-start-3',
    image:
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Implementation and structured engagement',
  },
  {
    layout: 'md:col-span-7 md:col-start-6 md:row-start-3',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Long-term monitoring and resilience planning',
  },
]

function StageCard({
  number,
  title,
  copy,
  image,
  imageAlt,
}: {
  number: string
  title: string
  copy: string
  image: string
  imageAlt: string
}) {
  return (
    <article className="relative isolate flex h-full min-h-[260px] flex-col justify-end overflow-hidden rounded-2xl border border-line-light shadow-soft md:min-h-full">
      <AtmosphericImage
        src={image}
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="cta-banner-overlay absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-gold-soft to-transparent"
        aria-hidden
      />
      <div className="relative p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="stat-number text-3xl text-gold/55 md:text-4xl">
            {number}
          </span>
          {number === '01' ? (
            <span className="label-caps text-gold-soft">Start</span>
          ) : null}
        </div>
        <h2 className="display-title mt-3 text-xl text-white md:text-[1.35rem]">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-[0.9375rem]">
          {copy}
        </p>
      </div>
    </article>
  )
}

export default function Methodology() {
  return (
    <PageEnter>
      <SEO {...seo.methodology} />
      <PageHero
        eyebrow="Methodology"
        titleLines={['From Complexity', 'to Clarity.']}
        subtitle="A disciplined six-stage approach to advisory."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80"
      />
      <section id="content" className="bg-white py-14 md:py-16">
        <div className="container-page grid gap-3 sm:gap-4 md:grid-cols-12 md:grid-rows-3">
          {methodologyStages.map((stage, index) => {
            const config = stageCards[index]

            return (
              <Reveal
                key={stage.number}
                className={cn('h-full', config.layout)}
                delay={index * 0.05}
              >
                <StageCard
                  number={stage.number}
                  title={stage.title}
                  copy={stage.copy}
                  image={config.image}
                  imageAlt={config.imageAlt}
                />
              </Reveal>
            )
          })}
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
