import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import ScrollToTop from './components/layout/ScrollToTop';
import { usePageMeta } from './hooks/usePageMeta';
import { content as c } from './data/content';
import InnerPageEffects from './components/common/InnerPageEffects';
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
              <Route path="/about-us" element={<InnerPageEffects><About /></InnerPageEffects>} />
              <Route path="/founder-leadership" element={<InnerPageEffects><FounderLeadership /></InnerPageEffects>} />
              <Route path="/services" element={<InnerPageEffects><Services /></InnerPageEffects>} />
              <Route path="/society-redevelopment" element={<InnerPageEffects><SocietyRedevelopment /></InnerPageEffects>} />
              <Route path="/self-redevelopment" element={<InnerPageEffects><SelfRedevelopment /></InnerPageEffects>} />
              <Route path="/land-banking" element={<InnerPageEffects><LandBanking /></InnerPageEffects>} />
              <Route path="/redevelopment-process" element={<InnerPageEffects><RedevelopmentProcess /></InnerPageEffects>} />
              <Route path="/projects" element={<InnerPageEffects><Projects /></InnerPageEffects>} />
              <Route path="/knowledge-centre" element={<InnerPageEffects><KnowledgeCentre /></InnerPageEffects>} />
              <Route path="/knowledge-centre/:slug" element={<InnerPageEffects><Article /></InnerPageEffects>} />
              <Route path="/contact-us" element={<InnerPageEffects><Contact /></InnerPageEffects>} />
              <Route path="/privacy" element={<InnerPageEffects><Policy /></InnerPageEffects>} />
              <Route path="/terms" element={<InnerPageEffects><Policy /></InnerPageEffects>} />
              <Route path="/about" element={<Navigate to="/about-us" replace />} />
              <Route path="/process" element={<Navigate to="/redevelopment-process" replace />} />
              <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
              <Route path="/testimonials" element={<Navigate to="/knowledge-centre#faqs" replace />} />
              <Route path="*" element={<InnerPageEffects><NotFound /></InnerPageEffects>} />
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
    <BrowserRouter basename={import.meta.env.BASE_URL} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Site />
    </BrowserRouter>
  );
}
