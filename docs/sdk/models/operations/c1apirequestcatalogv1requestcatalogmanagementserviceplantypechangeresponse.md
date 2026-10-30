# C1ApiRequestcatalogV1RequestCatalogManagementServicePlanTypeChangeResponse

## Example Usage

```typescript
import { C1ApiRequestcatalogV1RequestCatalogManagementServicePlanTypeChangeResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRequestcatalogV1RequestCatalogManagementServicePlanTypeChangeResponse = {
    contentType: "<value>",
    statusCode: 866787,
  };
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                       | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | HTTP response content type for this operation                                                                                                       |
| `statusCode`                                                                                                                                        | *number*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | HTTP response status code for this operation                                                                                                        |
| `rawResponse`                                                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                               | :heavy_check_mark:                                                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                                                             |
| `requestCatalogManagementServicePlanTypeChangeResponse`                                                                                             | [shared.RequestCatalogManagementServicePlanTypeChangeResponse](../../../sdk/models/shared/requestcatalogmanagementserviceplantypechangeresponse.md) | :heavy_minus_sign:                                                                                                                                  | Describes behavior affected by an access profile type change.                                                                                       |