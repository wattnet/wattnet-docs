---
tags:
  - Python Client
  - Guide
---

# Python Client Authentication

`WattnetClient` (and `WattnetRawClient`) support two ways to authenticate, passed as constructor arguments.

## Option 1: a credential

```python
client = WattnetClient(client_id="<your-client-id>", client_secret="<your-client-secret>")
```

Create the credential in the [developer portal](https://developer.wattnet.eu), as described in [API Access](../api/api-access.md). If you do not have an account yet, you can [register for one](../api/api-access.md#1-create-a-credential) there. The client exchanges it for a bearer token with the OAuth 2.0 `client_credentials` grant the first time it is needed, keeps the token in memory, and renews it once 80 % of its lifetime has passed (but never later than a minute before it expires). If the API still rejects the cached token as expired (a `401` response), the client gets a new one and retries the request once.

Read the secret from an environment variable or a secrets manager instead of writing it in your code. The token endpoint is discovered from the issuer (`https://auth.wattnet.eu/realms/wattnet`); set `issuer_url` or `token_url` only if you need to override it, see [Configuration](python-client-reference.md#configuration).

## Option 2: a static bearer token

Pass a token directly, for example one copied from the developer portal to try something quickly:

```python
client = WattnetClient(token="<your-token>")
```

The client uses this token as is for every request. Since it cannot be refreshed by the library, you are responsible for replacing it once it expires (tokens are valid for 1 hour). You cannot combine `token` with `client_id` and `client_secret`.

## Closing the client

`WattnetClient`/`WattnetRawClient` support the context manager protocol,
closing the underlying HTTP session on exit:

```python
with WattnetClient(token="<your-token>") as client:
    df = client.get_zones()
```

`repr(client)` shows the base URL and auth mode (e.g.
`WattnetClient(base_url='https://api.wattnet.eu/v1', auth=StaticTokenProvider)`),
never any credentials.

## Errors

Authentication problems raise `wattnet.client.AuthenticationError`, for
example an invalid token, or a `client_id` and `client_secret` that Keycloak rejects. See [Error
handling](python-client-reference.md#error-handling) for the full exception
hierarchy.
