# XAAAccessProfile

XAAAccessProfile is a requestable bundle of scopes for one resource server.

## Example Usage

```typescript
import { XAAAccessProfile } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAAccessProfile = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appEntitlementId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The AppEntitlement created for this profile.                                                  |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The application that owns the resource server.                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of what access this profile grants.                                               |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Display name for the profile.                                                                 |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier for this access profile.                                                    |
| `scopeCount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of scopes currently bound to this profile.                                         |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `xaaResourceServerId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The resource server this profile grants access to.                                            |