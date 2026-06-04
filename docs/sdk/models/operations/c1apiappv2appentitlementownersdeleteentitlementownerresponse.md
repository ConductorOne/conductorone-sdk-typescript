# C1ApiAppV2AppEntitlementOwnersDeleteEntitlementOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppEntitlementOwnersDeleteEntitlementOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppEntitlementOwnersDeleteEntitlementOwnerResponse = {
  contentType: "<value>",
  statusCode: 499156,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | HTTP response content type for this operation                                                                                      |
| `statusCode`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | HTTP response status code for this operation                                                                                       |
| `rawResponse`                                                                                                                      | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                              | :heavy_check_mark:                                                                                                                 | Raw HTTP response; suitable for custom response parsing                                                                            |
| `deleteAppEntitlementEntitlementOwnerResponse`                                                                                     | [shared.DeleteAppEntitlementEntitlementOwnerResponse](../../../sdk/models/shared/deleteappentitlemententitlementownerresponse.md)  | :heavy_minus_sign:                                                                                                                 | DeleteAppEntitlementEntitlementOwnerResponse is the empty response for deleting an entitlement ownership source on an entitlement. |