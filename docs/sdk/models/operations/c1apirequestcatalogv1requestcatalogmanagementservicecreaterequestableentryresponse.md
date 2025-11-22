# C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateRequestableEntryResponse

## Example Usage

```typescript
import {
  C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateRequestableEntryResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateRequestableEntryResponse =
    {
      contentType: "<value>",
      statusCode: 764781,
    };
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | HTTP response content type for this operation                                                                                                                       |
| `statusCode`                                                                                                                                                        | *number*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | HTTP response status code for this operation                                                                                                                        |
| `rawResponse`                                                                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                               | :heavy_check_mark:                                                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                                                             |
| `requestCatalogManagementServiceCreateRequestableEntryResponse`                                                                                                     | [shared.RequestCatalogManagementServiceCreateRequestableEntryResponse](../../../sdk/models/shared/requestcatalogmanagementservicecreaterequestableentryresponse.md) | :heavy_minus_sign:                                                                                                                                                  | Response containing the created requestable entry                                                                                                                   |