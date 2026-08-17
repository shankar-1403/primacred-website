import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  FileCheck,
  Shield,
  TrendingUp,
} from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { AtmosphericImage } from '@/components/ui/AtmosphericImage'
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

const sectionImage =
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80'

export function AdvisoryIntro() {
  return (
    <section
      className="relative overflow-hidden bg-white py-12 md:py-14"
      id="content"
    >
      <div className="container-page grid items-stretch gap-4 lg:grid-cols-2 lg:gap-5">
          {/* Left — service cards */}
          <div className="order-2 grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 lg:order-1">
            {services.map((service, index) => {
              const Icon = icons[service.id] ?? TrendingUp
              const theme =
                cardThemes[service.id] ?? cardThemes['financial-advisory']

              return (
                <Reveal
                  key={service.id}
                  className="h-full"
                  delay={0.05 + index * 0.04}
                >
                  <Link
                    to={service.href}
                    className={cn(
                      'group flex h-full min-h-[148px] flex-col rounded-xl border p-4 shadow-soft transition-all duration-300 sm:min-h-[168px] sm:p-5',
                      theme.card,
                      theme.hover,
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className={cn(
                          'flex size-10 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105',
                          theme.icon,
                        )}
                      >
                        <Icon className="size-4" strokeWidth={1.75} />
                      </span>
                      <span
                        className={cn(
                          'stat-number text-xl leading-none',
                          theme.number,
                        )}
                      >
                        {service.number}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-1 flex-col">
                      <h3 className="text-sm font-semibold leading-snug text-navy-900 sm:text-[0.9375rem]">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-stone-600 sm:text-sm">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>

          {/* Right — image with intro overlay */}
          <Reveal
            className="relative order-1 lg:order-2"
            delay={0.08}
          >
            <div className="relative isolate min-h-[300px] overflow-hidden rounded-2xl border border-line-light shadow-soft sm:min-h-[340px] lg:min-h-[420px]">
              <AtmosphericImage
                src={sectionImage}
                alt="Financial strategy and business advisory environment"
                className="absolute inset-0 size-full object-cover"
                fetchPriority="high"
              />
              <div
                className="hero-carousel-overlay absolute inset-0"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-gold-soft to-transparent"
                aria-hidden
              />

              <div className="relative flex size-full min-h-[300px] flex-col justify-end p-6 sm:min-h-[340px] sm:p-7 lg:min-h-[420px]">
                <p className="label-caps text-gold-soft">Advisory</p>
                <h2 className="display-title mt-2 max-w-sm text-balance text-[clamp(1.65rem,3vw,2.15rem)] text-white">
                  Advisory that moves business forward.
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75 sm:text-[0.9375rem]">
                  Clarity for complex decisions. Confidence for the road ahead.
                  As businesses expand, financial structures evolve and risks
                  become interconnected.
                </p>
                <Link
                  to={routes.services}
                  className="group mt-5 inline-flex w-fit items-center gap-1.5 rounded-lg bg-gold/15 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gold-soft transition-colors hover:bg-gold/25 hover:text-white"
                >
                  All services
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </div>
          </Reveal>
      </div>
    </section>
  )
}
