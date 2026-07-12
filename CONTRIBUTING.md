# Contributing to wattnet-docs

Thank you for your interest in contributing. This document covers how to set up your environment and the process for submitting changes.

## Prerequisites

- Python ≥ 3.10
- [Poetry](https://python-poetry.org/) ≥ 2.0
- Git

## Getting Started

1. Fork the repository and clone your fork:

   ```bash
   git clone https://github.com/<your-username>/wattnet-docs.git
   cd wattnet-docs
   ```

2. Install dependencies:

   ```bash
   poetry install
   ```

3. Install the pre-commit hooks:

   ```bash
   pre-commit install --hook-type pre-commit --hook-type commit-msg
   ```

## Previewing Changes

```bash
poetry run zensical serve
# → http://localhost:8000
```

Verify the site builds cleanly before opening a PR:

```bash
poetry run zensical build --strict
```

## Code Style

Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`). This is enforced by pre-commit.

## Submitting a Pull Request

1. Create a branch from `main` with a descriptive name:

   ```bash
   git checkout -b docs/my-new-page
   ```

2. Make your changes, ensuring `zensical build --strict` passes.

3. Push your branch and open a PR against `main`.

4. A maintainer will review your PR. Please address any requested changes promptly.

## License

By contributing, you agree that your contributions will be licensed under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](LICENSE).
