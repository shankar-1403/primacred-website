import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, FileCheck, Shield, TrendingUp } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Reveal } from '@/components/ui/Reveal'
import { services } from '@/data/services'
import { routes } from '@/data/site'
import { cn } from '@/lib/cn'

const ROTATE_MS = 5000

const icons: Record<string, typeof TrendingUp> = {
  'financial-advisory': TrendingUp,
  'risk-consulting': Shield,
  'underwriting-advisory': FileCheck,
  'insurance-risk-advisory': BarChart3,
}

export function Ecosystem() {
  const [active, setActive] = useState(services[0].id)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const current = services.find((s) => s.id === active) ?? services[0]
  const Icon = icons[current.id] ?? TrendingUp

  const advance = useCallback(() => {
    setActive((prev) => {
      const index = services.findIndex((s) => s.id === prev)
      const next = (index + 1) % services.length
      return services[next].id
    })
  }, [])

  const selectTab = useCallback((id: string) => {
    setActive(id)
  }, [])

  useEffect(() => {
    if (reduce || paused) return

    timerRef.current = setInterval(advance, ROTATE_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [advance, paused, reduce, active])

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f8fa_0%,#eef1f5_48%,#faf6ef_100%)] before:pointer-events-none before:absolute before:-left-20 before:top-0 before:size-64 before:rounded-full before:bg-gold/14 before:blur-[64px] before:content-[''] after:pointer-events-none after:absolute after:-right-16 after:bottom-0 after:size-72 after:rounded-full after:bg-navy-900/8 after:blur-[64px] after:content-[''] py-14 md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,33,64,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,33,64,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black_20%,transparent_100%)] opacity-40" />

      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dim">Integrated advisory</span>
          <h2 className="font-sans font-semibold leading-tight tracking-[-0.035em] mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] text-navy-900">
            One business.
            <br />
            Multiple dimensions of risk.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-600 md:text-base">
            Explore how PRIMACRED connects financial, risk and protection
            decisions across one integrated advisory platform.
          </p>
          <p className="mt-6 border-l-2 border-gold pl-4 text-sm leading-relaxed text-stone-600">
            Financial performance, operational resilience and risk management
            are closely connected.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div
            className="overflow-hidden rounded-3xl border border-line-light bg-cream shadow-card"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setPaused(false)
              }
            }}
          >
            <div
              className="grid grid-cols-2 gap-2 border-b border-line-light bg-white p-3 md:gap-3 md:p-4"
              role="tablist"
              aria-label="Advisory dimensions"
            >
              {services.map((service) => (
                <TabButton
                  key={service.id}
                  service={service}
                  active={active === service.id}
                  paused={paused}
                  reduce={Boolean(reduce)}
                  onSelect={selectTab}
                />
              ))}
            </div>

            <div className="relative min-h-[360px]" role="tabpanel" aria-live="polite">
              <div className="pointer-events-none absolute -right-16 top-8 size-64 rounded-full bg-gold/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 size-56 rounded-full bg-navy-900/5 blur-3xl" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col p-6 md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-sans font-bold tabular-nums tracking-[-0.04em] text-6xl text-navy-900/10 md:text-7xl">
                      {current.number}
                    </span>
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-soft">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gold-dim">
                    PRIMACRED Advisory
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-navy-900 md:text-3xl">
                    {current.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-stone-600">
                    {current.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to={current.href}
                      className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                    >
                      Explore {current.title}
                      <ArrowRight className="size-4" strokeWidth={2} />
                    </Link>
                    <Link
                      to={routes.services}
                      className="inline-flex items-center gap-2 rounded-xl border border-line-light bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-cream"
                    >
                      Full platform
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function TabButton({
  service,
  active,
  paused,
  reduce,
  onSelect,
}: {
  service: (typeof services)[number]
  active: boolean
  paused: boolean
  reduce: boolean
  onSelect: (id: string) => void
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={() => onSelect(service.id)}
      className={cn(
        'relative flex items-center gap-3 overflow-hidden rounded-xl border px-3 py-3 text-left transition-colors duration-200 md:px-4 md:py-3.5',
        active
          ? 'border-navy-900 bg-navy-900 text-white shadow-soft'
          : 'border-line-light bg-cream/50 text-stone-600 hover:border-gold/40 hover:bg-white',
      )}
    >
      {active && !reduce && !paused ? (
        <motion.span
          className="absolute inset-0 origin-left bg-white/10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: ROTATE_MS / 1000, ease: 'linear' }}
          key={`${service.id}-progress`}
          aria-hidden
        />
      ) : null}
      <span
        className={cn(
          'relative flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold',
          active ? 'bg-white/15 text-gold-soft' : 'bg-white text-gold-dim',
        )}
      >
        {service.number}
      </span>
      <span className="relative text-xs font-semibold leading-snug md:text-sm">
        {service.title}
      </span>
    </button>
  )
}
