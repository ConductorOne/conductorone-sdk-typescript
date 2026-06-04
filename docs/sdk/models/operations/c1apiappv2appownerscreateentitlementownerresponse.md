# C1ApiAppV2AppOwnersCreateEntitlementOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppOwnersCreateEntitlementOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppOwnersCreateEntitlementOwnerResponse = {
  contentType: "<value>",
  statusCode: 343041,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `createAppEntitlementOwnerResponse`                                                                         | [shared.CreateAppEntitlementOwnerResponse](../../../sdk/models/shared/createappentitlementownerresponse.md) | :heavy_minus_sign:                                                                                          | CreateEntitlementOwnerResponse is the response for creating an entitlement ownership source.                |