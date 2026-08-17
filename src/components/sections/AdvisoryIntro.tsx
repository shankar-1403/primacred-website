import { Link } from 'react-router-dom'
import {
  ArrowRight,
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

const cardThemes: Record<
  string,
  { card: string; icon: string; number: string; hover: string }
> = {
  'financial-advisory': {
    card: 'border-gold/25 bg-gradient-to-br from-[#faf6ef] to-white',
    icon: 'bg-gold text-white shadow-[0_4px_12px_rgba(184,149,106,0.35)]',
    number: 'text-gold/50',
    hover: 'hover:border-gold/45 hover:shadow-[0_8px_24px_rgba(184,149,106,0.15)]',
  },
  'risk-consulting': {
    card: 'border-navy-900/15 bg-gradient-to-br from-[#eef2f8] to-white',
    icon: 'bg-navy-900 text-gold-soft shadow-[0_4px_12px_rgba(15,33,64,0.2)]',
    number: 'text-navy-900/25',
    hover: 'hover:border-navy-900/25 hover:shadow-[0_8px_24px_rgba(15,33,64,0.1)]',
  },
  'underwriting-advisory': {
    card: 'border-navy-700/20 bg-gradient-to-br from-[#e8edf5] to-white',
    icon: 'bg-navy-700 text-white shadow-[0_4px_12px_rgba(36,69,112,0.25)]',
    number: 'text-navy-700/30',
    hover: 'hover:border-navy-700/35 hover:shadow-[0_8px_24px_rgba(36,69,112,0.12)]',
  },
  'insurance-risk-advisory': {
    card: 'border-gold-dim/25 bg-gradient-to-br from-[#f3ebe0] to-white',
    icon: 'bg-gradient-to-br from-gold-dim to-gold text-white shadow-[0_4px_12px_rgba(154,125,85,0.3)]',
    number: 'text-gold-dim/45',
    hover: 'hover:border-gold-dim/40 hover:shadow-[0_8px_24px_rgba(154,125,85,0.14)]',
  },
}

export function AdvisoryIntro() {
  return (
    <section className="relative overflow-hidden py-12 md:py-14" id="content">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#f7f8fa_0%,#eef1f5_45%,#faf6ef_100%)]" />
      <div className="pointer-events-none absolute -left-20 top-0 size-64 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 size-72 rounded-full bg-navy-900/10 blur-3xl" />

      <div className="container-page relative grid items-stretch gap-5 lg:grid-cols-[minmax(0,0.95fr)_1.05fr] lg:gap-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-6 shadow-[0_16px_48px_rgba(15,33,64,0.18)] md:p-7">
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(212,188,150,0.14)_0%,transparent_55%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-gold/20 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-gold-soft to-transparent"
              aria-hidden
            />

            <p className="relative label-caps text-gold-soft">Advisory</p>
            <h2 className="relative display-title mt-2 text-balance text-[clamp(1.75rem,3.2vw,2.35rem)] text-white">
              Advisory that moves business forward.
            </h2>
            <p className="relative mt-3 max-w-md text-sm leading-relaxed text-white/70">
              Clarity for complex decisions. Confidence for the road ahead. As
              businesses expand, financial structures evolve and risks become
              interconnected.
            </p>
            <Link
              to={routes.services}
              className="group relative mt-5 inline-flex items-center gap-1.5 rounded-lg bg-gold/15 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gold-soft transition-colors hover:bg-gold/25 hover:text-white"
            >
              All services
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.id] ?? TrendingUp
            const theme = cardThemes[service.id] ?? cardThemes['financial-advisory']

            return (
              <Reveal key={service.id} delay={0.05 + index * 0.04}>
                <Link
                  to={service.href}
                  className={cn(
                    'group flex h-full gap-3 rounded-xl border p-4 transition-all duration-300',
                    theme.card,
                    theme.hover,
                  )}
                >
                  <span
                    className={cn(
                      'flex size-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105',
                      theme.icon,
                    )}
                  >
                    <Icon className="size-4" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold leading-snug text-navy-900">
                        {service.title}
                      </h3>
                      <span
                        className={cn(
                          'stat-number shrink-0 text-lg leading-none',
                          theme.number,
                        )}
                      >
                        {service.number}
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-stone-600">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
