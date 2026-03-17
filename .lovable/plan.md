

# Plan: Ajouter le formulaire Canada sur la page Contact

## Constat

La page Contact (`src/pages/Contact.tsx`) a 3 onglets (Afrique, Europe, Premium) mais pas de tab Canada. Il faut aussi ajouter "canada" comme `FormType` valide dans le hook de soumission.

## Modifications

### 1. `src/hooks/useFormSubmission.ts`
- Ajouter `"canada"` au type `FormType`
- Ajouter le message de confirmation Canada dans `confirmationMessages`

### 2. `src/pages/Contact.tsx`

**Onglets (ligne 80-84):** Ajouter un 4e tab Canada avec une icone `Leaf` (ou `MapPin`) entre Europe et Premium.

**Validation du query param (ligne 20):** Ajouter `"canada"` dans le tableau `includes`.

**Nouveau handler `handleCanadaSubmit`:** Similaire a Europe, avec `submitForm("canada", ...)`.

**Nouveau formulaire Canada** (insere entre Europe et Premium) avec :
- Barre couleur `bg-secondary`
- Titre "Demande de sourcing conforme -- Canada"
- Description avec liens vers `/services#canada` et `/zones-export#canada`
- Champs : entreprise, province/pays, site web, nom/fonction, email, produit recherche, volume annuel, documents requis (conformite ACIA, etiquetage bilingue FR/EN, certificats d'analyse, certificats d'origine), checkbox forfait sourcing, message
- Bouton `variant="secondary"` "Envoyer la demande Canada"

**Section "Pourquoi des formulaires differents" (ligne 460):** Passer la grille a 4 colonnes (`md:grid-cols-2 lg:grid-cols-4`) et ajouter une carte Canada avec point `bg-secondary` expliquant l'accent sur la conformite ACIA et l'etiquetage bilingue.

## Fichiers modifies

| Fichier | Modification |
|---------|-------------|
| `src/hooks/useFormSubmission.ts` | Ajout "canada" au FormType + message confirmation |
| `src/pages/Contact.tsx` | Tab Canada + formulaire + section info |

