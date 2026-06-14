## Intégration Microsoft Clarity

### Objectif
Ajouter le script de tracking Microsoft Clarity fourni dans le `<head>` du site, à côté du GTM déjà présent.

### Script à intégrer
```html
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "x6w8mgtudb");
</script>
```

### Fichier concerné
- `index.html` : insérer le script dans `<head>`, après le bloc GTM existant.

### Aucune autre modification
Pas de changement de dépendances, pas d'impact sur le routage ou les composants React.