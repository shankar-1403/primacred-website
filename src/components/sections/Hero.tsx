import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SplitHeadline } from '@/components/ui/SplitHeadline'
import { AtmosphericImage } from '@/components/ui/AtmosphericImage'
import { routes } from '@/data/site'

const ROTATE_MS = 6000

const slides = [
  {
    id: 'capital',
    image: '/images/hero/capital.png',
    alt: 'Modern corporate architecture and financial district skyline',
    eyebrow: 'Finance · Risk · Growth',
    caption: 'Advisory for businesses navigating complexity.',
  },
  {
    id: 'infrastructure',
    image: '/images/hero/infrastructure.png',
    alt: 'Large-scale infrastructure and engineering project',
    eyebrow: 'Complex environments',
    caption: 'Experience across infrastructure and engineering.',
  },
  {
    id: 'strategy',
    image: '/images/hero/strategy.png',
    alt: 'Contemporary corporate office and strategic workspace',
    eyebrow: 'Strategic clarity',
    caption: 'Financial strength. Risk intelligence. Strategic clarity.',
  },
  {
    id: 'growth',
    image: '/images/hero/growth.png',
    alt: 'Financial planning and business strategy environment',
    eyebrow: 'Sustainable growth',
    caption: 'Building stronger foundations for the road ahead.',
  },
] as const

export function Hero() {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()
  const slide = slides[index]

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, ROTATE_MS)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section
      className="relative isolate flex min-h-svh flex-col overflow-hidden pt-14 md:pt-[4.5rem]"
      aria-roledescription="carousel"
      aria-label="PRIMACRED advisory banner"
    >
      {/* Background carousel */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="size-full overflow-hidden"
            initial={reduce ? false : { scale: 1.04 }}
            animate={{ scale: reduce ? 1 : 1.1 }}
            transition={
              reduce
                ? { duration: 0 }
                : { duration: 18, ease: 'easeOut' }
            }
          >
            <AtmosphericImage
              src={slide.image}
              alt={slide.alt}
              className="size-full object-cover"
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />
          </motion.div>
          <div className="bg-[linear-gradient(to_right,rgba(7,20,40,0.58)_0%,rgba(7,20,40,0.46)_42%,rgba(7,20,40,0.18)_70%,rgba(7,20,40,0.08)_100%),linear-gradient(to_top,rgba(7,20,40,0.28)_0%,transparent_40%)] absolute inset-0" />
          <div className="bg-[linear-gradient(to_right,rgba(212,188,150,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,188,150,0.08)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none absolute inset-0 opacity-30" />
        </motion.div>
      </AnimatePresence>

      {/* Main content — vertically centred in available space */}
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-5 md:px-8 lg:px-12 relative z-10 flex min-h-0 flex-1 items-center py-4 sm:py-6 md:py-8 lg:py-10">
        <div className="grid w-full items-end gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Copy column */}
          <div className="lg:col-span-7 xl:col-span-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={`eyebrow-${slide.id}`}
                className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
              >
                {slide.eyebrow}
              </motion.p>
            </AnimatePresence>

            <SplitHeadline
              lines={['Strategic Advisory for', 'Businesses That Think Ahead.']}
              className="mt-3 sm:mt-4 text-balance text-[clamp(1.6rem,4.8vw,3.5rem)] text-white"
              delay={0.1}
            />

            {/* Slide caption — visible on mobile/tablet only */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`caption-mobile-${slide.id}`}
                className="mt-3 max-w-xl text-base leading-relaxed text-white/80 lg:hidden"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                {slide.caption}
              </motion.p>
            </AnimatePresence>

            <motion.p
              className="mt-3 hidden sm:block max-w-xl text-sm leading-relaxed text-white/60 md:mt-5 md:text-base"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              PRIMACRED is a strategic advisory and risk consulting firm helping
              businesses navigate financial complexity, manage critical risks and
              build stronger foundations for sustainable growth.
            </motion.p>

            <motion.div
              className="mt-5 sm:mt-6 flex flex-col gap-3 sm:flex-row"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <Button to={routes.services} variant="primary" arrow>
                Explore Our Advisory Services
              </Button>
              <Button
                to={routes.contact}
                variant="secondary"
                className="hidden sm:inline-flex border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                Speak With Our Advisors
              </Button>
            </motion.div>
          </div>

          {/* Slide highlight card — desktop right column */}
          <div className="hidden lg:col-span-5 lg:block xl:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`card-${slide.id}`}
                className="ml-auto max-w-md rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-gold-soft">
                  {slide.eyebrow}
                </p>
                <p className="font-serif italic font-normal leading-[1.45] mt-3 text-xl text-white/90">
                  {slide.caption}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Carousel controls — centered pagination, arrows on edges */}
      <div className="relative z-10 shrink-0 border-t border-white/10 bg-navy-950/20 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-5 md:px-8 lg:px-12 grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4 py-2.5 sm:py-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="flex size-8 sm:size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="size-5" strokeWidth={1.5} />
          </button>

          <div className="flex items-center justify-center gap-3">
            <span className="text-xs font-semibold tabular-nums text-white/40">
              {String(index + 1).padStart(2, '0')}
              <span className="mx-1.5 text-white/20">/</span>
              {String(slides.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
                  aria-current={i === index ? 'true' : undefined}
                  onClick={() => setIndex(i)}
                  className="group relative h-1.5 overflow-hidden rounded-full bg-white/25 transition-all"
                  style={{ width: i === index ? '2.5rem' : '0.375rem' }}
                >
                  {i === index && !reduce ? (
                    <motion.span
                      className="absolute inset-0 origin-left bg-gold"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: ROTATE_MS / 1000, ease: 'linear' }}
                      key={`progress-${index}`}
                    />
                  ) : null}
                  {i === index && reduce ? (
                    <span className="absolute inset-0 bg-gold" />
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="flex size-8 sm:size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ChevronRight className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Service ticker */}
      <div className="relative z-10 shrink-0 border-t border-white/10 bg-navy-950/80 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-5 md:px-8 lg:px-12 grid gap-2 py-2.5 sm:py-3 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/50">
            Integrated advisory platform
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 sm:justify-center">
            {['Financial Advisory', 'Risk Consulting', 'Underwriting', 'Insurance Risk'].map(
              (label) => (
                <Link
                  key={label}
                  to={routes.services}
                  className="text-xs font-medium text-white/70 transition-colors hover:text-gold-soft"
                >
                  {label}
                </Link>
              ),
            )}
          </div>
          <Link
            to={routes.methodology}
            className="hidden items-center gap-1.5 text-xs font-semibold text-gold-soft sm:inline-flex sm:justify-end"
          >
            Our methodology
            <ArrowRight className="size-3.5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}
