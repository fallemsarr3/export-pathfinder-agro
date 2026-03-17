

# Plan: Ajouter le Canada partout ou il doit figurer

## Constat

Le Canada n'apparait que sur la page **Zones Export**. Il est absent de :

1. **Page Services** (`src/pages/Services.tsx`) — 3 sections (Afrique, Europe, Premium) mais pas de section Canada
2. **ServicesOverview sur l'Accueil** (`src/components/home/ServicesOverview.tsx`) — 3 cartes (Afrique, Europe, Premium) sans Canada
3. **Footer** (`src/components/Footer.tsx`) — liste des services : "Sourcing Afrique", "Sourcing Europe", "Sourcing Premium" sans Canada
4. **SEO / Schema.org** dans Services.tsx — le `servicesSchema` ItemList ne contient que 3 services, pas le Canada
5. **FAQ Services** — la question "Intervenez-vous pour des importateurs en Afrique et en Europe ?" ne mentionne pas le Canada

## Modifications prevues

### 1. `src/pages/Services.tsx` — Ajouter une section Canada complete

- Inserer une nouvelle section `#canada` entre Europe et Premium, suivant le meme format (grid 2 colonnes)
- Couleur : `secondary` (coherent avec ZonesExport)
- Contenu : cible (importateurs canadiens), problemes resolus (conformite ACIA, etiquetage bilingue), prestations incluses, produits concernes, remuneration
- Bouton CTA : `variant="secondary"` avec lien `/contact?type=canada`
- Mettre a jour le `servicesSchema` pour ajouter un 4eme service (position 4, areaServed: Canada)
- Mettre a jour la FAQ : modifier la reponse qui mentionne "Afrique et Europe" pour inclure le Canada
- Mettre a jour les meta descriptions pour inclure "Canada"

### 2. `src/components/home/ServicesOverview.tsx` — Remplacer "Premium" par "Canada" ou ajouter une 4eme carte

Passer la grille a 4 colonnes (`lg:grid-cols-4` ou `lg:grid-cols-2 xl:grid-cols-4`) et ajouter une carte Canada avec :
- Barre couleur `bg-secondary`
- Badge "Canada"
- Titre "Sourcing Maroc → Canada"
- Description courte avec liens produits
- 3 points cles (conformite ACIA, etiquetage bilingue, Incoterms CIF/DAP)
- Bouton `variant="secondary"` vers `/contact?type=canada`

### 3. `src/components/Footer.tsx` — Ajouter le lien Canada

- Ajouter `<li><Link to="/services#canada">Sourcing Canada</Link></li>` dans la liste des services (ligne 66)

### 4. `src/pages/Services.tsx` — SEO updates

- Ajouter le Canada dans le titre et la meta description
- Ajouter un service Canada dans le schema ItemList

## Fichiers modifies

| Fichier | Modification |
|---------|-------------|
| `src/pages/Services.tsx` | Nouvelle section #canada + schema + FAQ + meta |
| `src/components/home/ServicesOverview.tsx` | 4eme carte Canada + grille 4 colonnes |
| `src/components/Footer.tsx` | Lien "Sourcing Canada" |

