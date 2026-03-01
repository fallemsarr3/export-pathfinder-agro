import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ZonesExport from "./pages/ZonesExport";
import Methode from "./pages/Methode";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import ResetPassword from "./pages/ResetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import ScrollToTop from "./components/ScrollToTop";
import SafranMaroc from "./pages/products/SafranMaroc";
import CuminMaroc from "./pages/products/CuminMaroc";
import RasElHanout from "./pages/products/RasElHanout";
import GingembrePoudre from "./pages/products/GingembrePoudre";
import PaprikaMarocain from "./pages/products/PaprikaMarocain";
import Coriandre from "./pages/products/Coriandre";
import MelangesEpices from "./pages/products/MelangesEpices";
import HuileArgan from "./pages/products/HuileArgan";
import HuileOlive from "./pages/products/HuileOlive";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/zones-export" element={<ZonesExport />} />
            <Route path="/methode" element={<Methode />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/produits/safran-maroc" element={<SafranMaroc />} />
            <Route path="/produits/cumin-maroc" element={<CuminMaroc />} />
            <Route path="/produits/ras-el-hanout" element={<RasElHanout />} />
            <Route path="/produits/gingembre-poudre" element={<GingembrePoudre />} />
            <Route path="/produits/paprika-marocain" element={<PaprikaMarocain />} />
            <Route path="/produits/coriandre" element={<Coriandre />} />
            <Route path="/produits/melanges-epices" element={<MelangesEpices />} />
            <Route path="/produits/huile-argan-alimentaire" element={<HuileArgan />} />
            <Route path="/produits/huile-olive-maroc" element={<HuileOlive />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
