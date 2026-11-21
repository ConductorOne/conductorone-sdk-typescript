# C1ApiAppV1AppResourceServiceSearchAppEntitlementResourceBindingsResponse

## Example Usage

```typescript
import { C1ApiAppV1AppResourceServiceSearchAppEntitlementResourceBindingsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAppV1AppResourceServiceSearchAppEntitlementResourceBindingsResponse = {
    contentType: "<value>",
    statusCode: 585323,
  };
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response content type for this operation                                                                                     |
| `statusCode`                                                                                                                      | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response status code for this operation                                                                                      |
| `rawResponse`                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                             | :heavy_check_mark:                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                           |
| `searchAppEntitlementResourceBindingsResponse`                                                                                    | [shared.SearchAppEntitlementResourceBindingsResponse](../../../sdk/models/shared/searchappentitlementresourcebindingsresponse.md) | :heavy_minus_sign:                                                                                                                | The response message containing the matching app entitlement resource bindings.                                                   |