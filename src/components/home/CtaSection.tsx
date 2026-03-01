import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => (
  <section className="section-padding bg-primary">
    <div className="container-page text-center">
      <h3 className="text-2xl font-heading font-semibold text-primary-foreground mb-6">
        Prêt à sécuriser votre sourcing au Maroc ?
      </h3>
      <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
        Décrivez votre besoin en épices marocaines export ou en huiles alimentaires Maroc B2B. Recevez une proposition de sourcing sous 48 h.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild variant="hero">
          <Link to="/contact">Demander un devis gratuit</Link>
        </Button>
        <Button asChild variant="outline-hero">
          <Link to="/methode">Découvrir notre méthode</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CtaSection;
