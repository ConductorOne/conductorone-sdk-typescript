# C1ApiRoleMiningManagementV1RoleMiningManagementServiceTriggerCustomAnalysisResponse

## Example Usage

```typescript
import {
  C1ApiRoleMiningManagementV1RoleMiningManagementServiceTriggerCustomAnalysisResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRoleMiningManagementV1RoleMiningManagementServiceTriggerCustomAnalysisResponse =
    {
      contentType: "<value>",
      statusCode: 660474,
    };
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `triggerCustomAnalysisResponse`                                                                     | [shared.TriggerCustomAnalysisResponse](../../../sdk/models/shared/triggercustomanalysisresponse.md) | :heavy_minus_sign:                                                                                  | Successful response                                                                                 |