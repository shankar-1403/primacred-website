export const SITE_NAME = 'PRIMACRED'
export const SITE_TAGLINE = 'FINANCE • RISK • GROWTH'
export const SITE_URL = 'https://primacred.com'

export const defaultDescription =
  'PRIMACRED provides strategic financial advisory, risk consulting, underwriting advisory and insurance risk solutions for businesses navigating complexity and growth.'

export const routes = {
  home: '/',
  about: '/about',
  services: '/services',
  financialAdvisory: '/financial-advisory',
  riskConsulting: '/risk-consulting',
  underwritingAdvisory: '/underwriting-advisory',
  insuranceRiskAdvisory: '/insurance-risk-advisory',
  experience: '/experience',
  industries: '/industries',
  methodology: '/methodology',
  whyPrimacred: '/why-primacred',
  insights: '/insights',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
} as const

export const navLinks = [
  { label: 'Home', href: routes.home },
  { label: 'About', href: routes.about },
  { label: 'Services', href: routes.services },
  { label: 'Experience', href: routes.experience },
  { label: 'Industries', href: routes.industries },
  { label: 'Methodology', href: routes.methodology },
  { label: 'Insights', href: routes.insights },
] as const

export const footerNav = navLinks
