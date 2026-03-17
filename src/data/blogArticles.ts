export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "comment-importer-epices-maroc",
    title: "Comment importer des épices du Maroc : guide complet pour importateurs B2B",
    metaTitle: "Comment Importer des Épices du Maroc — Guide B2B Complet (2026)",
    metaDescription: "Guide pratique pour importer des épices marocaines : étapes, réglementation, fournisseurs vérifiés, Incoterms et conseils d'un agent de sourcing terrain.",
    excerpt: "Tout ce qu'un importateur doit savoir pour sourcer des épices marocaines : étapes clés, réglementation, choix du fournisseur et Incoterms adaptés.",
    date: "2026-03-15",
    readTime: "8 min",
    category: "Guide pratique",
  },
  {
    slug: "verifier-fournisseur-epices-maroc",
    title: "Fournisseur épices Maroc : comment vérifier sa fiabilité avant de commander",
    metaTitle: "Vérifier un Fournisseur d'Épices au Maroc — 7 Critères Clés B2B",
    metaDescription: "7 critères concrets pour évaluer la fiabilité d'un fournisseur d'épices au Maroc : certifications, capacité, visite terrain, traçabilité.",
    excerpt: "Avant de passer commande, apprenez à qualifier un fournisseur marocain d'épices avec 7 critères vérifiables sur le terrain.",
    date: "2026-03-10",
    readTime: "6 min",
    category: "Sourcing",
  },
  {
    slug: "reglementation-import-alimentaire-ue-maroc",
    title: "Réglementation import alimentaire UE depuis le Maroc : ce que vous devez savoir",
    metaTitle: "Import Alimentaire UE depuis le Maroc — Réglementation & Conformité",
    metaDescription: "Normes HACCP, limites LMR, certificats phytosanitaires : tout sur la conformité réglementaire pour importer des produits alimentaires du Maroc vers l'UE.",
    excerpt: "HACCP, LMR, certificats phytosanitaires : maîtrisez les exigences réglementaires pour importer des produits alimentaires marocains en Europe.",
    date: "2026-03-05",
    readTime: "7 min",
    category: "Réglementation",
  },
  {
    slug: "safran-marocain-vs-iranien-comparatif",
    title: "Safran marocain vs iranien : comparatif qualité, prix et sourcing B2B",
    metaTitle: "Safran Marocain vs Iranien — Comparatif Qualité & Prix pour Importateurs",
    metaDescription: "Comparatif détaillé safran marocain vs iranien : qualité ISO, prix, traçabilité et avantages logistiques pour les importateurs européens.",
    excerpt: "Qualité ISO, prix au kilo, traçabilité et logistique : comparaison objective entre le safran du Maroc et le safran iranien pour les importateurs B2B.",
    date: "2026-02-28",
    readTime: "6 min",
    category: "Produits",
  },
  {
    slug: "huile-argan-alimentaire-guide-importateur",
    title: "Huile d'argan alimentaire : guide d'achat pour importateurs B2B",
    metaTitle: "Huile d'Argan Alimentaire — Guide d'Achat Importateurs B2B (2026)",
    metaDescription: "Guide complet pour sourcer de l'huile d'argan alimentaire au Maroc : certifications IGP, formats export, MOQ et critères de qualité pour importateurs.",
    excerpt: "Certifications IGP, formats export, MOQ et critères qualité : tout pour sourcer de l'huile d'argan alimentaire marocaine en B2B.",
    date: "2026-02-20",
    readTime: "7 min",
    category: "Produits",
  },
];
