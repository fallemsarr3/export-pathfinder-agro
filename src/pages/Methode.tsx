import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle, ArrowRight } from "lucide-react";

const Methode = () => {
  const steps = [
    {
      number: "01",
      title: "Qualification du besoin",
      description: "Analyse de votre demande, vérification de la compatibilité avec notre périmètre produit et définition du cadre de la mission.",
      details: [
        "Formulaire qualifiant selon votre zone",
        "Échange initial pour préciser le besoin",
        "Validation du périmètre et des conditions"
      ]
    },
    {
      number: "02",
      title: "Sourcing fournisseurs",
      description: "Identification et présélection des fournisseurs marocains correspondant à vos critères de qualité, volume et conformité.",
      details: [
        "Recherche dans notre réseau qualifié",
        "Vérification des capacités et certifications",
        "Sélection des candidats pertinents"
      ]
    },
    {
      number: "03",
      title: "Comparatif et négociation",
      description: "Mise en concurrence des fournisseurs sélectionnés, négociation des conditions et présentation des options.",
      details: [
        "Demande de cotations détaillées",
        "Négociation prix, MOQ, délais",
        "Comparatif structuré pour décision"
      ]
    },
    {
      number: "04",
      title: "Validation documentaire",
      description: "Vérification de la documentation export et conformité selon les exigences de votre zone d'importation.",
      details: [
        "Contrôle des documents fournisseur",
        "Validation conformité réglementaire",
        "Préparation du dossier export"
      ]
    },
    {
      number: "05",
      title: "Coordination export",
      description: "Interface avec le transitaire et coordination des aspects logistiques jusqu'au départ de la marchandise.",
      details: [
        "Liaison avec le transitaire",
        "Suivi préparation de commande",
        "Vérification documents de transport"
      ]
    },
    {
      number: "06",
      title: "Suivi jusqu'au départ",
      description: "Accompagnement jusqu'à l'expédition effective et transmission des documents finaux.",
      details: [
        "Confirmation de chargement",
        "Transmission documents export",
        "Clôture de la mission"
      ]
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Méthode de sourcing export au Maroc – Process structuré</title>
        <meta name="description" content="Méthode de sourcing export structurée au Maroc. 6 étapes claires pour sécuriser vos importations d'épices et huiles alimentaires vers l'Afrique et l'Europe." />
        <link rel="canonical" href="https://www.sarrtradelink.com/methode" />
        <meta property="og:title" content="Méthode de sourcing export au Maroc – Process structuré | Sarr Trade Link" />
        <meta property="og:description" content="6 étapes claires pour sécuriser vos importations d'épices et huiles alimentaires depuis le Maroc." />
        <meta property="og:url" content="https://www.sarrtradelink.com/methode" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Méthode de sourcing export au Maroc – Process structuré | Sarr Trade Link" />
        <meta name="twitter:description" content="6 étapes claires pour sécuriser vos importations d'épices et huiles alimentaires depuis le Maroc." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Pourquoi une méthode structurée est-elle essentielle en sourcing export ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le sourcing export depuis le Maroc implique de multiples interlocuteurs, des contraintes documentaires et des exigences réglementaires variables selon la zone d'importation. Sans méthode structurée, les risques de non-conformité, de retards ou de surcoûts augmentent considérablement. Notre processus en six étapes garantit une traçabilité complète, de la qualification du besoin jusqu'à l'expédition. Chaque phase est documentée avec des livrables définis, permettant à l'importateur de garder une visibilité totale sur l'avancement de sa mission de sourcing."
                }
              },
              {
                "@type": "Question",
                "name": "Comment vérifiez-vous les fournisseurs marocains ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La vérification des fournisseurs marocains repose sur plusieurs critères objectifs : capacité de production, certifications qualité (HACCP, BRC, IFS selon les exigences), historique d'export et conformité documentaire. Nous vérifions les certificats d'analyse, les fiches techniques et la capacité du fournisseur à produire la documentation export requise pour votre zone d'importation. Aucun fournisseur n'est recommandé sans validation préalable de ces éléments essentiels pour sécuriser votre approvisionnement en épices et huiles alimentaires."
                }
              },
              {
                "@type": "Question",
                "name": "Intervenez-vous avant ou après la négociation commerciale ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Notre intervention couvre l'ensemble du processus, y compris la phase de négociation. En tant qu'agent de sourcing export au Maroc, nous gérons la mise en concurrence des fournisseurs présélectionnés, la négociation des prix, des MOQ et des délais de production. L'importateur reçoit un comparatif structuré pour prendre sa décision en toute connaissance de cause. Nous n'achetons ni ne revendons la marchandise : notre rôle est de faciliter et sécuriser la relation commerciale entre l'importateur et le fournisseur marocain."
                }
              },
              {
                "@type": "Question",
                "name": "Gérez-vous la logistique internationale ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non, la logistique internationale complète (transport maritime, aérien, dédouanement) n'entre pas dans notre périmètre. En revanche, nous assurons la coordination avec le transitaire désigné et vérifions la conformité des documents de transport et d'export. Notre rôle d'agent de sourcing export s'arrête au départ effectif de la marchandise depuis le Maroc. Cette délimitation claire garantit notre efficacité sur notre cœur de métier : le sourcing, la vérification fournisseur et la conformité documentaire."
                }
              },
              {
                "@type": "Question",
                "name": "En quoi votre méthode réduit-elle le risque importateur ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Notre méthode réduit le risque importateur à plusieurs niveaux. D'abord, la qualification initiale du besoin évite les incompatibilités de périmètre. Ensuite, la vérification systématique des fournisseurs marocains élimine les acteurs non fiables. La validation documentaire préalable à l'expédition prévient les blocages en douane. Enfin, chaque étape produit des livrables vérifiables, offrant une traçabilité complète. Pour les importateurs d'épices et huiles alimentaires en Afrique et en Europe, cette approche structurée transforme un achat international risqué en processus maîtrisé."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
              Notre approche
            </span>
            <h1 className="text-primary-foreground mb-6">
              Méthode de sourcing export au Maroc pour sécuriser vos importations
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-4">
              En tant qu'agent de sourcing export basé au Maroc, nous accompagnons les importateurs d'Afrique et d'Europe dans l'identification et la sélection de fournisseurs marocains fiables, spécialisés en épices, huiles alimentaires et produits agroalimentaires. Notre rôle ne consiste jamais à acheter ou revendre de la marchandise : nous intervenons exclusivement comme intermédiaire facilitateur et partenaire de maîtrise du risque.
            </p>
            <p className="text-lg text-primary-foreground/70">
              Un sourcing export réussi repose sur un processus structuré et documenté. Chaque étape de notre méthode est conçue pour garantir la transparence, la traçabilité et la conformité documentaire, de la qualification initiale du besoin jusqu'à l'expédition effective depuis le Maroc. Nos <Link to="/services" className="underline hover:no-underline">services de sourcing</Link> s'appuient intégralement sur cette méthode éprouvée, adaptée aux exigences réglementaires de chaque zone d'importation.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-px bg-border" />
                )}
                
                <div className="flex gap-8 pb-12">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-heading font-bold text-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {step.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="section-padding bg-muted">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-foreground mb-4">
                Nos engagements
              </h2>
              <p className="text-muted-foreground text-lg">
                Des principes clairs qui guident chaque mission de sourcing, que ce soit pour <Link to="/zones-export#afrique" className="text-primary hover:underline">l'Afrique de l'Ouest</Link> ou <Link to="/zones-export#europe" className="text-primary hover:underline">l'Europe</Link>.
                
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Aucune promesse irréaliste",
                  description: "Nous ne promettons jamais ce que nous ne pouvons pas délivrer. Chaque engagement est documenté et réalisable."
                },
                {
                  title: "Aucun travail sans cadre clair",
                  description: "Chaque mission est définie en amont : périmètre, conditions, livrables. Pas d'ambiguïté, pas de mauvaises surprises."
                },
                {
                  title: "Aucun engagement sans visibilité",
                  description: "Nous ne démarrons pas une mission sans avoir validé la compatibilité avec notre périmètre et vos attentes."
                }
              ].map((engagement, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    {engagement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {engagement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <div className="bg-muted rounded-lg p-8 lg:p-12">
              <h2 className="text-foreground mb-6">
                Ce qui est hors de notre périmètre
              </h2>
              <p className="text-muted-foreground mb-8">
                Pour maintenir la qualité de notre service et éviter toute ambiguïté, certaines activités sont explicitement exclues de notre offre.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Vente directe de marchandises",
                  "Financement de commandes",
                  "Gestion de stock",
                  "Transport et logistique complète",
                  "Produits hors périmètre (épices et huiles)",
                  "Travail sans forfait préalable"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-destructive font-bold text-lg">✕</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-foreground mb-10 text-center">
              Questions fréquentes sur notre méthode de sourcing export
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-3">
                  Pourquoi une méthode structurée est-elle essentielle en sourcing export ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Le sourcing export depuis le Maroc implique de multiples interlocuteurs, des contraintes documentaires et des exigences réglementaires variables selon la zone d'importation. Sans méthode structurée, les risques de non-conformité, de retards ou de surcoûts augmentent considérablement. Notre processus en six étapes garantit une traçabilité complète, de la qualification du besoin jusqu'à l'expédition. Chaque phase est documentée avec des livrables définis, permettant à l'importateur de garder une visibilité totale sur l'avancement de sa mission de sourcing.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-3">
                  Comment vérifiez-vous les fournisseurs marocains ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  La vérification des fournisseurs marocains repose sur plusieurs critères objectifs : capacité de production, certifications qualité (HACCP, BRC, IFS selon les exigences), historique d'export et conformité documentaire. Nous vérifions les certificats d'analyse, les fiches techniques et la capacité du fournisseur à produire la documentation export requise pour votre zone d'importation. Aucun fournisseur n'est recommandé sans validation préalable de ces éléments essentiels pour sécuriser votre approvisionnement en épices et huiles alimentaires.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-3">
                  Intervenez-vous avant ou après la négociation commerciale ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notre intervention couvre l'ensemble du processus, y compris la phase de négociation. En tant qu'agent de sourcing export au Maroc, nous gérons la mise en concurrence des fournisseurs présélectionnés, la négociation des prix, des MOQ et des délais de production. L'importateur reçoit un comparatif structuré pour prendre sa décision en toute connaissance de cause. Nous n'achetons ni ne revendons la marchandise : notre rôle est de faciliter et sécuriser la relation commerciale entre l'importateur et le fournisseur marocain.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-3">
                  Gérez-vous la logistique internationale ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Non, la logistique internationale complète (transport maritime, aérien, dédouanement) n'entre pas dans notre périmètre. En revanche, nous assurons la coordination avec le transitaire désigné et vérifions la conformité des documents de transport et d'export. Notre rôle d'agent de sourcing export s'arrête au départ effectif de la marchandise depuis le Maroc. Cette délimitation claire garantit notre efficacité sur notre cœur de métier : le sourcing, la vérification fournisseur et la conformité documentaire.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-3">
                  En quoi votre méthode réduit-elle le risque importateur ?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Notre méthode réduit le risque importateur à plusieurs niveaux. D'abord, la qualification initiale du besoin évite les incompatibilités de périmètre. Ensuite, la vérification systématique des fournisseurs marocains élimine les acteurs non fiables. La validation documentaire préalable à l'expédition prévient les blocages en douane. Enfin, chaque étape produit des livrables vérifiables, offrant une traçabilité complète. Pour les importateurs d'épices et huiles alimentaires en Afrique et en Europe, cette approche structurée transforme un achat international risqué en processus maîtrisé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-page text-center">
          <h2 className="text-primary-foreground mb-6">
            Prêt à démarrer un sourcing structuré ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Sélectionnez votre zone d'importation et remplissez le formulaire qualifiant correspondant.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">
                Accéder aux formulaires
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline-hero">
              <Link to="/services">Voir les services détaillés</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Methode;
