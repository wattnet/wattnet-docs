---
tags:
    - Methodology
    - Data sources
---

# Datasources

## ENTSO-E

ENTSO-E, the European Network of Transmission System Operators for
Electricity, is the association for the cooperation of the European
transmission system operators (TSOs). The 40 member TSOs representing 36
countries are responsible for the secure and coordinated operation of
Europe's electricity system, the largest interconnected electrical grid in
the world. In addition to its core, historical role in technical
cooperation, ENTSO-E is also the common voice of TSOs.

ENTSO-E brings together the unique expertise of TSOs for the benefit of
European citizens by keeping the lights on, enabling the energy transition,
and promoting the completion and optimal functioning of the internal
electricity market, including via the fulfilment of the mandates given to
ENTSO-E based on EU legislation.

> More information: [https://www.entsoe.eu/](https://www.entsoe.eu/)

### Transparency Platform

The ENTSO-E Transparency Platform provides free access to pan-European
electricity market and system data. The platform is operated by ENTSO-E
Association on behalf of its members, the Transmission System Operators
(TSOs) of 36 European countries.

> More information: [https://transparency.entsoe.eu/](https://transparency.entsoe.eu/)
>
> Helpdesk: [https://transparencyplatform.zendesk.com/hc/en-us](https://transparencyplatform.zendesk.com/hc/en-us)

#### Used Data

The following data is used from the ENTSO-E Transparency Platform:

- **Actual Generation per Production Type [16.1.B&C]:** Actual aggregated
  Net generation output (MW) per market time unit and per production type.
  The information shall be published no later than one hour after the
  operational period.
    - **Specification of calculation:** The actual generation shall be
      computed as the average of all available instantaneous Net generation
      output values on each market time unit. If a net generation output is
      not known, it shall be estimated. The actual generation of
      small-scale units might be estimated if no real-time measurement
      devices exist.
    - **Primary owner of the data:** Owners of generation units or TSOs.
    - **Publication deadline for ENTSO-E:** H+1 following the concerned MTU.

- **Physical Flows [12.1.G]:** Physical flows between bidding zones per
  market time unit as closely as possible to real time and at the latest
  H+1 after the end of the application period. Physical flow is defined as
  the measured power between neighbouring bidding zones.
    - **Specification of calculation:** Average netted values (in MW).
      Values are netted over the period of measurement.
    - **Primary owner of the data:** TSOs.
    - **Publication deadline for ENTSO-E:** At the latest H+1 after the end
      of the operating period.

### API Documentation

The ENTSO-E Transparency Platform API provides programmatic access to the
data available on the Transparency Platform. The API is a RESTful web
service that allows users to query and retrieve data in a structured format
(XML or JSON).

> Full documentation: [https://documenter.getpostman.com/view/7009892/2s93JtP3F6](https://documenter.getpostman.com/view/7009892/2s93JtP3F6)

#### Request Endpoints

The ENTSO-E Transparency Platform API has two endpoints: one for production
and one for testing.

- Production: [https://web-api.tp.entsoe.eu/api](https://web-api.tp.entsoe.eu/api)
- Test: [https://web-api.tp-iop.entsoe.eu/api](https://web-api.tp-iop.entsoe.eu/api)

#### Energy Identification Codes (EIC)

Each area is identified by an Energy Identification Code (EIC). The EIC is
a unique identifier for entities in the energy sector, such as power
plants, substations, and market participants. The EIC is used to identify
areas in the ENTSO-E Transparency Platform API.

> More information: [https://transparencyplatform.zendesk.com/hc/en-us/articles/15885757676308-Area-List-with-Energy-Identification-Code-EIC](https://transparencyplatform.zendesk.com/hc/en-us/articles/15885757676308-Area-List-with-Energy-Identification-Code-EIC)

#### API Limits

##### API Query Size Limit

- One year range restriction applies.

##### API Rate Limits

- Maximum of 400 requests are accepted per token / IP per minute.
    - Exceeding this limit will temporarily ban your IP address and/or
      security token for 10 minutes, and the http (code = 429) response
      will be returned.

- Timeout for every https (http protocol is not allowed) request is 5
  minutes (300 seconds). Under the normal circumstances the response should
  take few seconds.

## Elexon (United Kingdom)

This platform collects and publishes detailed operational data on the
British electricity system, ensuring consistency with the temporal and
technical resolution of the ENTSO-E Transparency Platform.

#### Used Data

Elexon's Insights Solution (BMRS) API only covers generation and demand for
the Great Britain zone. Cross-border physical flows are not available from
Elexon, so imports and exports for Great Britain are instead sourced from
the [ENTSO-E Transparency Platform](#entso-e). Northern Ireland is not
covered by Elexon at all; it is sourced entirely from ENTSO-E, since it
belongs to the Ireland bidding zone rather than the GB one (see [Zone
Definition](zone-definition.md#regional-examples)).

The following data is used from the Elexon Insights Solution API:

- **Actual Generation per Production Type:** Actual generation output (MW)
  per fuel type, at half-hourly resolution.
    - **Endpoint:** `generation/actual/per-type`
    - **Primary owner of the data:** NESO / BSC generation reporting.

- **Actual Total Load (dataset B0610):** Actual total system demand (MW)
  at half-hourly resolution.
    - **Endpoint:** `demand/actual/total`
    - **Primary owner of the data:** NESO.

#### API Documentation

No official Elexon Insights Solution API documentation is currently linked
from Wattnet's provider implementation. The following details reflect how
Wattnet's Elexon provider queries the API.

##### Request Endpoint

- Production: `https://data.elexon.co.uk/bmrs/api/v1`

    No separate test/sandbox endpoint is used.

##### Authentication

The Elexon Insights Solution API used by Wattnet is public and does not
require an API key or bearer token.

##### API Limits

- **Query Size Limit:** Load queries are restricted to a maximum 7-day
  window per request; larger requested ranges are split accordingly.
- **Rate Limits:** Not publicly documented by Elexon. Wattnet does not
  apply any client-side rate limiting to Elexon requests, unlike for
  ENTSO-E.
- **Timeout:** Requests use a 10 second connect / 60 second read timeout.

## EPIAS (Turkey)

EPİAŞ (Enerji Piyasaları İşletme A.Ş. / Energy Exchange Istanbul) operates
Turkey's wholesale electricity market and publishes system data through
its Transparency Platform (Şeffaflık Platformu).

#### Used Data

EPIAS only covers generation and consumption for the Turkey (TR) zone.
Cross-border physical flows are not available from EPIAS, so imports and
exports for Turkey are instead sourced from the [ENTSO-E Transparency
Platform](#entso-e).

The following data is used from the EPIAS Transparency Platform:

- **Actual Generation per Production Type:** Actual real-time generation
  output (MW) per fuel type, at hourly resolution.
    - **Endpoints:** `generation/data/realtime-generation` (real-time
      listing, may have gaps in the last ~2 hours pending validation) and
      `generation/export/realtime-generation` (consolidated CSV export,
      published with ~2 hours of latency). Wattnet merges both: the
      validated export data takes priority, and the real-time listing
      fills only the most recent window not yet covered by the export.
    - **Primary owner of the data:** EPIAS.

- **Actual Consumption (Load):** Actual real-time system consumption (MW)
  at hourly resolution.
    - **Endpoints:** `consumption/data/realtime-consumption` and
      `consumption/export/realtime-consumption`, merged the same way as
      generation above.
    - **Primary owner of the data:** EPIAS.

#### API Documentation

No official EPIAS Transparency Platform API documentation is currently
linked from Wattnet's provider implementation. The following details
reflect how Wattnet's EPIAS provider queries the API.

##### Request Endpoint

- Production: `https://seffaflik.epias.com.tr/electricity-service/v1`

    No separate test/sandbox endpoint is used.

##### Authentication

Unlike ENTSO-E and Elexon, EPIAS requires authenticated access. Wattnet
authenticates using a username and password against EPIAS's CAS ticket
service, which returns a Ticket Granting Ticket (TGT) sent as a header on
each subsequent request.

##### API Limits

- **Pagination:** The real-time listing endpoints are paginated (48
  records per page by default), capped at 20 pages per query.
- **Rate Limits:** Not publicly documented by EPIAS. Wattnet does not
  apply any client-side rate limiting to EPIAS requests, unlike for
  ENTSO-E.
- **IP Whitelisting:** EPIAS may block or throttle requests from
  unrecognized IP addresses. If requests start failing, it may be
  necessary to contact EPIAS support to have the requesting server's IP
  address whitelisted for API access.
- **Timeout:** Requests use a 10 second connect / 60 second read timeout.
