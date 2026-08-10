import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { ServiceDetailPage } from '@/pages/ServiceDetailPage'
import { RealisationsPage } from '@/pages/RealisationsPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { NewsPage } from '@/pages/NewsPage'
import { NewsArticlePage } from '@/pages/NewsArticlePage'
import { ContactPage } from '@/pages/ContactPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="realisations" element={<RealisationsPage />} />
          <Route path="realisations/:slug" element={<ProjectDetailPage />} />
          <Route path="actualites" element={<NewsPage />} />
          <Route path="actualites/:slug" element={<NewsArticlePage />} />
          <Route path="contact" element={<ContactPage />} />
          {/* Anciennes routes (version formation) */}
          <Route path="formations" element={<Navigate to="/services" replace />} />
          <Route path="formations/:slug" element={<Navigate to="/services" replace />} />
          <Route path="admissions" element={<Navigate to="/contact" replace />} />
          <Route path="vie-etudiante" element={<Navigate to="/a-propos" replace />} />
          <Route path="galerie" element={<Navigate to="/realisations" replace />} />
          <Route path="faq" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
