# C1ApiAppV2AppResourceOwnersV2SearchEntitlementOwnersResponse

## Example Usage

```typescript
import { C1ApiAppV2AppResourceOwnersV2SearchEntitlementOwnersResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppResourceOwnersV2SearchEntitlementOwnersResponse = {
  contentType: "<value>",
  statusCode: 369809,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response content type for this operation                                                                                 |
| `statusCode`                                                                                                                  | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response status code for this operation                                                                                  |
| `rawResponse`                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                         | :heavy_check_mark:                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                       |
| `searchAppResourceEntitlementOwnersResponse`                                                                                  | [shared.SearchAppResourceEntitlementOwnersResponse](../../../sdk/models/shared/searchappresourceentitlementownersresponse.md) | :heavy_minus_sign:                                                                                                            | SearchAppResourceEntitlementOwnersResponse is the response for searching entitlement ownership sources on a resource.         |