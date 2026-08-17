import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gold'
type ButtonSize = 'md' | 'lg'

type CommonProps = {
  children: ReactNode
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  arrow?: boolean
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    to?: undefined
  }

type ButtonAsLink = CommonProps & {
  to: string
  type?: never
  disabled?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-navy-900 text-white hover:bg-navy-800 shadow-soft hover:shadow-card',
  secondary:
    'bg-white text-navy-900 border border-line-light hover:border-navy-900/20 hover:bg-cream',
  ghost:
    'bg-transparent text-navy-900 border border-line-light hover:bg-cream',
  gold: 'bg-gold text-white border border-gold hover:bg-gold-dim',
}

const sizes: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-6 py-3 text-sm rounded-xl',
}

const base =
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none w-full sm:w-auto'

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  arrow = false,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(base, variants[variant], sizes[size], className)
  const content = (
    <>
      {children}
      {arrow ? <ArrowRight className="size-4 shrink-0" strokeWidth={2} aria-hidden /> : null}
    </>
  )

  if ('to' in props && props.to) {
    const { to, disabled, ...rest } = props
    if (disabled) {
      return (
        <span className={cn(classes, 'pointer-events-none opacity-50')} {...rest}>
          {content}
        </span>
      )
    }
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
