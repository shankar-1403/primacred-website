import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const ServicesPage = lazy(() => import('@/pages/Services'))
const FinancialAdvisory = lazy(() => import('@/pages/FinancialAdvisory'))
const RiskConsulting = lazy(() => import('@/pages/RiskConsulting'))
const UnderwritingAdvisory = lazy(() => import('@/pages/UnderwritingAdvisory'))
const InsuranceRiskAdvisory = lazy(() => import('@/pages/InsuranceRiskAdvisory'))
const Experience = lazy(() => import('@/pages/Experience'))
const Industries = lazy(() => import('@/pages/Industries'))
const Methodology = lazy(() => import('@/pages/Methodology'))
const WhyPrimacred = lazy(() => import('@/pages/WhyPrimacred'))
const Insights = lazy(() => import('@/pages/Insights'))
const Contact = lazy(() => import('@/pages/Contact'))
const Privacy = lazy(() => import('@/pages/Privacy'))
const Terms = lazy(() => import('@/pages/Terms'))
const NotFound = lazy(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/financial-advisory" element={<FinancialAdvisory />} />
        <Route path="/risk-consulting" element={<RiskConsulting />} />
        <Route path="/underwriting-advisory" element={<UnderwritingAdvisory />} />
        <Route path="/insurance-risk-advisory" element={<InsuranceRiskAdvisory />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/why-primacred" element={<WhyPrimacred />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
