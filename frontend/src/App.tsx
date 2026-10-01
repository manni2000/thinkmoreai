import { lazy, Suspense, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSeo from "@/components/PageSeo";
import Index from "./pages/Index";
import { StudioArchitecture, StudioProcess, StudioCTA } from "@/components/StudioExperience";
import Contact from "@/components/Contact";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const CapabilitiesPage = lazy(() => import("./pages/CapabilitiesPage"));
const ReferralPage = lazy(() => import("./pages/ReferralPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FAQ = lazy(() => import("@/components/FAQ"));
const PrivacyPolicy = lazy(() => import("@/components/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/components/TermsOfService"));
const AIChatbot = lazy(() => import("@/components/AIChatbot"));

const queryClient = new QueryClient();

const RouteFrame = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  return <motion.div key={pathname} initial={reduce ? false : { opacity: .93, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .42, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <div id="main-content" tabIndex={-1}>
        <RouteFrame><Suspense fallback={<div className="studio-route-fallback">Loading page…</div>}><Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/technologies" element={<Navigate to="/capabilities" replace />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
          <Route
            path="/process"
            element={
              <>
                <PageSeo page="process" />
                <section className="studio-page-hero"><div className="studio-container"><span className="studio-kicker">PROCESS / DELIVERY</span><h1>From idea to<br/>intelligent product.</h1><p>A disciplined, milestone-driven engineering framework bridging technical discovery, system architecture, interface design, and production deployment.</p><div className="studio-page-hero__line"/></div></section>
                <StudioProcess />
                <StudioArchitecture />
                <StudioCTA />
                <Contact />
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <PageSeo page="faq" />
                <section className="studio-page-hero"><div className="studio-container"><span className="studio-kicker">FAQ / BEFORE WE BUILD</span><h1>Good questions.<br/>Clear answers.</h1><p>Clear guidance on technical scoping, intellectual property, production timelines, security compliance, and ongoing support.</p><div className="studio-page-hero__line"/></div></section>
                <FAQ />
                <StudioCTA />
                <Contact />
              </>
            }
          />
          <Route path="/team" element={<Navigate to="/about" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/referral" element={<ReferralPage />} />
          <Route path="/earn" element={<Navigate to="/referral" replace />} />
          <Route
            path="/privacy-policy"
            element={
              <>
                <PageSeo page="privacy" />
                <PrivacyPolicy />
              </>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <>
                <PageSeo page="terms" />
                <TermsOfService />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes></Suspense></RouteFrame>
        </div>
        <Footer />
        <Suspense fallback={null}><AIChatbot /></Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
