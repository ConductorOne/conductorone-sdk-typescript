# ExternalClientInfo

ExternalClientInfo provides information about an approved external client.
 Used by both List (user's own grants) and Search (admin view of all grants).

## Example Usage

```typescript
import { ExternalClientInfo } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExternalClientInfo = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | OAuth2 client ID - canonical identifier for this connection (globally unique per DCR)         |
| `clientIdType`                                                                                | [shared.ClientIdType](../../../sdk/models/shared/clientidtype.md)                             | :heavy_minus_sign:                                                                            | How the client_id was established.                                                            |
| `clientName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Original client name from DCR registration                                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | User-provided custom name (defaults to client_name if not set)                                |
| `lastUsedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `mcpClientId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | MCP client record ID for AI governance tracking. May be empty for legacy grants.              |
| `roleIds`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Role IDs granted to this client - frontend can fetch display names via SearchRoles            |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user who approved this external client (always populated)                                 |
| `verifiedDomain`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Verified domain from the client_id URL (e.g., "cursor.com").<br/> Empty for DCR clients.      |
| `wellKnownClient`                                                                             | [shared.WellKnownClient](../../../sdk/models/shared/wellknownclient.md)                       | :heavy_minus_sign:                                                                            | The wellKnownClient field.                                                                    |