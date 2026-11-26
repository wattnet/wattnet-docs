---
tags:
  - API
  - Guide
---

# Querying the API

How to get fewer rows for a long range, which limits apply to a query, the errors and what they mean, how long an answer can be reused and how to receive it compressed. What each access level allows is in the [User Access Policy](../access/user-access-policy.md).

## Resolution

The series of `generation`, `load`, `imports`, `exports`, `mix`, `footprints`, `impacts` and `environmental-score` come at the resolution of the data, 15 minutes: a year of one zone is about 35,000 points per series. With `resolution` the API averages them and sends far fewer rows:

| `resolution` | Each point is |
| --- | --- |
| `15m` | One interval of 15 minutes, as stored. The default. |
| `1h` | The average of an hour. |
| `1d` | The average of a day. |

```bash
curl --compressed "https://api.wattnet.eu/v1/load?zone=ES&start=2026-01-01T00:00:00Z&end=2026-11-01T00:00:00Z&resolution=1d" \
  -H "Authorization: Bearer <your_token>"
```

- Hours and days follow the **UTC calendar**, whatever `start` is. The first and last period average only the points inside the range, so they can have fewer points.
- Negative values are left out before the average, as they are without `resolution`.
- A period is `valid` only if all its points are, its `zone_status` is the worst of them and its `updated_at` is the most recent.
- `resolution` is answered `400` with `aggregate=true` (an aggregate is already one value) and on the shares (`flow-share`, `mix-share`, `footprint-share`, `impact-share`) and `factors`.

## Limits of your access level

Your [access level](../access/user-access-policy.md#2-access-levels) decides which endpoints you can call and how much one query may ask for. A query beyond a limit is answered `403 Forbidden` with a `code` that says which one:

| Code | Meaning | What to do |
| --- | --- | --- |
| `zone_limit_exceeded` | More zones than the level allows. A query without `zone` or `lat` and `lon` asks for every zone. | Name the zone with `zone`, or with `lat` and `lon`. |
| `range_limit_exceeded` | `end` minus `start` is longer than the range of the level. | Split the query into shorter ranges and join the answers. |
| `history_limit_exceeded` | `start` is further back than the history of the level. | Ask for a later `start`. |
| `forecast_not_allowed` | `end` is in the future and the level has no forecasts. | Ask for data up to now. |
| `endpoint_group_not_allowed` | The level does not include that endpoint, for example the shares in Free. | Check the [levels](../access/user-access-policy.md#2-access-levels). |
| `access_level_unknown` | The request carries no known level. | Check that the credential belongs to an account. |

A request over the rate of your level is answered `429 Too Many Requests` with a `Retry-After` header that gives the seconds to wait. The [Python client](../python-client/python-client-reference.md#configuration) waits and retries on its own.

At every level a single query also has a size limit that protects the service: a zone for a day counts 1, and a query may have up to 500. A bigger one is answered `400` with `query_too_big`. Ask fewer zones or a shorter range and join the answers, or use [`resolution`](#resolution).

## Errors

Every error has a sentence in `detail` for a person and a stable `code` for a program:

```json
{"detail": "If zone is provided, latitude and longitude must NOT be provided.", "code": "zone_and_coordinates_conflict"}
```

Decide with `code`: the sentence can be reworded, the code does not change. In a `422` (`validation_error`), `detail` is the list of problems.

| Status | Codes |
| --- | --- |
| 400 | `zone_and_coordinates_conflict`, `coordinates_incomplete`, `invalid_footprint_type`, `invalid_factor_type`, `invalid_impact_type`, `invalid_production_type`, `invalid_scope`, `invalid_operational_scope`, `time_range_incomplete`, `time_range_inverted`, `aggregate_requires_time_range`, `unknown_parameter`, `repeated_parameter`, `empty_parameter`, `query_too_big`, `invalid_resolution`, `resolution_with_aggregate` |
| 403 | `access_level_unknown`, `endpoint_group_not_allowed`, `zone_limit_exceeded`, `range_limit_exceeded`, `history_limit_exceeded`, `forecast_not_allowed` |
| 404 | `zone_not_found_for_coordinates`, `not_found` |
| 422 | `validation_error` |
| 500 | `zones_unavailable` |

A `401` (no valid token) is answered before the request reaches the API, with the shape `{"error": "unauthorized", "message": "..."}`, see [API Access](api-access.md#authentication-errors).

## Caching

Answers to data queries carry `Cache-Control: private, max-age=60`: a browser or a program may reuse an answer for a minute. It is `private` because the answer depends on your level, so shared caches must not keep it. Status endpoints and errors carry no caching.

## Compression

Ask for compressed answers with `Accept-Encoding` (`gzip`, `br` or `zstd`) or `--compressed` in `curl`. The JSON shrinks 5 to 9 times, which matters most for long ranges. Without the header you get the same JSON as always. The [Python client](../python-client/python-client-reference.md#configuration) asks for it by default.
