import { Send, Search, Truck } from "lucide-react";

const steps = [
  {
    icon: Send,
    step: "01",
    title: "Demande",
    description: "Vous nous transmettez votre cahier des charges : produits recherchés, volumes, exigences qualité, calendrier et zone de destination."
  },
  {
    icon: Search,
    step: "02",
    title: "Sourcing & Contrôle qualité",
    description: "Nous identifions les fournisseurs marocains qualifiés, organisons l'échantillonnage, les analyses laboratoire et négocions les conditions commerciales."
  },
  {
    icon: Truck,
    step: "03",
    title: "Livraison",
    description: "Coordination documentaire complète (CoA, certificats phytosanitaires, Incoterms), suivi de la production et accompagnement jusqu'à l'expédition."
  }
];

const CommentCaMarcheSection = () => (
  <section className="section-padding bg-sage/30">
    <div className="container-page">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-foreground mb-4">
          Comment ça marche ?
        </h2>
        <p className="text-muted-foreground text-lg">
          Un process de sourcing structuré en 3 étapes pour sécuriser votre approvisionnement en épices marocaines export et huiles alimentaires Maroc B2B.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((item, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-elegant transition-all duration-300 relative">
            <span className="absolute top-4 right-4 text-5xl font-heading font-bold text-primary/10">
              {item.step}
            </span>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
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
);

export default CommentCaMarcheSection;
