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
        <title>Export Maroc → Europe, Afrique & Canada — Épices & Huiles B2B</title>
        <meta name="description" content="Sourcing export Maroc vers Europe, Afrique de l'Ouest et Canada. Conformité documentaire, Incoterms FOB/CFR/CIF. Agent terrain vérifié." />
        <link rel="canonical" href="https://www.sarrtradelink.com/zones-export" />
        <link rel="alternate" hrefLang="fr" href="https://www.sarrtradelink.com/zones-export" />
        <link rel="alternate" hrefLang="x-default" href="https://www.sarrtradelink.com/zones-export" />
        <meta property="og:title" content="Export Maroc → Europe, Afrique & Canada — Épices & Huiles B2B" />
        <meta property="og:description" content="Sourcing export Maroc vers Europe, Afrique de l'Ouest et Canada. Conformité documentaire, Incoterms FOB/CFR/CIF. Agent terrain vérifié." />
        <meta property="og:url" content="https://www.sarrtradelink.com/zones-export" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Export Maroc → Europe, Afrique & Canada — Épices & Huiles B2B" />
        <meta name="twitter:description" content="Sourcing export Maroc vers Europe, Afrique de l'Ouest et Canada. Conformité documentaire, Incoterms FOB/CFR/CIF. Agent terrain vérifié." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Travaillez-vous uniquement avec l'Afrique et l'Europe ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Non. Notre activité de sourcing export depuis le Maroc couvre trois zones : l'Afrique de l'Ouest, l'Europe et le Canada. Ces marchés représentent les débouchés les plus structurés pour les épices et huiles alimentaires marocaines. Si vous êtes importateur dans une autre région, nous pouvons évaluer la faisabilité d'un sourcing adapté à votre zone sur demande." }
              },
              {
                "@type": "Question",
                "name": "Le sourcing export vers l'Europe est-il conforme aux normes UE ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Oui. Chaque fournisseur marocain que nous référençons pour le marché européen est vérifié sur sa capacité à répondre aux exigences réglementaires de l'Union européenne : traçabilité lot par lot, conformité HACCP, fiches techniques détaillées, bulletins d'analyse de laboratoire accrédité et respect des limites maximales de résidus (LMR). Nous contrôlons l'ensemble du dossier documentaire avant toute expédition, afin de garantir une conformité totale aux standards du marché européen." }
              },
            ]
          })}
        </script>
      </Helmet>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
              Couverture géographique
            </span>
            <h1 className="text-primary-foreground mb-6">
              Sourcing export depuis le Maroc vers l'Afrique, l'Europe et le Canada
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Agent de sourcing export au Maroc pour l'Afrique de l'Ouest, l'Europe et le Canada. Trois zones, trois approches adaptées aux exigences locales.
            </p>
            <p className="text-primary-foreground/70 mt-6 leading-relaxed max-w-2xl">
              Sarr Trade Link est un agent de sourcing export basé au Maroc, spécialisé dans les épices, les huiles alimentaires et les produits agroalimentaires à forte valeur ajoutée. Notre rôle est de connecter les importateurs africains et européens avec des fournisseurs marocains rigoureusement sélectionnés. Contrairement à un négociant ou un trader, nous n'achetons ni ne revendons de marchandise : nous intervenons comme intermédiaire indépendant, chargé de la recherche de fournisseurs, de la vérification qualité, du contrôle documentaire et de la coordination logistique. Notre mission est de sécuriser chaque opération d'approvisionnement en réduisant les risques liés au sourcing international, tout en garantissant la conformité aux exigences réglementaires de chaque zone de destination – <Link to="/services#afrique" className="text-primary-foreground underline">Afrique de l'Ouest</Link> comme <Link to="/services#europe" className="text-primary-foreground underline">Union européenne</Link>.
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

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-foreground mb-10 text-center">
              Questions fréquentes sur nos zones d'export
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">
                  Travaillez-vous uniquement avec l'Afrique et l'Europe ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Actuellement, notre activité de sourcing export depuis le Maroc se concentre sur deux zones prioritaires : l'Afrique de l'Ouest (Sénégal, Côte d'Ivoire, Mali, Guinée) et l'Europe (France, Belgique, Espagne, Pays-Bas). Ces marchés représentent les débouchés les plus structurés pour les épices et huiles alimentaires marocaines, avec des flux commerciaux réguliers et des cadres réglementaires que nous maîtrisons. Si vous êtes importateur dans une autre région, nous pouvons évaluer la faisabilité d'un sourcing adapté à votre zone sur demande.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">
                  Le sourcing export vers l'Europe est-il conforme aux normes UE ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oui. Chaque fournisseur marocain que nous référençons pour le marché européen est vérifié sur sa capacité à répondre aux exigences réglementaires de l'Union européenne : traçabilité lot par lot, conformité HACCP, fiches techniques détaillées, bulletins d'analyse de laboratoire accrédité et respect des limites maximales de résidus (LMR). Nous contrôlons l'ensemble du dossier documentaire avant toute expédition, afin de garantir une conformité totale aux standards du marché européen pour chaque opération de sourcing export.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">
                  Comment sélectionnez-vous les fournisseurs marocains ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notre processus de sélection repose sur une vérification terrain approfondie. Chaque fournisseur marocain est évalué sur sa capacité de production, ses certifications qualité (ISO, BRC, IFS selon le produit), la traçabilité de ses matières premières, et sa conformité documentaire à l'export. Nous réalisons des visites d'usine, demandons des échantillons et vérifions les références commerciales avant d'intégrer un fournisseur dans notre réseau de sourcing au Maroc.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">
                  Accompagnez-vous les importateurs africains débutants ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oui. Notre service de sourcing export depuis le Maroc est conçu pour accompagner aussi bien les importateurs expérimentés que ceux qui débutent dans l'approvisionnement international. Pour les acheteurs africains qui découvrent le sourcing depuis le Maroc, nous proposons un accompagnement complet : identification des fournisseurs adaptés, négociation des conditions commerciales, préparation des documents export (certificat d'origine, certificat phytosanitaire) et coordination logistique en incoterms FOB ou CFR.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">
                  Pourquoi passer par un agent de sourcing au Maroc plutôt que traiter directement avec un fournisseur ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Traiter directement avec un fournisseur marocain sans intermédiaire expose l'importateur à plusieurs risques : qualité non conforme, retards de livraison, documentation incomplète ou litiges commerciaux difficiles à résoudre à distance. Un agent de sourcing export au Maroc comme Sarr Trade Link sécurise l'opération en vérifiant les fournisseurs en amont, en contrôlant la qualité et la conformité documentaire, et en assurant la coordination entre toutes les parties prenantes de la chaîne d'approvisionnement.
                </p>
              </div>
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
