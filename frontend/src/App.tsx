import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";
import PageSeo from "@/components/PageSeo";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
// import TechnologiesPage from "./pages/TechnologiesPage";
import PortfolioPage from "./pages/PortfolioPage";
import TeamPage from "@/pages/TeamPage";
import EarnPage from "./pages/EarnPage";
import NotFound from "./pages/NotFound";
import Process from "@/components/Process";
import ContactPage from "./pages/ContactPage";
import FAQ from "@/components/FAQ";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import TermsOfService from "@/components/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* <Route path="/technologies" element={<TechnologiesPage />} /> */}
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route
            path="/process"
            element={
              <>
                <PageSeo page="process" />
                <Process />
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <PageSeo page="faq" />
                <FAQ />
              </>
            }
          />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/earn" element={<EarnPage />} />
          <Route
            path="/privacy-policy"
            element={
              <>
                <PageSeo page="privacy" noindex />
                <PrivacyPolicy />
              </>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <>
                <PageSeo page="terms" noindex />
                <TermsOfService />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <AIChatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
