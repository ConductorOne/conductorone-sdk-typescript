# C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse = {
  contentType: "<value>",
  statusCode: 311896,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response content type for this operation                                                                                   |
| `statusCode`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response status code for this operation                                                                                    |
| `rawResponse`                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                           | :heavy_check_mark:                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                         |
| `taskActionsServiceApproveWithStepUpResponse`                                                                                   | [shared.TaskActionsServiceApproveWithStepUpResponse](../../../sdk/models/shared/taskactionsserviceapprovewithstepupresponse.md) | :heavy_minus_sign:                                                                                                              | TaskActionsServiceApproveWithStepUpResponse is the response for approving a task with step-up authentication                    |