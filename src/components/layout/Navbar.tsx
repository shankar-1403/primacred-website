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
      <div className="container-page flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
        <Logo onClick={closeMenu} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className="nav-link rounded-lg px-3 py-2 hover:bg-cream"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to={routes.contact}
            className="hidden items-center gap-2 rounded-xl bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-soft lg:inline-flex"
          >
            Start a Conversation
            <ArrowRight className="size-4" strokeWidth={2} />
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl bg-cream text-navy-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X strokeWidth={2} className="size-5" /> : <Menu strokeWidth={2} className="size-5" />}
          </button>
        </div>
      </div>

      <div className="header-glow-line" aria-hidden />

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            className="border-t border-line-light bg-white lg:hidden"
            aria-label="Mobile"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-stone-600 hover:bg-cream hover:text-navy-900"
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to={routes.contact}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-3 text-sm font-semibold text-white"
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
