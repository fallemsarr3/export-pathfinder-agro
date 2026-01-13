import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { MapPin, ArrowRight, Globe, Shield, TrendingUp } from "lucide-react";
import africaMarket from "@/assets/africa-market.jpg";
import europeWarehouse from "@/assets/europe-warehouse.jpg";

const ZonesExport = () => {
  return (
    <Layout>
      <Helmet>
        <title>Zones export Maroc – Afrique de l'Ouest et Europe</title>
        <meta name="description" content="Sourcing export depuis le Maroc vers l'Afrique de l'Ouest et l'Europe. Approche adaptée à chaque zone, fournisseurs vérifiés, conformité documentaire." />
      </Helmet>
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
              <div className="h-2 bg-paprika" />
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={africaMarket} 
                  alt="Marché africain avec épices et produits alimentaires" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-paprika/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-paprika" />
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-foreground">
                    Sourcing export vers l'Afrique de l'Ouest
                  </h2>
                </div>

                <div className="prose prose-muted max-w-none mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Zone prioritaire pour le sourcing agroalimentaire depuis le Maroc. Les importateurs ouest-africains – grossistes, distributeurs et industriels agroalimentaires – bénéficient d'une proximité géographique favorable, de coûts logistiques compétitifs via les ports de Casablanca et Tanger Med, et d'une demande régulière pour les <Link to="/services#afrique" className="text-paprika hover:underline">épices et huiles alimentaires marocaines</Link>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Notre connaissance des exigences documentaires locales (certificat d'origine, certificat sanitaire, facture commerciale) et des pratiques commerciales de la région permet un accompagnement adapté, des premiers échanges jusqu'au départ FOB ou CFR de la marchandise.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Caractéristiques du marché ouest-africain
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-paprika">•</span>
                      Approvisionnement régulier, MOQ (quantités minimales) flexibles
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-paprika">•</span>
                      Documents export maîtrisés : certificat d'origine, phytosanitaire, liste de colisage
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-paprika">•</span>
                      Incoterms adaptés : FOB Casablanca, CFR Dakar, CFR Abidjan
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-paprika">•</span>
                      Réactivité et adaptation aux besoins des acheteurs locaux
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Profil des acheteurs ciblés
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Grossistes alimentaires, distributeurs régionaux, transformateurs agroalimentaires et centrales d'achat basés au Sénégal, en Côte d'Ivoire, au Mali, en Guinée et dans la région CEDEAO.
                  </p>
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
              <div className="h-2 bg-primary" />
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={europeWarehouse} 
                  alt="Entrepôt logistique européen moderne" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-foreground">
                    Sourcing conforme vers l'Europe
                  </h2>
                </div>

                <div className="prose prose-muted max-w-none mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Le marché européen impose des exigences de conformité élevées : réglementation UE (règlement CE 178/2002), traçabilité complète lot par lot, fiches techniques détaillées, bulletins d'analyse de laboratoire accrédité et conformité aux LMR (limites maximales de résidus). Notre <Link to="/services#europe" className="text-primary hover:underline">service Europe</Link> est conçu pour répondre à ces standards.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Nous travaillons exclusivement avec des fournisseurs marocains capables de répondre aux exigences des importateurs européens structurés – négociants, transformateurs et distributeurs spécialisés – avec une documentation contrôlée, des processus auditables et une capacité d'export en incoterms CIF ou DAP.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Exigences du marché européen
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Conformité réglementaire UE : HACCP, traçabilité, étiquetage
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Fournisseurs auditables avec certifications (ISO, BRC, IFS selon produit)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Dossier technique complet : fiche produit, CoA, analyses pesticides/métaux lourds
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Validation stricte avant contractualisation : échantillons et contre-analyses
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    Profil des acheteurs ciblés
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Importateurs structurés, négociants en épices et huiles, transformateurs agroalimentaires et distributeurs spécialisés basés en France, Belgique, Espagne, Pays-Bas et dans l'espace Schengen.
                  </p>
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
              Avantages du sourcing depuis le Maroc
            </h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Le Maroc dispose d'une industrie agroalimentaire structurée, d'une position géographique stratégique entre l'Afrique et l'Europe, et d'accords commerciaux préférentiels (accord d'association UE-Maroc, accords CEDEAO) facilitant l'export vers les deux zones. Découvrez <Link to="/methode" className="text-primary hover:underline">notre méthode de sourcing</Link> pour en savoir plus.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Hub logistique stratégique",
                  description: "Ports de Tanger Med et Casablanca : connexions maritimes directes vers Dakar, Abidjan, Anvers, Rotterdam et Marseille."
                },
                {
                  icon: TrendingUp,
                  title: "Filières export structurées",
                  description: "Exportateurs expérimentés, certifications qualité (ISO, HACCP) et capacité de production industrielle."
                },
                {
                  icon: Shield,
                  title: "Cadre réglementaire favorable",
                  description: "Accord d'association UE-Maroc, accords bilatéraux africains et procédures douanières maîtrisées."
                }
              ].map((item, i) => (
                <div key={i} className="text-left bg-card border border-border rounded-lg p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
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
            <h3 className="text-2xl font-heading font-semibold text-primary-foreground mb-6">
              Vous importez depuis une autre zone ?
            </h3>
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
