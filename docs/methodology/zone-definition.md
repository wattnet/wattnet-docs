---
tags:
  - Methodology
  - Zones
---

# Zone Definition

Wattnet defines zones as distinct geographical areas for which energy
generation and exchange data is collected and environmental impact metrics
are then calculated.

## Spatial Granularity of Zones in Wattnet

To define the spatial granularity of zones, Wattnet primarily relies on
existing **administrative boundaries** and **energy market regions**, as
these are the standard reference points for energy data reporting. Since
Wattnet's main data source is [ENTSO-E](datasources.md#entso-e), the
following zone definitions are used, reflecting common practice in the
European energy market:

### Zone Definitions

- **Country**: A country is a recognized territorial and political entity.
  Countries are often used as reporting zones due to the availability of
  national-level statistics and established regulatory frameworks.
- **Bidding Zone (BZN)**: A bidding zone is the largest area within which
  market participants (producers and consumers) submit their offers and
  bids without being affected by internal grid constraints. It reflects
  the economic segmentation of the electricity market.
- **Control Area (CTA)**: A control area is a defined part of the
  transmission grid for which a specific transmission system operator
  (TSO) is responsible. The TSO ensures real-time balance between
  electricity generation and consumption, and maintains grid stability.

!!! note

    More area definitions exist, but they are less commonly used in the
    context of energy data reporting and more used in grid operation and
    market coordination. See the [ENTSO-E Area
    List](https://transparencyplatform.zendesk.com/hc/en-us/articles/15885757676308-Area-List-with-Energy-Identification-Code-EIC)
    for a comprehensive overview.

### Granularity Strategy

Wattnet always aims to use the **most spatially granular data available**.
Therefore, when multiple zone definitions exist for the same geographical
area, the **smallest available zone** is prioritized. For example, if both
bidding zone and country-level data are available for a region, **bidding
zone data** will be used.

Each geographical area has an associated **EIC code** (Energy
Identification Code), which uniquely identifies the zone in energy market
data. See the [EIC code
list](https://transparencyplatform.zendesk.com/hc/en-us/articles/15885757676308-Area-List-with-Energy-Identification-Code-EIC)
for reference.

However, data availability and granularity vary across regions, and
practical implementation must adapt accordingly. The following examples
illustrate these differences.

### Regional Examples

#### Standard cases

- The majority of European countries (e.g., France, Spain, Poland) are
  defined as **one country, one bidding zone, and one control area**. In
  these cases, all three definitions align perfectly.

#### Exceptions

Some regions differ due to unique market structures or geopolitical
factors:

- **Italy**: One country. Multiple bidding zones (North, Central North,
  Central South, South, Sicily, Sardinia, Calabria). One control area.
    - Bidding zones are used.
- **Sweden**: One country. Four bidding zones (North, Central North,
  Central South, South). One control area.
    - Bidding zones are used.
- **Norway**: One country. Five bidding zones (Southeast, Southwest,
  Central, North, West). One control area.
    - Bidding zones are used.
- **Denmark**: One country. Two bidding zones (East and West). One control
  area.
    - Bidding zones are used.
- **Germany**: One country. Bidding zone includes **Germany + Luxembourg**,
  4 control areas (50Hertz, Amprion, TenneT, TransnetBW).
    - No cross-border physical flows data between control areas, so
      **country-level data** is used.
    - No data at "country-to-bidding-zone" level between Germany and
      Denmark (which has two bidding zones). This is taken into account
      when calculating exchanges.
- **United Kingdom of Great Britain and Northern Ireland & Ireland**: Two
  countries. Two bidding zones. Three control areas.
    - Northern Ireland belongs to the **UK** politically, but to the
      **Ireland** bidding zone.
    - Three control areas: **Great Britain**, **Northern Ireland**, and
      **Ireland**.
    - Control area data is used. Data exists at
      "control-area-to-control-area" level.
- **Ukraine**: One country. One bidding zone. Two control areas.
    - No control area data available, so **country-level data**/**bidding
      zone data** is used.
- **Russian Federation**: One country and one control area. Each has
  **multiple bidding zones** (Russia, Kaliningrad).
    - Bidding zones are used.

### Conclusion

These examples show how zone definitions often overlap, but are not always
perfectly aligned. Wattnet uses the most granular data available, while
adapting to the specific market structures and data availability of each
region.

### Current Zone List

The following table lists the zones currently defined in Wattnet, along
with their attributes:

| Wattnet Zone Code | Zone Name | Country | Bidding Zone | Control Area | EIC |
| --- | --- | --- | --- | --- | --- |
| AL | Albania | Yes | Yes | Yes | 10YAL-KESH-----5 |
| AM | Armenia | Yes | Yes | Yes | 10Y1001A1001B004 |
| AT | Austria | Yes | Yes | Yes | 10YAT-APG------L |
| AZ | Azerbaijan | Yes | Yes | Yes | 10Y1001A1001B05V |
| BA | Bosnia and Herzegovina | Yes | Yes | Yes | 10YBA-JPCC-----D |
| BE | Belgium | Yes | Yes | Yes | 10YBE----------2 |
| BG | Bulgaria | Yes | Yes | Yes | 10YCA-BULGARIA-R |
| BY | Belarus | Yes | Yes | Yes | 10Y1001A1001A51S |
| CH | Switzerland | Yes | Yes | Yes | 10YCH-SWISSGRIDZ |
| CY | Cyprus | Yes | Yes | Yes | 10YCY-1001A0003J |
| CZ | Czechia | Yes | Yes | Yes | 10YCZ-CEPS-----N |
| DE | Germany | Yes | No | No | 10Y1001A1001A83F |
| DK1 | Denmark (West) | No | Yes | No | 10YDK-1--------W |
| DK2 | Denmark (East) | No | Yes | No | 10YDK-2--------M |
| EE | Estonia | Yes | Yes | Yes | 10Y1001A1001A39I |
| ES | Spain | Yes | Yes | Yes | 10YES-REE------0 |
| FI | Finland | Yes | Yes | Yes | 10YFI-1--------U |
| FR | France | Yes | Yes | Yes | 10YFR-RTE------C |
| GB | Great Britain | No | No | Yes | 10YGB----------A |
| GE | Georgia | Yes | Yes | Yes | 10Y1001A1001B012 |
| GR | Greece | Yes | Yes | Yes | 10YGR-HTSO-----Y |
| HR | Croatia | Yes | Yes | Yes | 10YHR-HEP------M |
| HU | Hungary | Yes | Yes | Yes | 10YHU-MAVIR----U |
| IE | Ireland | No | No | Yes | 10YIE-1001A00010 |
| IT_CALABRIA | Italy (Calabria) | No | Yes | No | 10Y1001C--00096J |
| IT_CNORTH | Italy (Central North) | No | Yes | No | 10Y1001A1001A70O |
| IT_CSOUTH | Italy (Central South) | No | Yes | No | 10Y1001A1001A71M |
| IT_NORTH | Italy (North) | No | Yes | No | 10Y1001A1001A73I |
| IT_SARDINIA | Italy (Sardinia) | No | Yes | No | 10Y1001A1001A74G |
| IT_SICILY | Italy (Sicily) | No | Yes | No | 10Y1001A1001A75E |
| IT_SOUTH | Italy (South) | No | Yes | No | 10Y1001A1001A788 |
| LT | Lithuania | Yes | Yes | Yes | 10YLT-1001A0008Q |
| LU | Luxembourg | Yes | No | Yes | 10YLU-CEGEDEL-NQ |
| LV | Latvia | Yes | Yes | Yes | 10YLV-1001A00074 |
| MD | Moldova | Yes | Yes | Yes | 10Y1001A1001A990 |
| ME | Montenegro | Yes | Yes | Yes | 10YCS-CG-TSO---S |
| MT | Malta | Yes | Yes | Yes | 10Y1001A1001A93C |
| MK | North Macedonia | Yes | Yes | Yes | 10YMK-MEPSO----8 |
| NIE | Northern Ireland | No | No | Yes | 10Y1001A1001A016 |
| NL | Netherlands | Yes | Yes | Yes | 10YNL----------L |
| NO1 | Norway (Southeast) | No | Yes | No | 10YNO-1--------2 |
| NO2 | Norway (Southwest) | No | Yes | No | 10YNO-2--------T |
| NO3 | Norway (Central) | No | Yes | No | 10YNO-3--------J |
| NO4 | Norway (North) | No | Yes | No | 10YNO-4--------9 |
| NO5 | Norway (West) | No | Yes | No | 10Y1001A1001A48H |
| PL | Poland | Yes | Yes | Yes | 10YPL-AREA-----S |
| PT | Portugal | Yes | Yes | Yes | 10YPT-REN------W |
| RO | Romania | Yes | Yes | Yes | 10YRO-TEL------P |
| RS | Serbia | Yes | Yes | Yes | 10YCS-SERBIATSOV |
| RU | Russia | No | Yes | Yes | 10Y1001A1001A49F |
| RU_KGD | Russia (Kaliningrad) | No | Yes | Yes | 10Y1001A1001A50U |
| SE1 | Sweden (North) | No | Yes | No | 10Y1001A1001A44P |
| SE2 | Sweden (Central North) | No | Yes | No | 10Y1001A1001A45N |
| SE3 | Sweden (Central South) | No | Yes | No | 10Y1001A1001A46L |
| SE4 | Sweden (South) | No | Yes | No | 10Y1001A1001A47J |
| SI | Slovenia | Yes | Yes | Yes | 10YSI-ELES-----O |
| SK | Slovakia | Yes | Yes | Yes | 10YSK-SEPS-----K |
| TR | Turkey | Yes | Yes | Yes | 10YTR-TEIAS----W |
| UA | Ukraine | Yes | Yes | No | 10Y1001C--00003F |
| XK | Kosovo | Yes | Yes | Yes | 10Y1001C--00100H |

## Temporal Granularity

The temporal granularity in Wattnet refers to the time intervals at which
energy generation and exchange data are collected and reported for each
defined zone. The same temporal resolution is used to compute environmental
impact metrics.

The ENTSO-E Transparency Platform provides data at different temporal
resolutions depending on the data type and the specific zone(s) involved.
The most common temporal granularities are **hourly**, **30-minute**, and
**15-minute** intervals. There is no direct mapping between zone
definitions and temporal granularities, as these may vary over time.

### Wattnet Temporal Granularity Strategy

Wattnet aims to use the **most granular useful data available** for each
zone while ensuring consistency and comparability across all zones. A
minimum temporal granularity of **15 minutes** is defined for all zones, so
all data is processed and reported at this interval.

This approach is possible because ENTSO-E reports **average power (in
Watts)** for each time interval, not **total energy (in Watt-hours)**.
Power (W) is an instantaneous or average rate of energy generation or
consumption, meaning it is independent of the interval length. Therefore, a
value reported as the average power over 1 hour can be applied to shorter
intervals (e.g., four 15-minute segments) without inconsistency. In such
cases, the same value is repeated across all 15-minute intervals within the
hour.

For zones that report data natively at 15-minute intervals, the power
values naturally vary every 15 minutes. But for zones with coarser
resolutions (like hourly), replicating the reported average power across
finer intervals maintains internal consistency and enables uniform
15-minute granularity across the system.

This strategy enables Wattnet to compute standardized and comparable
environmental impact metrics at a high temporal resolution (15-minute
intervals) for all zones, while preserving data integrity and remaining
faithful to the nature of the original data.

## Data Files

The zone definition data files used by Wattnet are published at
[github.com/wattnet/wattnet-data/tree/main/zones](https://github.com/wattnet/wattnet-data/tree/main/zones).
