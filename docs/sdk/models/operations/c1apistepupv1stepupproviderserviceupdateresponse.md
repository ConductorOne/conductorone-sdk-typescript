# C1ApiStepupV1StepUpProviderServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiStepupV1StepUpProviderServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiStepupV1StepUpProviderServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 481313,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `updateStepUpProviderResponse`                                                                    | [shared.UpdateStepUpProviderResponse](../../../sdk/models/shared/updatestepupproviderresponse.md) | :heavy_minus_sign:                                                                                | Successful response                                                                               |