import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'

type AnimatedCounterProps = {
  value: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function AnimatedCounter({
  value,
  duration = 1400,
  className,
  prefix = '',
  suffix = '',
}: AnimatedCounterProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (reduce) return

    const node = ref.current
    if (!node) return

    let frame = 0
    let start: number | null = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const tick = (now: number) => {
          if (start === null) start = now
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(eased * value))
          if (progress < 1) {
            frame = requestAnimationFrame(tick)
          }
        }

        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [duration, reduce, value])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {reduce ? value : display}
      {suffix}
    </span>
  )
}
