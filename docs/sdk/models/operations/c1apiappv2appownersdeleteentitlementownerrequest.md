# C1ApiAppV2AppOwnersDeleteEntitlementOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2AppOwnersDeleteEntitlementOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppOwnersDeleteEntitlementOwnerRequest = {
  appId: "<id>",
  roleSlug: "<value>",
  appEntitlementRefAppId: "<id>",
  appEntitlementRefId: "<id>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                   | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `roleSlug`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `appEntitlementRefAppId`                                                                                  | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `appEntitlementRefId`                                                                                     | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `deleteAppEntitlementOwnerRequest`                                                                        | [shared.DeleteAppEntitlementOwnerRequest](../../../sdk/models/shared/deleteappentitlementownerrequest.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |