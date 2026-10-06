---
tags:
  - Python Client
  - Guide
---

# Python Client Authentication

`WattnetClient` (and `WattnetRawClient`, `AsyncWattnetClient` and `AsyncWattnetRawClient`) support two ways to authenticate,
passed as constructor arguments.

## Option 1: a static bearer token

Pass a token obtained as described in [API Access](../api/api-access.md)
directly:

```python
client = WattnetClient(token="<your-token>")
```

The client uses this token as-is for every request. Since it cannot be
refreshed by the library, you are responsible for replacing it once it
expires (tokens are valid for 1 day).

## Option 2: email and password

```python
client = WattnetClient(email="you@example.com", password="<your-password>")
```

Credentials are exchanged for a bearer token via the wattnet token-request
service (`POST /get_token`), which the client calls transparently the first
time it's needed. The token is cached in memory until shortly before its
`expires_at` (as reported by the server, typically ~24h), then silently
refreshed on the next call, including a one-time retry if the API itself
rejects the cached token as expired (a `401` response).

You must have already registered your email with the token-request service
before it will be accepted; do that once with `register()`:

```python
from wattnet.client import register

register("you@example.com", "<your-password>")  # returns a confirmation message
```

`email` must be pre-authorized server-side by the wattnet team (see
[Requesting access](../api/api-access.md#requesting-access)), otherwise
registration fails with an `AuthenticationError`. Registering an
already-registered email is a harmless no-op.

`async_register()` is the async counterpart of `register()`:

```python
from wattnet.client import async_register

message = await async_register("you@example.com", "<your-password>")
```

## Closing the client

`WattnetClient`/`WattnetRawClient` support the context manager protocol,
closing the underlying HTTP session on exit:

```python
with WattnetClient(token="<your-token>") as client:
    df = client.get_zones()
```

The async clients are used with `async with`, which closes the underlying `aiohttp` session on exit:

```python
async with AsyncWattnetClient(token="<your-token>") as client:
    df = await client.get_zones()
```

`repr(client)` shows the base URL and auth mode (e.g.
`WattnetClient(base_url='https://api.wattnet.eu/v1', auth=StaticTokenProvider)`),
never any credentials.

## Errors

Authentication problems raise `wattnet.client.AuthenticationError`, for
example an invalid token, an incorrect email/password pair, or registering
an email that hasn't been granted access. See [Error
handling](python-client-reference.md#error-handling) for the full exception
hierarchy.
