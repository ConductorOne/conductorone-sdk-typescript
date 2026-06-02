# C1ApiRoleMiningManagementV1RoleMiningManagementServiceListCustomAnalysisResultsResponse

## Example Usage

```typescript
import {
  C1ApiRoleMiningManagementV1RoleMiningManagementServiceListCustomAnalysisResultsResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRoleMiningManagementV1RoleMiningManagementServiceListCustomAnalysisResultsResponse =
    {
      contentType: "<value>",
      statusCode: 923538,
    };
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `listCustomAnalysisResultsResponse`                                                                         | [shared.ListCustomAnalysisResultsResponse](../../../sdk/models/shared/listcustomanalysisresultsresponse.md) | :heavy_minus_sign:                                                                                          | Successful response                                                                                         |