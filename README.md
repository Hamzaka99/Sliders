# Story / Slides

Une application React/Vite pour créer et présenter des decks narratifs. Le deck de démonstration reprend le cours sur les institutions du commerce international en anglais, français et arabe.

## Démarrer

```bash
npm install
npm run dev
```

Vite affiche l’adresse locale dans le terminal (par défaut `http://localhost:5173`). Pour compiler la version de production : `npm run build`.

Les tests d’interaction se lancent avec `npm test`.

## Présenter

- Flèches gauche/droite, espace ou Page Up / Page Down : naviguer.
- Balayage horizontal : avancer ou reculer sur écran tactile.
- `F` ou le bouton plein écran : entrer en mode présentation ; `Échap` le quitte.
- `N` ou l’icône du livre : afficher les notes orateur.
- Sélecteur de langue : basculer entre EN, FR et عربي, avec mise en page RTL.
- Icône soleil/lune : basculer entre thème sombre et clair ; le choix est mémorisé.
- Après la vue d’ensemble, balayer le carrousel plein écran Route de la soie → Première Guerre mondiale → Seconde Guerre mondiale ; le dernier balayage ouvre la chronologie historique originale.
- Plan latéral : accéder directement à un chapitre.

## Ajouter un deck

Les decks et leur contenu sont dans [src/presentation.js](src/presentation.js). Ajoutez un objet dans `presentationLibrary` avec un identifiant, un titre, un sous-titre, des métadonnées et un tableau `chapters`. Chaque texte localisable utilise les clés `en`, `fr` et `ar`. Les chapitres réutilisent les types de rendu `overview`, `history-carousel`, `timeline`, `institutions`, `incoterms`, `finance`, `standards` ou `case`.

L’interface, les transitions et le lecteur sont dans [src/main.jsx](src/main.jsx) ; les styles responsives et le mode plein écran se trouvent dans [src/styles.css](src/styles.css).

## Compétences du workspace

Les compétences Anthropic de conception frontend, tests web, thèmes, canvas, artefacts web et présentations sont installées sous `.agents/skills/`.