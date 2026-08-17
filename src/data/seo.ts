import { defaultDescription, SITE_NAME, SITE_URL } from './site'

export type SeoConfig = {
  title: string
  description: string
  path: string
}

export const seo: Record<string, SeoConfig> = {
  home: {
    title: `${SITE_NAME} | Strategic Advisory, Finance & Risk Consulting`,
    description: defaultDescription,
    path: '/',
  },
  about: {
    title: `About | ${SITE_NAME}`,
    description:
      'PRIMACRED is a strategic advisory and risk consulting firm focused on financial strength, risk intelligence and strategic clarity.',
    path: '/about',
  },
  services: {
    title: `Advisory Platform | ${SITE_NAME}`,
    description:
      'Integrated financial advisory, risk consulting, underwriting advisory and insurance risk advisory for complex business requirements.',
    path: '/services',
  },
  financialAdvisory: {
    title: `Financial Advisory | ${SITE_NAME}`,
    description:
      'Strategic financial advice for businesses navigating change, complexity and growth — from restructuring to project finance and valuation.',
    path: '/financial-advisory',
  },
  riskConsulting: {
    title: `Risk Consulting | ${SITE_NAME}`,
    description:
      'Enterprise, operational, property, liability, supply chain and cyber risk advisory to understand risk before it becomes disruption.',
    path: '/risk-consulting',
  },
  underwritingAdvisory: {
    title: `Underwriting Advisory | ${SITE_NAME}`,
    description:
      'Structured analysis of business risk, exposure and financials to support informed underwriting decisions.',
    path: '/underwriting-advisory',
  },
  insuranceRiskAdvisory: {
    title: `Insurance Risk Advisory | ${SITE_NAME}`,
    description:
      'Insurance programme design, coverage gap analysis and risk transfer strategy aligned with actual business exposure.',
    path: '/insurance-risk-advisory',
  },
  experience: {
    title: `Experience | ${SITE_NAME}`,
    description:
      'Advisory experience across complex business environments including infrastructure, metro systems and power projects.',
    path: '/experience',
  },
  industries: {
    title: `Industries | ${SITE_NAME}`,
    description:
      'Advisory for infrastructure, engineering, renewable energy, manufacturing, FMCG, mining, pharma and other complex business environments.',
    path: '/industries',
  },
  methodology: {
    title: `Methodology | ${SITE_NAME}`,
    description:
      'A disciplined six-stage advisory approach: Discover, Assess, Analyse, Advise, Implement and Monitor.',
    path: '/methodology',
  },
  whyPrimacred: {
    title: `Why PRIMACRED | ${SITE_NAME}`,
    description:
      'Strategic thinking, practical solutions, a risk-first approach, end-to-end advisory and trusted partnership.',
    path: '/why-primacred',
  },
  insights: {
    title: `Insights | ${SITE_NAME}`,
    description:
      'Perspectives on finance, risk, insurance and business resilience to help organisations think ahead.',
    path: '/insights',
  },
  contact: {
    title: `Contact | ${SITE_NAME}`,
    description:
      'Start a conversation with PRIMACRED about financial advisory, risk consulting, underwriting or insurance risk.',
    path: '/contact',
  },
  privacy: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: 'Privacy policy for the PRIMACRED website.',
    path: '/privacy',
  },
  terms: {
    title: `Terms & Conditions | ${SITE_NAME}`,
    description: 'Terms and conditions for use of the PRIMACRED website.',
    path: '/terms',
  },
  notFound: {
    title: `Page not found | ${SITE_NAME}`,
    description: defaultDescription,
    path: '/404',
  },
}

export function canonicalUrl(path: string) {
  return `${SITE_URL}${path === '/' ? '/' : path}`
}
