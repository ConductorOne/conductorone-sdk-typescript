# C1ApiStepupV1StepUpProviderServiceGetResponse

## Example Usage

```typescript
import { C1ApiStepupV1StepUpProviderServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiStepupV1StepUpProviderServiceGetResponse = {
  contentType: "<value>",
  statusCode: 445018,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `getStepUpProviderResponse`                                                                 | [shared.GetStepUpProviderResponse](../../../sdk/models/shared/getstepupproviderresponse.md) | :heavy_minus_sign:                                                                          | Successful response                                                                         |