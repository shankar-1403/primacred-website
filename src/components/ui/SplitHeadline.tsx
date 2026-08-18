import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/cn'

type SplitHeadlineProps = {
  lines: string[]
  as?: 'h1' | 'h2' | 'p'
  className?: string
  lineClassName?: string
  delay?: number
}

export function SplitHeadline({
  lines,
  as: Tag = 'h1',
  className,
  lineClassName,
  delay = 0.1,
}: SplitHeadlineProps) {
  const reduce = useReducedMotion()

  return (
    <Tag className={cn('font-sans font-semibold leading-tight tracking-[-0.035em]', className)}>
      {lines.map((line, index) => (
        <span key={line} className="block overflow-hidden">
          {reduce ? (
            <span className={cn('block', lineClassName)}>{line}</span>
          ) : (
            <motion.span
              className={cn('block', lineClassName)}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: delay + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.span>
          )}
        </span>
      ))}
    </Tag>
  )
}
