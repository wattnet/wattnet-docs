---
tags:
  - API
  - Guide
---

# API Documentation

Full, interactive documentation for all available endpoints is published at
[api.wattnet.eu/docs](https://api.wattnet.eu/docs), including a Swagger UI
where you can browse endpoints and try out requests directly from the
browser.

This is also where you'll find the full catalog of available endpoints and
query parameters, such as which zones and metrics (carbon, water, green
score) can be requested, beyond the example shown in
[API Access](api-access.md#3-query-the-api). For an explanation of the data
quality flags returned in the results, see the [API Data
Model](api-data-model.md).

## API versioning

The API is versioned. The current version is `v1`; the base URL is
[https://api.wattnet.eu/v1/](https://api.wattnet.eu/v1/).

## Authorizing in the interactive docs

The interactive docs have an **Authorize** button. Paste a Bearer token into it, for example the one the developer portal returns for one of your credentials, see [API Access](api-access.md#trying-the-api-by-hand). The token is not stored in your browser.
