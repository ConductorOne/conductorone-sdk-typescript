# TaskAuditAutomationTriggered

TaskAuditAutomationTriggered attributes a system-created task to the
 automation execution that created it.

## Example Usage

```typescript
import { TaskAuditAutomationTriggered } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditAutomationTriggered = {};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `automationExecutionId`                                                                                                     | *number*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The specific execution of the automation that created the task.                                                             |
| `automationId`                                                                                                              | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The automation that created the task.                                                                                       |
| `automationName`                                                                                                            | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The automation's display name as of task creation, so the event stays<br/> readable after the automation is renamed or deleted. |