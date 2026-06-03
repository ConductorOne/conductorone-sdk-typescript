# C1ApiAppV2AppResourceOwnersV2CreateEntitlementOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppResourceOwnersV2CreateEntitlementOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppResourceOwnersV2CreateEntitlementOwnerResponse = {
  contentType: "<value>",
  statusCode: 41427,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response content type for this operation                                                                               |
| `statusCode`                                                                                                                | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | HTTP response status code for this operation                                                                                |
| `rawResponse`                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                       | :heavy_check_mark:                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                     |
| `createAppResourceEntitlementOwnerResponse`                                                                                 | [shared.CreateAppResourceEntitlementOwnerResponse](../../../sdk/models/shared/createappresourceentitlementownerresponse.md) | :heavy_minus_sign:                                                                                                          | CreateAppResourceEntitlementOwnerResponse is the response for creating an entitlement ownership source on a resource.       |