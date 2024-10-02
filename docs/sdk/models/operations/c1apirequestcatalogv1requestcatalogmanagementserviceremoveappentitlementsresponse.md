# C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse

## Example Usage

```typescript
import {
  C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse =
    {
      contentType: "<value>",
      statusCode: 101,
      rawResponse: new Response("{\"message\": \"hello world\"}", {
        headers: { "Content-Type": "application/json" },
      }),
    };
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                                     | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | HTTP response content type for this operation                                                                                                                     |
| `statusCode`                                                                                                                                                      | *number*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | HTTP response status code for this operation                                                                                                                      |
| `rawResponse`                                                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                             | :heavy_check_mark:                                                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                                                           |
| `requestCatalogManagementServiceRemoveAppEntitlementsResponse`                                                                                                    | [shared.RequestCatalogManagementServiceRemoveAppEntitlementsResponse](../../../sdk/models/shared/requestcatalogmanagementserviceremoveappentitlementsresponse.md) | :heavy_minus_sign:                                                                                                                                                | Empty response with a status code indicating success                                                                                                              |