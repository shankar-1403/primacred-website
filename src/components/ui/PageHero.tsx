import { cn } from '@/lib/cn'
import { SplitHeadline } from './SplitHeadline'
import { Button } from './Button'
import { AtmosphericImage } from './AtmosphericImage'

type PageHeroProps = {
  eyebrow?: string
  titleLines: string[]
  subtitle?: string
  image?: string
  compact?: boolean
  cta?: { label: string; to: string }
}

export function PageHero({
  eyebrow,
  titleLines,
  subtitle,
  image,
  compact = false,
  cta,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden pt-16 md:pt-[4.5rem]',
        compact ? 'min-h-[42svh]' : 'min-h-[56svh]',
      )}
    >
      {image ? (
        <AtmosphericImage
          src={image}
          alt=""
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
        />
      ) : (
        <div className="absolute inset-0 bg-navy-900" />
      )}
      <div className="hero-carousel-overlay absolute inset-0" />
      <div className="hero-carousel-grid pointer-events-none absolute inset-0 opacity-25" />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 size-80 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />

      <div
        className={cn(
          'container-page relative z-10 flex flex-col justify-end',
          compact ? 'py-12 md:py-16' : 'py-16 md:py-24',
        )}
      >
        <div className="max-w-3xl">
          {eyebrow ? (
            <span className="label-caps text-gold-soft">{eyebrow}</span>
          ) : null}
          <SplitHeadline
            lines={titleLines}
            className="mt-4 max-w-2xl text-[clamp(1.85rem,4.5vw,3.25rem)] text-white"
          />
          {subtitle ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              {subtitle}
            </p>
          ) : null}
          {cta ? (
            <div className="mt-8">
              <Button
                to={cta.to}
                variant="gold"
                arrow
              >
                {cta.label}
              </Button>
            </div>
          ) : null}
          <a href="#content" className="sr-only">
            Skip to content
          </a>
        </div>
      </div>
    </section>
  )
}
