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
      <div className="bg-[linear-gradient(to_right,rgba(7,20,40,0.58)_0%,rgba(7,20,40,0.46)_42%,rgba(7,20,40,0.18)_70%,rgba(7,20,40,0.08)_100%),linear-gradient(to_top,rgba(7,20,40,0.28)_0%,transparent_40%)] absolute inset-0" />
      <div className="bg-[linear-gradient(to_right,rgba(212,188,150,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,188,150,0.08)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none absolute inset-0 opacity-25" />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 size-80 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />

      <div
        className={cn(
          'mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative z-10 flex flex-col justify-end',
          compact ? 'py-12 md:py-16' : 'py-16 md:py-24',
        )}
      >
        <div className="max-w-3xl">
          {eyebrow ? (
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">{eyebrow}</span>
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
