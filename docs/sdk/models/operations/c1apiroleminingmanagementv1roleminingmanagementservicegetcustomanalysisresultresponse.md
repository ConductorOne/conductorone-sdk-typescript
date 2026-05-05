# C1ApiRoleMiningManagementV1RoleMiningManagementServiceGetCustomAnalysisResultResponse

## Example Usage

```typescript
import {
  C1ApiRoleMiningManagementV1RoleMiningManagementServiceGetCustomAnalysisResultResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRoleMiningManagementV1RoleMiningManagementServiceGetCustomAnalysisResultResponse =
    {
      contentType: "<value>",
      statusCode: 942706,
    };
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `getCustomAnalysisResultResponse`                                                                       | [shared.GetCustomAnalysisResultResponse](../../../sdk/models/shared/getcustomanalysisresultresponse.md) | :heavy_minus_sign:                                                                                      | Successful response                                                                                     |