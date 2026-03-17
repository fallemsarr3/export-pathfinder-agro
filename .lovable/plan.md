

# Plan : Améliorations SEO & CTR basées sur les données GSC

Basé sur l'analyse des statistiques Google Search Console (54 impressions, 1 clic, faible visibilité en Europe), voici les améliorations concrètes a apporter.

---

## 1. Optimiser les meta titles et descriptions pour le CTR

Réécrire les balises `<title>` et `meta description` de toutes les pages pour inclure des elements declencheurs de clic (devis sous 48h, fournisseurs verifies, etc.).

**Pages concernees et nouvelles meta :**

| Page | Nouveau Title | Nouvelle Description |
|------|--------------|---------------------|
| **Accueil** (index.html + Index.tsx) | `Agent Sourcing Maroc — Épices & Huiles Export B2B ✓ Devis 48h` | `Agent de sourcing export Maroc. Épices et huiles alimentaires certifiées pour importateurs Europe & Afrique. Fournisseurs vérifiés. Devis gratuit sous 48h.` |
| **Services** | `Services Sourcing Export Maroc — Épices & Huiles B2B | Devis Gratuit` | `Sourcing fournisseurs vérifiés, contrôle qualité, conformité UE. Services adaptés Afrique & Europe. Devis personnalisé sous 48h.` |
| **Zones Export** | `Export Maroc → Europe & Afrique — Épices & Huiles Alimentaires B2B` | `Sourcing export Maroc vers Europe et Afrique de l'Ouest. Conformité documentaire, Incoterms FOB/CFR/CIF. Agent terrain vérifié.` |
| **Méthode** | `Méthode Sourcing Maroc — 6 Étapes, Traçabilité Complète` | `Process structuré en 6 étapes pour sécuriser vos imports d'épices et huiles depuis le Maroc. Transparence totale, livrables définis.` |
| **À propos** | `À Propos — Agent Sourcing Agroalimentaire Maroc | Sarr Trade Link` | `Agent de sourcing export basé au Maroc. Spécialiste épices et huiles alimentaires B2B. Fournisseurs vérifiés, conformité UE garantie.` |
| **Contact** | `Demander un Devis Gratuit — Sourcing Épices & Huiles Maroc` | `Contactez Sarr Trade Link pour un devis sourcing gratuit sous 48h. Épices et huiles alimentaires marocaines certifiées pour l'export B2B.` |

Les pages produits garderont leur format existant (deja optimise).

**Fichiers modifies :** `index.html`, `src/pages/Index.tsx`, `src/pages/Services.tsx`, `src/pages/ZonesExport.tsx`, `src/pages/Methode.tsx`, `src/pages/APropos.tsx`, `src/pages/Contact.tsx`

---

## 2. Ajouter les balises hreflang

Ajouter dans `index.html` les balises hreflang pour indiquer a Google les marches cibles :
- `fr` (default) pour les marches francophones
- `x-default` comme fallback

Ajouter egalement via React Helmet les hreflang sur chaque page individuellement.

**Fichiers modifies :** `index.html`, composant `Layout.tsx` (ajout global des hreflang)

---

## 3. Ajouter des meta geo-targeting

Ajouter des meta tags de ciblage geographique dans `index.html` :
```html
<meta name="geo.region" content="MA" />
<meta name="geo.placename" content="Morocco" />
```

**Fichier modifie :** `index.html`

---

## Resume des modifications

- **6 pages** : meta title + description reecrites pour maximiser le CTR
- **index.html** : hreflang + geo-targeting ajoutes
- **Layout.tsx** : hreflang dynamique par page
- Aucun changement structurel ou de contenu visible sur le site

