# C1ApiAppV2AppOwnersSearchEntitlementOwnersResponse

## Example Usage

```typescript
import { C1ApiAppV2AppOwnersSearchEntitlementOwnersResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppOwnersSearchEntitlementOwnersResponse = {
  contentType: "<value>",
  statusCode: 855746,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `searchEntitlementOwnersResponse`                                                                       | [shared.SearchEntitlementOwnersResponse](../../../sdk/models/shared/searchentitlementownersresponse.md) | :heavy_minus_sign:                                                                                      | SearchEntitlementOwnersResponse is the response for searching entitlement ownership sources.            |