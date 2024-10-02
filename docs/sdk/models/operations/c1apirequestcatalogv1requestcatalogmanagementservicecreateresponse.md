# C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateResponse

## Example Usage

```typescript
import { C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateResponse =
  {
    contentType: "<value>",
    statusCode: 408,
    rawResponse: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
  };
```

## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                                                 | *string*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | HTTP response content type for this operation                                                                                                                                 |
| `statusCode`                                                                                                                                                                  | *number*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | HTTP response status code for this operation                                                                                                                                  |
| `rawResponse`                                                                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                                         | :heavy_check_mark:                                                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                                                       |
| `requestCatalogManagementServiceGetResponse`                                                                                                                                  | [shared.RequestCatalogManagementServiceGetResponse](../../../sdk/models/shared/requestcatalogmanagementservicegetresponse.md)                                                 | :heavy_minus_sign:                                                                                                                                                            | The request catalog management service get response returns a request catalog view with the expanded items in the expanded array indicated by the expand mask in the request. |