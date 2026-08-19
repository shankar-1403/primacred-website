import { PageEnter, Reveal } from '@/components/ui/Reveal'
import { PageHero } from '@/components/ui/PageHero'
import { SEO } from '@/components/ui/SEO'
import { AtmosphericImage } from '@/components/ui/AtmosphericImage'
import { CTASection } from '@/components/sections/CTA'
import { projects } from '@/data/projects'
import { seo } from '@/data/seo'

export default function Experience() {
  return (
    <PageEnter>
      <SEO {...seo.experience} />
      <PageHero
        eyebrow="Experience"
        titleLines={['Experience Across', 'Complex Business Environments.']}
        subtitle="Advisory shaped by real-world complexity."
        image="/images/pages/experience.webp"
      />
      <section id="content" className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f7f8fa_0%,#eef1f5_48%,#faf6ef_100%)] before:pointer-events-none before:absolute before:-left-20 before:top-0 before:size-64 before:rounded-full before:bg-gold/14 before:blur-[64px] before:content-[''] after:pointer-events-none after:absolute after:-right-16 after:bottom-0 after:size-72 after:rounded-full after:bg-navy-900/8 after:blur-[64px] after:content-[''] py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 relative">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dim">Selected projects</p>
            <p className="mt-3 max-w-xl text-sm text-stone-600">
              Hover to view industry and location. Project descriptions and
              figures are not published here.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.04}>
                <article className="group relative isolate overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-900">
                  <AtmosphericImage
                    src={project.image}
                    alt=""
                    className="aspect-[4/3] w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h2 className="font-sans font-semibold leading-tight tracking-[-0.035em] text-lg text-white md:text-xl">
                      {project.name}
                    </h2>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">{project.industry}</p>
                    {project.location ? (
                      <p className="mt-1 text-sm text-white/70">{project.location}</p>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </PageEnter>
  )
}
