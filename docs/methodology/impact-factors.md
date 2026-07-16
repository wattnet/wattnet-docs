---
tags:
  - Methodology
  - Footprint factors
---

# Footprint Factors

This page outlines the environmental footprint factors used in Wattnet's
calculations, including their sources and methodologies for determination.

## Carbon Intensity (gCO<sub>2</sub>eq/kWh)

| Wattnet Production Type | ENTSO-E Production Types | Class | Emission Level | **Operational gCO₂eq/kWh** | **Life-cycle gCO₂eq/kWh** |
| --- | --- | --- | --- | --- | --- |
| Biomass | Biomass | Renewable | High Emission | 1030<sup>[1](#ref1)</sup> | 230<sup>[2](#ref2)</sup> |
| Energy storage | Not considered as Production Type itself | Storage | None | - | - |
| Coal | Fossil Brown coal/Lignite<br>Fossil Hard coal<br>Fossil Peat | Non-Renewable | High Emission | 760<sup>[2](#ref2)</sup> | 936<sup>[3](#ref3)</sup> |
| Gas | Fossil Coal-derived gas<br>Fossil Gas | Non-Renewable | High Emission | 370<sup>[2](#ref2)</sup> | 434<sup>[3](#ref3)</sup> |
| Oil | Fossil Oil<br>Fossil Oil shale | Non-Renewable | High Emission | 600<sup>[4](#ref4)</sup> | 778<sup>[5](#ref5)</sup> |
| Geothermal | Geothermal | Renewable | Low Emission | 0<sup>[2](#ref2)</sup> | 38<sup>[2](#ref2)</sup> |
| Hydro River | Hydro Run-of-river and poundage | Renewable | Low Emission | 0<sup>[2](#ref2)</sup> | 10.7<sup>[3](#ref3)</sup> |
| Hydro Reservoir | Hydro Water Reservoir | Renewable | Low Emission | 0<sup>[2](#ref2)</sup> | 10.7<sup>[3](#ref3)</sup> |
| Hydro Pumped Storage | Not considered as Production Type itself | Storage | None | - | - |
| Marine | Marine | Renewable | Low Emission | 0<sup>[2](#ref2)</sup> | 17<sup>[2](#ref2)</sup> |
| Nuclear | Nuclear | Non-Renewable | Low Emission | 0<sup>[2](#ref2)</sup> | 5.13<sup>[3](#ref3)</sup> |
| Other | Other | Non-Renewable | Medium Emission | 394 | 546.62 |
| Other renewable | Other renewable | Renewable | Medium Emission | 128.75 | 46.24 |
| Solar | Solar | Renewable | Low Emission | 0<sup>[2](#ref2)</sup> | 36.95<sup>[3](#ref3)</sup> |
| Waste | Waste | Non-Renewable | High Emission | 240<sup>[4](#ref4)</sup> | 580<sup>[6](#ref6)</sup> |
| Wind Offshore | Wind Offshore | Renewable | Low Emission | 0<sup>[2](#ref2)</sup> | 14.2<sup>[3](#ref3)</sup> |
| Wind Onshore | Wind Onshore | Renewable | Low Emission | 0<sup>[2](#ref2)</sup> | 12.4<sup>[3](#ref3)</sup> |

### Sources (used in table)

- <a name="ref1">**[1] IPCC 2006 (Official / Guidelines)**</a><br>
  [2006 IPCC Guidelines for National Greenhouse Gas Inventories, Vol.2 Ch.2](https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf)<br>
  Year: 2006, Scope: Operational
- <a name="ref2">**[2] IPCC 2014 (Official / Report)**</a><br>
  [IPCC WG3 Annex III](https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf#page=7)<br>
  Year: 2014, Scope: Operational & Life-cycle
- <a name="ref3">**[3] UNECE 2022 (Official / Report)**</a><br>
  [LCA Report - UNECE 2022](https://unece.org/sites/default/files/2022-04/LCA_3_FINAL%20March%202022.pdf)<br>
  Year: 2022, Scope: Life-cycle
- <a name="ref4">**[4] Red Eléctrica de España (REE) 2021**</a><br>
  [Carbon intensity report](https://api.esios.ree.es/documents/591/download?locale=es)<br>
  Year: 2021, Scope: Operational
- <a name="ref5">**[5] Gagnon et al. 2002 (Scientific Article)**</a><br>
  [Gagnon et al. 2002 DOI](https://doi.org/10.1016/S0301-4215(02)00088-5)<br>
  Year: 2002, Scope: Life-cycle
- <a name="ref6">**[6] Zero Waste Europe 2019 (Official / Report)**</a><br>
  [ZWE Policy Briefing 2019](https://zerowasteeurope.eu/wp-content/uploads/edd/2019/09/ZWE_Policy-briefing_The-impact-of-Waste-to-Energy-incineration-on-Climate.pdf)<br>
  Year: 2019, Scope: Life-cycle

!!! note

    "Other" and "Other renewable" values are calculated as averages of all
    other non-renewable and renewable production types respectively.

### Additional References (not used directly in table)

- **Parliament UK 2006 (Official / Report)**<br>
  [Parliament Research Briefing](https://researchbriefings.files.parliament.uk/documents/POST-PN-268/POST-PN-268.pdf)<br>
  Year: 2006, Scope: Life-cycle
- **French Agency for Ecological Transition (Official / Report)**<br>
  [French Agency Webservice](https://viewer.webservice-energy.org/incer-acv/app/)<br>
  Scope: Life-cycle
- **WNA Report 2011 (Official / Report)**<br>
  [World Nuclear Association Report](https://world-nuclear.org/images/articles/comparison_of_lifecycle1.pdf)<br>
  Year: 2011, Scope: Life-cycle

## Water Use per Electricity Production Type

| Wattnet Production Types | ENTSO-E Production Types | Class | Operation (Liters/kWh) | Life-cycle (Liters/kWh) |
| --- | --- | --- | --- | --- |
| Biomass | Biomass | Renewable | 1.97<sup>[1](#wref1)</sup> | 222<sup>[1](#wref1)</sup> |
| Energy storage | Not considered as Production Type itself | Storage | - | - |
| Coal | Fossil Brown coal/Lignite<br>Fossil Hard coal<br>Fossil Peat | Non-Renewable | 1.57<sup>[1](#wref1)</sup> | 2.86<sup>[2](#wref2)</sup> |
| Gas | Fossil Coal-derived gas<br>Fossil Gas | Non-Renewable | 0.47<sup>[1](#wref1)</sup> | 1.17<sup>[2](#wref2)</sup> |
| Oil | Fossil Oil<br>Fossil Oil shale | Non-Renewable | 0.63<sup>[1](#wref1)</sup> | 0.90<sup>[1](#wref1)</sup> |
| Geothermal | Geothermal | Renewable | 0.12<sup>[1](#wref1)</sup> | 0.13<sup>[1](#wref1)</sup> |
| Hydro River | Hydro Run-of-river and poundage | Renewable | 0.00<sup>[1](#wref1)</sup> | 0.0386<sup>[2](#wref2)</sup> |
| Hydro Reservoir | Hydro Water Reservoir | Renewable | 32.81<sup>[1](#wref1)</sup> | 32.81<sup>[1](#wref1)</sup> |
| Hydro Pumped Storage | Not considered as Production Type itself | Storage | - | - |
| Marine | Marine | Renewable | 0.00 | 0.00 |
| Nuclear | Nuclear | Non-Renewable | 2.04<sup>[1](#wref1)</sup> | 2.26<sup>[1](#wref1)</sup> |
| Other | Other | Non-Renewable | 0.942 | 1.438 |
| Other renewable | Other renewable | Renewable | 4.375 | 31.986 |
| Solar | Solar | Renewable | 0.10<sup>[1](#wref1)</sup> | 0.579<sup>[2](#wref2)</sup> |
| Waste | Waste | Non-Renewable | 0.00 | 0.00 |
| Wind Offshore | Wind Offshore | Renewable | 0.00<sup>[1](#wref1)</sup> | 0.156<sup>[2](#wref2)</sup> |
| Wind Onshore | Wind Onshore | Renewable | 0.00<sup>[1](#wref1)</sup> | 0.175<sup>[2](#wref2)</sup> |

### Sources (used in table)

- <a name="wref1">**[1] Vanham et al. 2019 (Scientific Article)**</a><br>
  [DOI: 10.1088/1748-9326/ab374a](https://doi.org/10.1088/1748-9326/ab374a)<br>
  Year: 2019, Scope: Operation & Life-cycle
- <a name="wref2">**[2] UNECE 2022 (Official / Report)**</a><br>
  [UNECE LCA Report](https://unece.org/sites/default/files/2022-04/LCA_3_FINAL%20March%202022.pdf)<br>
  Year: 2022, Scope: Life-cycle

!!! note

    "Other" and "Other renewable" values are calculated as averages of all
    other non-renewable and renewable production types respectively. Marine
    and Waste currently have no representative data and are set to zero.

### Additional References (not used directly in table)

- **UNESCO-IHE 2008 (Official / Report)**<br>
  [Water Footprint Bioenergy Report](https://www.waterfootprint.org/resources/Report29-WaterFootprintBioenergy.pdf)<br>
  Year: 2008, Scope: Life-cycle
- **Mekonnen et al. 2015 (Scientific Article)**<br>
  [DOI: 10.1039/c5ew00026b](https://doi.org/10.1039/c5ew00026b)<br>
  Year: 2015, Scope: Life-cycle
- **Jin et al. 2019 (Scientific Article)**<br>
  [ScienceDirect Article](https://www.sciencedirect.com/science/article/pii/S1364032119305994?ref=pdf_download&fr=RR-2&rr=945b2a228fa5cbc6)<br>
  Year: 2019, Scope: Life-cycle
- **Institute of Global Sustainability, Boston University (Lin et al. 2019/2024)**<br>
  [Visualizing Energy Water Use](https://visualizingenergy.org/what-methods-of-electricity-generation-use-the-most-water/)<br>
  Year: 2019 / 2024, Scope: Life-cycle

## Data Files

The footprint factor data files used by Wattnet are published at
[github.com/wattnet/wattnet-data/tree/main/footprint](https://github.com/wattnet/wattnet-data/tree/main/footprint).
