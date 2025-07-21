# C1ApiStepupV1StepUpTransactionServiceSearchResponse

## Example Usage

```typescript
import { C1ApiStepupV1StepUpTransactionServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiStepupV1StepUpTransactionServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 988720,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `searchStepUpTransactionsResponse`                                                                        | [shared.SearchStepUpTransactionsResponse](../../../sdk/models/shared/searchstepuptransactionsresponse.md) | :heavy_minus_sign:                                                                                        | Response message for searching step-up transactions                                                       |