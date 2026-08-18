import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { AtmosphericImage } from '@/components/ui/AtmosphericImage'
import { principles } from '@/data/methodology'
import { routes } from '@/data/site'

const sectionImage = '/images/sections/why_prima.webp'

export function WhyPrimacredSection() {
  return (
    <section className="border-t border-line-light bg-white py-10 md:py-12">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12">
        <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Image */}
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-line-light shadow-soft">
              <AtmosphericImage
                src={sectionImage}
                alt="Modern corporate workspace representing strategic advisory"
                className="aspect-5/4 w-full object-cover md:aspect-4/5 lg:aspect-auto lg:min-h-100"
              />
            </div>
          </Reveal>

          {/* Content */}
          <div className="lg:col-span-7">
            <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dim">Why PRIMACRED</p>
                <h2 className="font-sans font-semibold leading-tight tracking-[-0.035em] mt-2 text-[clamp(1.45rem,2.6vw,1.85rem)] text-navy-900">
                  Advisory with perspective.
                </h2>
                <p className="mt-2 text-sm text-stone-600">
                  Because the right answer starts with the right question.
                </p>
              </div>
              <Link
                to={routes.whyPrimacred}
                className="group inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy-900 hover:text-gold-dim"
              >
                Learn more
                <ArrowRight
                  className="size-3.5 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </Link>
            </Reveal>

            <ul className="mt-5 grid md:grid-cols-2 md:gap-x-8">
              {principles.map((principle) => (
                <Reveal key={principle.number}>
                  <li className="flex gap-3 border-t border-line-light py-3 md:py-3.5">
                    <span className="font-sans font-bold tabular-nums tracking-[-0.04em] shrink-0 text-sm text-gold/50">
                      {principle.number}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-navy-900">
                        {principle.title}
                      </h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-stone-600">
                        {principle.copy}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
