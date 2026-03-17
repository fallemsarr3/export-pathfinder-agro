import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { blogArticles, type BlogArticle } from "@/data/blogArticles";

interface Props {
  article: BlogArticle;
  children: React.ReactNode;
}

const BlogArticleLayout = ({ article, children }: Props) => {
  const otherArticles = blogArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <Layout>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <link rel="canonical" href={`https://www.sarrtradelink.com/blog/${article.slug}`} />
        <link rel="alternate" hrefLang="fr" href={`https://www.sarrtradelink.com/blog/${article.slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://www.sarrtradelink.com/blog/${article.slug}`} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:url" content={`https://www.sarrtradelink.com/blog/${article.slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.metaTitle} />
        <meta name="twitter:description" content={article.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.metaDescription,
            "datePublished": article.date,
            "author": { "@type": "Organization", "name": "Sarr Trade Link" },
            "publisher": { "@type": "Organization", "name": "Sarr Trade Link" },
            "mainEntityOfPage": `https://www.sarrtradelink.com/blog/${article.slug}`,
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container-page max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <span className="inline-block px-3 py-1 bg-primary-foreground/10 text-primary-foreground rounded-full text-xs font-medium mb-4">
            {article.category}
          </span>
          <h1 className="text-primary-foreground mb-4 text-3xl md:text-4xl">{article.title}</h1>
          <div className="flex items-center gap-4 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readTime} de lecture</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-page max-w-4xl">
          <article className="prose prose-lg max-w-none text-muted-foreground prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:mb-4 prose-ul:my-4 prose-li:my-1 prose-strong:text-foreground prose-a:text-secondary prose-a:no-underline hover:prose-a:underline">
            {children}
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-page text-center">
          <h2 className="text-primary-foreground mb-4">Besoin d'un sourcing fiable depuis le Maroc ?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Notre équipe vous accompagne de la sélection du fournisseur jusqu'à l'expédition. Devis gratuit sous 48h.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">Demander un devis gratuit <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* Related articles */}
      <section className="section-padding bg-muted/30">
        <div className="container-page">
          <h2 className="text-foreground mb-8">Articles similaires</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((a) => (
              <Link
                key={a.slug}
                to={`/blog/${a.slug}`}
                className="bg-card rounded-lg p-6 shadow-soft hover:shadow-elegant transition-shadow group"
              >
                <span className="text-xs font-medium text-secondary">{a.category}</span>
                <h3 className="text-foreground font-semibold mt-2 mb-3 group-hover:text-secondary transition-colors text-base leading-snug">
                  {a.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogArticleLayout;
