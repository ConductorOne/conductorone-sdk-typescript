# GetAutomationExecutionResponse

The GetAutomationExecutionResponse message.

## Example Usage

```typescript
import { GetAutomationExecutionResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetAutomationExecutionResponse = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `automationExecution`                                                                                                   | [shared.AutomationExecution](../../../sdk/models/shared/automationexecution.md)                                         | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `expanded`                                                                                                              | [shared.GetAutomationExecutionResponseExpanded](../../../sdk/models/shared/getautomationexecutionresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                      | The expanded field.                                                                                                     |
| `automationExecutionView`                                                                                               | [shared.AutomationExecutionView](../../../sdk/models/shared/automationexecutionview.md)                                 | :heavy_minus_sign:                                                                                                      | The AutomationExecutionView message.                                                                                    |