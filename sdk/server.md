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
import { SerliProvider } from '@ff-serli/sdk-server';

// Initialisation du provider FF Serli avec votre clé d’organisation
const provider = new SerliProvider("your-organization-key");

// Enregistrement du provider dans OpenFeature
OpenFeature.setProvider(provider);
```
