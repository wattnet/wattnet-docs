---
tags:
  - API
  - Guide
---

# API Data Model

This page explains fields returned by the API that need some context to
interpret correctly.

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

might return:

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
        "values": [
          ["2026-07-13T00:00:00Z", 171.15],
          ["2026-07-13T00:15:00Z", 166.84]
        ]
      },
      {
        "valid": true,
        "zone_status": "preview",
        "values": [
          ["2026-07-13T02:00:00Z", 185.65],
          ["2026-07-13T02:15:00Z", 186.63]
        ]
      },
      {
        "valid": false,
        "zone_status": "preview",
        "values": [
          ["2026-07-13T04:15:00Z", 161.85],
          ["2026-07-13T04:30:00Z", 158.01]
        ]
      },
      {
        "valid": false,
        "zone_status": "missing",
        "values": [
          ["2026-07-13T08:30:00Z", 96.07],
          ["2026-07-13T08:45:00Z", 95.27]
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
