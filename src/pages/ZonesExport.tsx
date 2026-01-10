import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { MapPin, ArrowRight } from "lucide-react";

const ZonesExport = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
              Couverture géographique
            </span>
            <h1 className="text-primary-foreground mb-6">
              Zones d'export couvertes
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Agent de sourcing export au Maroc pour l'Afrique de l'Ouest et l'Europe. Deux zones, deux approches adaptées aux exigences locales.
            </p>
          </div>
        </div>
      </section>

      {/* Zones Grid */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Afrique */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="h-3 bg-secondary" />
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-semibold text-foreground">
                      Afrique de l'Ouest
                    </h2>
                    <p className="text-muted-foreground text-sm">Sénégal, Côte d'Ivoire</p>
                  </div>
                </div>

                <div className="prose prose-muted max-w-none mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Zone prioritaire pour le sourcing agroalimentaire depuis le Maroc. Les importateurs ouest-africains bénéficient d'une proximité géographique favorable, de coûts logistiques compétitifs et d'une demande régulière pour les épices et huiles alimentaires marocaines.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Notre connaissance des exigences documentaires locales et des pratiques commerciales de la région permet un accompagnement adapté, des premiers échanges jusqu'au départ de la marchandise.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Caractéristiques du marché
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      Approvisionnement régulier, volumes flexibles
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      Exigences documentaires export maîtrisées
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      Relations commerciales directes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      Réactivité et adaptation aux besoins
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Sénégal", "Côte d'Ivoire"].map((country) => (
                    <span key={country} className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                      {country}
                    </span>
                  ))}
                </div>

                <Button asChild variant="secondary" className="w-full">
                  <Link to="/contact?type=afrique">
                    Demander un sourcing pour l'Afrique
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Europe */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="h-3 bg-primary" />
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-semibold text-foreground">
                      Europe
                    </h2>
                    <p className="text-muted-foreground text-sm">France, Belgique</p>
                  </div>
                </div>

                <div className="prose prose-muted max-w-none mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Le marché européen impose des exigences de conformité élevées : réglementation UE, traçabilité complète, documentation technique et analyses de laboratoire. Notre service Europe est conçu pour répondre à ces standards.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Nous travaillons exclusivement avec des fournisseurs marocains capables de répondre aux exigences des importateurs européens structurés, avec une documentation contrôlée et des processus auditables.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Caractéristiques du marché
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Sourcing conforme aux normes UE
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Fournisseurs auditables et documentation contrôlée
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Dossier technique avant engagement
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Process strict de validation
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["France", "Belgique"].map((country) => (
                    <span key={country} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {country}
                    </span>
                  ))}
                </div>

                <Button asChild className="w-full">
                  <Link to="/contact?type=europe">
                    Lancer un sourcing pour l'Europe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-muted">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-foreground mb-6">
              Pourquoi le Maroc comme base de sourcing ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Le Maroc dispose d'une industrie agroalimentaire structurée, d'une position géographique stratégique entre l'Afrique et l'Europe, et d'accords commerciaux facilitant l'export vers les deux zones.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Position stratégique",
                  description: "Porte d'entrée vers l'Afrique et proximité avec l'Europe méditerranéenne."
                },
                {
                  title: "Industrie structurée",
                  description: "Filières agroalimentaires établies avec des exportateurs expérimentés."
                },
                {
                  title: "Accords commerciaux",
                  description: "Accords bilatéraux facilitant l'export vers l'Afrique et l'Union Européenne."
                }
              ].map((item, i) => (
                <div key={i} className="text-left">
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-page text-center">
          <h2 className="text-primary-foreground mb-6">
            Vous importez depuis une autre zone ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Nous concentrons actuellement nos services sur l'Afrique de l'Ouest et l'Europe. Si vous êtes basé dans une autre région, contactez-nous pour évaluer la faisabilité.
          </p>
          <Button asChild variant="hero" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ZonesExport;
