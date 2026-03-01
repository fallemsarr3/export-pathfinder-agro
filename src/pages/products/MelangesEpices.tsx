import ProductPageLayout, { type ProductInfo } from "@/components/products/ProductPageLayout";

const product: ProductInfo = {
  slug: "melanges-epices",
  name: "Mélanges d'épices marocains",
  h1: "Mélanges d'Épices Marocains — Sourcing & Export B2B",
  metaTitle: "Mélanges d'Épices Marocains sur Mesure — Export B2B | Sarr Trade Link",
  metaDescription: "Mélanges d'épices marocains personnalisés pour l'export B2B Europe. Recettes sur mesure, marque blanche, contrôle qualité intégré. Agent sourcing Maroc.",
  intro: "Au-delà du Ras el Hanout, le Maroc propose une large gamme de mélanges d'épices traditionnels et personnalisés. Sarr Trade Link, agent sourcing alimentaire Maroc B2B, coordonne la formulation, la production et l'export de mélanges sur mesure pour l'industrie agroalimentaire européenne.",
  origin: "Les mélanges sont élaborés par des artisans épiciers marocains expérimentés, héritiers d'un savoir-faire séculaire. Nos partenaires sont basés dans les grandes villes épicières du Maroc : Marrakech, Fès, Meknès et Casablanca.",
  quality: "Chaque composant du mélange est analysé individuellement avant assemblage. Le mélange final fait l'objet d'un contrôle qualité complet : microbiologie, résidus de pesticides, allergènes, homogénéité et conformité à la recette validée.",
  characteristics: "Mélanges variés : épices pour couscous, tajine, chermoula, zaatar marocain, marinades, mélanges pour viandes ou poissons. Chaque recette peut être adaptée aux goûts du marché cible et aux contraintes réglementaires locales.",
  formats: ["Poudre fine ou mélange en grains", "Sachets 100g à 1kg", "Sacs 5 kg, 10 kg, 25 kg", "Big bags sur demande", "Marque blanche (private label)"],
  moq: "100 kg par référence",
  certifications: ["HACCP", "Conformité UE – sécurité alimentaire", "Certificat phytosanitaire", "Halal", "Étiquetage allergènes conforme UE"],
  deliveryTime: "15 à 20 jours ouvrés selon la complexité du mélange et le conditionnement demandé.",
  faqItems: [
    { q: "Peut-on créer un mélange d'épices sur mesure ?", a: "Oui, c'est notre spécialité. Vous définissez le profil aromatique, les ingrédients souhaités et les contraintes (sans sel, sans glutamate, bio, etc.). Nous coordonnons la formulation avec nos partenaires au Maroc et vous envoyons des échantillons pour validation." },
    { q: "Quels mélanges traditionnels proposez-vous ?", a: "Nous sourceons les grands classiques : Ras el Hanout, épices pour couscous, épices pour tajine, chermoula, zaatar marocain, et bien d'autres. Chaque recette est documentée avec la liste complète des ingrédients et allergènes." },
    { q: "Le conditionnement en marque blanche est-il possible ?", a: "Oui, nous coordonnons l'ensemble du processus : formulation, production, conditionnement et étiquetage selon votre charte graphique. Vous fournissez le design, nous gérons la chaîne de production au Maroc." },
  ],
};

const MelangesEpices = () => <ProductPageLayout product={product} />;
export default MelangesEpices;
