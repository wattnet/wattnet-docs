---
tags:
  - Help
  - Guide
---

# Troubleshooting

Find what you see, and go to the page that explains it.

## Signing in and credentials

<div class="table-help" markdown>

| You see | It means | Read |
| --- | --- | --- |
| **Sign in with GitHub** says the account is not linked | A third-party account never creates an account: it has to be linked first. | [Linking a third-party account](../access/account-management.md#linking-a-third-party-account) |
| You forgot your password | Use **Forgot password** on the sign-in page. | [Your account page](../access/account-management.md#your-account-page) |
| You lost a `client_secret` | A secret is shown once. Generate a new one. | [Create a credential](../api/api-access.md#1-create-a-credential) |
| You cannot create a credential | Your account is at the allowance of its level. | [Access levels](../access/user-access-policy.md#2-access-levels) |

</div>

## Errors of the API

<div class="table-help" markdown>

| You see | It means | Read |
| --- | --- | --- |
| `401` when obtaining a token | The `client_id` or the `client_secret` is wrong, or the credential was revoked. | [Authentication errors](../api/api-access.md#authentication-errors) |
| `401` when querying | The token is missing, malformed or expired. | [Authentication errors](../api/api-access.md#authentication-errors) |
| `403` with a `code` such as `range_limit_exceeded` | The query goes beyond what your level allows. | [Limits of your access level](../api/api-usage.md#limits-of-your-access-level) |
| `429` | Too many requests for your level. Wait the `Retry-After` seconds. | [Limits of your access level](../api/api-usage.md#limits-of-your-access-level) |
| `400` with `query_too_big` | The query asks for too many zones and days at once. | [Limits of your access level](../api/api-usage.md#limits-of-your-access-level) |
| Another `400` or a `422` | A parameter is missing, repeated, unknown or not valid. | [Errors](../api/api-usage.md#errors) |

</div>

## The data

<div class="table-help" markdown>

| You see | It means | Read |
| --- | --- | --- |
| A response with no rows for a zone code you typed | The API does not validate zone codes: an unknown one is not an error, it simply has no data. Check the code in `/zones`. | [API Documentation](../api/api-documentation.md) |
| `values` is missing, or you read `values` | `values` is deprecated and removed after 28 February 2027. Read `points`. | [Deprecations](deprecations.md) |
| `valid: false` or `zone_status: preview` in a point | The value is provisional, or estimated. | [Data quality flags](../api/api-data-model.md#data-quality-flags) |
| Too many rows, or a slow answer for a long range | Use `resolution` and ask for compressed answers. | [Resolution](../api/api-usage.md#resolution) |

</div>

## Python client

<div class="table-help" markdown>

| You see | It means | Read |
| --- | --- | --- |
| `WattnetAPIError` | The API answered an error: decide with its `code`. | [Error handling](../python-client/python-client-reference.md#error-handling) |
| `AuthenticationError` | The token or the credential was rejected. | [Authentication](../python-client/python-client-authentication.md) |
| `KeyError: 'points'` | The server does not send `points`, and the client reads them. | [Columns of a series](../python-client/python-client-reference.md#columns-of-a-series) |

</div>

Still stuck? Get in touch through [wattnet.eu/contact](https://wattnet.eu/contact).
