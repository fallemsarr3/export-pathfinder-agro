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
        <link rel="canonical" href="https://www.sarrtradelink.com/" />
        <meta property="og:title" content="Agent Sourcing Épices & Huiles Alimentaires au Maroc | Sarr Trade Link" />
        <meta property="og:description" content="Votre partenaire de sourcing pour épices et huiles alimentaires marocaines certifiées. Export B2B Europe. Devis gratuit." />
        <meta property="og:url" content="https://www.sarrtradelink.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agent Sourcing Épices & Huiles Alimentaires au Maroc | Sarr Trade Link" />
        <meta name="twitter:description" content="Votre partenaire de sourcing pour épices et huiles alimentaires marocaines certifiées. Export B2B Europe. Devis gratuit." />
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
