# C1ApiAppV2AppOwnersCreateEntitlementOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2AppOwnersCreateEntitlementOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppOwnersCreateEntitlementOwnerRequest = {
  appId: "<id>",
  roleSlug: "<value>",
  appEntitlementRefAppId: "<id>",
  appEntitlementRefId: "<id>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `appId`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `roleSlug`                                                                                          | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `appEntitlementRefAppId`                                                                            | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `appEntitlementRefId`                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `createEntitlementOwnerRequest`                                                                     | [shared.CreateEntitlementOwnerRequest](../../../sdk/models/shared/createentitlementownerrequest.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |