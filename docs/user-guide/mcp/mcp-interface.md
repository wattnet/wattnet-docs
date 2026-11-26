---
tags:
  - MCP
  - Guide
---

# MCP Interface

Wattnet also speaks MCP, the Model Context Protocol, so that an AI agent can query the same data as the API without you writing the calls. This page explains what the interface offers and how it behaves. To connect an application, follow [Connecting a Client](mcp-connect.md).

## What MCP is

MCP is an open protocol that lets an AI application, such as a coding assistant or a chat client, use tools and data that live in another service. The service publishes a list of tools with a description and the parameters of each one, and the application decides when to call them while it answers you. You ask a question in plain language, for instance for the carbon footprint of the electricity in Spain yesterday, and the agent calls the tools it needs and builds the answer from the results.

Wattnet runs an MCP server at `https://mcp.wattnet.eu/mcp`. It is not another service with its own data: it is another way into the same one, next to the [RESTful API](../api/api-access.md).

## How it relates to the API

Each tool of the server runs the endpoint of the API with the same name, so everything is the same on both sides:

- The data, with the same [data model](../api/api-data-model.md) and the same data quality flags.
- The [access level](../access/user-access-policy.md) of your account: which tools you can use, how many zones and how long a range a call may ask, and how many calls you can make.
- The limits are counted per account, not per interface or per client. A browser sign-in, your credentials and every application you connect add up in the same counters, and a call of the API and a call of the MCP server count the same.

The server accepts only the requests of the protocol: `POST` on the exact path `/mcp`. It answers plain JSON and keeps no session, so each call stands on its own.

## The tools

The agent should start with `list_zones` to learn the zone codes. The parameters of a tool, with their descriptions and limits, are the ones of its endpoint, and the agent reads them from the list of tools.

| Tool | Returns | Endpoint of the API |
| --- | --- | --- |
| `list_zones` | The zones, with their codes | `/v1/zones` |
| `get_generation` | Electricity generated, by production type | `/v1/generation` |
| `get_load` | Electricity consumed | `/v1/load` |
| `get_imports` | Electricity imported from other zones | `/v1/imports` |
| `get_exports` | Electricity exported to other zones | `/v1/exports` |
| `get_mix` | The electricity mix of a zone | `/v1/mix` |
| `get_footprints` | Carbon and water footprints | `/v1/footprints` |
| `get_impacts` | Environmental impacts | `/v1/impacts` |
| `get_environmental_score` | The environmental score of a zone | `/v1/environmental-score` |
| `get_flow_share` | The share of a zone that flows to others | `/v1/flow-share` |
| `get_mix_share` | The share of the mix of a zone that comes from others | `/v1/mix-share` |
| `get_footprint_share` | The share of the footprint that comes from each origin | `/v1/footprint-share` |
| `get_impact_share` | The share of the impact that comes from each origin | `/v1/impact-share` |
| `get_factors` | The factors behind the footprints | `/v1/factors` |
| `get_status` | Whether the service and its data sources are up | `/v1/status` |

The results follow the [API Data Model](../api/api-data-model.md), and the resolution of the series is the one explained in [Querying the API](../api/api-usage.md#resolution). Datetimes are ISO 8601 in UTC. Ask `start` and `end` together: with only one of them the answer is only the latest data.

## Limits and errors

Your access level applies exactly as in the API. Every request counts as one, the list of tools included, and a client that connects makes several requests at once (it asks for the tools and a few more lists), so connecting uses a few of the requests of your minute.

A limit of the level is not an HTTP error: the call answers `200` and the result is marked `isError`, with a `code` that says which limit, in the text of the result:

```json
{"code": "zone_limit_exceeded", "detail": "This access level allows 1 zone per query: say it with zone, or with lat and lon.", "status": 403}
```

The codes are the same as in the API and are explained in [Querying the API](../api/api-usage.md#limits-of-your-access-level): `endpoint_group_not_allowed`, `zone_limit_exceeded`, `range_limit_exceeded`, `history_limit_exceeded` and `forecast_not_allowed`. An agent should read the `code` and ask again with fewer zones or a shorter range.

These are the HTTP answers of the server itself:

| Answer | Meaning |
| --- | --- |
| `401` | The token is missing, has expired or is not valid. The answer says where to find the sign-in, which is what lets an application start it by itself. |
| `403` | The token is valid but is not for this server, or its account has no access level. |
| `429` | You went over the rate or the concurrent requests of your level. The `Retry-After` header gives the seconds to wait. |
| `405` | The method is not `POST`. |

## Next steps

[Connecting a Client](mcp-connect.md) explains how to sign in and how to set up Claude Code, the MCP Inspector and other applications, or a program with its own credential.
