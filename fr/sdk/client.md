---
pageClass: sdk-doc doc
---

# SDK Client FF Serli

Le SDK Client de FF Serli vous permet d’évaluer des feature flags directement dans vos applications frontend ou basées navigateur, tout en respectant pleinement la spécification [OpenFeature](https://openfeature.dev).

Il est compatible avec des environnements comme **React**, **Vue**, **Next.js**, ou tout framework JavaScript moderne côté client.

## Installation

Installez le SDK avec votre gestionnaire de paquets préféré :

```bash
npm install @ff-serli/sdk-client
```

## Configuration

Voici comment configurer le SDK Client :

```ts
import { OpenFeature } from '@openfeature/web-sdk';
import SerliProvider from '@ff-serli/sdk-client';

const provider = await SerliProvider.create("votre-clé-d’organisation", "votre-id-de-projet");

// Enregistrez le provider dans OpenFeature
OpenFeature.setProvider(provider);
```

## Utilisation

Une fois le provider configuré, vous pouvez évaluer des flags n'importe où dans votre application :

```ts
const client = OpenFeature.getClient();

const showBanner = await client.getBooleanValue('show-banner', false);

if (showBanner) {
  // afficher la bannière promotionnelle
} else {
  // ne pas l'afficher
}
```

:::tip 💡 Bonnes pratiques
Chargez vos flags dès que possible (par exemple au démarrage de l'application).
:::

### Évaluation de différents types de flags

```ts
// Booléen
const value = client.getBooleanValue('feature-enabled', true);

// Chaîne de caractères
const value = client.getStringValue('theme', 'dark');

// Nombre
const value = client.getNumberValue('refresh-rate', 30);

// Objet
const value = client.getObjectValue('user-preferences', { theme: 'light' });
```

### Évaluation avec les détails

Vous pouvez récupérer les détails complets de l’évaluation à l’aide de l’API avancée d’OpenFeature :

```ts
const result = await client.getBooleanDetails('is-visible', false);
console.log(result);
// { value: true, reason: 'CACHED', flagMetadata: {}, flagKey: 'is-visible' }
```
