import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import PourquoiSection from "@/components/home/PourquoiSection";
import CommentCaMarcheSection from "@/components/home/CommentCaMarcheSection";
import ProduitsSection from "@/components/home/ProduitsSection";
import TrustSection from "@/components/home/TrustSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Agent Sourcing Maroc — Épices & Huiles Export B2B ✓ Devis 48h</title>
        <meta name="description" content="Agent de sourcing export Maroc. Épices et huiles alimentaires certifiées pour importateurs Europe & Afrique. Fournisseurs vérifiés. Devis gratuit sous 48h." />
        <link rel="canonical" href="https://www.sarrtradelink.com/" />
        <link rel="alternate" hrefLang="fr" href="https://www.sarrtradelink.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.sarrtradelink.com/" />
        <meta property="og:title" content="Agent Sourcing Maroc — Épices & Huiles Export B2B ✓ Devis 48h" />
        <meta property="og:description" content="Agent de sourcing export Maroc. Épices et huiles alimentaires certifiées pour importateurs Europe & Afrique. Fournisseurs vérifiés. Devis gratuit sous 48h." />
        <meta property="og:url" content="https://www.sarrtradelink.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agent Sourcing Maroc — Épices & Huiles Export B2B ✓ Devis 48h" />
        <meta name="twitter:description" content="Agent de sourcing export Maroc. Épices et huiles alimentaires certifiées pour importateurs Europe & Afrique. Fournisseurs vérifiés. Devis gratuit sous 48h." />
      </Helmet>

      <HeroSection />
      <PourquoiSection />
      <ProduitsSection />
      <CommentCaMarcheSection />
      <TrustSection />
      <ServicesOverview />
      <CtaSection />
    </Layout>
  );
};

export default Index;
