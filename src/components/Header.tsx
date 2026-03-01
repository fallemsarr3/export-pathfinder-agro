import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const productLinks = [
  { name: "Safran du Maroc", href: "/produits/safran-maroc" },
  { name: "Cumin du Maroc", href: "/produits/cumin-maroc" },
  { name: "Ras el Hanout", href: "/produits/ras-el-hanout" },
  { name: "Gingembre en poudre", href: "/produits/gingembre-poudre" },
  { name: "Paprika marocain", href: "/produits/paprika-marocain" },
  { name: "Coriandre", href: "/produits/coriandre" },
  { name: "Mélanges d'épices", href: "/produits/melanges-epices" },
  { name: "Huile d'Argan Alimentaire", href: "/produits/huile-argan-alimentaire" },
  { name: "Huile d'Olive Extra-Vierge", href: "/produits/huile-olive-maroc" },
];

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Zones d'export", href: "/zones-export" },
  { name: "Méthode", href: "/methode" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const isActive = (href: string) => location.pathname === href;
  const isProductPage = location.pathname.startsWith("/produits");

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDesktopProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDesktopProductsOpen(false), 200);
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="container-page" aria-label="Navigation principale">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-lg text-foreground leading-tight">
                Sourcing Maroc
              </span>
              <span className="text-xs text-muted-foreground">
                Agent Export
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                isActive("/")
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Accueil
            </Link>

            {/* Products dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isProductPage
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={() => setDesktopProductsOpen((o) => !o)}
              >
                Nos Produits
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${desktopProductsOpen ? "rotate-180" : ""}`} />
              </button>

              {desktopProductsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-lg shadow-elegant py-2 animate-fade-in z-50">
                  <div className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Épices
                  </div>
                  {productLinks.slice(0, 7).map((p) => (
                    <Link
                      key={p.href}
                      to={p.href}
                      onClick={() => setDesktopProductsOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive(p.href)
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {p.name}
                    </Link>
                  ))}
                  <div className="my-1 h-px bg-border" />
                  <div className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Huiles alimentaires
                  </div>
                  {productLinks.slice(7).map((p) => (
                    <Link
                      key={p.href}
                      to={p.href}
                      onClick={() => setDesktopProductsOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive(p.href)
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigation.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <Button asChild variant="cta" size="sm">
              <Link to="/contact">Demander un sourcing</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  isActive("/") ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                Accueil
              </Link>

              {/* Mobile products accordion */}
              <button
                type="button"
                className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  isProductPage ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileProductsOpen((o) => !o)}
              >
                Nos Produits
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileProductsOpen && (
                <div className="ml-4 flex flex-col gap-0.5 animate-fade-in">
                  {productLinks.map((p) => (
                    <Link
                      key={p.href}
                      to={p.href}
                      onClick={() => { setMobileMenuOpen(false); setMobileProductsOpen(false); }}
                      className={`px-4 py-2.5 text-sm rounded-md transition-colors ${
                        isActive(p.href)
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}

              {navigation.slice(1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-border">
                <Button asChild variant="cta" className="w-full">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Demander un sourcing
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
