import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
              Nos prestations
            </span>
            <h1 className="text-primary-foreground mb-6">
              Services de sourcing export au Maroc
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Chaque marché a ses propres exigences. Nos services sont adaptés à votre zone d'importation et à votre niveau de maturité.
            </p>
          </div>
        </div>
      </section>

      {/* Afrique Service */}
      <section id="afrique" className="section-padding bg-background scroll-mt-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block px-4 py-2 bg-paprika/10 text-paprika rounded-full text-sm font-medium mb-4">
                Service Afrique de l'Ouest
              </span>
              <h2 className="text-foreground mb-6">
                Sourcing Maroc → Afrique de l'Ouest
              </h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Cible
                </h3>
                <p className="text-muted-foreground">
                  Importateurs alimentaires, grossistes et distributeurs basés au Sénégal, en Côte d'Ivoire et dans la région ouest-africaine.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Problèmes que nous résolvons
                </h3>
                <ul className="space-y-3">
                  {[
                    "Fournisseurs peu fiables ou difficilement joignables",
                    "Qualité inconstante d'une commande à l'autre",
                    "Documents export incomplets ou non conformes",
                    "Délais de livraison non respectés"
                  ].map((problem, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <AlertTriangle className="w-5 h-5 text-paprika mt-0.5 flex-shrink-0" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-sage/30 rounded-lg p-8">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-6">
                Prestations incluses
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Sourcing et vérification de fournisseurs marocains",
                  "Négociation des prix et quantités minimales (MOQ)",
                  "Coordination documentaire export",
                  "Suivi jusqu'au départ de la marchandise"
                ].map((service, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-paprika mt-0.5 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>

              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-2">Produits concernés</h4>
                <div className="flex flex-wrap gap-2">
                  {["Huile d'olive", "Huile d'argan alimentaire", "Paprika", "Cumin", "Gingembre"].map((product) => (
                    <span key={product} className="px-3 py-1 bg-background text-muted-foreground rounded-full text-sm">
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8 p-4 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Rémunération</h4>
                <p className="text-muted-foreground text-sm">
                  Forfait de sourcing + commission uniquement si commande confirmée
                </p>
              </div>

              <Button asChild variant="afrique" className="w-full">
                <Link to="/contact?type=afrique">
                  Demander un sourcing Afrique de l'Ouest
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Europe Service */}
      <section id="europe" className="section-padding bg-sage/30 scroll-mt-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Service Europe
              </span>
              <h2 className="text-foreground mb-6">
                Sourcing conforme Maroc → Europe
              </h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Positionnement
                </h3>
                <p className="text-muted-foreground">
                  Conformité réglementaire UE, traçabilité complète et maîtrise du risque fournisseur pour les importateurs européens structurés.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Cible
                </h3>
                <p className="text-muted-foreground">
                  Importateurs européens structurés (France, Belgique) avec exigences de conformité élevées et processus d'achat formalisés.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Spécificités du service
                </h3>
                <ul className="space-y-3">
                  {[
                    "Dossier technique prioritaire avant tout engagement",
                    "Échantillons et analyses de laboratoire si requis",
                    "Process strict de validation avant toute commande",
                    "Fournisseurs auditables et documentation contrôlée"
                  ].map((spec, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-6">
                Détails du service
              </h3>

              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-2">Produits concernés (volontairement limités)</h4>
                <div className="flex flex-wrap gap-2">
                  {["Huile d'olive (vrac)", "Paprika", "Cumin (grains)"].map((product) => (
                    <span key={product} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8 p-4 bg-sage/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Rémunération</h4>
                <p className="text-muted-foreground text-sm">
                  Forfait de sourcing obligatoire, commission réduite ou optionnelle selon la mission.
                </p>
              </div>

              <div className="mb-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong>Note :</strong> Les demandes sans site web professionnel ou sans engagement sur le forfait ne sont pas traitées.
                </p>
              </div>

              <Button asChild variant="europe" className="w-full">
                <Link to="/contact?type=europe">
                  Lancer un sourcing conforme UE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Service */}
      <section id="premium" className="section-padding bg-background scroll-mt-24">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block px-4 py-2 bg-spice/20 text-spice rounded-full text-sm font-medium mb-4">
                Service Premium
              </span>
              <h2 className="text-foreground mb-6">
                Sourcing stratégique et réduction du risque fournisseur
              </h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Positionnement
                </h3>
                <p className="text-muted-foreground">
                  Nous ne sommes pas un courtier. Nous agissons comme un filtre de fournisseurs et un réducteur de risque pour les entreprises structurées.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Cible
                </h3>
                <p className="text-muted-foreground">
                  Gros importateurs, industriels agroalimentaires et distributeurs structurés recherchant des fournisseurs alternatifs ou une sécurisation de leur chaîne d'approvisionnement.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Valeur apportée
                </h3>
                <ul className="space-y-3">
                  {[
                    "Identification de fournisseurs alternatifs qualifiés",
                    "Pré-filtrage conformité et régularité des fournisseurs",
                    "Missions cadrées avec livrables définis",
                    "Réduction du risque de dépendance fournisseur"
                  ].map((value, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-spice mt-0.5 flex-shrink-0" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-spice/5 to-ochre/10 rounded-lg p-8 border border-border">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-6">
                Modalités
              </h3>

              <div className="mb-8 p-4 bg-card rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Rémunération</h4>
                <p className="text-muted-foreground text-sm">
                  Honoraires fixes définis en amont. Commission optionnelle ou inexistante selon la nature de la mission.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3">Format des missions</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Audit de fournisseurs existants</li>
                  <li>• Recherche de fournisseurs alternatifs</li>
                  <li>• Benchmark qualité / prix sur un périmètre défini</li>
                  <li>• Due diligence avant contractualisation</li>
                </ul>
              </div>

              <div className="mb-8 p-4 bg-spice/10 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Processus :</strong> Chaque mission fait l'objet d'un cadrage préalable avec objectifs, périmètre et livrables définis avant démarrage.
                </p>
              </div>

              <Button asChild variant="premium" className="w-full">
                <Link to="/contact?type=premium">
                  Discuter d'une mission de sourcing stratégique
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-page text-center">
          <h2 className="text-primary-foreground mb-6">
            Besoin d'un sourcing adapté à votre situation ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Choisissez le formulaire correspondant à votre zone d'importation pour nous transmettre votre demande qualifiée.
          </p>
          <Button asChild variant="hero">
            <Link to="/contact">Accéder aux formulaires de contact</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;