import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-lg leading-tight">
                  Sourcing Maroc
                </span>
                <span className="text-xs text-primary-foreground/70">
                  Agent Export
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Agent de sourcing export basé au Maroc, spécialisé dans l'agroalimentaire : épices et huiles alimentaires.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Accueil</Link></li>
              <li><Link to="/services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</Link></li>
              <li><Link to="/zones-export" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Zones d'export</Link></li>
              <li><Link to="/methode" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Méthode & Process</Link></li>
              <li><Link to="/a-propos" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">À propos</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Produits - Épices */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Nos Épices</h3>
            <ul className="space-y-2">
              <li><Link to="/produits/safran-maroc" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Safran du Maroc</Link></li>
              <li><Link to="/produits/cumin-maroc" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cumin du Maroc</Link></li>
              <li><Link to="/produits/ras-el-hanout" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Ras el Hanout</Link></li>
              <li><Link to="/produits/gingembre-poudre" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Gingembre en poudre</Link></li>
              <li><Link to="/produits/paprika-marocain" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Paprika marocain</Link></li>
              <li><Link to="/produits/coriandre" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Coriandre</Link></li>
              <li><Link to="/produits/melanges-epices" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Mélanges d'épices</Link></li>
            </ul>
          </div>

          {/* Produits - Huiles */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Nos Huiles</h3>
            <ul className="space-y-2">
              <li><Link to="/produits/huile-argan-alimentaire" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Huile d'Argan Alimentaire</Link></li>
              <li><Link to="/produits/huile-olive-maroc" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Huile d'Olive Extra-Vierge</Link></li>
            </ul>
            <h3 className="font-heading font-semibold text-base mb-4 mt-8">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#afrique" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Sourcing Afrique</Link></li>
              <li><Link to="/services#europe" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Sourcing Europe</Link></li>
              <li><Link to="/services#premium" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Sourcing Premium</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Demander un devis</Link></li>
              <li><Link to="/a-propos" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">À propos</Link></li>
            </ul>
            <p className="mt-4 text-sm text-primary-foreground/60">
              Basé au Maroc
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Sarr Trade Link. Tous droits réservés.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Agent de sourcing agroalimentaire – Épices et huiles alimentaires du Maroc
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
