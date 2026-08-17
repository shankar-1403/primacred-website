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

const themes: Record<string, { card: string; icon: string }> = {
  'financial-advisory': {
    card: 'border-gold/25 bg-gradient-to-br from-[#faf6ef] to-white hover:border-gold/45',
    icon: 'bg-gold text-white',
  },
  'risk-consulting': {
    card: 'border-navy-900/15 bg-gradient-to-br from-[#eef2f8] to-white hover:border-navy-900/25',
    icon: 'bg-navy-900 text-gold-soft',
  },
  'underwriting-advisory': {
    card: 'border-navy-700/20 bg-gradient-to-br from-[#e8edf5] to-white hover:border-navy-700/35',
    icon: 'bg-navy-700 text-white',
  },
  'insurance-risk-advisory': {
    card: 'border-gold-dim/25 bg-gradient-to-br from-[#f3ebe0] to-white hover:border-gold-dim/40',
    icon: 'bg-gold-dim text-white',
  },
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.id] ?? TrendingUp
  const theme = themes[service.id] ?? themes['financial-advisory']

  return (
    <Link
      to={service.href}
      className={cn(
        'group flex h-full gap-4 rounded-xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card md:p-6',
        theme.card,
      )}
    >
      <span
        className={cn(
          'flex size-11 shrink-0 items-center justify-center rounded-xl',
          theme.icon,
        )}
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="stat-number text-xs text-gold/50">{service.number}</span>
            <h3 className="mt-1 text-lg font-semibold text-navy-900">{service.title}</h3>
          </div>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line-light bg-white text-navy-900 transition-colors group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-white">
            <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{service.description}</p>
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
