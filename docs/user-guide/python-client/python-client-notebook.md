---
tags:
  - Python Client
  - Guide
  - Tutorial
---

# Python Client Notebook Example

The `wattnet-client-python` repository ships a runnable example notebook,
[`examples/quickstart.ipynb`](https://github.com/wattnet/wattnet-client-python/blob/main/examples/quickstart.ipynb),
that exercises every method of `WattnetClient` against the live, production
Wattnet API. The real responses are saved as output in the notebook, so you
can read it directly on GitHub and see exactly what each call returns
without needing your own credentials.

## What it covers

The notebook is organized into the same groups of methods described in the
[Reference](python-client-reference.md), each shown against a fixed 6-hour
window for zone `ES` so the results are reproducible:

- **Zones**: `get_zones()`, metadata and neighbours for every supported zone.
- **Energy metrics**: `get_generation()`, `get_load()`, `get_imports()`,
  `get_exports()`, and `get_mix()`.
- **Environmental metrics**: `get_footprints()` (including `aggregate=True`
  for a single value over the window), `get_impacts()`, and
  `get_environmental_score()`.
- **Shares metrics**: `get_flow_share()`, `get_mix_share()`,
  `get_footprint_share()`, and `get_impact_share()`.
- **Factors**: `get_factors()`, global emission/consumption factors,
  independent of any zone.
- **Status**: `get_status()` and its per-dependency variants, reporting the
  health of the API and its upstream providers.
- **Raw JSON access**: the same calls made through `WattnetRawClient`,
  returning the untouched JSON payload instead of a DataFrame.
- **Error handling**: an example of `ConfigurationError` being raised when
  the client is misconfigured (no auth at all).

Each cell prints the resulting DataFrame's shape and a `.head()` preview, so
you can see both the size and the structure of a real response at a glance.

## Running it yourself

To re-execute the notebook with your own token instead of just reading the
saved output:

```bash
git clone https://github.com/wattnet/wattnet-client-python.git
cd wattnet-client-python
pip install wattnet-client jupyter
export WATTNET_TOKEN=<your-token>
jupyter notebook examples/quickstart.ipynb
```

Never hardcode a token or password into the notebook. Always read it from
an environment variable, as the first cell does with
`os.environ["WATTNET_TOKEN"]`. See [Authentication](python-client-authentication.md)
for how to obtain a token.
