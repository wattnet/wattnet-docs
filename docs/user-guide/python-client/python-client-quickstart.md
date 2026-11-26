---
tags:
  - Python Client
  - Guide
---

# Python Client

`wattnet-client` is the official Python client of the [Wattnet API](../api/api-access.md). It has one method per endpoint and returns a [pandas](https://pandas.pydata.org/) `DataFrame`, so you need no HTTP calls or JSON flattening.

## Features

- **One method per endpoint**, such as `client.get_generation(...)` and `client.get_footprints(...)`, with the parameters of the API.
- **DataFrames by default.** For the raw JSON use `WattnetRawClient`, see [Reference](python-client-reference.md#raw-json-access).
- **Sync and async**: `WattnetClient` and `WattnetRawClient` for scripts and notebooks, `AsyncWattnetClient` and `AsyncWattnetRawClient` for asyncio applications, see [Async clients](#async-clients).
- **Authentication handled**: a credential that the client exchanges for a token and renews, or a static token. See [Authentication](python-client-authentication.md).
- **Long ranges made cheap**: `resolution` lets the API average the series, and the answers are compressed by default.
- **Typed**: zone codes, production types and scopes autocomplete in your IDE or Jupyter.

The source is at [wattnet/wattnet-client-python](https://github.com/wattnet/wattnet-client-python). Its [`examples/quickstart.ipynb`](https://github.com/wattnet/wattnet-client-python/blob/main/examples/quickstart.ipynb) notebook runs every method against the real API, see [Notebook Example](python-client-notebook.md).

## Installation

```bash
pip install wattnet-client
```

It requires Python 3.11 to 3.15.

## Quickstart

```python
from wattnet.client import WattnetClient

# A Wattnet credential: the client gets and renews the token for you
client = WattnetClient(
    client_id="<your-client-id>", client_secret="<your-client-secret>"
)

# Every call returns a pandas DataFrame
df = client.get_generation(zone="ES", production_type="solar")
df = client.get_footprints(zone="ES", footprint_type="carbon", scope="life-cycle")
df = client.get_environmental_score(zone="ES", aggregate=True, start="2026-01-01", end="2026-02-01")
```

Filter by coordinates instead of a zone code:

```python
df = client.get_load(lat=40.4, lon=-3.7)
```

Without `zone` the call returns every zone, as far as your [access level](../access/user-access-policy.md) allows.

## The columns of a series

A time series has `timestamp`, `value` and `updated_at` as its last columns. `timestamp` is the interval and `updated_at` is the moment that version of the value was stored, both as tz-aware (UTC) datetimes ready to plot or resample. The aggregates (`aggregate=True`) have `updated_at` too.

```python
df = client.get_load(zone="ES", start="2026-07-15", end="2026-07-16")
df[["timestamp", "value", "updated_at"]].head()
```

The columns before them are the fields of the record, the series and its block, see [Columns of a series](python-client-reference.md#columns-of-a-series). The `zone_status` and `valid` flags are explained in the [API Data Model](../api/api-data-model.md).

## Long ranges

A year at 15 minutes is a lot of rows. The series methods take `resolution="1h"` or `"1d"` and the API sends each hour or day averaged:

```python
df = client.get_generation(
    zone="ES", start="2026-01-01", end="2026-11-01", resolution="1d"
)
```

See [Resolution](python-client-reference.md#resolution) for the methods that take it. The answers are compressed by default, see [Configuration](python-client-reference.md#configuration). The full list of methods is in the [Reference](python-client-reference.md).

## Async clients

For asyncio applications (for example the [Wattnet Home Assistant integration](https://github.com/wattnet/wattnet-home-assistant)) use `AsyncWattnetClient`, the counterpart of `WattnetClient`: the same methods as coroutines returning a `pandas.DataFrame`. `AsyncWattnetRawClient` does the same for `WattnetRawClient` and returns raw JSON; it is built on [aiohttp](https://docs.aiohttp.org/) and does not import pandas.

```python
import asyncio

from wattnet.client import AsyncWattnetClient


async def main() -> None:
    async with AsyncWattnetClient(client_id="<your-client-id>", client_secret="<your-client-secret>") as client:
        df = await client.get_footprints(zone="ES", footprint_type="carbon")


asyncio.run(main())
```

Independent requests can run concurrently with `asyncio.gather`. Authentication, retries, `Retry-After` handling and the token refresh on a `401` behave exactly as in the synchronous clients.
