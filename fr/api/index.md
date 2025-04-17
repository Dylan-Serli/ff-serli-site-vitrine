---
pageClass: api-doc doc
---

# API FF Serli

FF Serli propose une API HTTP qui vous permet d’interagir de manière programmatique avec les feature flags, projets et environnements. L’API est **entièrement documentée via Swagger/OpenAPI**, ce qui la rend facile à explorer, tester et intégrer dans vos systèmes.

## Vue d’ensemble

L’API FF Serli vous permet de :
- Évaluer la valeur des flags depuis n’importe quel client
- L’utiliser avec ou sans les SDK FF Serli

L’API est conçue pour être compatible avec la spécification [OpenFeature](https://openfeature.dev).

## Documentation de l’API

Vous pouvez accéder à la documentation complète et interactive via notre **interface Swagger** :

<div class="center">
  <a href="https://api.ff-serli.com/docs" target="_blank">
    https://api.ff-serli.com/docs
  </a>
</div>

L’interface Swagger vous permet de :

- Visualiser tous les endpoints disponibles
- Tester les requêtes directement depuis le navigateur
- Voir les paramètres requis et les réponses attendues

## Authentification

Toutes les requêtes vers l’API nécessitent une **clé API**, propre à votre organisation. Vous pouvez la retrouver ou en générer une nouvelle dans la section **Paramètres** du tableau de bord.

Ajoutez cette clé dans l’en-tête `Authorization` :

```http
Authorization: YOUR_API_KEY
```

## Exemple : Évaluation d’un flag

Vous pouvez évaluer un flag directement depuis votre backend avec une requête `GET` :

```http
GET api/flags/:name
Authorization: YOUR_API_KEY
```

**Réponse :**
```json
{
  "key": "enable-beta",
  "value": true
}
```

## SDK vs API

Vous pouvez utiliser l’API directement **sans aucun SDK**. Cependant, l’utilisation d’un de nos [SDK officiels](../sdk/index) facilite l’évaluation grâce à la mise en cache intégrée, la gestion des valeurs par défaut et un accès typé sécurisé.
