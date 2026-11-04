import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import ScrollToTop from './components/layout/ScrollToTop';
import { usePageMeta } from './hooks/usePageMeta';
import { content as c } from './data/content';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const FounderLeadership = lazy(() => import('./pages/FounderLeadership'));
const Services = lazy(() => import('./pages/Services'));
const SocietyRedevelopment = lazy(() => import('./pages/SocietyRedevelopment'));
const SelfRedevelopment = lazy(() => import('./pages/SelfRedevelopment'));
const LandBanking = lazy(() => import('./pages/LandBanking'));
const RedevelopmentProcess = lazy(() => import('./pages/RedevelopmentProcess'));
const Projects = lazy(() => import('./pages/Projects'));
const KnowledgeCentre = lazy(() => import('./pages/KnowledgeCentre'));
const Article = lazy(() => import('./pages/Article'));
const Contact = lazy(() => import('./pages/Contact'));
const Policy = lazy(() => import('./pages/Policy'));
const NotFound = lazy(() => import('./pages/NotFound'));
/** Routed shell preserves shared navigation and loads page-specific code on demand. */
function Site() {
  const location = useLocation();
  const reduced = useReducedMotion();
  usePageMeta();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main" tabIndex={-1} className="min-h-[65vh] outline-none">
        <motion.div
          key={location.pathname}
          initial={reduced ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.22 }}
        >
          <Suspense
            fallback={
              <p role="status" className="section-wrap">
                {c.ui.loading}
              </p>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/founder-leadership" element={<FounderLeadership />} />
              <Route path="/services" element={<Services />} />
              <Route path="/society-redevelopment" element={<SocietyRedevelopment />} />
              <Route path="/self-redevelopment" element={<SelfRedevelopment />} />
              <Route path="/land-banking" element={<LandBanking />} />
              <Route path="/redevelopment-process" element={<RedevelopmentProcess />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/knowledge-centre" element={<KnowledgeCentre />} />
              <Route path="/knowledge-centre/:slug" element={<Article />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/privacy" element={<Policy />} />
              <Route path="/terms" element={<Policy />} />
              <Route path="/about" element={<Navigate to="/about-us" replace />} />
              <Route path="/process" element={<Navigate to="/redevelopment-process" replace />} />
              <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
              <Route path="/testimonials" element={<Navigate to="/knowledge-centre#faqs" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
/** Keep the existing Vite/React entry; replace manual history interception with React Router. */
export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Site />
    </BrowserRouter>
  );
}
