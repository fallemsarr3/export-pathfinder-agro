Installer Google Tag Manager (ID: GTM-KCC7DM6M) sur toutes les pages du site.

## Modifications

### `index.html`
1. Ajouter le script GTM dans `<head>`, le plus haut possible (juste après `<meta name="viewport">`) :
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KCC7DM6M');</script>
<!-- End Google Tag Manager -->
```

2. Ajouter le fallback `<noscript>` juste après l'ouverture de `<body>` (avant `<div id="root">`) :
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCC7DM6M"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

## Notes
- Une seule injection dans `index.html` suffit : c'est une SPA React, donc le script se charge sur toutes les routes.
- GTM gère le suivi de navigation SPA via son trigger « History Change » (à configurer ensuite dans l'interface GTM pour mesurer les changements de route).
- Aucun changement aux composants React (`App.tsx`, `Header.tsx`, etc.) n'est nécessaire.
- **RGPD** : ce site B2B cible l'Europe. GTM va charger des tags potentiellement traceurs (GA4, Ads, etc.). Une bannière de consentement (Consent Mode v2) sera nécessaire dès qu'un tag de tracking sera activé dans GTM — à traiter dans une étape suivante si tu veux.
