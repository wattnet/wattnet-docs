# Methodology

This section documents how Wattnet calculates carbon and water footprints,
from the underlying data sources to the zone model and flow tracing
algorithm used to attribute cross-border power flows.

The pages below follow the order of the calculation pipeline.

## Inputs

- **[Energy Datasources](datasources.md)**: the external providers of
  generation, demand and exchange data that Wattnet relies on, including
  the ENTSO-E Transparency Platform and the Elexon Insights Solution.
- **[Zone Definition](zone-definition.md)**: how Wattnet defines the
  spatial and temporal granularity of the zones it reports on.
- **[Footprint Factors](impact-factors.md)**: the carbon intensity and
  water use factors applied per production type, with sources.

## Calculation

- **[Flow Tracing](flow-tracing.md)**: worked examples of the flow tracing
  algorithm used to attribute power flows and compute each generator's
  contribution to load.
