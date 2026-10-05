<div align="left">
  <picture>
    <source media="(prefers-color-scheme: dark)"
            srcset="https://github.com/wattnet/.github/raw/main/images/wattnet-logo-full-dark-transparent-cropped.png" />
    <source media="(prefers-color-scheme: light)"
            srcset="https://github.com/wattnet/.github/raw/main/images/wattnet-logo-full-light-transparent-cropped.png" />
    <img src="https://github.com/wattnet/.github/raw/main/images/wattnet-logo-full-light-transparent-cropped.png"
         alt="Wattnet Logo"
         width="300" />
  </picture>
</div>

# Documentation

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdocs.wattnet.eu&label=docs.wattnet.eu)](https://docs.wattnet.eu)
[![Deploy](https://github.com/wattnet/wattnet-docs/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/wattnet/wattnet-docs/actions/workflows/deploy.yml)
[![GitHub release](https://img.shields.io/github/v/release/wattnet/wattnet-docs)](https://github.com/wattnet/wattnet-docs/releases)
[![Last commit](https://img.shields.io/github/last-commit/wattnet/wattnet-docs)](https://github.com/wattnet/wattnet-docs/commits/main)
[![GitHub stars](https://img.shields.io/github/stars/wattnet/wattnet-docs?style=social)](https://github.com/wattnet/wattnet-docs/stargazers)
[![Built with Zensical](https://img.shields.io/badge/Built_with-Zensical-1A8F7A)](https://zensical.org/)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-FE5196?logo=conventionalcommits&logoColor=white)](https://www.conventionalcommits.org/)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit)](https://github.com/pre-commit/pre-commit)

Documentation for the [Wattnet](https://wattnet.eu) platform,
published at [docs.wattnet.eu](https://docs.wattnet.eu). Built with
[Zensical](https://zensical.org/).

## Development

Requires Python ≥ 3.10 and [Poetry](https://python-poetry.org/) ≥ 2.0.

```bash
# Install dependencies
poetry install

# Serve locally with live reload
poetry run zensical serve
# → http://localhost:8000

# Build the static site
poetry run zensical build
# → site/
```

## Structure

```
docs/
├── index.md              # landing page
├── user-guide/            # end-user documentation
├── methodology/           # carbon and water footprint calculation methodology
├── architecture/          # system overview, C4 diagrams, design decisions
└── reference/             # deployment, configuration, and API reference
```

## License

This repository is licensed under the
[Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

See the [LICENSE](LICENSE) file for more details.

## Funding and Acknowledgments

This work was developed within the [GreenDIGIT](https://greendigit-project.eu/) project, funded by the European Union's Horizon Europe research and innovation programme under grant agreement No. [101131207](https://cordis.europa.eu/project/id/101131207), and by the Swiss State Secretariat for Education, Research and Innovation (SERI).

<img src="https://github.com/wattnet/.github/raw/main/images/GreenDIGIT logo color horizontal2.png" alt="GreenDIGIT Logo" width="230" align="right"/>
<img src="https://github.com/wattnet/.github/raw/main/images/EN_FundedbytheEU_RGB_POS.png" alt="EU Funded Logo" width="260" align="left"/>
<img src="https://github.com/wattnet/.github/raw/main/images/Flag_of_Switzerland.svg" alt="Swiss State Secretariat for Education, Research and Innovation (SERI)" height="50" align="left"/>
<br clear="all"/>

##### © 2026 Spanish National Research Council (CSIC). All rights reserved.
