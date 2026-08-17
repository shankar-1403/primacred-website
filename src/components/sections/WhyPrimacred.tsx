import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { principles } from '@/data/methodology'
import { routes } from '@/data/site'
import { cn } from '@/lib/cn'

const themes = [
  {
    card: 'border-gold/25 bg-gradient-to-br from-[#faf6ef] to-white hover:border-gold/45',
    number: 'text-gold/50',
  },
  {
    card: 'border-navy-900/15 bg-gradient-to-br from-[#eef2f8] to-white hover:border-navy-900/25',
    number: 'text-navy-900/25',
  },
  {
    card: 'border-navy-700/20 bg-gradient-to-br from-[#e8edf5] to-white hover:border-navy-700/35',
    number: 'text-navy-700/30',
  },
  {
    card: 'border-gold-dim/25 bg-gradient-to-br from-[#f3ebe0] to-white hover:border-gold-dim/40',
    number: 'text-gold-dim/45',
  },
  {
    card: 'border-gold/20 bg-gradient-to-br from-[#f7f3ec] to-white hover:border-gold/40',
    number: 'text-gold/40',
  },
] as const

export function WhyPrimacredSection() {
  return (
    <section className="page-section py-14 md:py-16">
      <div className="container-page relative">
        <Reveal>
          <p className="label-caps text-gold-dim">Why PRIMACRED</p>
          <h2 className="display-title mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] text-navy-900">
            Advisory with perspective.
          </h2>
          <p className="mt-3 max-w-lg text-sm text-stone-600 md:text-base">
            Because the right answer starts with the right question.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => {
            const theme = themes[index % themes.length]
            return (
              <Reveal key={principle.number} delay={index * 0.05}>
                <Link
                  to={routes.whyPrimacred}
                  className={cn(
                    'group block h-full rounded-xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card md:p-6',
                    theme.card,
                  )}
                >
                  <span className={cn('stat-number text-2xl', theme.number)}>
                    {principle.number}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-navy-900">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {principle.copy}
                  </p>
                  <ArrowRight
                    className="mt-4 size-4 text-gold opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                    strokeWidth={2}
                  />
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
