# C1ApiStepupV1StepUpProviderServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiStepupV1StepUpProviderServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiStepupV1StepUpProviderServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 487633,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `deleteStepUpProviderResponse`                                                                    | [shared.DeleteStepUpProviderResponse](../../../sdk/models/shared/deletestepupproviderresponse.md) | :heavy_minus_sign:                                                                                | Successful response                                                                               |