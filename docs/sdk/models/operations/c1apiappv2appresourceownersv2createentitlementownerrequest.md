# C1ApiAppV2AppResourceOwnersV2CreateEntitlementOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2AppResourceOwnersV2CreateEntitlementOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppResourceOwnersV2CreateEntitlementOwnerRequest = {
  appId: "<id>",
  resourceTypeId: "<id>",
  resourceId: "<id>",
  roleSlug: "<value>",
  appEntitlementRefAppId: "<id>",
  appEntitlementRefId: "<id>",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                                   | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `resourceTypeId`                                                                                                          | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `resourceId`                                                                                                              | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `roleSlug`                                                                                                                | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `appEntitlementRefAppId`                                                                                                  | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `appEntitlementRefId`                                                                                                     | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `createAppResourceEntitlementOwnerRequest`                                                                                | [shared.CreateAppResourceEntitlementOwnerRequest](../../../sdk/models/shared/createappresourceentitlementownerrequest.md) | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |