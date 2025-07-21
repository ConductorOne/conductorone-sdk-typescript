# SearchAutomationExecutionsRequest

The SearchAutomationExecutionsRequest message.

## Example Usage

```typescript
import { SearchAutomationExecutionsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAutomationExecutionsRequest = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `automationTemplateId`                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The automationTemplateId field.                                                                     |
| `executionId`                                                                                       | *number*                                                                                            | :heavy_minus_sign:                                                                                  | The executionId field.                                                                              |
| `executionStepStates`                                                                               | [shared.ExecutionStepStates](../../../sdk/models/shared/executionstepstates.md)[]                   | :heavy_minus_sign:                                                                                  | The executionStepStates field.                                                                      |
| `automationExecutionExpandMask`                                                                     | [shared.AutomationExecutionExpandMask](../../../sdk/models/shared/automationexecutionexpandmask.md) | :heavy_minus_sign:                                                                                  | The AutomationExecutionExpandMask message.                                                          |
| `pageSize`                                                                                          | *number*                                                                                            | :heavy_minus_sign:                                                                                  | The pageSize field.                                                                                 |
| `pageToken`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The pageToken field.                                                                                |
| `query`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The query field.                                                                                    |
| `refs`                                                                                              | [shared.AutomationExecutionRef](../../../sdk/models/shared/automationexecutionref.md)[]             | :heavy_minus_sign:                                                                                  | The refs field.                                                                                     |