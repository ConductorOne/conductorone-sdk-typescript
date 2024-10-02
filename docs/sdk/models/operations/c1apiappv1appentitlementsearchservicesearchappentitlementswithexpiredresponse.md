# C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse =
    {
      contentType: "<value>",
      statusCode: 201,
      rawResponse: new Response("{\"message\": \"hello world\"}", {
        headers: { "Content-Type": "application/json" },
      }),
    };
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `searchAppEntitlementsWithExpiredResponse`                                                                                | [shared.SearchAppEntitlementsWithExpiredResponse](../../../sdk/models/shared/searchappentitlementswithexpiredresponse.md) | :heavy_minus_sign:                                                                                                        | The SearchAppEntitlementsWithExpiredResponse message contains a list of results and a nextPageToken if applicable.        |