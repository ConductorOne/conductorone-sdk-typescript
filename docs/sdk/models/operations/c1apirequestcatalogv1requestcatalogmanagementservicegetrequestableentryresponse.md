# C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequestableEntryResponse

## Example Usage

```typescript
import { C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequestableEntryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequestableEntryResponse =
    {
      contentType: "<value>",
      statusCode: 146400,
    };
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                                 | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | HTTP response content type for this operation                                                                                                                 |
| `statusCode`                                                                                                                                                  | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | HTTP response status code for this operation                                                                                                                  |
| `rawResponse`                                                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                         | :heavy_check_mark:                                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                                       |
| `requestCatalogManagementServiceGetRequestableEntryResponse`                                                                                                  | [shared.RequestCatalogManagementServiceGetRequestableEntryResponse](../../../sdk/models/shared/requestcatalogmanagementservicegetrequestableentryresponse.md) | :heavy_minus_sign:                                                                                                                                            | Response containing the requested entry                                                                                                                       |