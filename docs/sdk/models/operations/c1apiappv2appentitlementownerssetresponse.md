# C1ApiAppV2AppEntitlementOwnersSetResponse

## Example Usage

```typescript
import { C1ApiAppV2AppEntitlementOwnersSetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppEntitlementOwnersSetResponse = {
  contentType: "<value>",
  statusCode: 695697,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `setAppEntitlementOwnersV2Response`                                                                         | [shared.SetAppEntitlementOwnersV2Response](../../../sdk/models/shared/setappentitlementownersv2response.md) | :heavy_minus_sign:                                                                                          | SetAppEntitlementOwnersV2Response is the empty response for setting app entitlement owners.                 |