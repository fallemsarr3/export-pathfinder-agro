import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface ProductInfo {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  origin: string;
  quality: string;
  characteristics: string;
  formats: string[];
  moq: string;
  certifications: string[];
  deliveryTime: string;
  faqItems: { q: string; a: string }[];
}

const allProducts: { slug: string; name: string }[] = [
  { slug: "/produits/safran-maroc", name: "Safran du Maroc" },
  { slug: "/produits/cumin-maroc", name: "Cumin du Maroc" },
  { slug: "/produits/ras-el-hanout", name: "Ras el Hanout" },
  { slug: "/produits/gingembre-poudre", name: "Gingembre en poudre" },
  { slug: "/produits/paprika-marocain", name: "Paprika marocain" },
  { slug: "/produits/coriandre", name: "Coriandre" },
  { slug: "/produits/melanges-epices", name: "Mélanges d'épices" },
  { slug: "/produits/huile-argan-alimentaire", name: "Huile d'Argan Alimentaire" },
  { slug: "/produits/huile-olive-maroc", name: "Huile d'Olive Extra-Vierge" },
];

const ProductPageLayout = ({ product }: { product: ProductInfo }) => {
  const otherProducts = allProducts.filter((p) => p.slug !== `/produits/${product.slug}`);

  return (
    <Layout>
      <Helmet>
        <title>{product.metaTitle}</title>
        <meta name="description" content={product.metaDescription} />
        <link rel="canonical" href={`https://www.sarrtradelink.com/produits/${product.slug}`} />
        <meta property="og:title" content={product.metaTitle} />
        <meta property="og:description" content={product.metaDescription} />
        <meta property="og:url" content={`https://www.sarrtradelink.com/produits/${product.slug}`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.intro,
            "brand": { "@type": "Brand", "name": "Sarr Trade Link" },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "EUR",
              "eligibleRegion": ["FR", "BE", "ES", "DE", "NL", "GB"],
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": product.faqItems.map((item) => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": { "@type": "Answer", "text": item.a },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-page">
          <h1 className="text-primary-foreground mb-6">{product.h1}</h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl">
            {product.intro}
          </p>
          <div className="mt-8">
            <Button variant="hero" asChild>
              <Link to="/contact">Demander un devis gratuit <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-background">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-foreground mb-4">Origine & Qualité</h2>
            <p className="text-muted-foreground mb-4">{product.origin}</p>
            <p className="text-muted-foreground mb-4">{product.quality}</p>
            <h3 className="text-foreground mb-3 mt-8">Caractéristiques</h3>
            <p className="text-muted-foreground">{product.characteristics}</p>
          </div>
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 shadow-soft">
              <h3 className="text-foreground mb-4">Formats disponibles</h3>
              <ul className="space-y-2">
                {product.formats.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-secondary mt-1">●</span> {f}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-foreground">
                Quantité minimum : {product.moq}
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-soft">
              <h3 className="text-foreground mb-4">Certifications & Conformité</h3>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((c) => (
                  <span key={c} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-soft">
              <h3 className="text-foreground mb-4">Délai de livraison Europe</h3>
              <p className="text-muted-foreground">{product.deliveryTime}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container-page max-w-3xl">
          <h2 className="text-foreground mb-8 text-center">Questions fréquentes</h2>
          <div className="space-y-6">
            {product.faqItems.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-page text-center">
          <h2 className="text-primary-foreground mb-4">Intéressé par {product.name} ?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe pour obtenir un devis personnalisé, des échantillons ou des informations techniques détaillées.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">Demander un devis gratuit <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* Internal links */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <h2 className="text-foreground mb-8">Découvrez nos autres produits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                to={p.slug}
                className="bg-card rounded-lg p-4 shadow-soft hover:shadow-elegant transition-shadow text-foreground font-medium hover:text-secondary"
              >
                {p.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPageLayout;
