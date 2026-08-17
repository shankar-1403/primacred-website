import { routes } from './site'

export type Service = {
  id: string
  number: string
  title: string
  description: string
  href: string
}

export const services: Service[] = [
  {
    id: 'financial-advisory',
    number: '01',
    title: 'Financial Advisory',
    description:
      'Build stronger financial foundations and make informed capital and growth decisions.',
    href: routes.financialAdvisory,
  },
  {
    id: 'risk-consulting',
    number: '02',
    title: 'Risk Consulting',
    description:
      'Identify, assess and manage risks affecting business performance and continuity.',
    href: routes.riskConsulting,
  },
  {
    id: 'underwriting-advisory',
    number: '03',
    title: 'Underwriting Advisory',
    description:
      'Strengthen underwriting decisions through structured analysis of financial and operational exposures.',
    href: routes.underwritingAdvisory,
  },
  {
    id: 'insurance-risk-advisory',
    number: '04',
    title: 'Insurance Risk Advisory',
    description:
      'Develop risk transfer and protection strategies aligned with business requirements.',
    href: routes.insuranceRiskAdvisory,
  },
]

export const financialCapabilities = [
  'Financial Restructuring',
  'Debt Restructuring',
  'Working Capital Advisory',
  'Project Finance',
  'Structured Finance',
  'Business Expansion Advisory',
  'Fundraising & Investor Readiness',
  'Financial Modelling',
  'Business Valuation',
  'Virtual CFO Advisory',
  'Government Incentives & MSME Advisory',
] as const

export const riskDomains = [
  {
    title: 'Enterprise Risk',
    capabilities: [
      'Enterprise Risk Assessment',
      'Risk Identification & Prioritisation',
      'Risk Register Development',
      'Risk Heat Maps',
      'Risk Appetite Framework',
      'Strategic Risk Assessment',
      'Risk Governance Framework',
      'Board Risk Reporting',
    ],
  },
  {
    title: 'Operational Risk',
    capabilities: [
      'Process Risk Reviews',
      'Internal Control Assessment',
      'Operational Risk Analysis',
      'SOP Evaluation',
      'Fraud Risk Assessment',
      'Vendor Risk Assessment',
      'Business Process Reviews',
      'Control Enhancement',
    ],
  },
  {
    title: 'Property & Asset Risk',
    capabilities: [
      'Fire Risk Assessment',
      'Asset Protection Review',
      'Machinery Risk Assessment',
      'Business Interruption Analysis',
      'Facility Risk Evaluation',
      'Natural Hazard Exposure Assessment',
      'Property Risk Improvement',
    ],
  },
  {
    title: 'Liability & Compliance Risk',
    capabilities: [
      'Public Liability Assessment',
      'Product Liability Review',
      'Professional Liability Assessment',
      'Employer Liability Risk',
      'Regulatory Compliance Review',
      'Governance Framework Assessment',
    ],
  },
  {
    title: 'Supply Chain & Business Continuity',
    capabilities: [
      'Supply Chain Risk Assessment',
      'Critical Vendor Evaluation',
      'Business Continuity Planning',
      'Crisis Management Planning',
      'Operational Resilience',
      'Third-Party Risk Assessment',
    ],
  },
  {
    title: 'Cyber & Digital Risk',
    capabilities: [
      'Cyber Risk Assessment',
      'Information Security Review',
      'Digital Risk Evaluation',
      'Technology Risk Assessment',
      'Third-Party Technology Risk',
      'Incident Response Readiness',
      'Business Technology Risk',
    ],
  },
] as const

export const underwritingProcess = [
  'Business Risk Profiling',
  'Exposure Assessment',
  'Financial Analysis',
  'Proposal Evaluation',
  'Documentation Review',
  'Loss History Assessment',
  'Portfolio Risk Review',
] as const

export const insuranceCapabilities = [
  'Insurance Program Design',
  'Coverage Gap Analysis',
  'Policy Portfolio Review',
  'Risk Financing Strategy',
  'Claims Advisory',
  'Insurance Due Diligence',
  'Risk Transfer Strategy',
] as const

export const riskTransferSteps = [
  'Business Exposure',
  'Risk Assessment',
  'Protection Gap',
  'Risk Financing',
  'Risk Transfer',
  'Resilience',
] as const
