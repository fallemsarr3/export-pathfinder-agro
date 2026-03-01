import ProductPageLayout, { type ProductInfo } from "@/components/products/ProductPageLayout";

const product: ProductInfo = {
  slug: "safran-maroc",
  name: "Safran du Maroc",
  h1: "Safran du Maroc — Sourcing & Export B2B",
  metaTitle: "Safran du Maroc — Sourcing & Export B2B | Sarr Trade Link",
  metaDescription: "Sourcez du safran marocain de qualité premium pour l'export B2B vers l'Europe. Certifié ISO, traçabilité complète. Agent sourcing Maroc spécialisé.",
  intro: "Le safran marocain, cultivé dans la région de Taliouine, est reconnu pour son arôme intense et sa coloration exceptionnelle. En tant qu'agent sourcing Maroc, Sarr Trade Link vous connecte aux meilleurs producteurs pour un approvisionnement fiable et certifié.",
  origin: "Le safran du Maroc provient principalement de la vallée de Taliouine, dans la région de Souss-Massa. Cette zone bénéficie d'un terroir unique, à plus de 1 400 m d'altitude, offrant des conditions idéales pour la culture du Crocus sativus. La récolte manuelle, réalisée chaque automne, garantit une qualité artisanale incomparable.",
  quality: "Chaque lot est contrôlé selon les normes ISO 3632 (catégorie I ou II) et fait l'objet d'analyses en laboratoire pour vérifier le pouvoir colorant (crocine), l'arôme (safranal) et l'amertume (picrocrocine). Nos fournisseurs sont audités et certifiés HACCP.",
  characteristics: "Filaments entiers de couleur rouge foncé, arôme puissant et distinctif, pouvoir colorant élevé (>200 unités). Le safran marocain se distingue par sa richesse en crocine, supérieure à de nombreuses origines concurrentes.",
  formats: ["Filaments entiers (grades I et II)", "Poudre de safran", "Conditionnement vrac : 1g, 5g, 10g, 25g, 100g, 500g, 1kg", "Packaging personnalisé sur demande"],
  moq: "500g (possibilité d'échantillons préalables)",
  certifications: ["ISO 3632", "HACCP", "Conformité UE (sécurité alimentaire)", "Certificat phytosanitaire", "Halal"],
  deliveryTime: "10 à 15 jours ouvrés (FOB Casablanca ou CFR port européen). Expédition par fret aérien possible pour les commandes urgentes.",
  faqItems: [
    { q: "Quel est le grade du safran marocain proposé ?", a: "Nous proposons du safran de catégorie I et II selon la norme ISO 3632, avec un pouvoir colorant supérieur à 200 unités pour le grade I. Chaque lot est accompagné d'un certificat d'analyse." },
    { q: "Peut-on obtenir des échantillons avant commande ?", a: "Oui, nous fournissons des échantillons certifiés sur demande pour validation qualité avant toute commande export. Les frais d'échantillonnage sont déduits de la première commande." },
    { q: "Quelles sont les conditions de paiement ?", a: "Les conditions standard sont un acompte de 30 % à la commande et le solde contre documents d'expédition. D'autres modalités peuvent être discutées selon le volume et la relation commerciale." },
  ],
};

const SafranMaroc = () => <ProductPageLayout product={product} />;
export default SafranMaroc;
