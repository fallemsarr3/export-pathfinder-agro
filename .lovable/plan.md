## Objectif

Créer une page unique de remerciement vers laquelle tous les formulaires (Afrique, Europe, Canada, Premium) redirigent après envoi, et poser les fondations de tracking via le `dataLayer` GTM déjà installé.

## 1. Nouvelle page `/merci`

Fichier : `src/pages/Merci.tsx`

Contenu :
- Layout standard (Header + Footer).
- `Helmet` avec `<meta name="robots" content="noindex, nofollow">` (page de conversion, ne doit pas remonter dans Google) + `<title>` et `<link rel="canonical">` propres.
- Bloc central :
  - Icône de validation (lucide `CheckCircle2`, couleur olive `#2F5D50`).
  - H1 : "Merci, votre demande a bien été reçue".
  - Paragraphe contextualisé selon le type de formulaire (lu via `?type=afrique|europe|canada|premium` dans l'URL), reprenant les messages déjà définis dans `confirmationMessages` de `useFormSubmission.ts` (Afrique : "Seuls les projets compatibles seront contactés", Europe/Canada : "traitées sous 48 à 72 h", Premium : "étudiées individuellement"). Fallback générique si pas de `type`.
  - Encadré "Prochaines étapes" en 3 puces : 1) Étude de qualification, 2) Pré-sélection fournisseurs, 3) Retour par email.
  - Deux CTA : "Retour à l'accueil" (`/`) et "Voir nos produits" (lien vers la section produits / `/services`).

Routage : ajouter `<Route path="/merci" element={<Merci />} />` dans `src/App.tsx`.

## 2. Redirection des formulaires

Fichier : `src/hooks/useFormSubmission.ts`

- Importer `useNavigate` de `react-router-dom`.
- À la place du `toast` de succès actuel, faire `navigate('/merci?type=' + formType)` après insertion réussie.
- Conserver les toasts d'erreur et de validation.
- Le `submitForm` continue de retourner `true/false` pour ne pas casser les `form.reset()` côté `Contact.tsx`.

Aucune modification nécessaire dans `Contact.tsx`.

## 3. Tracking GTM (dataLayer)

GTM (`GTM-KCC7DM6M`) est déjà chargé dans `index.html`. On ajoute simplement des événements `dataLayer` standardisés que l'utilisateur pourra ensuite brancher dans l'interface GTM (vers GA4, Ads, etc.).

### 3.1 Helper

Nouveau fichier `src/lib/analytics.ts` :
- Type minimal `window.dataLayer`.
- Fonction `trackEvent(event: string, params?: Record<string, unknown>)` qui pousse `{ event, ...params }` dans `window.dataLayer` (avec garde SSR/`typeof window`).
- Fonction `trackPageView(path: string)` qui pousse `{ event: 'page_view', page_path }` (utile pour le suivi SPA côté GTM).

### 3.2 Événements posés

- Dans `useFormSubmission.ts`, juste avant la redirection vers `/merci`, push :
  `trackEvent('form_submit', { form_type: formType, form_location: 'contact' })`.
- Dans `src/pages/Merci.tsx`, au `useEffect` de montage, push :
  `trackEvent('generate_lead', { form_type: typeFromURL })` (nom standard GA4 pour les conversions de lead).
- Dans `src/components/ScrollToTop.tsx` (déjà appelé sur changement de route), ajouter un appel `trackPageView(pathname)` pour que GTM voie chaque navigation SPA.

Aucune donnée personnelle (email, nom, téléphone) n'est envoyée au dataLayer — uniquement le type de formulaire et le chemin. Conforme RGPD en attendant la mise en place ultérieure d'une bannière Consent Mode v2.

## Détails techniques

- Pas de nouvelle dépendance.
- Pas de changement de schéma DB ni de RLS.
- `Merci.tsx` indexée `noindex` pour éviter la pollution SEO et le double comptage de conversion.
- Le helper `trackEvent` est no-op si `window.dataLayer` n'existe pas (sécurité si GTM est bloqué par un adblocker).

## Fichiers touchés

```text
src/pages/Merci.tsx                 (nouveau)
src/lib/analytics.ts                (nouveau)
src/App.tsx                         (route /merci)
src/hooks/useFormSubmission.ts      (redirect + trackEvent)
src/components/ScrollToTop.tsx      (trackPageView)
```
