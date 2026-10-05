---
template: home.html
hide:
    - toc
    - navigation
---

<div class="home-hero" markdown>

![Wattnet](assets/images/banner.png){ .home-hero__banner }

# Wattnet Documentation

Wattnet makes the environmental cost of electricity visible and actionable.
It aggregates real-time, historical and forecasted data on the **carbon**
and **water** impact of electricity consumption across 60 European zones,
at 15-minute resolution, and exposes it through an open REST API.

[Get Started](user-guide/index.md){ .md-button .md-button--primary }
[Explore the API](https://api.wattnet.eu/docs){ .md-button }

</div>

Most tools that track the environmental cost of electricity reduce it to a
single number, carbon intensity. Wattnet publishes carbon and water in
parallel, each under two scopes (operational and life cycle) and two
coverages (local generation and consumption after cross-border exchanges),
so that trade-offs a single indicator hides become visible: a zone with
excellent carbon intensity can carry a high water impact. Every value it
publishes states whether it came from an official publication, from the
system's own estimation, or from the forecast engine, and whether it can
still be recalculated.

This site is the central documentation hub for the platform. Whether
you're integrating the API into your own application, researching the
methodology behind the carbon and water footprint calculations, or exploring
how the system is built, you'll find it here: from onboarding guides for
new users to deployment references for engineers running the underlying
`wattnet-api`, `wattnet-core`, and `wattnet-forecast` services.

## Explore the docs

<div class="grid cards cards--linked cards--4col" markdown>

- :material-book-open-variant: **User Guide**

    How to use the platform and interpret carbon and water footprint data.

    [Read more →](user-guide/index.md){ .card-read-more }

- :material-flask-outline: **Methodology**

    How the metrics are calculated, from data sources and quality control
    to flow tracing, water scarcity and the forecast model.

    [Read more →](methodology/index.md){ .card-read-more }

- :material-sitemap-outline: **Architecture**

    System overview, C4 diagrams, and design decisions.

    [Read more →](architecture/index.md){ .card-read-more }

- :material-api: **Technical Reference**

    Deployment and configuration of `wattnet-api`, `wattnet-core`, and
    `wattnet-forecast`, including the API reference.

    [Read more →](reference/index.md){ .card-read-more }

</div>

## Key Features

<div class="grid cards cards--features cards--3col" markdown>

- :material-lightning-bolt: **Real-time data**

    Carbon and water metrics at 15-minute resolution across 60 European
    zones, published as grid operators release their data.

- :material-history: **Historical data**

    Query time series going back years, at the same resolution and with
    the same quality flags as live data.

- :material-chart-timeline: **Forecasted data**

    72-hour forecasts of the environmental metrics: carbon footprint,
    water footprint and impact, and Environmental Score.

- :material-water: **Beyond carbon**

    Water footprint, water impact weighted by regional and seasonal
    scarcity (AWARE 2.0), and a Environmental Score combining both.

- :material-transit-connection-variant: **Consumption, not just production**

    Flow tracing attributes cross-border exchanges, so metrics reflect the
    electricity a zone actually consumes.

- :material-api: **Open API**

    Versioned REST API, an official Python client, and interactive docs at
    [api.wattnet.eu/docs](https://api.wattnet.eu/docs).

</div>

## Explore Wattnet

<div class="grid cards cards--linked cards--3col" markdown>

- :material-web: **wattnet.eu**

    The Wattnet project website.

    [Visit →](https://wattnet.eu){ .card-read-more }

- :material-view-dashboard-outline: **dashboard.wattnet.eu**

    Interactive dashboard for exploring carbon and water footprint data.

    [Visit →](https://dashboard.wattnet.eu){ .card-read-more }

- :material-api: **api.wattnet.eu/docs**

    Interactive OpenAPI reference for the public REST API.

    [Visit →](https://api.wattnet.eu/docs){ .card-read-more }

</div>

## Funding and Acknowledgments

This work was developed within the [GreenDIGIT](https://greendigit-project.eu/) project, funded by the European Union's Horizon Europe research and innovation programme under grant agreement No. [101131207](https://cordis.europa.eu/project/id/101131207), and by the Swiss State Secretariat for Education, Research and Innovation (SERI).

<img src="assets/images/greendigit-logo.png" alt="GreenDIGIT Logo" width="230" align="right"/>
<img src="assets/images/eu-funded-logo.png" alt="EU Funded Logo" width="260" align="left"/>
<img src="assets/images/flag-of-switzerland.svg" alt="Swiss State Secretariat for Education, Research and Innovation (SERI)" width="50" align="left"/>
<br clear="all"/>

## About the Service

- A service provided by the **[Spanish National Research Council (CSIC)](https://www.csic.es)**,
- Deployed on the **Scientific Cloud** at the **[Institute of Physics of Cantabria (IFCA)](https://ifca.unican.es/)**.
- Developed by the **[IFCA Advanced Computing and e‑Science Group](https://advancedcomputing.ifca.es)**.

## Trademark Information

The name **WATTNET** and the **Wattnet Logo** are official registered trademarks of the Spanish National Research Council (CSIC), recorded with the European Union Intellectual Property Office (EUIPO). The word mark is registered under [EUTM Application No. 019266832](https://euipo.europa.eu/eSearch/#details/trademarks/019266832), and the logo mark under [EUTM Application No. 019267422](https://euipo.europa.eu/eSearch/#details/trademarks/019267422).
