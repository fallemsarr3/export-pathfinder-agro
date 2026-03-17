

# Canonicalisation SEO : passage de `www` vers `sarrtradelink.com`

## Diagnostic actuel

| Element | URL actuelle | URL cible |
|---------|-------------|-----------|
| Canonical (index.html) | `https://www.sarrtradelink.com/` | `https://sarrtradelink.com/` |
| Schema.org Organization | `https://www.sarrtradelink.com` | `https://sarrtradelink.com` |
| Sitemap.xml (6 URLs) | Toutes en `www.` | Toutes sans `www` |
| Robots.txt (sitemap) | `www.sarrtradelink.com` | `sarrtradelink.com` |
| Pages avec Helmet | Services, ZonesExport (sans canonical) | Ajouter canonical |
| Pages sans Helmet | Index, Methode, APropos, Contact | Ajouter Helmet + canonical |

## Modifications prevues

### 1. index.html - Mettre a jour la canonical et le Schema.org

- Changer `<link rel="canonical" href="https://www.sarrtradelink.com/" />` vers `https://sarrtradelink.com/`
- Changer l'URL dans le JSON-LD Organization de `https://www.sarrtradelink.com` vers `https://sarrtradelink.com`

### 2. Ajouter une balise canonical sur chaque page via Helmet

Les 6 pages publiques recevront chacune leur canonical exacte :

| Page | Canonical |
|------|-----------|
| Index (`/`) | `https://sarrtradelink.com/` |
| Services (`/services`) | `https://sarrtradelink.com/services` |
| ZonesExport (`/zones-export`) | `https://sarrtradelink.com/zones-export` |
| Methode (`/methode`) | `https://sarrtradelink.com/methode` |
| APropos (`/a-propos`) | `https://sarrtradelink.com/a-propos` |
| Contact (`/contact`) | `https://sarrtradelink.com/contact` |

**Pages a modifier :**
- **Index.tsx** : ajouter Helmet avec canonical
- **Services.tsx** : ajouter canonical dans le Helmet existant
- **ZonesExport.tsx** : ajouter canonical dans le Helmet existant
- **Methode.tsx** : ajouter Helmet avec canonical (+ title/description)
- **APropos.tsx** : ajouter Helmet avec canonical (+ title/description)
- **Contact.tsx** : ajouter Helmet avec canonical (+ title/description)

### 3. Sitemap.xml - Supprimer le `www`

Remplacer toutes les 6 URLs de `https://www.sarrtradelink.com/...` vers `https://sarrtradelink.com/...`

### 4. Robots.txt - Supprimer le `www`

Changer la ligne Sitemap vers `https://sarrtradelink.com/sitemap.xml`

### 5. Redirections 301

Les redirections 301 (http vers https, www vers non-www) ne peuvent pas etre gerees dans le code de l'application. Elles doivent etre configurees au niveau de :
- **Votre fournisseur DNS** (Cloudflare, OVH, etc.) : regle de redirection "www -> non-www"
- **Ou votre registrar de domaine** : redirection de type dans les parametres DNS

Apres publication, vous devrez configurer cette redirection dans les parametres de votre domaine.

### 6. Aucun noindex

Toutes les pages resteront indexables. La balise `<meta name="robots" content="index, follow" />` est deja presente dans index.html.

---

## Section technique

**Fichiers modifies :**
- `index.html` (canonical + Schema.org URL)
- `public/sitemap.xml` (6 URLs)
- `public/robots.txt` (1 URL)
- `src/pages/Index.tsx` (ajout Helmet)
- `src/pages/Services.tsx` (ajout canonical)
- `src/pages/ZonesExport.tsx` (ajout canonical)
- `src/pages/Methode.tsx` (ajout Helmet complet)
- `src/pages/APropos.tsx` (ajout Helmet complet)
- `src/pages/Contact.tsx` (ajout Helmet complet)

**Total : 9 fichiers**
