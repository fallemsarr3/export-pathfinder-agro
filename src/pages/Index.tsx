import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle, ArrowRight, Shield, FileCheck, Users } from "lucide-react";
import heroImage from "@/assets/hero-spices.jpg";

const Index = () => {
  return (
    <Layout>
      {/* SEO Meta Tags are handled via index.html and React Helmet would be added for dynamic pages */}
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Épices marocaines export - paprika, cumin, safran de qualité"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        <div className="container-page relative z-10 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6 animate-fade-in">
              Agroalimentaire • Épices • Huiles
            </span>
            
            <h1 className="text-primary-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Agent de sourcing export basé au Maroc
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Épices et huiles alimentaires – fournisseurs vérifiés – process export sécurisé
            </p>
            
            <p className="text-lg text-primary-foreground/75 mb-10 max-w-2xl animate-slide-up" style={{ animationDelay: "0.3s" }}>
              Accompagnement des importateurs africains et européens dans leur sourcing agroalimentaire au Maroc. Sélection rigoureuse des fournisseurs, coordination documentaire et suivi export.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild variant="hero">
                <Link to="/services">
                  Découvrir les services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline-hero">
                <Link to="/contact">Demander un sourcing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-foreground mb-4">
              Un périmètre maîtrisé, une expertise concentrée
            </h2>
            <p className="text-muted-foreground text-lg">
              Agent de sourcing export spécialisé dans un périmètre volontairement limité pour garantir qualité et fiabilité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Fournisseurs vérifiés",
                description: "Sélection rigoureuse des producteurs et exportateurs marocains, vérification qualité et capacité."
              },
              {
                icon: Shield,
                title: "Périmètre limité",
                description: "Focus exclusif sur les épices et huiles alimentaires pour une expertise approfondie."
              },
              {
                icon: FileCheck,
                title: "Process documenté",
                description: "Méthodologie claire de sourcing, négociation et coordination export."
              },
              {
                icon: Users,
                title: "Zéro stock",
                description: "Aucun financement de marchandise, aucune gestion de stock. Service de sourcing pur."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-elegant transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-muted">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-foreground mb-4">
              Services adaptés à votre zone d'importation
            </h2>
            <p className="text-muted-foreground text-lg">
              Chaque marché a ses propres exigences. Nos services sont structurés selon votre zone géographique et votre niveau de maturité.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Afrique */}
            <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="h-2 bg-secondary" />
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium mb-4">
                  Afrique de l'Ouest
                </span>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Sourcing Maroc → Afrique
                </h3>
                <p className="text-muted-foreground mb-6">
                  Approvisionnement régulier pour importateurs alimentaires, grossistes et distributeurs. Volumes flexibles et exigences documentaires maîtrisées.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    Sourcing et vérification fournisseurs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    Négociation prix et MOQ
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    Coordination documentaire export
                  </li>
                </ul>
                <Button asChild variant="secondary" className="w-full">
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
                  Conformité UE, traçabilité et maîtrise du risque fournisseur pour importateurs européens structurés.
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
                    Process strict avant commande
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact?type=europe">Lancer un sourcing UE</Link>
                </Button>
              </div>
            </div>

            {/* Premium */}
            <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-gold to-terracotta" />
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-xs font-medium mb-4">
                  Premium
                </span>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Sourcing stratégique
                </h3>
                <p className="text-muted-foreground mb-6">
                  Missions cadrées pour gros importateurs, industriels et distributeurs structurés. Réduction du risque fournisseur.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Fournisseurs alternatifs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    Pré-filtrage conformité
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
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

      {/* Products Section */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-foreground mb-6">
                Épices et huiles alimentaires du Maroc
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Périmètre produit volontairement limité pour garantir une expertise approfondie et une connaissance fine des fournisseurs marocains.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    Épices
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Paprika", "Cumin", "Gingembre", "Curcuma", "Cannelle"].map((spice) => (
                      <span key={spice} className="px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full text-sm">
                        {spice}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    Huiles alimentaires
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Huile d'olive", "Huile d'argan alimentaire"].map((oil) => (
                      <span key={oil} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                        {oil}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-8 lg:p-12">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                Ce que nous ne faisons pas
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold">✕</span>
                  <span>Nous ne vendons pas de marchandises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold">✕</span>
                  <span>Nous ne finançons pas les commandes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold">✕</span>
                  <span>Nous ne gérons pas de stock</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-destructive font-bold">✕</span>
                  <span>Nous ne travaillons pas sur tous les produits</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-foreground font-medium">
                  Nous accompagnons les importateurs dans leurs décisions de sourcing avec un process clair et documenté.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-page text-center">
          <h2 className="text-primary-foreground mb-6">
            Prêt à sécuriser votre sourcing au Maroc ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Sélectionnez votre zone d'importation et accédez au formulaire de contact adapté à votre profil.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Accéder aux formulaires de contact</Link>
            </Button>
            <Button asChild variant="outline-hero">
              <Link to="/methode">Découvrir notre méthode</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
