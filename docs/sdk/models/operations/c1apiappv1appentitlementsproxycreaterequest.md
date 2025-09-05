# C1ApiAppV1AppEntitlementsProxyCreateRequest

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementsProxyCreateRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementsProxyCreateRequest = {
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
| `createAppEntitlementProxyRequest`                                                                        | [shared.CreateAppEntitlementProxyRequest](../../../sdk/models/shared/createappentitlementproxyrequest.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |