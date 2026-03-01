import ProductPageLayout, { type ProductInfo } from "@/components/products/ProductPageLayout";

const product: ProductInfo = {
  slug: "coriandre",
  name: "Coriandre",
  h1: "Coriandre du Maroc — Sourcing & Export B2B",
  metaTitle: "Coriandre du Maroc — Sourcing & Export B2B | Sarr Trade Link",
  metaDescription: "Coriandre marocaine en graines ou moulue pour l'export B2B Europe. Épices marocaines export, traçabilité complète. Agent sourcing Maroc.",
  intro: "La coriandre marocaine, en graines ou moulue, est un ingrédient essentiel de l'industrie agroalimentaire européenne. Sarr Trade Link assure un sourcing fiable auprès de producteurs vérifiés, avec un contrôle qualité intégré conforme aux exigences européennes.",
  origin: "La coriandre est cultivée dans les grandes plaines agricoles du Maroc, notamment dans les régions de Meknès-Fès et du Gharb. Le climat méditerranéen et les sols riches garantissent des graines de haute qualité, récoltées entre mai et juillet.",
  quality: "Chaque lot fait l'objet d'analyses complètes : taux d'huile essentielle (linalol), microbiologie, métaux lourds, résidus de pesticides et taux d'humidité. Conformité garantie aux LMR européennes et aux normes HACCP.",
  characteristics: "Graines rondes de couleur brun clair, arôme citronné et floral, saveur douce et légèrement sucrée. Le taux d'huile essentielle se situe entre 0,4 % et 1,2 %, selon la variété et les conditions de culture.",
  formats: ["Graines entières", "Coriandre moulue", "Sacs 25 kg, 50 kg", "Big bags 500 kg, 1 tonne", "Conditionnement personnalisé"],
  moq: "500 kg",
  certifications: ["HACCP", "Conformité UE – sécurité alimentaire", "Certificat phytosanitaire", "Halal", "Bio (sur demande)"],
  deliveryTime: "7 à 12 jours ouvrés (FOB Casablanca ou CFR port européen).",
  faqItems: [
    { q: "Quelle variété de coriandre proposez-vous ?", a: "Nous proposons principalement la variété marocaine locale, réputée pour son taux élevé en linalol. D'autres variétés peuvent être sourcées sur demande selon vos spécifications techniques." },
    { q: "La coriandre est-elle disponible en bio ?", a: "Oui, nous travaillons avec des producteurs certifiés bio (AB / EU Organic). Le sourcing bio requiert un délai supplémentaire de 2 à 4 semaines pour garantir la disponibilité et la traçabilité." },
    { q: "Comment la coriandre est-elle décontaminée ?", a: "La décontamination se fait par traitement vapeur (steam sterilization), méthode approuvée par l'UE et compatible avec la certification biologique. Aucune irradiation n'est utilisée." },
  ],
};

const Coriandre = () => <ProductPageLayout product={product} />;
export default Coriandre;
