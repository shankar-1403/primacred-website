import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { navLinks, routes } from '@/data/site'
import { cn } from '@/lib/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'bg-white/95 shadow-nav backdrop-blur-xl'
          : 'bg-white/80 backdrop-blur-lg',
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-[1320px] items-center justify-between gap-2 px-4 sm:h-16 sm:gap-4 sm:px-5 md:h-[4.5rem] md:px-8 lg:px-12">
        <Logo
          onClick={closeMenu}
          className="ml-1 md:ml-0 [&_svg]:h-7 sm:[&_svg]:h-9 md:[&_svg]:h-11"
        />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className="relative rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-cream hover:text-navy-900 aria-[current=page]:font-semibold aria-[current=page]:text-navy-900"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="shrink-0 flex items-center gap-2">
          <Link
            to={routes.contact}
            className="hidden items-center gap-2 rounded-xl bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-soft lg:inline-flex"
          >
            Start a Conversation
            <ArrowRight className="size-4" strokeWidth={2} />
          </Link>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg bg-cream text-navy-900 sm:size-10 sm:rounded-xl lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X strokeWidth={2} className="size-5" /> : <Menu strokeWidth={2} className="size-5" />}
          </button>
        </div>
      </div>

      <div className="h-0.5 w-full shrink-0 bg-[linear-gradient(90deg,rgb(184_149_106)_0%,rgb(184_149_106_/_0.55)_45%,transparent_100%)]" aria-hidden />

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            className="overflow-hidden border-t border-line-light bg-white lg:hidden"
            aria-label="Mobile"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
              opacity: { duration: 0.35, ease: 'easeInOut' },
            }}
          >
            <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-1 px-3 py-4 sm:px-5 md:px-8 lg:px-12">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-stone-600 transition-colors hover:bg-cream hover:text-navy-900"
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to={routes.contact}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-3 text-sm font-semibold text-white"
                onClick={closeMenu}
              >
                Start a Conversation
                <ArrowRight className="size-4" strokeWidth={2} />
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
