# C1ApiAppV2AppEntitlementOwnersDeleteUserOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2AppEntitlementOwnersDeleteUserOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppEntitlementOwnersDeleteUserOwnerRequest = {
  appId: "<id>",
  entitlementId: "<id>",
  roleSlug: "<value>",
  userRefId: "<id>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                           | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `entitlementId`                                                                                                   | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `roleSlug`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `userRefId`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `deleteAppEntitlementUserOwnerRequest`                                                                            | [shared.DeleteAppEntitlementUserOwnerRequest](../../../sdk/models/shared/deleteappentitlementuserownerrequest.md) | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |