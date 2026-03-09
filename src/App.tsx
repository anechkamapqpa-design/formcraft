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
import LuxeAura from "./pages/demos/LuxeAura";
import AppMotion from "./pages/demos/AppMotion";
import EchoPress from "./pages/demos/EchoPress";
import MarketSphere from "./pages/demos/MarketSphere";
import Atelier from "./pages/demos/Atelier";
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
            <Route path="/demo/luxe-aura" element={<LuxeAura />} />
            <Route path="/demo/app-motion" element={<AppMotion />} />
            <Route path="/demo/echo-press" element={<EchoPress />} />
            <Route path="/demo/market-sphere" element={<MarketSphere />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
