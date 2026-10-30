# C1ApiAppV2AppUserOwnersV2DeleteEntitlementOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2AppUserOwnersV2DeleteEntitlementOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppUserOwnersV2DeleteEntitlementOwnerRequest = {
  appId: "<id>",
  userId: "<id>",
  roleSlug: "<value>",
  appEntitlementRefAppId: "<id>",
  appEntitlementRefId: "<id>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                           | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `userId`                                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `roleSlug`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `appEntitlementRefAppId`                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `appEntitlementRefId`                                                                                             | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `deleteAppUserEntitlementOwnerRequest`                                                                            | [shared.DeleteAppUserEntitlementOwnerRequest](../../../sdk/models/shared/deleteappuserentitlementownerrequest.md) | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |