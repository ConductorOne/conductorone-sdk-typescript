# C1ApiAppV2AppEntitlementOwnersCreateEntitlementOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2AppEntitlementOwnersCreateEntitlementOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppEntitlementOwnersCreateEntitlementOwnerRequest = {
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
| `createAppEntitlementEntitlementOwnerRequest`                                                                                   | [shared.CreateAppEntitlementEntitlementOwnerRequest](../../../sdk/models/shared/createappentitlemententitlementownerrequest.md) | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |