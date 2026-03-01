import { ShieldCheck, FileText, Globe } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Certifications reconnues",
    description: "Fournisseurs sélectionnés selon les standards HACCP, BRC, IFS et ISO 22000. Chaque producteur est audité avant intégration dans notre réseau."
  },
  {
    icon: FileText,
    title: "Traçabilité complète",
    description: "Certificats d'analyse (CoA), fiches techniques, rapports d'analyse des résidus (LMR) et documentation phytosanitaire pour chaque lot exporté."
  },
  {
    icon: Globe,
    title: "Conformité export garantie",
    description: "Maîtrise des réglementations UE, des Incoterms (FOB, CFR, DAP) et des exigences documentaires pour l'export vers l'Europe et l'Afrique."
  }
];

const TrustSection = () => (
  <section className="section-padding bg-background">
    <div className="container-page">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-foreground mb-4">
          Qualité, traçabilité et conformité export
        </h2>
        <p className="text-muted-foreground text-lg">
          Un engagement de transparence à chaque étape du sourcing. Votre agent sourcing Maroc vous garantit des fournisseurs certifiés et une documentation irréprochable.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {trustItems.map((item, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-elegant transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <item.icon className="w-7 h-7 text-accent" />
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

export default TrustSection;
