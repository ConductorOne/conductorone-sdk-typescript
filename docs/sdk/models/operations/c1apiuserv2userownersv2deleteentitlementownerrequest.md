# C1ApiUserV2UserOwnersV2DeleteEntitlementOwnerRequest

## Example Usage

```typescript
import { C1ApiUserV2UserOwnersV2DeleteEntitlementOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiUserV2UserOwnersV2DeleteEntitlementOwnerRequest = {
  userId: "<id>",
  roleSlug: "<value>",
  appEntitlementRefAppId: "<id>",
  appEntitlementRefId: "<id>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `userId`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `roleSlug`                                                                                                  | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `appEntitlementRefAppId`                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `appEntitlementRefId`                                                                                       | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `deleteUserEntitlementOwnerRequest`                                                                         | [shared.DeleteUserEntitlementOwnerRequest](../../../sdk/models/shared/deleteuserentitlementownerrequest.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |