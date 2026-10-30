# C1ApiUserV2UserOwnersV2CreateEntitlementOwnerRequest

## Example Usage

```typescript
import { C1ApiUserV2UserOwnersV2CreateEntitlementOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiUserV2UserOwnersV2CreateEntitlementOwnerRequest = {
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
| `createUserEntitlementOwnerRequest`                                                                         | [shared.CreateUserEntitlementOwnerRequest](../../../sdk/models/shared/createuserentitlementownerrequest.md) | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |