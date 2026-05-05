# UserOwnershipEntry

A single ownership entry. Fields are populated based on ownership_type:
 APP — only app_id and app_display_name are set.
 RESOURCE — app_id, app_display_name, resource_type_id, resource_id, and resource_display_name are set.
 ENTITLEMENT — app_id, app_display_name, resource_type_id, entitlement_id, and entitlement_display_name are set.

## Example Usage

```typescript
import { UserOwnershipEntry } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserOwnershipEntry = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `appDisplayName`                                                    | *string*                                                            | :heavy_minus_sign:                                                  | The app display name.                                               |
| `appId`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | The app ID.                                                         |
| `entitlementDisplayName`                                            | *string*                                                            | :heavy_minus_sign:                                                  | The entitlement display name, if applicable.                        |
| `entitlementId`                                                     | *string*                                                            | :heavy_minus_sign:                                                  | The entitlement ID, if applicable.                                  |
| `ownershipType`                                                     | [shared.OwnershipType](../../../sdk/models/shared/ownershiptype.md) | :heavy_minus_sign:                                                  | The type of ownership.                                              |
| `resourceDisplayName`                                               | *string*                                                            | :heavy_minus_sign:                                                  | The resource display name, if applicable.                           |
| `resourceId`                                                        | *string*                                                            | :heavy_minus_sign:                                                  | The resource ID, if applicable.                                     |
| `resourceTypeId`                                                    | *string*                                                            | :heavy_minus_sign:                                                  | The resource type ID, if applicable.                                |