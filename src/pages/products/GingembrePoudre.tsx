import ProductPageLayout, { type ProductInfo } from "@/components/products/ProductPageLayout";

const product: ProductInfo = {
  slug: "gingembre-poudre",
  name: "Gingembre en poudre",
  h1: "Gingembre en Poudre du Maroc — Sourcing & Export B2B",
  metaTitle: "Gingembre en Poudre du Maroc — Export B2B | Sarr Trade Link",
  metaDescription: "Gingembre marocain en poudre pour l'export B2B Europe. Qualité contrôlée, traçabilité complète, conformité UE. Agent sourcing épices marocaines.",
  intro: "Le gingembre en poudre marocain est prisé par l'industrie agroalimentaire européenne pour sa saveur piquante et ses propriétés fonctionnelles. Sarr Trade Link assure le sourcing alimentaire Maroc B2B avec un contrôle qualité rigoureux à chaque étape.",
  origin: "Le gingembre utilisé pour la production marocaine provient de rhizomes sélectionnés, séchés et broyés dans des unités de transformation certifiées. Le Maroc s'est positionné comme un hub de transformation et de réexport grâce à ses infrastructures portuaires et sa proximité avec l'Europe.",
  quality: "Analyses systématiques : taux de gingérol (principes actifs), granulométrie, microbiologie, métaux lourds et résidus de pesticides. Conformité aux normes européennes et aux cahiers des charges de la grande distribution.",
  characteristics: "Poudre fine de couleur jaune-beige, arôme piquant et chaleureux, saveur relevée. Le gingembre marocain offre un profil aromatique équilibré, adapté aux applications culinaires, aux boissons et aux compléments alimentaires.",
  formats: ["Poudre fine (mesh 60-80)", "Poudre grossière (mesh 20-40)", "Sacs 25 kg", "Big bags 500 kg, 1 tonne", "Sachets consommateurs sur demande"],
  moq: "500 kg",
  certifications: ["HACCP", "Conformité UE – sécurité alimentaire", "Certificat phytosanitaire", "Halal", "Bio (sur demande)"],
  deliveryTime: "7 à 12 jours ouvrés (FOB Casablanca ou CFR port européen).",
  faqItems: [
    { q: "Quelle est la granulométrie disponible ?", a: "Nous proposons une poudre fine (mesh 60-80, idéale pour l'industrie alimentaire) et une poudre grossière (mesh 20-40, pour les mélanges d'épices). D'autres spécifications sont possibles sur demande." },
    { q: "Le gingembre est-il irradié ?", a: "Non, nos fournisseurs n'utilisent pas l'irradiation. La décontamination se fait par traitement vapeur, conforme aux réglementations européennes et adapté au marché bio." },
    { q: "Quel est le taux de gingérol garanti ?", a: "Le taux de gingérol est vérifié par analyse HPLC et se situe généralement entre 1,5 % et 3 %, selon le lot. Le certificat d'analyse détaille cette valeur pour chaque expédition." },
  ],
};

const GingembrePoudre = () => <ProductPageLayout product={product} />;
export default GingembrePoudre;
