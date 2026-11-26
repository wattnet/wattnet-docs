# User Guide

This section explains how to use the Wattnet platform, from exploring the interactive dashboard to querying carbon and water footprint data programmatically through the API, or bringing it into Home Assistant.

## Dashboard

<div class="grid cards cards--linked cards--1col cards--plain" markdown>

- :material-view-dashboard-outline: **[Dashboard Walkthrough](dashboard-walkthrough.md)**

    How to use the interactive dashboard, with a video walkthrough.

</div>

## Access

<div class="grid cards cards--linked cards--2col cards--plain" markdown>

- :material-shield-account-outline: **[User Access Policy](access/user-access-policy.md)**

    The access levels (Public, Free, Research and Enterprise), their limits and how to change level.

- :material-account-cog-outline: **[Account Management](access/account-management.md)**

    Your account page, password and third-party accounts, and the developer portal: credentials, usage and level.

</div>

## RESTful API

<div class="grid cards cards--linked cards--2col cards--plain" markdown>

- :material-key-outline: **[API Access](api/api-access.md)**

    How to create a credential and get a token to access Wattnet data programmatically.

- :material-file-document-outline: **[API Documentation](api/api-documentation.md)**

    Where to find the full, interactive API reference.

- :material-database-outline: **[API Data Model](api/api-data-model.md)**

    The series (`points`, `updated_at`) and the data quality flags returned in API results.

- :material-text-search: **[Querying the API](api/api-usage.md)**

    The resolution of the series, the errors, caching and compression.

</div>

## Model Context Protocol

<div class="grid cards cards--linked cards--2col cards--plain" markdown>

- :material-robot-outline: **[MCP Interface](mcp/mcp-interface.md)**

    What the Model Context Protocol interface offers: the tools, the access levels and limits, and the errors.

- :material-connection: **[Connecting a Client](mcp/mcp-connect.md)**

    How to sign in and connect Claude Code, the MCP Inspector and other applications, or a program with its own credential.

</div>

## Python Client

<div class="grid cards cards--linked cards--2col cards--plain" markdown>

- :material-language-python: **[Quickstart](python-client/python-client-quickstart.md)**

    Install and use `wattnet-client`, the official Python client, to query Wattnet data as pandas DataFrames.

- :material-lock-outline: **[Authentication](python-client/python-client-authentication.md)**

    How to authenticate with a credential or a bearer token.

- :material-book-open-page-variant-outline: **[Reference](python-client/python-client-reference.md)**

    The full list of available methods, configuration options, and error handling.

- :material-notebook-outline: **[Notebook Example](python-client/python-client-notebook.md)**

    A walkthrough of the runnable example notebook, with real API output for every method.

</div>

## Home Assistant

<div class="grid cards cards--linked cards--2col cards--plain" markdown>

- :material-home-assistant: **[Installation](home-assistant/home-assistant-installation.md)**

    Install the Wattnet integration in Home Assistant and set it up.

- :material-view-dashboard-variant-outline: **[Dashboard and Entities](home-assistant/home-assistant-dashboard.md)**

    The sensors and the dashboard that the integration creates.

- :material-book-open-page-variant-outline: **[Reference](home-assistant/home-assistant-reference.md)**

    Options, statistics, the Energy dashboard, actions and common questions.

</div>

## Help

<div class="grid cards cards--linked cards--2col cards--plain" markdown>

- :material-lifebuoy: **[Troubleshooting](help/troubleshooting.md)**

    What an error or a symptom means, and the page that explains it.

- :material-calendar-clock: **[Deprecations](help/deprecations.md)**

    What is going away, when, and what to do.

</div>
