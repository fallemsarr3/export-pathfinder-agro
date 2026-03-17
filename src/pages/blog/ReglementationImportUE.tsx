import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import { blogArticles } from "@/data/blogArticles";

const article = blogArticles.find((a) => a.slug === "reglementation-import-alimentaire-ue-maroc")!;

const ReglementationImportUE = () => (
  <BlogArticleLayout article={article}>
    <p>
      Importer des produits alimentaires du Maroc vers l'Union européenne implique de respecter un cadre réglementaire strict. Que vous importiez du <Link to="/produits/cumin-maroc">cumin</Link>, du <Link to="/produits/paprika-marocain">paprika</Link>, de l'<Link to="/produits/huile-olive-maroc">huile d'olive</Link> ou de l'<Link to="/produits/huile-argan-alimentaire">huile d'argan</Link>, voici les normes et documents à maîtriser.
    </p>

    <h2>Les normes de sécurité alimentaire UE</h2>

    <h3>HACCP (Hazard Analysis Critical Control Points)</h3>
    <p>
      Le système HACCP est obligatoire pour tout opérateur de la chaîne alimentaire dans l'UE. Votre fournisseur marocain doit démontrer qu'il applique un plan HACCP documenté, avec des points de contrôle critiques identifiés à chaque étape de la production.
    </p>

    <h3>Limites Maximales de Résidus (LMR)</h3>
    <p>
      Le règlement (CE) n° 396/2005 fixe les LMR pour les pesticides dans les denrées alimentaires. Les épices sont particulièrement surveillées. Chaque lot importé doit respecter ces seuils, vérifiables par analyse en laboratoire accrédité. Un certificat d'analyse (CoA) est recommandé pour chaque expédition.
    </p>

    <h3>Contaminants et mycotoxines</h3>
    <p>
      Le règlement (CE) n° 1881/2006 fixe les teneurs maximales en contaminants (aflatoxines, ochratoxine A, métaux lourds). Les épices comme le <Link to="/produits/paprika-marocain">paprika</Link> et le <Link to="/produits/gingembre-poudre">gingembre</Link> sont particulièrement concernées par les limites en aflatoxines.
    </p>

    <h2>Les documents obligatoires</h2>

    <h3>Certificat phytosanitaire</h3>
    <p>
      Délivré par l'ONSSA (Office National de Sécurité Sanitaire des Produits Alimentaires) au Maroc, ce certificat atteste que les produits sont exempts de parasites et conformes aux exigences phytosanitaires du pays importateur.
    </p>

    <h3>Certificat d'origine</h3>
    <p>
      Émis par la Chambre de Commerce marocaine, il certifie l'origine des marchandises. Il peut ouvrir droit à des préférences tarifaires dans le cadre de l'accord d'association UE-Maroc.
    </p>

    <h3>Certificat sanitaire / de conformité</h3>
    <p>
      Selon le type de produit, un certificat sanitaire peut être exigé par les autorités du pays de destination. Il atteste la conformité du produit aux normes sanitaires en vigueur.
    </p>

    <h2>Étiquetage et traçabilité</h2>
    <p>
      Le règlement (UE) n° 1169/2011 impose un étiquetage précis : dénomination de vente, liste des ingrédients, allergènes, quantité nette, date de durabilité minimale, conditions de conservation, pays d'origine et lot. La traçabilité doit être assurée à chaque maillon de la chaîne.
    </p>

    <h2>Contrôles aux frontières</h2>
    <p>
      Les produits alimentaires d'origine non animale en provenance du Maroc peuvent faire l'objet de contrôles renforcés aux postes de contrôle frontaliers (PCF). Le système TRACES-NT (Trade Control and Expert System) gère les notifications préalables d'importation.
    </p>

    <h2>Comment sécuriser votre importation</h2>
    <p>
      La conformité réglementaire est un processus continu. Un <Link to="/services">service de sourcing spécialisé</Link> intègre la dimension réglementaire dès la <Link to="/blog/verifier-fournisseur-epices-maroc">sélection du fournisseur</Link>. Notre <Link to="/methode">méthode structurée</Link> inclut la constitution du dossier technique complet avant toute expédition. <Link to="/contact">Contactez-nous</Link> pour un accompagnement personnalisé.
    </p>
  </BlogArticleLayout>
);

export default ReglementationImportUE;
