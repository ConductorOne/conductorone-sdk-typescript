# C1ApiStepupV1StepUpTransactionServiceGetResponse

## Example Usage

```typescript
import { C1ApiStepupV1StepUpTransactionServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiStepupV1StepUpTransactionServiceGetResponse = {
  contentType: "<value>",
  statusCode: 871487,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `getStepUpTransactionResponse`                                                                    | [shared.GetStepUpTransactionResponse](../../../sdk/models/shared/getstepuptransactionresponse.md) | :heavy_minus_sign:                                                                                | Response message containing the requested step-up transaction                                     |