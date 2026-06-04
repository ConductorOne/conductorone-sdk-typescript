# MCPAccessProfile

MCPAccessProfile represents an admin-curated grouping of MCP tools.

## Example Usage

```typescript
import { MCPAccessProfile } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPAccessProfile = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appEntitlementId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the AppEntitlement created for this profile.                                        |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | App identifier (app that owns the connector).                                                 |
| `connectorId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Connector identifier.                                                                         |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of what access this profile grants.                                               |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Display name for the profile.                                                                 |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier for this access profile.                                                    |
| `toolCount`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of tools currently bound to this profile.                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |