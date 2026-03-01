import { Link } from "react-router-dom";

const epices = [
  { name: "Safran du Maroc", href: "/produits/safran-maroc" },
  { name: "Cumin du Maroc", href: "/produits/cumin-maroc" },
  { name: "Ras el Hanout", href: "/produits/ras-el-hanout" },
  { name: "Gingembre en poudre", href: "/produits/gingembre-poudre" },
  { name: "Paprika marocain", href: "/produits/paprika-marocain" },
  { name: "Coriandre", href: "/produits/coriandre" },
  { name: "Mélanges d'épices", href: "/produits/melanges-epices" },
];

const huiles = [
  { name: "Huile d'Argan Alimentaire", href: "/produits/huile-argan-alimentaire" },
  { name: "Huile d'Olive Extra-Vierge", href: "/produits/huile-olive-maroc" },
];

const ProduitsSection = () => (
  <section className="section-padding bg-background">
    <div className="container-page">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-foreground mb-6">
            Nos Produits – Épices marocaines export & huiles alimentaires
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Un périmètre produit volontairement limité pour garantir une expertise approfondie, une connaissance fine des fournisseurs marocains et un contrôle qualité sans compromis. Chaque référence est sourcée auprès de producteurs vérifiés selon les normes HACCP et les exigences réglementaires européennes.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                Épices
              </h3>
              <div className="flex flex-wrap gap-2">
                {epices.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="px-4 py-2 bg-paprika/10 text-paprika rounded-full text-sm font-medium hover:bg-paprika/20 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                Huiles alimentaires
              </h3>
              <div className="flex flex-wrap gap-2">
                {huiles.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-sage/30 rounded-lg p-8 lg:p-12">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
            Périmètre d'intervention
          </h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-destructive font-bold">✕</span>
              <span>Nous ne vendons pas de marchandises</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-destructive font-bold">✕</span>
              <span>Nous ne finançons pas les commandes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-destructive font-bold">✕</span>
              <span>Nous ne gérons pas de stock</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-destructive font-bold">✕</span>
              <span>Nous ne travaillons pas sur tous les produits</span>
            </li>
          </ul>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-foreground font-medium">
              Nous accompagnons les importateurs dans leurs décisions de sourcing avec un process clair et documenté.
            </p>
            <Link
              to="/methode"
              className="inline-block mt-3 text-sm text-secondary font-medium hover:underline"
            >
              Découvrir notre méthode →
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProduitsSection;
