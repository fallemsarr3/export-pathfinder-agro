import ProductPageLayout, { type ProductInfo } from "@/components/products/ProductPageLayout";

const product: ProductInfo = {
  slug: "paprika-marocain",
  name: "Paprika marocain",
  h1: "Paprika Marocain — Sourcing & Export B2B",
  metaTitle: "Paprika Marocain — Sourcing & Export B2B | Sarr Trade Link",
  metaDescription: "Paprika marocain doux ou fumé pour l'export B2B Europe. Épice marocaine certifiée, contrôle qualité intégré. Agent sourcing alimentaire Maroc.",
  intro: "Le paprika marocain, issu de piments doux séchés au soleil, offre une couleur rouge intense et une saveur douce prisée en Europe. Sarr Trade Link, votre agent sourcing Maroc, sélectionne les meilleurs lots pour un export fiable et conforme.",
  origin: "Cultivé dans les plaines fertiles du Gharb, du Souss et de la région de Tadla-Azilal, le paprika marocain bénéficie d'un ensoleillement exceptionnel qui favorise le développement de ses pigments naturels (capsanthine). Le séchage solaire traditionnel est complété par des procédés industriels pour garantir une qualité constante.",
  quality: "Contrôle systématique de la couleur ASTA (>120 unités pour le grade premium), de l'aflatoxine, des résidus de pesticides et de la microbiologie. Conformité aux réglementations UE et aux normes HACCP.",
  characteristics: "Poudre de couleur rouge vif à rouge foncé, saveur douce et légèrement sucrée, arôme fruité. Disponible en version douce, mi-forte ou fumée selon les besoins du client.",
  formats: ["Poudre fine", "Flocons", "Sacs 25 kg, 50 kg", "Big bags 500 kg, 1 tonne", "Conditionnement personnalisé"],
  moq: "500 kg",
  certifications: ["HACCP", "Conformité UE – sécurité alimentaire", "Certificat phytosanitaire", "Halal", "Analyse ASTA fournie"],
  deliveryTime: "7 à 12 jours ouvrés (FOB Casablanca). Fret aérien disponible pour commandes urgentes.",
  faqItems: [
    { q: "Quel est le score ASTA du paprika proposé ?", a: "Nous proposons du paprika avec un score ASTA de 120 à 220 selon le grade. Le score ASTA exact est indiqué sur le certificat d'analyse de chaque lot, garantissant la conformité à vos spécifications." },
    { q: "Proposez-vous du paprika fumé ?", a: "Oui, nous sourceons du paprika fumé (pimentón style) produit au Maroc selon un processus de fumage au bois de chêne. Ce produit est particulièrement demandé par l'industrie des sauces et des plats préparés." },
    { q: "Le paprika est-il exempt d'aflatoxines ?", a: "Absolument. Chaque lot est analysé pour les aflatoxines (B1, B2, G1, G2 et totales) avec des résultats conformes aux limites maximales européennes. Le certificat d'analyse accompagne chaque expédition." },
  ],
};

const PaprikaMarocain = () => <ProductPageLayout product={product} />;
export default PaprikaMarocain;
