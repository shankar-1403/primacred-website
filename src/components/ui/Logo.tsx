import { useId } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '@/data/site'
import { cn } from '@/lib/cn'

type LogoProps = {
  className?: string
  variant?: 'default' | 'large'
  showTagline?: boolean
  to?: string
  onClick?: () => void
  onDark?: boolean
}

export function Logo({
  className,
  variant = 'default',
  showTagline = false,
  to = routes.home,
  onClick,
  onDark = false,
}: LogoProps) {
  const gradId = useId()
  const wordmark = onDark ? '#ffffff' : '#0F2140'

  const mark = (
    <svg
      viewBox="0 0 320 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-auto shrink-0', variant === 'large' ? 'h-11 md:h-12' : 'h-10 md:h-11')}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4BC96" />
          <stop offset="45%" stopColor="#B8956A" />
          <stop offset="100%" stopColor="#9A7D55" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="33"
        fill={wordmark}
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontSize="24"
        fontWeight="600"
        letterSpacing="0.32em"
      >
        PRIMA
      </text>
      <rect x="118" y="4" width="40" height="40" stroke={`url(#${gradId})`} strokeWidth="1.75" fill="none" />
      <path
        d="M128 30 L138 14 L148 30"
        stroke={`url(#${gradId})`}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text
        x="168"
        y="33"
        fill={wordmark}
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontSize="24"
        fontWeight="600"
        letterSpacing="0.32em"
      >
        CRED
      </text>
    </svg>
  )

  const content = (
    <span className={cn('inline-flex flex-col gap-1.5', className)}>
      {mark}
      {showTagline ? (
        <span
          className={cn(
            'text-[0.6rem] font-semibold tracking-[0.22em]',
            onDark ? 'text-gold-soft' : 'text-stone-500',
          )}
        >
          FINANCE · RISK · GROWTH
        </span>
      ) : null}
    </span>
  )

  if (to) {
    return (
      <Link
        to={to}
        className="inline-flex shrink-0 transition-opacity hover:opacity-80"
        onClick={onClick}
        aria-label="PRIMACRED — Finance, Risk, Growth"
      >
        {content}
      </Link>
    )
  }

  return <span className="inline-flex shrink-0">{content}</span>
}
