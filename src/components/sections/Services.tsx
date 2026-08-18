import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  FileCheck,
  Shield,
  TrendingUp,
} from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { services } from '@/data/services'
import { routes } from '@/data/site'
import { cn } from '@/lib/cn'

const icons: Record<string, typeof TrendingUp> = {
  'financial-advisory': TrendingUp,
  'risk-consulting': Shield,
  'underwriting-advisory': FileCheck,
  'insurance-risk-advisory': BarChart3,
}

const accents: Record<string, string> = {
  'financial-advisory': 'bg-gold text-white',
  'risk-consulting': 'bg-white/15 text-gold-soft',
  'underwriting-advisory': 'bg-navy-700 text-white',
  'insurance-risk-advisory': 'bg-gold/20 text-gold-soft',
}

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-14 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(212,188,150,0.1)_0%,transparent_45%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/2 size-96 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Intro column */}
        <Reveal className="lg:col-span-4 lg:py-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">Platform</p>
          <h2 className="font-sans font-semibold leading-tight tracking-[-0.035em] mt-3 text-balance text-[clamp(1.75rem,3vw,2.5rem)] text-white">
            Our Advisory Platform
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65 md:text-base">
            Integrated expertise for complex business requirements — finance,
            risk, underwriting and protection in one advisory model.
          </p>
          <Link
            to={routes.services}
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-gold/15 px-4 py-2.5 text-sm font-semibold text-gold-soft transition-colors hover:bg-gold/25 hover:text-white"
          >
            View all services
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </Reveal>

        {/* Service rows */}
        <div className="lg:col-span-8">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
            {services.map((service, index) => {
              const Icon = icons[service.id] ?? TrendingUp

              return (
                <Reveal key={service.id} delay={0.05 + index * 0.05}>
                  <Link
                    to={service.href}
                    className={cn(
                      'group flex items-start gap-4 p-5 transition-colors hover:bg-white/[0.06] md:gap-5 md:p-6',
                      index > 0 && 'border-t border-white/10',
                    )}
                  >
                    <span
                      className={cn(
                        'flex size-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105',
                        accents[service.id],
                      )}
                    >
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-sans font-bold tabular-nums tracking-[-0.04em] text-sm text-gold/50">
                          {service.number}
                        </span>
                        <h3 className="text-base font-semibold text-white md:text-lg">
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                        {service.description}
                      </p>
                    </div>

                    <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all group-hover:border-gold/40 group-hover:bg-gold/15 group-hover:text-gold-soft">
                      <ArrowUpRight className="size-4" strokeWidth={1.75} />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
