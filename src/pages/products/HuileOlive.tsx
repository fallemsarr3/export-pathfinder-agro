import ProductPageLayout, { type ProductInfo } from "@/components/products/ProductPageLayout";

const product: ProductInfo = {
  slug: "huile-olive-maroc",
  name: "Huile d'Olive Extra-Vierge du Maroc",
  h1: "Huile d'Olive Extra-Vierge du Maroc — Sourcing & Export B2B",
  metaTitle: "Huile d'Olive Extra-Vierge du Maroc — Export B2B | Sarr Trade Link",
  metaDescription: "Huile d'olive extra-vierge marocaine pour l'export B2B Europe. Huile alimentaire Maroc, qualité premium, traçabilité complète. Agent sourcing spécialisé.",
  intro: "Le Maroc est le 5e producteur mondial d'huile d'olive et offre des huiles extra-vierges de qualité remarquable. Sarr Trade Link, agent sourcing spécialisé en huiles alimentaires Maroc B2B, sélectionne les meilleures origines pour l'export vers l'Europe.",
  origin: "Les oliviers marocains (variétés Picholine marocaine, Haouzia, Menara) sont cultivés dans les régions de Meknès-Fès, Marrakech-Safi et Beni Mellal. Le climat méditerranéen et les sols argilo-calcaires produisent des huiles au profil aromatique riche et fruité.",
  quality: "Analyses complètes selon les normes du Conseil Oléicole International (COI) : indice d'acidité (<0,8 % pour l'extra-vierge), indice de peroxyde, K232/K270, panel test organoleptique. Conformité aux réglementations UE pour l'importation d'huile d'olive.",
  characteristics: "Couleur vert doré, arôme fruité avec des notes d'herbe fraîche et d'amande, saveur équilibrée avec une amertume et un piquant modérés. Le profil varie selon la variété et la région d'origine.",
  formats: ["Bouteilles en verre (250 ml, 500 ml, 750 ml, 1 L)", "Bidons métalliques 3 L, 5 L", "Fûts 200 L", "Vrac en citerne (flexitank 20 tonnes)", "Marque blanche disponible"],
  moq: "1 000 L (palettes de bouteilles) ou 20 tonnes (vrac citerne)",
  certifications: ["HACCP", "Bio / Ecocert (selon fournisseur)", "Conformité UE – huile d'olive", "Norme COI", "Halal", "Certificat d'origine"],
  deliveryTime: "10 à 20 jours ouvrés selon le volume et le conditionnement (FOB Casablanca ou CFR port européen).",
  faqItems: [
    { q: "Quelles variétés d'olive sont utilisées ?", a: "Principalement la Picholine marocaine, variété autochtone représentant 96 % du verger national. Des variétés comme la Haouzia et la Menara sont également disponibles. Nous pouvons sourcer des mono-variétales ou des assemblages selon vos préférences." },
    { q: "L'huile d'olive marocaine est-elle compétitive face à l'espagnole ou l'italienne ?", a: "Oui, le Maroc offre un excellent rapport qualité-prix grâce à des coûts de production plus faibles et une qualité en constante progression. De nombreux importateurs européens diversifient leurs sources avec l'origine marocaine." },
    { q: "Proposez-vous du vrac en flexitank ?", a: "Oui, nous organisons l'export en flexitank (20 tonnes par conteneur) pour les acheteurs souhaitant conditionner eux-mêmes. Le transport en citerne est le format le plus économique pour les gros volumes." },
  ],
};

const HuileOlive = () => <ProductPageLayout product={product} />;
export default HuileOlive;
