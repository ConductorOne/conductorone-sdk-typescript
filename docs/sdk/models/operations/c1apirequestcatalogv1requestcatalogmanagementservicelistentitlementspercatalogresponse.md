# C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse

## Example Usage

```typescript
import {
  C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse =
    {
      contentType: "<value>",
      statusCode: 978077,
    };
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                                               | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | HTTP response content type for this operation                                                                                                                               |
| `statusCode`                                                                                                                                                                | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | HTTP response status code for this operation                                                                                                                                |
| `rawResponse`                                                                                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                                       | :heavy_check_mark:                                                                                                                                                          | Raw HTTP response; suitable for custom response parsing                                                                                                                     |
| `requestCatalogManagementServiceListEntitlementsPerCatalogResponse`                                                                                                         | [shared.RequestCatalogManagementServiceListEntitlementsPerCatalogResponse](../../../sdk/models/shared/requestcatalogmanagementservicelistentitlementspercatalogresponse.md) | :heavy_minus_sign:                                                                                                                                                          | The RequestCatalogManagementServiceListEntitlementsPerCatalogResponse message contains a list of results and a nextPageToken if applicable.                                 |