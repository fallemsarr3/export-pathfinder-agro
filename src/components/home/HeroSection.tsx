import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-spices.jpg";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center">
    <div className="absolute inset-0 z-0">
      <img
        src={heroImage}
        alt="Épices marocaines export – cumin, paprika, gingembre, ras el hanout certifiés"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
    </div>

    <div className="container-page relative z-10 py-20">
      <div className="max-w-3xl">
        <span className="inline-block px-4 py-2 bg-ochre/20 text-ochre rounded-full text-sm font-medium mb-6 animate-fade-in">
          Agent sourcing Maroc • Épices • Huiles alimentaires
        </span>

        <h1 className="text-primary-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Votre Agent de Sourcing en Épices & Huiles Alimentaires au Maroc
        </h1>

        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Qualité certifiée, export Europe & Afrique, contrôle qualité intégré, réactivité garantie
        </p>

        <p className="text-lg text-primary-foreground/75 mb-10 max-w-2xl animate-slide-up" style={{ animationDelay: "0.3s" }}>
          Sarr Trade Link accompagne les importateurs B2B dans leur sourcing d'épices marocaines export et d'huiles alimentaires Maroc B2B. Fournisseurs vérifiés, traçabilité complète, conformité UE et coordination documentaire de bout en bout.
        </p>

        <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button asChild variant="hero">
            <Link to="/contact">
              Demander un devis gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline-hero">
            <Link to="/services">Découvrir nos services</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
