---
tags:
  - Python Client
  - Guide
---

# Python Client Reference

## Available methods

Every method's parameters mirror the corresponding API endpoint's query
parameters exactly. See each method's docstring/type hints in your editor,
or the [API Documentation](../api/api-documentation.md) for the full
parameter reference.

| Method | API endpoint | Description |
| --- | --- | --- |
| `get_zones()` | `GET /zones` | Metadata and neighbours for all supported zones |
| `get_generation(...)` | `GET /generation` | Electricity generation by production type |
| `get_load(...)` | `GET /load` | Total electricity demand |
| `get_imports(...)` | `GET /imports` | Electricity imports, optionally filtered by origin zone |
| `get_exports(...)` | `GET /exports` | Electricity exports, optionally filtered by destination zone |
| `get_mix(...)` | `GET /mix` | Flow-traced generation mix by production type |
| `get_footprints(...)` | `GET /footprints` | Carbon/water footprint of consumption |
| `get_impacts(...)` | `GET /impacts` | Water impact of consumption |
| `get_environmental_score(...)` | `GET /environmental-score` | EnvironmentalScore (0–100) of consumption |
| `get_flow_share(...)` | `GET /flow-share` | Share of a zone's production exported to each destination |
| `get_mix_share(...)` | `GET /mix-share` | Share of a zone's mix coming from each origin |
| `get_footprint_share(...)` | `GET /footprint-share` | Footprint decomposed by origin zone |
| `get_impact_share(...)` | `GET /impact-share` | Impact decomposed by origin zone |
| `get_factors(...)` | `GET /factors` | Global emission/consumption factors |
| `get_status()` / `get_status_storage()` / `get_status_entsoe()` / `get_status_elexon()` / `get_status_epias()` | `GET /status[/...]` | Health of the API and its upstream dependencies |

`get_zones()` and `get_factors(...)` are cached in memory per client
instance for an hour (they're near-static reference data), so repeated calls
within that window don't hit the network again.

For `get_footprints(...)` and `get_impacts(...)`, set `aggregate=True`
(with `start`/`end` required) to get a single aggregated value per
zone/series instead of a time series.

## Raw JSON access

If you need the untouched API response instead of a DataFrame, use
`WattnetRawClient`; it exposes the exact same methods:

```python
from wattnet.client import WattnetRawClient

raw = WattnetRawClient(token="<your-token>")
payload = raw.get_generation(zone="ES")  # list[dict], straight from the API
```

`WattnetClient` subclasses `WattnetRawClient`, so everything on this page
(authentication, configuration, retries, error handling) applies equally to
both.

## Configuration

| Constructor argument | Environment variable | Default |
| --- | --- | --- |
| `base_url` | `WATTNET_API_BASE_URL` | `https://api.wattnet.eu/v1` |
| `token_url` | `WATTNET_TOKEN_URL` | `https://api.wattnet.eu/token-request` |

Other constructor options: `session` (bring your own `requests.Session`),
`timeout`, `retry_count`, `retry_delay`.

Requests are retried up to `retry_count` times (default 3, waiting
`retry_delay` seconds between attempts) on connection/timeout errors and on
`429`/`5xx` responses. A `429` waits for the `Retry-After` value the API
sends instead of the fixed delay, when present. A `401` always triggers one
token refresh + retry, independent of `retry_count`. See
[Authentication](python-client-authentication.md).

## Error handling

All errors raised by this library derive from `wattnet.client.WattnetError`:

| Exception | Raised when |
| --- | --- |
| `ConfigurationError` | The client was instantiated with invalid/incomplete auth arguments. |
| `AuthenticationError` | Invalid token or credentials. |
| `WattnetAPIError` | The API returned a non-2xx response; carries `.status_code` and `.detail`. |

```python
from wattnet.client import WattnetAPIError

try:
    df = client.get_footprints(zone="ES", footprint_type="carbon")
except WattnetAPIError as error:
    print(error.status_code, error.detail)
```
