---
tags:
  - Python Client
  - Guide
---

# Python Client Reference

## Available methods

Every method takes the query parameters of its API endpoint. See its docstring and type hints in your editor, or the [API Documentation](../api/api-documentation.md) for the parameters.

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
| `get_environmental_score(...)` | `GET /environmental-score` | Environmental score (0 to 100) of consumption |
| `get_flow_share(...)` | `GET /flow-share` | Share of a zone's production exported to each destination |
| `get_mix_share(...)` | `GET /mix-share` | Share of a zone's mix coming from each origin |
| `get_footprint_share(...)` | `GET /footprint-share` | Footprint decomposed by origin zone |
| `get_impact_share(...)` | `GET /impact-share` | Impact decomposed by origin zone |
| `get_factors(...)` | `GET /factors` | Global emission/consumption factors |
| `get_status()` / `get_status_storage()` / `get_status_entsoe()` / `get_status_elexon()` / `get_status_epias()` | `GET /status[/...]` | Health of the API and its upstream dependencies |

`get_zones()` and `get_factors(...)` are cached in memory for an hour per client, because they are near-static reference data: repeated calls in that time do not use the network.

For `get_footprints(...)`, `get_impacts(...)` and `get_environmental_score(...)`, set `aggregate=True` (with `start`/`end` required) to get a single aggregated value per zone/series instead of a time series. The aggregate has `updated_at`, the most recent moment any value of the period was stored.

## Resolution

`get_generation`, `get_load`, `get_imports`, `get_exports`, `get_mix`, `get_footprints`, `get_impacts` and `get_environmental_score` take `resolution`, the last of their arguments:

| `resolution` | Each row is |
| --- | --- |
| `"15m"` | A 15-minute interval, as stored. The default. |
| `"1h"` | The average of an hour (UTC). |
| `"1d"` | The average of a day (UTC). |

It cannot be combined with `aggregate=True`, and the shares and the factors do not take it. The `Resolution` type in `wattnet.client.enums` lists the values. How the periods are built is in [Querying the API](../api/api-usage.md#resolution).

## Columns of a series

The columns follow the nesting of the API: the fields of the record (zone, unit, ...), those of the series (`valid`, `zone_status`), those of its block (a production type, an origin, ...) and, last, `timestamp`, `value` and `updated_at`, the last two as tz-aware (UTC) datetimes. The order is guaranteed, so you can select columns by position.

## Raw JSON access

For the untouched API response instead of a DataFrame, use `WattnetRawClient`, which has the same methods:

```python
from wattnet.client import WattnetRawClient

raw = WattnetRawClient(token="<your-token>")
payload = raw.get_generation(zone="ES")  # list[dict], straight from the API
```

`WattnetClient` extends `WattnetRawClient`, so authentication, configuration, retries and error handling work the same in both.

## Configuration

| Constructor argument | Environment variable | Default |
| --- | --- | --- |
| `base_url` | `WATTNET_API_BASE_URL` | `https://api.wattnet.eu/v1` |
| `issuer_url` | `WATTNET_ISSUER_URL` | `https://auth.wattnet.eu/realms/wattnet` |
| `token_url` | `WATTNET_TOKEN_URL` | read from the issuer's discovery document |

Other constructor options: `session` (bring your own `requests.Session`), `timeout`, `retry_count`, `retry_delay` and `compress`.

`compress` (default `True`) asks the API for compressed answers (gzip, and `br` or `zstd` if their packages are installed) and decompresses them for you. `compress=False` asks for none. See [Compression](../api/api-usage.md#compression).

Requests are retried up to `retry_count` times (default 3, waiting `retry_delay` seconds) on connection or timeout errors and on `429` and `5xx` answers. A `429` waits for the `Retry-After` the API sends instead of the fixed delay. A `401` always triggers one token refresh and one retry, outside `retry_count`, see [Authentication](python-client-authentication.md).

## Error handling

All errors raised by this library derive from `wattnet.client.WattnetError`:

| Exception | Raised when |
| --- | --- |
| `ConfigurationError` | The client was instantiated with invalid/incomplete auth arguments. |
| `AuthenticationError` | Invalid token or credentials. |
| `WattnetAPIError` | The API returned a non-2xx response; carries `.status_code`, `.detail` (a sentence for a person) and `.code` (a stable identifier for a program, such as `invalid_resolution` or `range_limit_exceeded`). |

```python
from wattnet.client import WattnetAPIError

try:
    df = client.get_footprints(zone="ES", footprint_type="carbon")
except WattnetAPIError as error:
    print(error.status_code, error.code, error.detail)
```

Decide with `code`, not with the sentence: for example split the range on `range_limit_exceeded`. The [codes](../api/api-usage.md#errors) and the [limits of each level](../api/api-usage.md#limits-of-your-access-level) are in [Querying the API](../api/api-usage.md).
