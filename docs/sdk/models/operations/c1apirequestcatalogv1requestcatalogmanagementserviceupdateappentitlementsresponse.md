# C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse

## Example Usage

```typescript
import {
  C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse =
    {
      contentType: "<value>",
      statusCode: 992005,
    };
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                                     | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | HTTP response content type for this operation                                                                                                                     |
| `statusCode`                                                                                                                                                      | *number*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | HTTP response status code for this operation                                                                                                                      |
| `rawResponse`                                                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                             | :heavy_check_mark:                                                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                                                           |
| `requestCatalogManagementServiceUpdateAppEntitlementsResponse`                                                                                                    | [shared.RequestCatalogManagementServiceUpdateAppEntitlementsResponse](../../../sdk/models/shared/requestcatalogmanagementserviceupdateappentitlementsresponse.md) | :heavy_minus_sign:                                                                                                                                                | The RequestCatalogManagementServiceUpdateAppEntitlementsResponse object is is the response from UpdateAppEntitlements endpoint.                                   |