---
pageClass: sdk-doc doc
---

# FF Serli Client SDK

The FF Serli Client SDK allows you to evaluate feature flags directly in your frontend or browser-based applications while fully complying with the [OpenFeature](https://openfeature.dev) specification.

It is compatible with environments such as **React**, **Vue**, **Next.js**, or any modern JavaScript frontend framework.

## Installation

Install the SDK using your preferred package manager:

```bash
npm install @ff-serli/sdk-client
```

## Configuration

Here’s how to configure the Client SDK:

```ts
import { OpenFeature } from '@openfeature/web-sdk';
import SerliProvider from '@ff-serli/sdk-client';

const provider = await SerliProvider.create("your-organization-key", "your-project-id");

// Register the provider with OpenFeature
OpenFeature.setProvider(provider);
```

## Usage

Once the provider is configured, you can evaluate flags anywhere in your app:

```ts
const client = OpenFeature.getClient();

const showBanner = await client.getBooleanValue('show-banner', false);

if (showBanner) {
  // show promotional banner
} else {
  // do not display it
}
```

:::tip 💡 Best Practice
Load your flags as early as possible (e.g., on app startup).
:::

### Evaluating different flag types

```ts
// Boolean
const value = client.getBooleanValue('feature-enabled', true);

// String
const value = client.getStringValue('theme', 'dark');

// Number
const value = client.getNumberValue('refresh-rate', 30);

// Object
const value = client.getObjectValue('user-preferences', { theme: 'light' });
```

### Evaluation with details

You can retrieve full evaluation details using OpenFeature’s advanced API:

```ts
const result = await client.getBooleanDetails('is-visible', false);
console.log(result);
// { value: true, reason: 'CACHED', flagMetadata: {}, flagKey: 'is-visible' }
```
