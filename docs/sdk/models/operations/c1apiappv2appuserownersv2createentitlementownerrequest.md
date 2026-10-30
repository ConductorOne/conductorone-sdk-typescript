# C1ApiAppV2AppUserOwnersV2CreateEntitlementOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2AppUserOwnersV2CreateEntitlementOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppUserOwnersV2CreateEntitlementOwnerRequest = {
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
| `createAppUserEntitlementOwnerRequest`                                                                            | [shared.CreateAppUserEntitlementOwnerRequest](../../../sdk/models/shared/createappuserentitlementownerrequest.md) | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |