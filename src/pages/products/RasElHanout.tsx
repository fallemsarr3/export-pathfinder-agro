import ProductPageLayout, { type ProductInfo } from "@/components/products/ProductPageLayout";

const product: ProductInfo = {
  slug: "ras-el-hanout",
  name: "Ras el Hanout",
  h1: "Ras el Hanout — Mélange d'Épices Marocain, Sourcing & Export B2B",
  metaTitle: "Ras el Hanout — Mélange d'Épices Export B2B | Sarr Trade Link",
  metaDescription: "Sourcez du Ras el Hanout authentique du Maroc pour l'export B2B. Mélange d'épices marocaines premium, certifié et traçable. Agent sourcing alimentaire Maroc.",
  intro: "Le Ras el Hanout est le mélange emblématique de la cuisine marocaine, composé de 15 à 30 épices soigneusement sélectionnées. Sarr Trade Link vous donne accès aux meilleurs artisans épiciers marocains pour un produit authentique et conforme aux normes européennes.",
  origin: "Chaque recette de Ras el Hanout est unique et reflète le savoir-faire transmis de génération en génération. Nos fournisseurs sont basés à Marrakech, Fès et Meknès, berceaux historiques de l'art épicier marocain.",
  quality: "Les mélanges sont préparés dans des ateliers certifiés HACCP, avec un contrôle strict des matières premières. Chaque composant est analysé individuellement avant intégration au mélange final, garantissant l'absence de contaminants et le respect des LMR européennes.",
  characteristics: "Mélange complexe aux notes chaudes, florales et légèrement piquantes. Composition typique : cumin, coriandre, cannelle, gingembre, poivre noir, curcuma, muscade, cardamome, clou de girofle, pétales de rose. La recette peut être adaptée selon le cahier des charges client.",
  formats: ["Poudre fine", "Mélange en grains (à moudre)", "Sachets 100g, 250g, 500g, 1kg", "Sacs 5 kg, 10 kg, 25 kg", "Packaging marque blanche disponible"],
  moq: "100 kg",
  certifications: ["HACCP", "Conformité UE – sécurité alimentaire", "Certificat phytosanitaire", "Halal", "Composition détaillée fournie"],
  deliveryTime: "10 à 15 jours ouvrés (FOB Casablanca). Possibilité de livraison DAP pour les commandes supérieures à 1 tonne.",
  faqItems: [
    { q: "Peut-on personnaliser la recette du Ras el Hanout ?", a: "Absolument. Nos fournisseurs proposent des recettes sur mesure adaptées à votre marché cible. Nous travaillons avec vous pour définir le profil aromatique, les ingrédients et les proportions souhaités." },
    { q: "Le Ras el Hanout est-il adapté au marché européen ?", a: "Oui, tous nos mélanges respectent la réglementation européenne en matière de sécurité alimentaire, d'étiquetage (liste complète des allergènes) et de limites de résidus de pesticides." },
    { q: "Proposez-vous du packaging marque blanche ?", a: "Oui, nous coordonnons le conditionnement en marque blanche (private label) avec nos partenaires au Maroc. Vous fournissez le design, nous gérons la production et l'expédition." },
  ],
};

const RasElHanout = () => <ProductPageLayout product={product} />;
export default RasElHanout;
