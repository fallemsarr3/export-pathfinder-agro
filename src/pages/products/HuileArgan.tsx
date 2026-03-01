import ProductPageLayout, { type ProductInfo } from "@/components/products/ProductPageLayout";

const product: ProductInfo = {
  slug: "huile-argan-alimentaire",
  name: "Huile d'Argan Alimentaire",
  h1: "Huile d'Argan Alimentaire du Maroc — Sourcing & Export B2B",
  metaTitle: "Huile d'Argan Alimentaire du Maroc — Export B2B | Sarr Trade Link",
  metaDescription: "Huile d'argan alimentaire du Maroc pour l'export B2B Europe. Huile alimentaire Maroc B2B, traçabilité, certifications. Agent sourcing spécialisé.",
  intro: "L'huile d'argan alimentaire, trésor du Maroc, est extraite des amandons torréfiés de l'arganier. Sarr Trade Link, agent sourcing spécialisé en huiles alimentaires Maroc B2B, vous connecte aux coopératives et producteurs certifiés pour un approvisionnement premium.",
  origin: "L'arganier (Argania spinosa) pousse exclusivement dans le sud-ouest du Maroc, dans la région de Souss-Massa. Classé patrimoine immatériel par l'UNESCO, l'arganier est au cœur d'une filière traditionnelle. L'huile alimentaire est obtenue à partir d'amandons torréfiés, lui conférant sa saveur noisettée caractéristique.",
  quality: "Contrôle qualité strict : indice d'acidité (<0,8 %), indice de peroxyde, profil en acides gras (oléique, linoléique), analyse sensorielle. Nos fournisseurs sont des coopératives certifiées et des unités de production modernes respectant les normes HACCP.",
  characteristics: "Couleur dorée à ambrée, saveur noisettée intense et légèrement grillée, riche en acides gras insaturés (oméga-6 et oméga-9) et en vitamine E. L'huile d'argan alimentaire est un produit premium recherché par la gastronomie européenne et les circuits bio.",
  formats: ["Bouteilles en verre (250 ml, 500 ml, 1 L)", "Bidons 5 L", "Fûts 20 L, 50 L, 200 L", "Vrac en citerne (sur demande)", "Packaging personnalisé / marque blanche"],
  moq: "200 L (possibilité d'échantillons préalables)",
  certifications: ["HACCP", "Bio / Ecocert (selon fournisseur)", "Conformité UE – sécurité alimentaire", "IGP Argane (Indication Géographique Protégée)", "Halal"],
  deliveryTime: "10 à 15 jours ouvrés (FOB Agadir ou Casablanca). Fret aérien possible pour les petites quantités.",
  faqItems: [
    { q: "Quelle est la différence entre huile d'argan alimentaire et cosmétique ?", a: "L'huile alimentaire est extraite d'amandons torréfiés, lui donnant sa couleur dorée et son goût noisette. L'huile cosmétique est pressée à froid sans torréfaction, elle est plus claire et inodore. Nous ne sourceons que l'huile alimentaire." },
    { q: "L'huile d'argan bénéficie-t-elle d'une IGP ?", a: "Oui, l'huile d'argan du Maroc bénéficie d'une Indication Géographique Protégée (IGP Argane), garantissant son origine et son procédé de fabrication traditionnel. Cette certification est un atout commercial majeur sur le marché européen." },
    { q: "Proposez-vous de l'huile d'argan biologique ?", a: "Oui, nous travaillons avec des coopératives certifiées Ecocert / AB. L'huile d'argan bio est disponible en plusieurs conditionnements et bénéficie d'une traçabilité complète de la récolte à l'expédition." },
  ],
};

const HuileArgan = () => <ProductPageLayout product={product} />;
export default HuileArgan;
