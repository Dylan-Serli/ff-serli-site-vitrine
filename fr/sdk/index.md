---
pageClass: sdk-doc doc
---

# SDKs FF Serli

FF Serli propose deux SDKs officiels, **entièrement conformes à la spécification [OpenFeature](https://openfeature.dev)** :

- Un **SDK Serveur** pour les applications backend
- Un **SDK Client** pour les applications frontend ou basées sur le navigateur

Les deux SDKs vous permettent d’évaluer des feature flags dans votre application avec un minimum de configuration et une grande flexibilité.

## Pourquoi utiliser les SDKs FF Serli ?

Avec nos SDKs, vous pouvez :

- Évaluer des feature flags en temps réel
- Utiliser une interface standardisée et familière grâce à OpenFeature
- Éviter la gestion manuelle de l’API et simplifier la logique de repli (fallback)

Que vous développiez un service backend ou une application frontend moderne, l’intégration des feature flags sera fluide et efficace.

## SDK Serveur vs SDK Client

|              | SDK Serveur                        | SDK Client                    |
| ------------ | ---------------------------------- | ----------------------------- |
| Environnement | Node.js, Deno, Bun, etc.          | Navigateur, React, Vue, etc.  |
| Cas d’usage   | Logique backend, routage API, auth | Interfaces, expériences utilisateur |

## Pour commencer

Choisissez le SDK qui correspond à votre usage :

- 👉 [SDK Serveur](./server) — Pour Node.js ou tout autre environnement côté serveur
- 👉 [SDK Client](./client) — Pour les applications frontend

Chaque section vous guide dans l’installation, la configuration et l’utilisation concrète du SDK.


:::tip 💡
Vous pouvez trouver un [repository Github](https://github.com/Dylan-Serli/poc-ff-serli-openfeature) avec des exemples pour les deux SDKs.
:::

## Vous n’utilisez pas nos SDKs ?

Aucun souci !
Vous pouvez toujours utiliser directement l’[API FF Serli](../api/index).

Notre système est conçu pour être flexible et indépendant de la plateforme — utilisez l’outil qui vous convient le mieux.
