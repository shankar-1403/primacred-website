export type InsightCategory = 'Finance' | 'Risk' | 'Insurance' | 'Business Resilience'

export type Insight = {
  slug: string
  category: InsightCategory
  title: string
  description: string
  placeholder: true
}

export const insightCategories: InsightCategory[] = [
  'Finance',
  'Risk',
  'Insurance',
  'Business Resilience',
]

export const insights: Insight[] = [
  {
    slug: 'capital-structure-in-periods-of-expansion',
    category: 'Finance',
    title: 'Capital Structure in Periods of Expansion',
    description:
      'A perspective on aligning funding choices with operating reality as businesses scale.',
    placeholder: true,
  },
  {
    slug: 'working-capital-under-operating-pressure',
    category: 'Finance',
    title: 'Working Capital Under Operating Pressure',
    description:
      'How liquidity, cycle times and credit terms shape the room a business has to manoeuvre.',
    placeholder: true,
  },
  {
    slug: 'risk-as-a-board-conversation',
    category: 'Risk',
    title: 'Risk as a Board Conversation',
    description:
      'Moving risk from a compliance appendix to a structured input into strategy.',
    placeholder: true,
  },
  {
    slug: 'interconnected-exposures-in-complex-operations',
    category: 'Risk',
    title: 'Interconnected Exposures in Complex Operations',
    description:
      'Why operational, financial and third-party risks rarely sit in isolation.',
    placeholder: true,
  },
  {
    slug: 'when-insurance-does-not-equal-protection',
    category: 'Insurance',
    title: 'When Insurance Does Not Equal Protection',
    description:
      'A view on coverage design that starts with actual business exposure, not a checklist.',
    placeholder: true,
  },
  {
    slug: 'risk-transfer-after-the-policy-is-placed',
    category: 'Insurance',
    title: 'Risk Transfer After the Policy Is Placed',
    description:
      'Programme design, gaps and claims readiness as part of a single protection strategy.',
    placeholder: true,
  },
  {
    slug: 'continuity-beyond-the-plan-on-the-shelf',
    category: 'Business Resilience',
    title: 'Continuity Beyond the Plan on the Shelf',
    description:
      'Business continuity as an operating discipline rather than a document exercise.',
    placeholder: true,
  },
  {
    slug: 'resilience-in-infrastructure-led-enterprises',
    category: 'Business Resilience',
    title: 'Resilience in Infrastructure-Led Enterprises',
    description:
      'How disruption, interruption and recovery sit alongside financial and project risk.',
    placeholder: true,
  },
]
