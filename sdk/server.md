---
pageClass: sdk-doc doc
---

# FF Serli Server SDK

The FF Serli Server SDK lets you evaluate feature flags in your backend applications while fully complying with the [OpenFeature](https://openfeature.dev) specification.

It is compatible with environments such as **Node.js**, **Deno**, **Bun**, or any JavaScript server-side runtime.

## Installation

Install the SDK using your preferred package manager:

```bash
npm install @ff-serli/sdk-server
```

## Configuration
Here's how to configure the SDK:
```ts
import { OpenFeature } from '@openfeature/server-sdk';
import SerliProvider from '@ff-serli/sdk-server';

// Initialize the FF Serli provider with your organization key and project id
const provider = new SerliProvider("your-organization-key", "your-project-id");

// Register the provider with OpenFeature
OpenFeature.setProvider(provider);
```

:::tip
You can find your organization key and project id in the FF Serli dashboard.
:::

## Usage
Once configured, you can evaluation a flag from anywhere in your application
```ts
const client = OpenFeature.getClient();

const isBetaEnabled = await client.getBooleanValue('enable-beta', false);

if (isBetaEnabled) {
  // enable beta feature
} else {
  // default behavior
}
```

:::tip 💡 Best Practice
Use named clients if you manage multiple projects or environments within the same service.
:::

#### Evaluating different flag types
```ts
// Boolean
await client.getBooleanValue('feature-flag-name', false);

// String
await client.getStringValue('theme-mode', 'light');

// Number
await client.getNumberValue('max-retries', 3);

// Object
const config = await client.getObjectValue('config-flag', { level: 'free' });
```

#### Evaluation with details

```ts
const flagValue = await client.getStringDetails('foo', 'baz');
console.log(flagValue);
// { value: 'bar', reason: 'CACHED', flagMetadata: {}, flagKey: 'foo' }
```
