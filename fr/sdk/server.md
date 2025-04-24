---
pageClass: sdk-doc doc
---

# SDK Serveur FF Serli

Le SDK Serveur de FF Serli vous permet d’évaluer des feature flags dans vos applications backend tout en respectant la spécification [OpenFeature](https://openfeature.dev).

Il est compatible avec des environnements tels que **Node.js**, **Deno**, **Bun**, ou tout runtime JavaScript côté serveur.


## Installation

Installez le SDK avec votre gestionnaire de paquets préféré :

```bash
npm install @ff-serli/sdk-server
```

## Configuration

Voici comment configurer le SDK :

```ts
import { OpenFeature } from '@openfeature/server-sdk';
import SerliProvider from '@ff-serli/sdk-server';

// Initialisation du provider FF Serli avec votre clé d’organisation et votre id de projet
const provider = new SerliProvider("votre-clé-d’organisation", "votre-id-de-projet");

// Enregistrement du provider dans OpenFeature
OpenFeature.setProvider(provider);
```
## Utilisation

Une fois le provider configuré, vous pouvez évaluer un flag depuis n'importe où dans votre application:

```ts
const client = OpenFeature.getClient();

const isBetaEnabled = await client.getBooleanValue('enable-beta', false);

if (isBetaEnabled) {
  // activer la fonctionnalité beta
} else {
  // comportement par défaut
}
```

:::tip 💡Bonnes pratiques
Utilisez des clients nommés si vous gérez plusieurs projets ou environnements au sein d’un même service.
:::

#### Évaluation de plusieurs types de flags
```ts
// Booléen
await client.getBooleanValue('feature-flag-name', false);

// Chaîne de caractères
await client.getStringValue('theme-mode', 'light');

// Numérique
await client.getNumberValue('max-retries', 3);

// Objet
const config = await client.getObjectValue('config-flag', { level: 'free' });
```

#### Évaluation avec les détails
Vous pouvez récupérer les détails de l'évaluation et de la résolution des flags en utilisant les méthodes d'OpenFeature:
```ts
const flag_value = await client.getStringDetails('foo', 'baz');
console.log(flag_value);
// { value: 'bar', reason: 'CACHED', flagMetadata: {}, flagKey: 'foo' }
```
