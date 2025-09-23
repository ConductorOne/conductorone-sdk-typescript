# C1ApiAppV1AppEntitlementsProxyDeleteRequest

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementsProxyDeleteRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementsProxyDeleteRequest = {
  srcAppId: "<id>",
  srcAppEntitlementId: "<id>",
  dstAppId: "<id>",
  dstAppEntitlementId: "<id>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `srcAppId`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `srcAppEntitlementId`                                                                                     | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `dstAppId`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `dstAppEntitlementId`                                                                                     | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `deleteAppEntitlementProxyRequest`                                                                        | [shared.DeleteAppEntitlementProxyRequest](../../../sdk/models/shared/deleteappentitlementproxyrequest.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |