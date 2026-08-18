import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  BarChart3,
  FileCheck,
  Shield,
  TrendingUp,
} from 'lucide-react'
import type { Service } from '@/data/services'
import { cn } from '@/lib/cn'

const icons: Record<string, typeof TrendingUp> = {
  'financial-advisory': TrendingUp,
  'risk-consulting': Shield,
  'underwriting-advisory': FileCheck,
  'insurance-risk-advisory': BarChart3,
}

const themes: Record<string, { card: string; icon: string; accent: string; glow: string }> = {
  'financial-advisory': {
    card: 'border-gold/20 bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(250,246,239,0.94))] hover:border-gold/40',
    icon: 'bg-gold text-white',
    accent: 'from-gold/80 via-gold-soft/45 to-transparent',
    glow: 'bg-gold/12',
  },
  'risk-consulting': {
    card: 'border-navy-900/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.97),rgba(238,242,248,0.95))] hover:border-navy-900/28',
    icon: 'bg-navy-900 text-gold-soft',
    accent: 'from-navy-900/80 via-navy-800/35 to-transparent',
    glow: 'bg-navy-900/10',
  },
  'underwriting-advisory': {
    card: 'border-navy-700/18 bg-[linear-gradient(145deg,rgba(255,255,255,0.97),rgba(232,237,245,0.95))] hover:border-navy-700/30',
    icon: 'bg-navy-700 text-white',
    accent: 'from-navy-700/80 via-navy-700/35 to-transparent',
    glow: 'bg-navy-700/10',
  },
  'insurance-risk-advisory': {
    card: 'border-gold-dim/22 bg-[linear-gradient(145deg,rgba(255,255,255,0.97),rgba(243,235,224,0.95))] hover:border-gold-dim/38',
    icon: 'bg-gold-dim text-white',
    accent: 'from-gold-dim/80 via-gold-soft/40 to-transparent',
    glow: 'bg-gold-dim/12',
  },
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.id] ?? TrendingUp
  const theme = themes[service.id] ?? themes['financial-advisory']

  return (
    <Link
      to={service.href}
      className={cn(
        'group relative flex h-full overflow-hidden rounded-[1.5rem] border p-5 shadow-[0_10px_30px_rgba(15,33,64,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,33,64,0.12)] md:p-6',
        theme.card,
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-90',
          theme.accent,
        )}
      />
      <div
        className={cn(
          'pointer-events-none absolute -right-10 top-4 size-24 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100',
          theme.glow,
        )}
      />

      <div className="relative flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span
              className={cn(
                'flex size-12 shrink-0 items-center justify-center rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]',
                theme.icon,
              )}
            >
              <Icon className="size-5" strokeWidth={1.75} />
            </span>

            <div className="min-w-0">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-stone-400">
                {service.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold leading-tight text-navy-900 md:text-[1.35rem]">
                {service.title}
              </h3>
            </div>
          </div>

          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/80 text-navy-900 shadow-sm backdrop-blur transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-navy-900/15 group-hover:bg-navy-900 group-hover:text-white">
            <ArrowUpRight className="size-4" strokeWidth={1.75} />
          </span>
        </div>

        <p className="mt-4 max-w-[34rem] text-sm leading-7 text-stone-600 md:text-[0.96rem]">
          {service.description}
        </p>
      </div>
    </Link>
  )
}

export function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}
