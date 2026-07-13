---
tags:
  - API
  - Guide
---

# API Access

The Wattnet API lets you query carbon and water footprint data
programmatically. Access is currently granted on request — once you have
been granted access, you can register and generate a Bearer token for
development and testing purposes.

## Requesting access

To request access to the API, get in touch through
[wattnet.eu/contact](https://wattnet.eu/contact). Once access has been
granted, you can register and generate a Bearer token as described below.

## Token service

The token service is available at
[https://api.wattnet.eu/v1/token-request/](https://api.wattnet.eu/v1/token-request/).
You can also interact with it directly through the browser at that URL.

### 1. Register

This step only needs to be done once — after that, you can go straight to
obtaining a token with the same credentials.

```bash
curl -X POST "https://api.wattnet.eu/v1/token-request/register" \
  -H "Content-Type: application/json" \
  -d '{ "email": "your_email", "password": "your_password" }'
```

### 2. Obtain a token

Tokens are valid for 1 day and can be refreshed using the same credentials:

```bash
curl -X POST "https://api.wattnet.eu/v1/token-request/get_token" \
  -H "Content-Type: application/json" \
  -d '{ "email": "your_email", "password": "your_password" }'
```

### 3. Query the API

```bash
curl -X GET "https://api.wattnet.eu/v1/footprints?footprint_type=carbon…" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your_token>"
```

Results include data quality flags (`zone_status` and `valid`) — see the
[API Data Model](api-data-model.md) for how to interpret them.

## Common errors

- **401 Unauthorized when querying the API** — your Bearer token is
  missing, malformed, or has expired. Tokens are valid for 1 day; repeat
  [step 2](#2-obtain-a-token) to get a fresh one.
- **401 Unauthorized when obtaining a token** — the email/password
  combination is incorrect, or you have not registered yet. See
  [step 1](#1-register).
- **Registration fails** — make sure you have been [granted
  access](#requesting-access) first; registering an email that hasn't been
  approved will not work.

## Managing your account

### Resetting your password

To reset a forgotten or compromised password, get in touch through
[wattnet.eu/contact](https://wattnet.eu/contact).

### Getting support

For any other account issues — such as trouble registering, obtaining a
token, or requesting access — get in touch through
[wattnet.eu/contact](https://wattnet.eu/contact).
