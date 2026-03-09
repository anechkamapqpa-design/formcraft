import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LangProvider } from "@/lib/i18n";
import Home from "./pages/Home";
import TemplateDetail from "./pages/TemplateDetail";
import About from "./pages/About";
import LuxuryArt from "./pages/demos/LuxuryArt";
import SaaSClean from "./pages/demos/SaaSClean";
import EcomDrop from "./pages/demos/EcomDrop";
import PersonalBrand from "./pages/demos/PersonalBrand";
import ExperimentalNeon from "./pages/demos/ExperimentalNeon";
import ProductInteractive from "./pages/demos/ProductInteractive";
import FitnessTracker from "./pages/demos/FitnessTracker";
import RestaurantMenu from "./pages/demos/RestaurantMenu";
import MusicFestival from "./pages/demos/MusicFestival";
import RealEstate from "./pages/demos/RealEstate";
import PhotoPortfolio from "./pages/demos/PhotoPortfolio";
import MedicalClinic from "./pages/demos/MedicalClinic";
import TravelAgency from "./pages/demos/TravelAgency";
import GamingHub from "./pages/demos/GamingHub";
import EducationPlatform from "./pages/demos/EducationPlatform";
import WeddingPlanner from "./pages/demos/WeddingPlanner";
import ArchitectureStudio from "./pages/demos/ArchitectureStudio";
import CryptoDashboard from "./pages/demos/CryptoDashboard";
import FashionMagazine from "./pages/demos/FashionMagazine";
import PodcastLanding from "./pages/demos/PodcastLanding";
import YogaStudio from "./pages/demos/YogaStudio";
import PetCare from "./pages/demos/PetCare";
import LawFirm from "./pages/demos/LawFirm";
import CoffeeShop from "./pages/demos/CoffeeShop";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LangProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/template/:id" element={<TemplateDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/demo/luxury-art" element={<LuxuryArt />} />
            <Route path="/demo/saas-clean" element={<SaaSClean />} />
            <Route path="/demo/ecom-drop" element={<EcomDrop />} />
            <Route path="/demo/personal-brand" element={<PersonalBrand />} />
            <Route path="/demo/experimental-neon" element={<ExperimentalNeon />} />
            <Route path="/demo/product-interactive" element={<ProductInteractive />} />
            <Route path="/demo/fitness-tracker" element={<FitnessTracker />} />
            <Route path="/demo/restaurant-menu" element={<RestaurantMenu />} />
            <Route path="/demo/music-festival" element={<MusicFestival />} />
            <Route path="/demo/real-estate" element={<RealEstate />} />
            <Route path="/demo/photo-portfolio" element={<PhotoPortfolio />} />
            <Route path="/demo/medical-clinic" element={<MedicalClinic />} />
            <Route path="/demo/travel-agency" element={<TravelAgency />} />
            <Route path="/demo/gaming-hub" element={<GamingHub />} />
            <Route path="/demo/education-platform" element={<EducationPlatform />} />
            <Route path="/demo/wedding-planner" element={<WeddingPlanner />} />
            <Route path="/demo/architecture-studio" element={<ArchitectureStudio />} />
            <Route path="/demo/crypto-dashboard" element={<CryptoDashboard />} />
            <Route path="/demo/fashion-magazine" element={<FashionMagazine />} />
            <Route path="/demo/podcast-landing" element={<PodcastLanding />} />
            <Route path="/demo/yoga-studio" element={<YogaStudio />} />
            <Route path="/demo/pet-care" element={<PetCare />} />
            <Route path="/demo/law-firm" element={<LawFirm />} />
            <Route path="/demo/coffee-shop" element={<CoffeeShop />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
