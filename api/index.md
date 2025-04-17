---
pageClass: api-doc doc
---

# FF Serli API

FF Serli provides an HTTP API that allows you to interact programmatically with feature flags, projects, and environments. The API is **fully documented using Swagger/OpenAPI**, making it easy to explore, test, and integrate into your own systems.

## Overview

The FF Serli API lets you:
- Evaluate flag values from any client
- Use with or without the FF Serli SDKs

The API is designed to be compatible with the [OpenFeature](https://openfeature.dev) specification.

## API Documentation

You can access the full, interactive API documentation through our **Swagger UI**:

<div class="center">
  <a href="https://api.ff-serli.com/docs" target="_blank">
    https://api.ff-serli.com/docs
  </a>
</div>

The Swagger interface lets you:

- View all available endpoints
- Try out requests directly in the browser
- See required parameters and expected responses

## Authentication

All API requests require an **API key**, which is specific to your organization. You can find or generate your API key in the **Settings** section of the dashboard.

Include the key in the `Authorization` header:

```http
Authorization: YOUR_API_KEY
```

## Example: Evaluating a Flag

You can evaluate a flag directly from your backend using a simple `GET` request:

```http
GET api/flags/:name
Authorization: YOUR_API_KEY
```

**Response:**
```json
{
  "key": "enable-beta",
  "value": true,
}
```

## SDK vs API

You can use the API directly **without any SDK**. However, using one of our [official SDKs](../sdk/index) makes evaluation easier and more efficient thanks to built-in caching, fallback handling, and type-safe access.
