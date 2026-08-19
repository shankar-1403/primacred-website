import { useState } from 'react'
import { cn } from '@/lib/cn'

type AtmosphericImageProps = {
  src: string
  alt: string
  className?: string
  fetchPriority?: 'high' | 'low' | 'auto'
  width?: number
  height?: number
}

export function AtmosphericImage({
  src,
  alt,
  className,
  fetchPriority,
  width,
  height,
}: AtmosphericImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={cn('bg-paper', className)}
        role="presentation"
        aria-hidden={alt === ''}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn('saturate-[1.02] contrast-[1.01]', className)}
      loading={fetchPriority === 'high' ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={fetchPriority}
      onError={() => setFailed(true)}
    />
  )
}
