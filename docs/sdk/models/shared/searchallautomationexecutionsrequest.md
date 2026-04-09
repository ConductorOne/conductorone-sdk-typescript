# SearchAllAutomationExecutionsRequest

The SearchAllAutomationExecutionsRequest message.

## Example Usage

```typescript
import { SearchAllAutomationExecutionsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAllAutomationExecutionsRequest = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `automationTemplateIds`                                                                             | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | Filter to one or more specific automation templates.                                                |
| `executionStates`                                                                                   | [shared.ExecutionStates](../../../sdk/models/shared/executionstates.md)[]                           | :heavy_minus_sign:                                                                                  | Filter by execution state (e.g. DONE, ERROR).                                                       |
| `automationExecutionExpandMask`                                                                     | [shared.AutomationExecutionExpandMask](../../../sdk/models/shared/automationexecutionexpandmask.md) | :heavy_minus_sign:                                                                                  | The AutomationExecutionExpandMask message.                                                          |
| `pageSize`                                                                                          | *number*                                                                                            | :heavy_minus_sign:                                                                                  | The pageSize field.                                                                                 |
| `pageToken`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The pageToken field.                                                                                |