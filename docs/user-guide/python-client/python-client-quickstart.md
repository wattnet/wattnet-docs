---
tags:
  - Python Client
  - Guide
---

# Python Client

`wattnet-client` is the official Python client for the [Wattnet
API](../api/api-access.md). It maps every API endpoint to a client method
and hands back a tidy [pandas](https://pandas.pydata.org/) `DataFrame`, with
no manual HTTP calls or JSON flattening required.

## Features

- **One method per endpoint**: `client.get_generation(...)`,
  `client.get_footprints(...)`, etc., mirroring the API 1:1.
- **DataFrames by default**: every method returns a tidy `pandas.DataFrame`.
  Need the raw JSON instead? Use `WattnetRawClient`, see [Reference](python-client-reference.md#raw-json-access).
- **Two ways to authenticate**: a static bearer token, or an email/password
  pair; the library fetches and caches tokens for you. See
  [Authentication](python-client-authentication.md).
- **Typed, autocomplete-friendly**: zone codes, production types, footprint
  scopes, etc. are typed for IDE/Jupyter tab-completion.

The full source is on GitHub at
[wattnet/wattnet-client-python](https://github.com/wattnet/wattnet-client-python).
It includes a runnable
[`examples/quickstart.ipynb`](https://github.com/wattnet/wattnet-client-python/blob/main/examples/quickstart.ipynb)
notebook with every method exercised against the real API; see [Notebook
Example](python-client-notebook.md) for a walkthrough.

## Installation

```bash
pip install wattnet-client
```

Requires Python 3.10–3.14.

## Quickstart

```python
from wattnet.client import WattnetClient

# Option 1: a pre-issued bearer token
client = WattnetClient(token="<your-token>")

# Option 2: email + password (the client fetches and caches a token for you)
client = WattnetClient(email="you@example.com", password="<your-password>")

# Every call returns a pandas DataFrame
df = client.get_generation(zone="ES", production_type="solar")
df = client.get_footprints(zone="ES", footprint_type="carbon", scope="life-cycle")
df = client.get_green_score(zone="ES", aggregate=True, start="2026-01-01", end="2026-02-01")
```

Filter by coordinates instead of a zone code:

```python
df = client.get_load(lat=40.4, lon=-3.7)
```

Every time-series `DataFrame` has a `timestamp` column parsed as a tz-aware
(UTC) `datetime64[ns, UTC]`, ready to plot or resample without any manual
conversion. Omit `zone` (and other filter params) to get every zone back in
a single call instead of querying one at a time.

See [Reference](python-client-reference.md) for the full list of available
methods and their parameters, and [API Data Model](../api/api-data-model.md)
for how to interpret the `zone_status` and `valid` data quality flags
present in the underlying data.
