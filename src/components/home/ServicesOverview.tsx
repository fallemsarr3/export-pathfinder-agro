import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const ServicesOverview = () => (
  <section className="section-padding bg-sage/30">
    <div className="container-page">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-foreground mb-4">
          Services adaptés à votre zone d'importation
        </h2>
        <p className="text-muted-foreground text-lg">
          Chaque marché a ses propres exigences. Nos services sont structurés selon votre{" "}
          <Link to="/zones-export" className="text-secondary underline hover:no-underline">zone géographique</Link>{" "}
          et votre niveau de maturité.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {/* Afrique */}
        <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300">
          <div className="h-2 bg-paprika" />
          <div className="p-8">
            <span className="inline-block px-3 py-1 bg-paprika/10 text-paprika rounded-full text-xs font-medium mb-4">
              Afrique de l'Ouest
            </span>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
              Sourcing Maroc → Afrique
            </h3>
            <p className="text-muted-foreground mb-6">
              Approvisionnement régulier en{" "}
              <Link to="/produits/cumin-maroc" className="text-secondary hover:underline">cumin</Link>,{" "}
              <Link to="/produits/gingembre-poudre" className="text-secondary hover:underline">gingembre</Link>{" "}
              et autres épices pour importateurs alimentaires et grossistes.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-paprika mt-0.5 flex-shrink-0" />
                Sourcing et vérification fournisseurs
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-paprika mt-0.5 flex-shrink-0" />
                Négociation prix et MOQ
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-paprika mt-0.5 flex-shrink-0" />
                Coordination documentaire export
              </li>
            </ul>
            <Button asChild variant="afrique" className="w-full">
              <Link to="/contact?type=afrique">Demander un sourcing</Link>
            </Button>
          </div>
        </div>

        {/* Europe */}
        <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300">
          <div className="h-2 bg-primary" />
          <div className="p-8">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
              Europe
            </span>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
              Sourcing conforme Maroc → Europe
            </h3>
            <p className="text-muted-foreground mb-6">
              Conformité UE pour{" "}
              <Link to="/produits/safran-maroc" className="text-secondary hover:underline">safran</Link>,{" "}
              <Link to="/produits/huile-argan-alimentaire" className="text-secondary hover:underline">huile d'argan</Link>{" "}
              et <Link to="/produits/huile-olive-maroc" className="text-secondary hover:underline">huile d'olive</Link>.
              Traçabilité et maîtrise du risque fournisseur.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Dossier technique prioritaire
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                Échantillons et analyses
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <Link to="/methode" className="hover:underline">Process strict avant commande</Link>
              </li>
            </ul>
            <Button asChild variant="europe" className="w-full">
              <Link to="/contact?type=europe">Lancer un sourcing UE</Link>
            </Button>
          </div>
        </div>

        {/* Canada */}
        <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300">
          <div className="h-2 bg-secondary" />
          <div className="p-8">
            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium mb-4">
              Canada
            </span>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
              Sourcing Maroc → Canada
            </h3>
            <p className="text-muted-foreground mb-6">
              Conformité ACIA pour{" "}
              <Link to="/produits/huile-argan-alimentaire" className="text-secondary hover:underline">huile d'argan</Link>,{" "}
              <Link to="/produits/safran-maroc" className="text-secondary hover:underline">safran</Link>{" "}
              et épices. Étiquetage bilingue et logistique CIF.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                Conformité ACIA (CFIA)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                Étiquetage bilingue FR/EN
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                Logistique CIF/DAP
              </li>
            </ul>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/contact?type=canada">Lancer un sourcing Canada</Link>
            </Button>
          </div>
        </div>

        {/* Premium */}
        <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300">
          <div className="h-2 bg-spice" />
          <div className="p-8">
            <span className="inline-block px-3 py-1 bg-spice/10 text-spice rounded-full text-xs font-medium mb-4">
              Premium
            </span>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
              Sourcing stratégique
            </h3>
            <p className="text-muted-foreground mb-6">
              Missions cadrées pour gros importateurs de{" "}
              <Link to="/produits/ras-el-hanout" className="text-secondary hover:underline">ras el hanout</Link>,{" "}
              <Link to="/produits/melanges-epices" className="text-secondary hover:underline">mélanges d'épices</Link>{" "}
              et industriels. Réduction du risque fournisseur.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-spice mt-0.5 flex-shrink-0" />
                Fournisseurs alternatifs
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-spice mt-0.5 flex-shrink-0" />
                Pré-filtrage conformité
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-spice mt-0.5 flex-shrink-0" />
                Missions avec livrables
              </li>
            </ul>
            <Button asChild variant="premium" className="w-full">
              <Link to="/contact?type=premium">Discuter d'une mission</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline" size="lg">
          <Link to="/services">
            Voir tous les détails des services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesOverview;
