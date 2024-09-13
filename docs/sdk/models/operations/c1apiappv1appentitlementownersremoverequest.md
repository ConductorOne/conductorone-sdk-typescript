# C1ApiAppV1AppEntitlementOwnersRemoveRequest

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementOwnersRemoveRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementOwnersRemoveRequest = {
  appId: "<value>",
  entitlementId: "<value>",
  userId: "<value>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                   | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `entitlementId`                                                                                           | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `userId`                                                                                                  | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `removeAppEntitlementOwnerRequest`                                                                        | [shared.RemoveAppEntitlementOwnerRequest](../../../sdk/models/shared/removeappentitlementownerrequest.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |