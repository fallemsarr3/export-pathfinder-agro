import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import { blogArticles } from "@/data/blogArticles";

const article = blogArticles.find((a) => a.slug === "huile-argan-alimentaire-guide-importateur")!;

const HuileArganGuide = () => (
  <BlogArticleLayout article={article}>
    <p>
      L'<Link to="/produits/huile-argan-alimentaire">huile d'argan alimentaire</Link> est l'un des produits marocains les plus valorisés à l'export. Prisée pour ses qualités gustatives et nutritionnelles, elle suscite un intérêt croissant des distributeurs et industriels européens. Voici le guide complet pour la sourcer efficacement en B2B.
    </p>

    <h2>Qu'est-ce que l'huile d'argan alimentaire ?</h2>
    <p>
      L'huile d'argan alimentaire est extraite des amandons torréfiés du fruit de l'arganier (<em>Argania spinosa</em>), un arbre endémique du sud-ouest du Maroc. La torréfaction lui confère sa couleur ambrée foncée et son goût caractéristique de noisette grillée, qui la distingue de l'huile d'argan cosmétique (non torréfiée).
    </p>

    <h2>L'IGP Argane : un gage de qualité</h2>
    <p>
      L'Indication Géographique Protégée "Argane" certifie que l'huile est produite dans la zone géographique traditionnelle (région de Souss-Massa-Draa) selon des méthodes de production définies. Pour un importateur, l'IGP est un critère de sélection fort qui garantit :
    </p>
    <ul>
      <li>L'authenticité de l'origine géographique</li>
      <li>Le respect d'un cahier des charges de production</li>
      <li>Une traçabilité renforcée du fruit à l'huile</li>
      <li>Une protection contre les contrefaçons</li>
    </ul>

    <h2>Critères de qualité pour l'import B2B</h2>
    <p>
      Au-delà de l'IGP, plusieurs paramètres analytiques sont à vérifier :
    </p>
    <ul>
      <li><strong>Acidité oléique</strong> : inférieure à 0,8 % pour une huile de qualité supérieure</li>
      <li><strong>Indice de peroxyde</strong> : inférieur à 15 meq O2/kg</li>
      <li><strong>Composition en acides gras</strong> : riche en oméga 6 (linoléique ~30%) et oméga 9 (oléique ~45%)</li>
      <li><strong>Tocophérols (vitamine E)</strong> : teneur élevée, signe de fraîcheur</li>
      <li><strong>Absence de contaminants</strong> : conforme aux <Link to="/blog/reglementation-import-alimentaire-ue-maroc">normes LMR européennes</Link></li>
    </ul>

    <h2>Formats d'export disponibles</h2>
    <p>
      Les fournisseurs marocains proposent plusieurs conditionnements adaptés au B2B :
    </p>
    <ul>
      <li><strong>Vrac</strong> : bidons de 5L, 10L, 20L ou fûts de 200L (pour industriels et conditionneurs)</li>
      <li><strong>Bouteilles</strong> : verre ou PET de 100ml à 1L (pour distributeurs)</li>
      <li><strong>Marque blanche</strong> : étiquetage personnalisé selon le cahier des charges de l'acheteur</li>
    </ul>

    <h2>MOQ et prix indicatifs</h2>
    <p>
      Les quantités minimales varient selon le fournisseur et le format :
    </p>
    <ul>
      <li><strong>Vrac</strong> : à partir de 200L (MOQ courante)</li>
      <li><strong>Bouteilles</strong> : à partir de 500 à 1 000 unités</li>
      <li><strong>Prix</strong> : variable selon la qualité, le volume et les conditions Incoterms. Le prix FOB oscille généralement entre 25 et 45 €/L selon la qualité et le format.</li>
    </ul>

    <h2>Les pièges à éviter</h2>
    <ul>
      <li><strong>Huile coupée</strong> : mélange avec d'autres huiles végétales moins coûteuses. Exigez un certificat d'analyse confirmant la pureté.</li>
      <li><strong>Fausse IGP</strong> : vérifiez que le fournisseur est effectivement certifié par l'organisme de contrôle agréé.</li>
      <li><strong>Stockage inadéquat</strong> : l'huile d'argan est sensible à l'oxydation. Le fournisseur doit stocker en conditions contrôlées (température, lumière).</li>
      <li><strong>Saisonnalité</strong> : la récolte des fruits d'argan se fait entre juin et septembre. Anticipez vos commandes.</li>
    </ul>

    <h2>Sourcer avec un agent terrain</h2>
    <p>
      La filière argan au Maroc repose largement sur des coopératives féminines. Un <Link to="/services">agent de sourcing</Link> connaissant le terrain peut <Link to="/blog/verifier-fournisseur-epices-maroc">vérifier la fiabilité</Link> de ces structures, négocier les conditions et coordonner la documentation export. Notre <Link to="/methode">méthode en 6 étapes</Link> garantit un processus sécurisé de bout en bout.
    </p>

    <p>
      <strong>Prêt à sourcer de l'huile d'argan alimentaire ?</strong> <Link to="/contact">Demandez un devis gratuit</Link> et recevez une proposition personnalisée sous 48h.
    </p>
  </BlogArticleLayout>
);

export default HuileArganGuide;
