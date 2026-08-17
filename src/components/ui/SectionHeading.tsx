import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <span className="mb-4 inline-flex rounded-full border border-line-light bg-white px-3 py-1 text-xs font-semibold tracking-wide text-gold-dim">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="display-title text-[clamp(1.875rem,3.5vw,2.75rem)] text-balance text-navy-900">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-stone-600 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
