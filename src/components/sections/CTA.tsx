import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { routes } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { AtmosphericImage } from '@/components/ui/AtmosphericImage'

const ctaImage =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80'

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-20 lg:py-24">
      <AtmosphericImage
        src={ctaImage}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="cta-banner-overlay absolute inset-0" aria-hidden />
      <div
        className="hero-carousel-grid pointer-events-none absolute inset-0 opacity-25"
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

      <div className="container-page relative z-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="label-caps text-gold-soft">Next step</p>
            <h2 className="display-title mt-3 text-balance text-[clamp(1.85rem,4vw,2.75rem)] text-white">
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
