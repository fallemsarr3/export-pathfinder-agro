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
        <title>Méthode de sourcing export – Process structuré</title>
        <meta name="description" content="Processus de sourcing export structuré et documenté. 6 étapes claires pour sécuriser vos importations d'épices et huiles alimentaires depuis le Maroc." />
        <link rel="canonical" href="https://www.sarrtradelink.com/methode" />
      </Helmet>
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
              Notre approche
            </span>
            <h1 className="text-primary-foreground mb-6">
              Une méthode claire pour sécuriser vos importations
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Processus de sourcing export structuré et documenté. Chaque étape est définie pour garantir la transparence et la maîtrise du risque. Nos <Link to="/services" className="underline hover:no-underline">services de sourcing</Link> s'appuient sur cette méthode.
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
