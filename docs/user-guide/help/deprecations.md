---
tags:
  - Help
  - Guide
---

# Deprecations

What is going away, when, and what to do. Each item links to the page that explains it.

## What is removed

| What | When | What to do |
| --- | --- | --- |
| The legacy token service, which exchanges an email and a password for a token | Stops working on **28 February 2027** | Create a credential and get tokens with it, see [Legacy token service](../api/api-access.md#legacy-token-service). |
| `values`, the `[timestamp, value]` pairs of every series | Removed after **28 February 2027** | Read `points`, see [Series: `points` and `values`](../api/api-data-model.md#series-points-and-values). |

Both go the same day, so a program that moves to credentials and to `points` before then is not affected.

## What was added

The API only adds inside `v1`, so none of these changes affects a program that does not use them, see [API versioning](../api/api-documentation.md#api-versioning).

| Addition | Read |
| --- | --- |
| `points`, with `updated_at`, next to `values` | [API Data Model](../api/api-data-model.md#series-points-and-values) |
| `resolution`, to get the series averaged by hour or by day | [Resolution](../api/api-usage.md#resolution) |
| A stable `code` in every error | [Errors](../api/api-usage.md#errors) |
| `Cache-Control` on the data answers | [Caching](../api/api-usage.md#caching) |
| Compressed answers | [Compression](../api/api-usage.md#compression) |
| Credentials, the developer portal and access levels | [API Access](../api/api-access.md) and the [User Access Policy](../access/user-access-policy.md) |

The [Python client](../python-client/python-client-quickstart.md) reads `points`, so its DataFrames have `updated_at`.
