import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { MapPin, ArrowRight } from "lucide-react";
import africaMarket from "@/assets/africa-market.jpg";
import europeWarehouse from "@/assets/europe-warehouse.jpg";

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
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={africaMarket} 
                  alt="Marché africain - Sénégal et Côte d'Ivoire"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paprika/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-semibold text-white">
                      Afrique de l'Ouest
                    </h2>
                    <p className="text-white/80 text-sm">Sénégal, Côte d'Ivoire</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="prose prose-muted max-w-none mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Zone prioritaire pour le sourcing agroalimentaire depuis le Maroc. Les importateurs ouest-africains bénéficient d'une proximité géographique favorable et d'une demande régulière pour les épices et huiles alimentaires marocaines.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Caractéristiques du marché
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-paprika">•</span>
                      Approvisionnement régulier, volumes flexibles
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-paprika">•</span>
                      Exigences documentaires export maîtrisées
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-paprika">•</span>
                      Relations commerciales directes
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Sénégal", "Côte d'Ivoire"].map((country) => (
                    <span key={country} className="px-4 py-2 bg-paprika/10 text-paprika rounded-full text-sm font-medium">
                      {country}
                    </span>
                  ))}
                </div>

                <Button asChild variant="afrique" className="w-full">
                  <Link to="/contact?type=afrique">
                    Demander un sourcing pour l'Afrique
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Europe */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={europeWarehouse} 
                  alt="Entrepôt européen - France et Belgique"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-semibold text-white">
                      Europe
                    </h2>
                    <p className="text-white/80 text-sm">France, Belgique</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="prose prose-muted max-w-none mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Le marché européen impose des exigences de conformité élevées : réglementation UE, traçabilité complète et documentation technique. Notre service Europe est conçu pour répondre à ces standards.
                  </p>
                </div>

                <div className="mb-6">
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
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["France", "Belgique"].map((country) => (
                    <span key={country} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {country}
                    </span>
                  ))}
                </div>

                <Button asChild variant="europe" className="w-full">
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
