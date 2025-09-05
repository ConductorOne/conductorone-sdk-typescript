# StepUpTransaction

StepUpTransaction represents a record of a step-up authentication attempt

This message contains a oneof named target. Only a single field of the following list may be set at a time:
  - approveTask
  - test


## Example Usage

```typescript
import { StepUpTransaction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StepUpTransaction = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `approveTask`                                                                                 | [shared.TargetTask](../../../sdk/models/shared/targettask.md)                                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `claims`                                                                                      | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `errorMessage`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Error message if the transaction failed                                                       |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier for the transaction                                                         |
| `providerId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | ID of the provider used for this step-up authentication                                       |
| `state`                                                                                       | [shared.StepUpTransactionState](../../../sdk/models/shared/stepuptransactionstate.md)         | :heavy_minus_sign:                                                                            | Current state of the transaction                                                              |
| `test`                                                                                        | [shared.TargetTest](../../../sdk/models/shared/targettest.md)                                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | ID of the user who performed the step-up authentication                                       |