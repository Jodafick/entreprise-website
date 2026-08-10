# CAGIE — Site institutionnel B2B

Site de **démonstration commerciale** pour le **Centre Africain de Gestion et d’Ingénierie des Entreprises** — positionnement cabinet / agence d’accompagnement des entreprises (pas école).

## Données à remplacer

| Fichier | Contenu |
|---------|---------|
| `src/data/site.ts` | Textes institutionnels, contact, navigation |
| `src/data/services.ts` | **Services** (placeholders) |
| `src/data/projects.demo.ts` | Réalisations démo |
| `src/data/news.demo.ts` | Articles insights |
| `src/data/content.ts` | À propos, stats, équipe |
| `src/data/images.ts` | URLs visuels (personnes africaines, illustration) |

## Commandes

```bash
npm install
npm run dev
npm run build
```

## Routes

- `/` Accueil B2B
- `/a-propos` `/services` `/services/:slug`
- `/realisations` `/realisations/:slug`
- `/actualites` `/actualites/:slug`
- `/contact`

Anciennes URLs (`/formations`, `/admissions`, etc.) redirigent automatiquement.
