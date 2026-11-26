---
tags:
  - Python Client
  - Guide
  - Tutorial
---

# Python Client Notebook Example

The `wattnet-client-python` repository includes a runnable notebook, [`examples/quickstart.ipynb`](https://github.com/wattnet/wattnet-client-python/blob/main/examples/quickstart.ipynb), that runs every method of `WattnetClient` against the live Wattnet API. The real responses are saved in the notebook, so you can read it on GitHub and see what each call returns without credentials.

## What it covers

The notebook follows the groups of methods of the [Reference](python-client-reference.md), each on a fixed 6-hour window for zone `ES` so that the results are reproducible:

- **Zones**: `get_zones()`.
- **Energy metrics**: `get_generation()`, `get_load()`, `get_imports()`, `get_exports()` and `get_mix()`, with the `updated_at` column and `resolution="1d"` for a long range.
- **Environmental metrics**: `get_footprints()` (and `aggregate=True` for one value over the window), `get_impacts()` and `get_environmental_score()`.
- **Shares metrics**: `get_flow_share()`, `get_mix_share()`, `get_footprint_share()` and `get_impact_share()`.
- **Factors**: `get_factors()`, independent of any zone.
- **Status**: `get_status()` and its per-dependency variants.
- **Raw JSON access**: the same calls through `WattnetRawClient`.
- **Error handling**: `ConfigurationError` for a client with no authentication, and `WattnetAPIError` with its `status_code`, `detail` and `code`.

Each cell prints the shape of the DataFrame and a `.head()` preview.

## Running it yourself

To run it with your own token instead of reading the saved output:

```bash
git clone https://github.com/wattnet/wattnet-client-python.git
cd wattnet-client-python
pip install wattnet-client jupyter
export WATTNET_TOKEN=<your-token>
jupyter notebook examples/quickstart.ipynb
```

Read the token from an environment variable, as the first cell does with `os.environ["WATTNET_TOKEN"]`, and never write it in the notebook. See [Authentication](python-client-authentication.md) to get one.
