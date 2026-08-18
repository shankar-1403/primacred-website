import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import { routes } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { AtmosphericImage } from '@/components/ui/AtmosphericImage'

const ctaImage = '/images/sections/cta.png'
const ctaVideo = '/videos/cta-city.mp4'

export function CTASection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden py-16 md:py-20 lg:py-24">
      <AtmosphericImage
        src={ctaImage}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      {!reduceMotion ? (
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={ctaImage}
          aria-hidden
        >
          <source src={ctaVideo} type="video/mp4" />
        </video>
      ) : null}
      <div className="bg-[linear-gradient(to_right,rgba(7,20,40,0.94)_0%,rgba(7,20,40,0.82)_38%,rgba(15,33,64,0.65)_68%,rgba(15,33,64,0.5)_100%),linear-gradient(to_top,rgba(7,20,40,0.45)_0%,transparent_45%)] absolute inset-0" aria-hidden />
      <div
        className="bg-[linear-gradient(to_right,rgba(212,188,150,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,188,150,0.08)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none absolute inset-0 opacity-25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 size-80 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-gold-soft to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative z-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">Next step</p>
            <h2 className="font-sans font-semibold leading-tight tracking-[-0.035em] mt-3 text-balance text-[clamp(1.85rem,4vw,2.75rem)] text-white">
              The next decision matters.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
              Let&apos;s build a stronger business, together.
            </p>
            <Link
              to={routes.contact}
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(184,149,106,0.35)] transition-all hover:bg-gold-dim hover:shadow-[0_10px_28px_rgba(184,149,106,0.45)]"
            >
              Start a Conversation
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
