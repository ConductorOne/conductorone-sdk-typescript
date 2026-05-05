# C1ApiRoleMiningManagementV1RoleMiningManagementServiceUpdateSuggestionStateResponse

## Example Usage

```typescript
import {
  C1ApiRoleMiningManagementV1RoleMiningManagementServiceUpdateSuggestionStateResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRoleMiningManagementV1RoleMiningManagementServiceUpdateSuggestionStateResponse =
    {
      contentType: "<value>",
      statusCode: 801707,
    };
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `updateSuggestionStateResponse`                                                                     | [shared.UpdateSuggestionStateResponse](../../../sdk/models/shared/updatesuggestionstateresponse.md) | :heavy_minus_sign:                                                                                  | Successful response                                                                                 |