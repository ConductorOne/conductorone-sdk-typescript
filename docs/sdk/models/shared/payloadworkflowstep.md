# PayloadWorkflowStep

The PayloadWorkflowStep message.

## Example Usage

```typescript
import { PayloadWorkflowStep } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PayloadWorkflowStep = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `context`                      | Record<string, *any*>          | :heavy_minus_sign:             | N/A                            |
| `workflowExecutionId`          | *number*                       | :heavy_minus_sign:             | The workflow execution ID      |
| `workflowExecutionStepId`      | *string*                       | :heavy_minus_sign:             | The workflow execution step ID |
| `workflowId`                   | *string*                       | :heavy_minus_sign:             | The workflow template ID       |