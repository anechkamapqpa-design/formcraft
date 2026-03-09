import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LangProvider } from "@/lib/i18n";
import Home from "./pages/Home";
import TemplateDetail from "./pages/TemplateDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const MinimalPortfolio = lazy(() => import("./pages/demos/MinimalPortfolio"));
const DarkStudio = lazy(() => import("./pages/demos/DarkStudio"));
const SaaSStartup = lazy(() => import("./pages/demos/SaaSStartup"));
const CreativeAgency = lazy(() => import("./pages/demos/CreativeAgency"));
const PersonalBrand = lazy(() => import("./pages/demos/PersonalBrand"));
const ProductShowcase = lazy(() => import("./pages/demos/ProductShowcase"));
const StartupPitch = lazy(() => import("./pages/demos/StartupPitch"));
const DigitalArtGallery = lazy(() => import("./pages/demos/DigitalArtGallery"));
const CorporateWebsite = lazy(() => import("./pages/demos/CorporateWebsite"));
const StartupAnimation = lazy(() => import("./pages/demos/StartupAnimation"));
const MarketplacePlatform = lazy(() => import("./pages/demos/MarketplacePlatform"));
const MobileAppLanding = lazy(() => import("./pages/demos/MobileAppLanding"));
const StartupCommunity = lazy(() => import("./pages/demos/StartupCommunity"));
const LuxuryBrand = lazy(() => import("./pages/demos/LuxuryBrand"));
const EventLanding = lazy(() => import("./pages/demos/EventLanding"));
const EducationPlatform = lazy(() => import("./pages/demos/EducationPlatform"));
const CreativeBlog = lazy(() => import("./pages/demos/CreativeBlog"));
const FreelancerLanding = lazy(() => import("./pages/demos/FreelancerLanding"));
const StartupDashboard = lazy(() => import("./pages/demos/StartupDashboard"));
const ArchitectureStudio = lazy(() => import("./pages/demos/ArchitectureStudio"));
const FitnessBrand = lazy(() => import("./pages/demos/FitnessBrand"));
const RestaurantWebsite = lazy(() => import("./pages/demos/RestaurantWebsite"));
const AIProductLanding = lazy(() => import("./pages/demos/AIProductLanding"));
const CreativeStartup = lazy(() => import("./pages/demos/CreativeStartup"));
const LuxeAuraBrand = lazy(() => import("./pages/demos/LuxeAuraBrand"));

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const Loader = () => <div className="min-h-screen bg-background flex items-center justify-center"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LangProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/template/:id" element={<TemplateDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/demo/minimal-portfolio" element={<MinimalPortfolio />} />
              <Route path="/demo/dark-studio" element={<DarkStudio />} />
              <Route path="/demo/saas-startup" element={<SaaSStartup />} />
              <Route path="/demo/creative-agency" element={<CreativeAgency />} />
              <Route path="/demo/personal-brand" element={<PersonalBrand />} />
              <Route path="/demo/product-showcase" element={<ProductShowcase />} />
              <Route path="/demo/startup-pitch" element={<StartupPitch />} />
              <Route path="/demo/digital-art-gallery" element={<DigitalArtGallery />} />
              <Route path="/demo/corporate-website" element={<CorporateWebsite />} />
              <Route path="/demo/startup-animation" element={<StartupAnimation />} />
              <Route path="/demo/marketplace-platform" element={<MarketplacePlatform />} />
              <Route path="/demo/mobile-app-landing" element={<MobileAppLanding />} />
              <Route path="/demo/startup-community" element={<StartupCommunity />} />
              <Route path="/demo/luxury-brand" element={<LuxuryBrand />} />
              <Route path="/demo/event-landing" element={<EventLanding />} />
              <Route path="/demo/education-platform" element={<EducationPlatform />} />
              <Route path="/demo/creative-blog" element={<CreativeBlog />} />
              <Route path="/demo/freelancer-landing" element={<FreelancerLanding />} />
              <Route path="/demo/startup-dashboard" element={<StartupDashboard />} />
              <Route path="/demo/architecture-studio" element={<ArchitectureStudio />} />
              <Route path="/demo/fitness-brand" element={<FitnessBrand />} />
              <Route path="/demo/restaurant-website" element={<RestaurantWebsite />} />
              <Route path="/demo/ai-product-landing" element={<AIProductLanding />} />
              <Route path="/demo/creative-startup" element={<CreativeStartup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LangProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
