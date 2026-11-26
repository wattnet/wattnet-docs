---
tags:
  - Access
  - Policy
---

# User Access Policy

## 1. Purpose and scope

The User Access Policy (UAP) defines the access levels of Wattnet: what each one allows and the limits that apply to it. It covers the whole of Wattnet. Today the only service that needs an account is the [API](../api/api-access.md), so most limits are API limits.

It is read together with the [Wattnet terms](https://wattnet.eu/terms). Where the terms add a restriction, the terms prevail.

## 2. Access levels

| | Public | Free | Research | Enterprise |
| --- | :---: | :---: | :---: | :---: |
| Account | Not required | Required | Required | Required |
| Active API credentials | 0 | 1 | 10 | 20 |
| Zones per query | - | 1 | No limit | No limit |
| Maximum range of a query | - | 7 days | 31 days | 365 days |
| Historical data | - | Last 7 days | All available | All available |
| Forecasts | - | No | Yes | Yes |
| Shares | - | No | Yes | Yes |
| Requests per minute | - | 60 | 300 | 1,200 |
| Burst | - | 20 | 100 | 400 |
| Concurrent requests | - | 5 | 10 | 20 |

`-` means that it does not apply or is not available at that level. The **range** is the time a single query may ask for, the **historical data** is how far back from today it may reach, and the **burst** is the extra requests let through for a short time above the rate. The shares are the `flow-share`, `mix-share`, `footprint-share` and `impact-share` endpoints: every other endpoint is available from Free.

Each account has one level, however many credentials it has. Disabled or revoked credentials do not count as active. Wattnet may also grant **Custom** access by agreement.

## 3. The levels

### Public

No account needed. It covers this documentation, the [dashboard](../dashboard-walkthrough.md), the public pages and the status endpoints. It has no API credentials: to use the API, register for a Free account.

### Free

The level of every registered account, with no approval, for personal, educational, exploratory or any other use that the terms allow.

### Research

For research, academic and institutional users who need broader access: every zone in one query, the full history, forecasts and the shares. It is granted by affiliation (members of an organisation that Wattnet recognises for research), by research activity or by other criteria that Wattnet determines, and it may need verification.

### Enterprise

For organisations that need higher limits or build Wattnet into products or services, with sustained or high-volume use. It may require information about the organisation and its use.

### Custom

For needs that the standard levels do not cover: higher limits, longer ranges, more data or history, or a commitment such as a response time. Each agreement is assessed individually and its conditions are those of the agreement. It is not granted automatically: get in touch through [wattnet.eu/contact](https://wattnet.eu/contact).

Support is the same at every level: the levels differ in capacity and data, not in the help you get.

## 4. Credentials

Credentials belong to an account. How many you can have depends on the level, and you create them in the [developer portal](https://developers.wattnet.eu), see [Account Management](account-management.md#credentials). Credentials are personal to the account: they must not be shared in a way that gets around the limits or the security controls.

The limits are counted **per account**: all the credentials of an account share them, so more credentials do not give more capacity.

## 5. How the limits work

A query beyond a limit is refused with an error that says which one, and a request over the rate is answered `429 Too Many Requests` with the time to wait. [Querying the API](../api/api-usage.md#limits-of-your-access-level) lists the errors and what to do.

On top of the limits of the level, Wattnet protects the service against excessive, abusive or automated traffic, for example with request filtering, concurrency limits and controls by network. These protections do not replace the limits of an account, and a shared institutional network is not treated as one account. A level is therefore not an unconditional quota.

## 6. Fair use

Use Wattnet so that you do not harm its availability or performance for others. You must not get around the limits by:

- opening several accounts for the same purpose;
- creating several credentials to multiply the limits of an account;
- sharing credentials between unrelated people or organisations;
- spreading requests over accounts to avoid a limit;
- bypassing the technical protections;
- generating traffic that is abusive or out of proportion to the use you describe.

Wattnet may apply further measures when they are needed to keep the service available and fair.

## 7. Changing your level

Ask for a higher level in the **Access** page of the [developer portal](https://developers.wattnet.eu), as explained in [Account Management](account-management.md#your-access-level). Wattnet may ask for more information to decide, or to protect the service.

If a level goes down, the credentials you already have are not revoked, unless security, compliance or the terms require it. You cannot create more while you are above the new allowance.

## 8. Changes to this policy

Wattnet may add, change or retire levels and their limits. When a change affects existing users in a material way, Wattnet gives notice as the terms say.

Last reviewed: November 2026.
