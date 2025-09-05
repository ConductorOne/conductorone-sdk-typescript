# C1ApiStepupV1StepUpProviderServiceTestResponse

## Example Usage

```typescript
import { C1ApiStepupV1StepUpProviderServiceTestResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiStepupV1StepUpProviderServiceTestResponse = {
  contentType: "<value>",
  statusCode: 89504,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `testStepUpProviderResponse`                                                                  | [shared.TestStepUpProviderResponse](../../../sdk/models/shared/teststepupproviderresponse.md) | :heavy_minus_sign:                                                                            | Successful response                                                                           |