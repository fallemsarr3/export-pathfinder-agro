import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle, ArrowRight } from "lucide-react";
import spicesDisplay from "@/assets/spices-display.jpg";
import oilsDisplay from "@/assets/oils-display.jpg";

const APropos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
              Qui sommes-nous
            </span>
            <h1 className="text-primary-foreground mb-6">
              À propos
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Agent de sourcing export basé au Maroc, spécialisé dans l'agroalimentaire avec un focus sur les épices et huiles alimentaires.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main text */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-heading text-foreground">
                  Agent de sourcing agroalimentaire au Maroc
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nous sommes un agent de sourcing export basé au Maroc, spécialisé exclusivement dans le secteur agroalimentaire. Notre activité se concentre sur un périmètre produit volontairement limité : les épices et les huiles alimentaires marocaines destinées à l'export. Découvrez nos <Link to="/services" className="text-primary hover:underline">services de sourcing</Link> adaptés à chaque marché.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cette spécialisation nous permet de développer une connaissance approfondie des fournisseurs, des standards de qualité et des exigences réglementaires propres à ce secteur. Plutôt que de couvrir un large spectre de produits, nous avons fait le choix de l'expertise et de la maîtrise.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Notre positionnement est celui d'un intermédiaire qualifié entre les importateurs et les fournisseurs marocains. Nous n'achetons pas de marchandises, nous ne gérons pas de stock, nous ne finançons pas les commandes. Notre valeur réside dans notre capacité à identifier, vérifier et coordonner les bonnes relations commerciales.
                </p>

                {/* Product Images */}
                <div className="grid md:grid-cols-2 gap-6 my-12">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={spicesDisplay} 
                      alt="Épices marocaines premium - paprika, cumin, gingembre" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="bg-sage/30 p-4">
                      <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Épices marocaines</h4>
                      <p className="text-muted-foreground text-xs">Paprika, cumin, gingembre</p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={oilsDisplay} 
                      alt="Huiles alimentaires marocaines - olive et argan" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="bg-sage/30 p-4">
                      <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Huiles alimentaires</h4>
                      <p className="text-muted-foreground text-xs">Huile d'olive, huile d'argan</p>
                    </div>
                  </div>
                </div>

                <h3 className="font-heading text-foreground mt-12">
                  Une approche orientée fiabilité et conformité
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  L'import-export agroalimentaire comporte des risques significatifs : fournisseurs peu fiables, qualité inconstante, documentation incomplète, délais non respectés. Notre rôle est de réduire ces risques en amont, avant que les problèmes ne surviennent. Notre <Link to="/methode" className="text-primary hover:underline">méthodologie structurée</Link> garantit transparence et rigueur à chaque étape.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Pour les <Link to="/zones-export#europe" className="text-primary hover:underline">marchés européens</Link>, nous accordons une attention particulière à la conformité réglementaire UE. Chaque fournisseur avec lequel nous travaillons pour ce marché doit être capable de fournir une documentation complète et vérifiable.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Pour les <Link to="/zones-export#afrique" className="text-primary hover:underline">marchés africains</Link>, nous nous concentrons sur la régularité des approvisionnements, la fiabilité des partenaires et la maîtrise des exigences documentaires export.
                </p>

                <h3 className="font-heading text-foreground mt-12">
                  Zones d'intervention
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous accompagnons actuellement les importateurs basés en <Link to="/zones-export#afrique" className="text-primary hover:underline">Afrique de l'Ouest</Link> (Sénégal, Côte d'Ivoire) et en <Link to="/zones-export#europe" className="text-primary hover:underline">Europe</Link> (France, Belgique). Ces deux zones représentent des marchés avec des exigences différentes, mais une même attente de fiabilité et de professionnalisme. Consultez nos <Link to="/contact" className="text-primary hover:underline">formulaires de contact</Link> adaptés à chaque zone.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                {/* What we do */}
                <div className="bg-sage/30 rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    Ce que nous faisons
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Sourcing de fournisseurs marocains",
                      "Vérification qualité et capacité",
                      "Négociation prix et conditions",
                      "Coordination documentaire export",
                      "Suivi jusqu'à l'expédition"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What we don't do */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    Ce que nous ne faisons pas
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Vente de marchandises",
                      "Financement de commandes",
                      "Gestion de stock",
                      "Transport complet"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-destructive font-bold">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Products */}
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    Périmètre produit
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Épices</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Paprika", "Cumin", "Gingembre"].map((spice) => (
                          <span key={spice} className="px-2 py-1 bg-paprika/10 text-paprika text-xs rounded">
                            {spice}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Huiles</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Huile d'olive", "Huile d'argan"].map((oil) => (
                          <span key={oil} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                            {oil}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-page text-center">
          <h2 className="text-primary-foreground mb-6">
            Besoin d'un sourcing fiable au Maroc ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Découvrez nos services adaptés à votre zone d'importation ou contactez-nous directement pour discuter de votre projet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/services">
                Découvrir les services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline-hero">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
