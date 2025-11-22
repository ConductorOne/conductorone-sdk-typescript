# C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequestableEntryResponse

## Example Usage

```typescript
import {
  C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequestableEntryResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequestableEntryResponse =
    {
      contentType: "<value>",
      statusCode: 177049,
    };
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | HTTP response content type for this operation                                                                                                                       |
| `statusCode`                                                                                                                                                        | *number*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | HTTP response status code for this operation                                                                                                                        |
| `rawResponse`                                                                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                               | :heavy_check_mark:                                                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                                                             |
| `requestCatalogManagementServiceDeleteRequestableEntryResponse`                                                                                                     | [shared.RequestCatalogManagementServiceDeleteRequestableEntryResponse](../../../sdk/models/shared/requestcatalogmanagementservicedeleterequestableentryresponse.md) | :heavy_minus_sign:                                                                                                                                                  | Empty response for delete operation                                                                                                                                 |