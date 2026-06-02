# C1ApiAppV2AppEntitlementOwnersCreateEntitlementOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppEntitlementOwnersCreateEntitlementOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppEntitlementOwnersCreateEntitlementOwnerResponse = {
  contentType: "<value>",
  statusCode: 587322,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response content type for this operation                                                                                     |
| `statusCode`                                                                                                                      | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response status code for this operation                                                                                      |
| `rawResponse`                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                             | :heavy_check_mark:                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                           |
| `createAppEntitlementEntitlementOwnerResponse`                                                                                    | [shared.CreateAppEntitlementEntitlementOwnerResponse](../../../sdk/models/shared/createappentitlemententitlementownerresponse.md) | :heavy_minus_sign:                                                                                                                | CreateAppEntitlementEntitlementOwnerResponse is the response for creating an entitlement ownership source on an entitlement.      |