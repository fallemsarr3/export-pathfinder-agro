import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/zones-export" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Zones d'export
                </Link>
              </li>
              <li>
                <Link to="/methode" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Méthode & Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#afrique" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sourcing Afrique de l'Ouest
                </Link>
              </li>
              <li>
                <Link to="/services#europe" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sourcing conforme Europe
                </Link>
              </li>
              <li>
                <Link to="/services#premium" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sourcing stratégique Premium
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/a-propos" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Formulaires de contact
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-sm text-primary-foreground/60">
              Basé au Maroc
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Sourcing Maroc Export. Tous droits réservés.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Agent de sourcing agroalimentaire – Épices et huiles alimentaires
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
