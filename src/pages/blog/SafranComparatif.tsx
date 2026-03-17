import { Link } from "react-router-dom";
import BlogArticleLayout from "@/components/blog/BlogArticleLayout";
import { blogArticles } from "@/data/blogArticles";

const article = blogArticles.find((a) => a.slug === "safran-marocain-vs-iranien-comparatif")!;

const SafranComparatif = () => (
  <BlogArticleLayout article={article}>
    <p>
      Le <Link to="/produits/safran-maroc">safran marocain</Link> et le safran iranien dominent le marché mondial. Pour un importateur B2B, le choix entre ces deux origines dépend de plusieurs facteurs : qualité, prix, traçabilité et logistique. Voici un comparatif objectif pour éclairer votre décision.
    </p>

    <h2>Qualité : classification ISO 3632</h2>
    <p>
      La norme ISO 3632 classe le safran selon trois critères mesurés par spectrophotométrie :
    </p>
    <ul>
      <li><strong>Crocine</strong> (pouvoir colorant) : le safran marocain de qualité Taliouine atteint des valeurs de 220-250+, comparable au meilleur safran iranien Negin.</li>
      <li><strong>Picrocrocine</strong> (amertume/saveur) : niveaux généralement similaires entre les deux origines (70-100).</li>
      <li><strong>Safranal</strong> (arôme) : les deux origines produisent des niveaux de 20-50, conformes à la catégorie I.</li>
    </ul>
    <p>
      <strong>Verdict :</strong> En grade I ISO, les deux origines offrent une qualité comparable. Le safran marocain de Taliouine IGP bénéficie d'un terroir reconnu et d'une traçabilité renforcée.
    </p>

    <h2>Prix au kilo</h2>
    <p>
      Le safran iranien est généralement 15 à 30 % moins cher que le safran marocain en prix FOB. Cette différence s'explique par les volumes de production : l'Iran produit environ 400 tonnes/an contre 6 à 8 tonnes pour le Maroc. Cependant, le prix final dépend aussi des coûts de conformité et de transport.
    </p>

    <h2>Traçabilité et certifications</h2>
    <p>
      C'est ici que le safran marocain prend un avantage significatif pour les importateurs européens :
    </p>
    <ul>
      <li><strong>IGP Taliouine</strong> : indication géographique protégée, reconnue au Maroc et en cours de reconnaissance internationale.</li>
      <li><strong>Traçabilité simplifiée</strong> : les coopératives marocaines offrent une traçabilité du champ au lot exporté.</li>
      <li><strong>Conformité UE</strong> : les fournisseurs marocains sont habitués aux exigences de la <Link to="/blog/reglementation-import-alimentaire-ue-maroc">réglementation européenne</Link>.</li>
    </ul>
    <p>
      Le safran iranien peut poser des défis de traçabilité en raison des intermédiaires multiples et des sanctions commerciales qui compliquent les paiements internationaux.
    </p>

    <h2>Logistique et délais</h2>
    <p>
      Le Maroc bénéficie d'une proximité géographique avantageuse avec l'Europe :
    </p>
    <ul>
      <li><strong>Transit maritime Maroc → Europe</strong> : 3-5 jours (Tanger Med → ports européens)</li>
      <li><strong>Transit maritime Iran → Europe</strong> : 15-25 jours</li>
      <li><strong>Accord d'association UE-Maroc</strong> : facilités douanières et préférences tarifaires</li>
    </ul>

    <h2>Risques géopolitiques</h2>
    <p>
      L'approvisionnement depuis l'Iran est soumis aux aléas des sanctions internationales, qui peuvent compliquer les transactions bancaires et le transport. Le Maroc offre une stabilité politique et commerciale favorable aux relations B2B de long terme.
    </p>

    <h2>Tableau récapitulatif</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 pr-4 font-semibold text-foreground">Critère</th>
            <th className="text-left py-3 pr-4 font-semibold text-foreground">Safran marocain</th>
            <th className="text-left py-3 font-semibold text-foreground">Safran iranien</th>
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          <tr className="border-b border-border/50"><td className="py-2 pr-4">Qualité ISO grade I</td><td className="py-2 pr-4">✓ Excellent</td><td className="py-2">✓ Excellent</td></tr>
          <tr className="border-b border-border/50"><td className="py-2 pr-4">Prix FOB</td><td className="py-2 pr-4">Plus élevé (+15-30%)</td><td className="py-2">Plus compétitif</td></tr>
          <tr className="border-b border-border/50"><td className="py-2 pr-4">Traçabilité</td><td className="py-2 pr-4">✓ IGP, forte</td><td className="py-2">⚠ Variable</td></tr>
          <tr className="border-b border-border/50"><td className="py-2 pr-4">Conformité UE</td><td className="py-2 pr-4">✓ Facilitée</td><td className="py-2">⚠ Plus complexe</td></tr>
          <tr className="border-b border-border/50"><td className="py-2 pr-4">Transit vers Europe</td><td className="py-2 pr-4">3-5 jours</td><td className="py-2">15-25 jours</td></tr>
          <tr><td className="py-2 pr-4">Risque géopolitique</td><td className="py-2 pr-4">✓ Faible</td><td className="py-2">⚠ Élevé</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Notre recommandation</h2>
    <p>
      Pour les importateurs européens, le safran marocain offre le meilleur équilibre qualité-risque-logistique. Le surcoût est compensé par la traçabilité, la conformité facilitée et les délais réduits. Pour explorer les options de <Link to="/services">sourcing de safran marocain</Link>, <Link to="/contact">demandez un devis</Link> à notre équipe.
    </p>
  </BlogArticleLayout>
);

export default SafranComparatif;
