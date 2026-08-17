import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { routes } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(212,188,150,0.12)_0%,transparent_50%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-white/5 blur-3xl" />

      <div className="container-page relative">
        <Reveal>
          <p className="label-caps text-gold-soft">Next step</p>
          <h2 className="display-title mt-3 max-w-2xl text-[clamp(1.85rem,4vw,2.75rem)] text-white">
            The next decision matters.
          </h2>
          <p className="mt-4 max-w-md text-base text-white/70 md:text-lg">
            Let&apos;s build a stronger business, together.
          </p>
          <Link
            to={routes.contact}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-gold-dim"
          >
            Start a Conversation
            <ArrowRight className="size-4" strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
