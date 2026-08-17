import { ArrowUpRight } from 'lucide-react'
import type { Industry } from '@/data/industries'
import { AtmosphericImage } from './AtmosphericImage'

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <article className="industry-tile group relative isolate flex min-h-[260px] overflow-hidden bg-navy-900 text-white md:min-h-[320px]">
      <AtmosphericImage
        src={industry.image}
        alt=""
        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-navy-950/70 transition-colors duration-500 group-hover:bg-navy-950/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
      <div className="relative z-10 mt-auto flex w-full items-end justify-between gap-4 p-6 md:p-7">
        <h3 className="display-title max-w-[16ch] text-xl md:text-2xl">
          {industry.name}
        </h3>
        <span
          className="mb-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-gold-soft backdrop-blur-sm transition-colors group-hover:bg-gold group-hover:text-white"
          aria-hidden
        >
          <ArrowUpRight className="size-4" strokeWidth={1.5} />
        </span>
      </div>
    </article>
  )
}
