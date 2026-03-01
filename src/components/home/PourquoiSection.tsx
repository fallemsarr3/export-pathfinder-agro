import { Link } from "react-router-dom";
import { CheckCircle, Shield, FileCheck, Users } from "lucide-react";

const differentiators = [
  {
    icon: CheckCircle,
    title: "Fournisseurs vérifiés sur le terrain",
    description: "Chaque producteur et exportateur marocain est audité : capacité de production, certifications (HACCP, BRC, ISO), traçabilité et historique export.",
    link: "/a-propos"
  },
  {
    icon: Shield,
    title: "Contrôle qualité intégré",
    description: "Analyses laboratoire, certificats d'analyse (CoA), vérification des LMR et conformité aux normes européennes avant chaque expédition.",
    link: "/methode"
  },
  {
    icon: FileCheck,
    title: "Process documenté et transparent",
    description: "Méthodologie de sourcing structurée : cahier des charges, shortlist fournisseurs, échantillonnage, négociation et coordination documentaire export.",
    link: "/methode"
  },
  {
    icon: Users,
    title: "Modèle zéro stock, zéro risque",
    description: "Agent de sourcing pur : aucun financement de marchandise, aucune gestion de stock. Vous gardez le contrôle total de vos achats.",
    link: "/services"
  }
];

const PourquoiSection = () => (
  <section className="section-padding bg-background">
    <div className="container-page">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-foreground mb-4">
          Pourquoi Sarr Trade Link ?
        </h2>
        <p className="text-muted-foreground text-lg">
          Un agent sourcing Maroc spécialisé dans un périmètre volontairement limité pour garantir qualité, fiabilité et réactivité à chaque mission.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {differentiators.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-elegant transition-all duration-300 block"
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
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default PourquoiSection;
