import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Services de sourcing export Maroc",
  "description": "Prestations de sourcing agroalimentaire pour importateurs Afrique de l'Ouest et Europe",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Sourcing export Maroc → Afrique de l'Ouest",
      "description": "Sourcing et vérification de fournisseurs marocains d'épices et huiles alimentaires pour importateurs ouest-africains. Coordination documentaire export, suivi logistique FOB/CFR.",
      "serviceType": "Sourcing agroalimentaire",
      "areaServed": {
        "@type": "Place",
        "name": "Afrique de l'Ouest"
      },
      "provider": {
        "@type": "Organization",
        "name": "Sourcing Maroc Export"
      }
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Sourcing conforme UE depuis le Maroc",
      "description": "Sourcing de fournisseurs marocains conformes aux normes européennes (HACCP, LMR). Dossier technique complet, analyses laboratoire, certifications BRC/IFS.",
      "serviceType": "Sourcing agroalimentaire conforme UE",
      "areaServed": {
        "@type": "Place",
        "name": "Europe"
      },
      "provider": {
        "@type": "Organization",
        "name": "Sourcing Maroc Export"
      }
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Missions stratégiques de sourcing et gestion du risque fournisseur",
      "description": "Audit de fournisseurs, recherche de sources alternatives, due diligence et sécurisation de la supply chain pour industriels agroalimentaires.",
      "serviceType": "Conseil sourcing stratégique",
      "provider": {
        "@type": "Organization",
        "name": "Sourcing Maroc Export"
      }
    }
  ]
};

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Services sourcing Maroc – Afrique, Europe, Premium</title>
        <meta name="description" content="Agent de sourcing export Maroc : services adaptés pour importateurs Afrique de l'Ouest, Europe et missions stratégiques Premium. Fournisseurs vérifiés." />
        <link rel="canonical" href="https://www.sarrtradelink.com/services" />
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
              Nos prestations
            </span>
            <h1 className="text-primary-foreground mb-6">
              Services de sourcing export depuis le Maroc
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Chaque marché a ses propres exigences en termes de volumes, de qualité et de conformité documentaire. Nos prestations de sourcing sont adaptées à votre zone d'importation et à votre niveau de maturité opérationnelle.
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
                Sourcing export Maroc → Afrique de l'Ouest
              </h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Cible
                </h3>
                <p className="text-muted-foreground">
                  Importateurs alimentaires, grossistes et distributeurs de la région ouest-africaine recherchant un approvisionnement régulier en épices et huiles depuis le Maroc, avec des conditions FOB ou CFR adaptées à leurs flux logistiques.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Problèmes que nous résolvons
                </h3>
                <ul className="space-y-3">
                  {[
                    "Fournisseurs peu fiables ou difficilement joignables pour le suivi des commandes",
                    "Qualité inconstante d'un lot à l'autre : granulométrie, taux d'humidité, pureté",
                    "Documents export incomplets : certificat d'origine, facture consulaire, phytosanitaire",
                    "Délais de livraison non respectés impactant la rotation des stocks"
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
                  "Sourcing et vérification terrain de fournisseurs marocains (capacité, régularité, références)",
                  "Négociation des prix et quantités minimales (MOQ) adaptées à vos volumes",
                  "Coordination documentaire export : factures, certificats d'origine, documents douaniers",
                  "Suivi logistique jusqu'au départ FOB/CFR depuis les ports marocains"
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
                  Forfait de sourcing initial + commission uniquement sur commande confirmée. Modèle transparent, sans frais cachés.
                </p>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Découvrez notre <Link to="/methode" className="text-paprika hover:underline">méthodologie de travail</Link> et les <Link to="/zones-export#afrique" className="text-paprika hover:underline">spécificités du marché ouest-africain</Link>.
              </p>

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
                Sourcing conforme UE depuis le Maroc
              </h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Positionnement
                </h3>
                <p className="text-muted-foreground">
                  Conformité réglementaire européenne, traçabilité complète et maîtrise du risque fournisseur. Respect des normes HACCP, limites LMR et exigences documentaires pour l'import alimentaire en UE.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Cible
                </h3>
                <p className="text-muted-foreground">
                  Importateurs européens structurés avec exigences de conformité élevées, processus d'achat formalisés et volumes récurrents nécessitant des Incoterms DAP ou CIF.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Spécificités du service
                </h3>
                <ul className="space-y-3">
                  {[
                    "Dossier technique complet (fiche produit, CoA, fiches de sécurité) avant engagement",
                    "Échantillons et analyses de laboratoire accrédité si requis (pesticides, métaux lourds)",
                    "Process strict de validation qualité avant toute commande : spécifications, contrôle lot",
                    "Fournisseurs auditables avec certifications BRC, IFS ou équivalent"
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
                  Forfait de sourcing obligatoire couvrant l'audit fournisseur et la constitution du dossier technique. Commission réduite ou optionnelle selon le périmètre de la mission.
                </p>
              </div>

              <div className="mb-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong>Note :</strong> Les demandes sans site web professionnel ou sans engagement sur le forfait ne sont pas traitées. Consultez notre <Link to="/methode" className="text-primary hover:underline">méthodologie</Link> et les <Link to="/zones-export#europe" className="text-primary hover:underline">exigences du marché européen</Link>.
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
                Missions stratégiques de sourcing et gestion du risque fournisseur
              </h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Positionnement
                </h3>
                <p className="text-muted-foreground">
                  Nous ne sommes pas un courtier. Nous intervenons comme filtre de fournisseurs et réducteur de risque pour les entreprises structurées avec des enjeux de supply chain, de conformité qualité et de continuité d'approvisionnement.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Cible
                </h3>
                <p className="text-muted-foreground">
                  Gros importateurs, industriels agroalimentaires et distributeurs structurés recherchant des fournisseurs alternatifs, une diversification des sources ou une sécurisation de leur chaîne d'approvisionnement sur le long terme.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  Valeur apportée
                </h3>
                <ul className="space-y-3">
                  {[
                    "Identification et qualification de fournisseurs alternatifs (capacité, certifications, historique)",
                    "Pré-filtrage conformité : audits documentaires, vérification des process qualité",
                    "Missions cadrées avec livrables définis : shortlist, scoring, rapport de due diligence",
                    "Réduction du risque de dépendance fournisseur et sécurisation de la supply chain"
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
                  <li>• Audit de fournisseurs existants : conformité, capacité, fiabilité</li>
                  <li>• Recherche de fournisseurs alternatifs avec scoring multicritères</li>
                  <li>• Benchmark qualité / prix sur un périmètre défini (produit, volume, spécifications)</li>
                  <li>• Due diligence fournisseur avant contractualisation ou renouvellement</li>
                </ul>
              </div>

              <div className="mb-8 p-4 bg-spice/10 rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Processus :</strong> Chaque mission fait l'objet d'un cadrage préalable avec objectifs, périmètre et livrables définis. Découvrez notre <Link to="/methode" className="text-spice hover:underline">méthodologie structurée</Link>.
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
            <h3 className="text-2xl font-heading font-semibold text-primary-foreground mb-6">
              Besoin d'un accompagnement sourcing adapté à vos enjeux ?
            </h3>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Choisissez le formulaire correspondant à votre zone d'importation et à vos volumes pour nous transmettre votre demande qualifiée.
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