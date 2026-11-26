---
tags:
  - Python Client
  - Guide
---

# Python Client Authentication

`WattnetClient` and `WattnetRawClient`, and their async counterparts `AsyncWattnetClient` and `AsyncWattnetRawClient`, authenticate in one of two ways, given as constructor arguments.

## Option 1: a credential

```python
client = WattnetClient(client_id="<your-client-id>", client_secret="<your-client-secret>")
```

Create the credential in the [developer portal](https://developers.wattnet.eu), see [API Access](../api/api-access.md#1-create-a-credential). The client exchanges it for a token with the OAuth 2.0 `client_credentials` grant the first time it needs one, keeps the token in memory and renews it after 80 % of its lifetime (never later than a minute before it expires). If the API still rejects the token as expired (`401`), the client gets a new one and retries the request once.

Read the secret from an environment variable or a secrets manager, not from your code. The token endpoint is discovered from the issuer (`https://auth.wattnet.eu/realms/wattnet`); set `issuer_url` or `token_url` only to override it, see [Configuration](python-client-reference.md#configuration).

The token carries the [access level](../access/user-access-policy.md) of your account, so its limits apply to what the client asks. A query beyond them raises a `WattnetAPIError` whose `code` says which limit, see [Error handling](python-client-reference.md#error-handling).

## Option 2: a static token

Pass a token directly, for example one from the developer portal to try something quickly:

```python
client = WattnetClient(token="<your-token>")
```

The client uses it as it is. It cannot refresh it, so you replace it when it expires (after 1 hour). `token` cannot be combined with `client_id` and `client_secret`.

## Closing the client

Both clients are context managers and close their HTTP session on exit:

```python
with WattnetClient(token="<your-token>") as client:
    df = client.get_zones()
```

The async clients are used with `async with`, which closes their `aiohttp` session on exit:

```python
async with AsyncWattnetClient(token="<your-token>") as client:
    df = await client.get_zones()
```

`repr(client)` shows the base URL and the authentication mode, for example `WattnetClient(base_url='https://api.wattnet.eu/v1', auth=StaticTokenProvider)`, never the credentials.

## Errors

A problem with authentication raises `wattnet.client.AuthenticationError`, for example an invalid token or a credential that the issuer rejects. The exceptions are in [Error handling](python-client-reference.md#error-handling).
