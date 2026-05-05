# C1ApiAppV2AppEntitlementOwnersSearchEntitlementOwnersResponse

## Example Usage

```typescript
import { C1ApiAppV2AppEntitlementOwnersSearchEntitlementOwnersResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppEntitlementOwnersSearchEntitlementOwnersResponse = {
  contentType: "<value>",
  statusCode: 380851,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response content type for this operation                                                                                       |
| `statusCode`                                                                                                                        | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | HTTP response status code for this operation                                                                                        |
| `rawResponse`                                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                               | :heavy_check_mark:                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                             |
| `searchAppEntitlementEntitlementOwnersResponse`                                                                                     | [shared.SearchAppEntitlementEntitlementOwnersResponse](../../../sdk/models/shared/searchappentitlemententitlementownersresponse.md) | :heavy_minus_sign:                                                                                                                  | SearchAppEntitlementEntitlementOwnersResponse is the response for searching entitlement ownership sources on an entitlement.        |