import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { blogArticles } from "@/data/blogArticles";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <title>Blog Sourcing Maroc — Guides Import Épices & Huiles B2B</title>
        <meta name="description" content="Guides pratiques pour importateurs B2B : comment sourcer des épices et huiles alimentaires au Maroc, réglementation UE, vérification fournisseurs." />
        <link rel="canonical" href="https://www.sarrtradelink.com/blog" />
        <link rel="alternate" hrefLang="fr" href="https://www.sarrtradelink.com/blog" />
        <link rel="alternate" hrefLang="x-default" href="https://www.sarrtradelink.com/blog" />
        <meta property="og:title" content="Blog Sourcing Maroc — Guides Import Épices & Huiles B2B" />
        <meta property="og:description" content="Guides pratiques pour importateurs B2B : sourcing épices et huiles alimentaires au Maroc." />
        <meta property="og:url" content="https://www.sarrtradelink.com/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container-page">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
            Blog & Ressources
          </span>
          <h1 className="text-primary-foreground mb-4">
            Guides pratiques pour importateurs B2B
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl">
            Réglementation, sourcing fournisseurs, comparatifs produits : tout ce qu'il faut savoir pour importer des épices et huiles alimentaires depuis le Maroc.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elegant transition-all group flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>
                  <h2 className="text-foreground font-semibold text-lg mb-3 group-hover:text-secondary transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1 text-secondary text-sm font-medium group-hover:gap-2 transition-all">
                      Lire <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
