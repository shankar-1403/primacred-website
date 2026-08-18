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
    image: '/images/methodology/discover.png',
    imageAlt: 'Discovery workshop and client consultation',
  },
  {
    layout: 'md:col-span-4 md:col-start-6',
    image: '/images/methodology/assess.png',
    imageAlt: 'Financial assessment and data review',
  },
  {
    layout: 'md:col-span-3 md:col-start-10',
    image: '/images/methodology/analyse.png',
    imageAlt: 'Analysis of market and risk exposures',
  },
  {
    layout: 'md:col-span-7 md:col-start-6 md:row-start-2',
    image: '/images/methodology/advise.png',
    imageAlt: 'Strategic advisory session',
  },
  {
    layout: 'md:col-span-5 md:row-start-3',
    image: '/images/methodology/implement.png',
    imageAlt: 'Implementation and structured engagement',
  },
  {
    layout: 'md:col-span-7 md:col-start-6 md:row-start-3',
    image: '/images/methodology/monitor.png',
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
      <div className="bg-[linear-gradient(to_right,rgba(7,20,40,0.94)_0%,rgba(7,20,40,0.82)_38%,rgba(15,33,64,0.65)_68%,rgba(15,33,64,0.5)_100%),linear-gradient(to_top,rgba(7,20,40,0.45)_0%,transparent_45%)] absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-gold-soft to-transparent"
        aria-hidden
      />
      <div className="relative p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="font-sans font-bold tabular-nums tracking-[-0.04em] text-3xl text-gold/55 md:text-4xl">
            {number}
          </span>
          {number === '01' ? (
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">Start</span>
          ) : null}
        </div>
        <h2 className="font-sans font-semibold leading-tight tracking-[-0.035em] mt-3 text-xl text-white md:text-[1.35rem]">
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
        image="/images/pages/methodology.png"
      />
      <section id="content" className="bg-white py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 grid gap-3 sm:gap-4 md:grid-cols-12 md:grid-rows-3">
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
