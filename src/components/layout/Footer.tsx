import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { footerNav, routes } from '@/data/site'
import { services } from '@/data/services'
import { SITE_NAME } from '@/data/site'

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="lg:col-span-1">
          <Logo to={routes.home} variant="large" showTagline onDark />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
            Strategic advisory and risk consulting for businesses navigating
            financial complexity, critical risk and sustainable growth.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-gold-soft">
            Navigate
          </p>
          <ul className="mt-5 space-y-2.5">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-white/65 transition-colors hover:text-gold-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-gold-soft">
            Services
          </p>
          <ul className="mt-5 space-y-2.5">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  to={service.href}
                  className="text-sm text-white/65 transition-colors hover:text-gold-soft"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-gold-soft">
            Contact
          </p>
          <div className='flex gap-2 items-start mt-5'>
            <div>
              <MapPin className='w-4 h-4 text-gold-soft mt-1' />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/65">Lodha Supremus, 520, Off Mahakali Caves Rd,
              Chakala Industrial Area (MIDC), Andheri East,
              Mumbai, Maharashtra 400093</p>
          </div>
          <div className='flex gap-2 items-start mt-5'>
            <div>
              <Phone className='w-4 h-4 text-gold-soft mt-1' />
            </div>
            <a href='tel:+912235120060' className="max-w-xs text-sm leading-relaxed text-white/65">+91 22 3512 0060</a>
          </div>
          <div className='flex gap-2 items-start mt-5'>
            <div>
              <Mail className='w-4 h-4 text-gold-soft mt-1' />
            </div>
            <a href='info@pcred.in' className="max-w-xs text-sm leading-relaxed text-white/65">info@pcred.in</a>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 lg:px-12 flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {SITE_NAME}. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link to={routes.privacy} className="hover:text-gold-soft">
            Privacy Policy
          </Link>
          <Link to={routes.terms} className="hover:text-gold-soft">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
