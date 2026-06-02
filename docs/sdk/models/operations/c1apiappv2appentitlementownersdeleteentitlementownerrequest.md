# C1ApiAppV2AppEntitlementOwnersDeleteEntitlementOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2AppEntitlementOwnersDeleteEntitlementOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppEntitlementOwnersDeleteEntitlementOwnerRequest = {
  appId: "<id>",
  entitlementId: "<id>",
  roleSlug: "<value>",
  appEntitlementRefAppId: "<id>",
  appEntitlementRefId: "<id>",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                                         | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `entitlementId`                                                                                                                 | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `roleSlug`                                                                                                                      | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `appEntitlementRefAppId`                                                                                                        | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `appEntitlementRefId`                                                                                                           | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `deleteAppEntitlementEntitlementOwnerRequest`                                                                                   | [shared.DeleteAppEntitlementEntitlementOwnerRequest](../../../sdk/models/shared/deleteappentitlemententitlementownerrequest.md) | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |