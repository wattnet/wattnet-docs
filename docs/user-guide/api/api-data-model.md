---
tags:
  - API
  - Guide
---

# API Data Model

What the series and the data quality flags returned by the API mean.

## Series: `points` and `values`

The data endpoints (`generation`, `load`, `imports`, `exports`, `mix`, `footprints`, `impacts`, `environmental-score`, the shares and `factors`) return a list of `series`. Each series, or each block inside it (a production type, an origin or a destination), holds its data in `points`, a list of objects:

| Field | Meaning |
| --- | --- |
| `timestamp` | The start of the 15-minute interval, in UTC. |
| `value` | The value for that interval. |
| `updated_at` | The moment that version of the value was stored. |

Read the fields by name: the objects can get new fields without notice.

The aggregates (`aggregate=true`) of `footprints`, `impacts`, `environmental-score` and `factors` carry `updated_at` as well: the most recent moment any value of the period was stored.

!!! warning "`values` is deprecated"

    Each series still carries `values`, the `[timestamp, value]` pairs that the API returned before `points`, with the same numbers and order. It is marked as deprecated in the interactive documentation and removed after **28 February 2027**, the day the [legacy token service](api-access.md#legacy-token-service) stops working. Read `points` instead.

## Data quality flags

Two flags in the API results are worth noting:

### `zone_status`

| Value | Meaning |
| --- | --- |
| `complete` | All required inputs are present. |
| `preview` | Some inputs are estimated due to missing real data. |
| `missing` | Required inputs are not available; the value shown is the one obtained from the forecast. |

### `valid`

| Value | Meaning |
| --- | --- |
| `true` | The data is final and will not change. |
| `false` | Recalculation is pending due to missing country-level inputs. This state lasts at most until now - 4h. |

### Example

Both flags are reported per `series` entry, so a single response can mix
final and pending data across different time ranges. For example, a query
for carbon footprint data for zone `ES`:

```bash
curl -X GET "https://api.wattnet.eu/v1/footprints?zone=ES&footprint_type=carbon&scope=life-cycle&start=2026-07-13T00%3A00%3A00Z&end=2026-07-14T00%3A00%3A00Z&aggregate=false&use_global=true" \
  -H "accept: application/json" \
  -H "Authorization: Bearer <your_token>"
```

might return (each series also carries the deprecated `values`, left out here):

```json
[
  {
    "footprint_type": "carbon",
    "scope": "life-cycle",
    "zone": "ES",
    "unit": "gCO2/kWh",
    "coverage": "global",
    "series": [
      {
        "valid": true,
        "zone_status": "complete",
        "points": [
          {"timestamp": "2026-07-13T00:00:00Z", "value": 171.15, "updated_at": "2026-07-14T06:00:00Z"},
          {"timestamp": "2026-07-13T00:15:00Z", "value": 166.84, "updated_at": "2026-07-14T06:00:00Z"}
        ]
      },
      {
        "valid": true,
        "zone_status": "preview",
        "points": [
          {"timestamp": "2026-07-13T02:00:00Z", "value": 185.65, "updated_at": "2026-07-14T06:00:00Z"},
          {"timestamp": "2026-07-13T02:15:00Z", "value": 186.63, "updated_at": "2026-07-14T06:00:00Z"}
        ]
      },
      {
        "valid": false,
        "zone_status": "preview",
        "points": [
          {"timestamp": "2026-07-13T04:15:00Z", "value": 161.85, "updated_at": "2026-07-14T06:00:00Z"},
          {"timestamp": "2026-07-13T04:30:00Z", "value": 158.01, "updated_at": "2026-07-14T06:00:00Z"}
        ]
      },
      {
        "valid": false,
        "zone_status": "missing",
        "points": [
          {"timestamp": "2026-07-13T08:30:00Z", "value": 96.07, "updated_at": "2026-07-14T06:00:00Z"},
          {"timestamp": "2026-07-13T08:45:00Z", "value": 95.27, "updated_at": "2026-07-14T06:00:00Z"}
        ]
      }
    ]
  }
]
```

The first series is complete and final. The second series is estimated but
already final, meaning it will not be recalculated. The third series is
estimated and not yet final, meaning it is still pending recalculation.
The fourth series has no real data at all yet, so the value shown is the
forecasted value; since it is not final, it will be recalculated once the
missing country-level inputs become available.
