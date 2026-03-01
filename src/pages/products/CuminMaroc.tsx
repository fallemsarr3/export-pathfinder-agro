import ProductPageLayout, { type ProductInfo } from "@/components/products/ProductPageLayout";

const product: ProductInfo = {
  slug: "cumin-maroc",
  name: "Cumin du Maroc",
  h1: "Cumin du Maroc — Sourcing & Export B2B",
  metaTitle: "Cumin du Maroc — Sourcing & Export B2B | Sarr Trade Link",
  metaDescription: "Approvisionnement en cumin marocain de qualité export pour l'industrie agroalimentaire européenne. Agent sourcing Maroc, traçabilité et contrôle qualité intégré.",
  intro: "Le cumin marocain est l'une des épices les plus demandées à l'export. Sarr Trade Link, agent sourcing Maroc spécialisé en épices marocaines export, garantit un approvisionnement régulier auprès de producteurs vérifiés et certifiés.",
  origin: "Cultivé principalement dans les régions de Meknès, Fès et le Moyen Atlas, le cumin marocain bénéficie d'un climat semi-aride propice au développement de ses arômes. La récolte s'effectue entre juin et août, période où les graines atteignent leur maturité optimale.",
  quality: "Chaque lot est soumis à des analyses microbiologiques, de résidus de pesticides et de taux d'humidité. Nos fournisseurs respectent les exigences HACCP et les limites maximales de résidus (LMR) européennes.",
  characteristics: "Graines entières ou moulues, de couleur brun-vert, au profil aromatique chaud et terreux. Le cumin marocain offre un taux d'huile essentielle élevé (2,5 à 4 %), gage de puissance aromatique pour les applications industrielles.",
  formats: ["Graines entières", "Cumin moulu", "Sacs de 25 kg, 50 kg", "Big bags (500 kg, 1 tonne)", "Conditionnement personnalisé"],
  moq: "500 kg",
  certifications: ["HACCP", "BRC / IFS (selon fournisseur)", "Conformité UE – sécurité alimentaire", "Certificat phytosanitaire", "Halal", "Bio (sur demande)"],
  deliveryTime: "7 à 12 jours ouvrés (FOB Casablanca). Transport maritime conteneur complet ou groupage selon volume.",
  faqItems: [
    { q: "Le cumin marocain est-il disponible en version biologique ?", a: "Oui, nous travaillons avec des producteurs certifiés bio (AB / EU Organic). Le sourcing bio nécessite un délai de préparation plus long, nous recommandons de passer commande 4 à 6 semaines à l'avance." },
    { q: "Quels documents accompagnent chaque expédition ?", a: "Chaque envoi comprend : certificat d'analyse (CoA), certificat phytosanitaire, certificat d'origine, packing list et facture commerciale. D'autres documents peuvent être fournis sur demande." },
    { q: "Quel est le taux d'humidité garanti ?", a: "Le taux d'humidité est contrôlé et garanti en dessous de 10 %, conformément aux standards d'importation européens. Un certificat d'analyse le confirme pour chaque lot." },
  ],
};

const CuminMaroc = () => <ProductPageLayout product={product} />;
export default CuminMaroc;
