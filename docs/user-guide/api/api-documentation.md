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
query parameters — such as which zones and metrics (carbon, water, green
score) can be requested — beyond the example shown in
[API Access](api-access.md#3-query-the-api). For an explanation of the data
quality flags returned in the results, see the [API Data
Model](api-data-model.md).

## API versioning

The API is versioned. The current version is `v1`; the base URL is
[https://api.wattnet.eu/v1/](https://api.wattnet.eu/v1/).

## Signing in

The interactive docs support sign-in via OAuth, using either a Google or a
GitHub social account.

!!! note "Authentication note"

    The credentials used for the token service are currently separate from
    those used to access the API documentation interface. At the moment,
    access to the API docs only works via social login (GitHub or Google) —
    the email and password you use to [obtain a Bearer
    token](api-access.md#2-obtain-a-token) will not work to sign in here.
    This is something we will progressively unify as we onboard more
    external users.
