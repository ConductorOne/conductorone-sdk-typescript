# TaskActionsServiceEscalateToEmergencyAccessRequest

The TaskActionsServiceEscalateToEmergencyAccessRequest object lets you escalate a task to the emergency access workflow.

## Example Usage

```typescript
import { TaskActionsServiceEscalateToEmergencyAccessRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceEscalateToEmergencyAccessRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `comment`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | An optional comment attached to the escalation.                       |
| `expandMask`                                                          | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `policyStepId`                                                        | *string*                                                              | :heavy_minus_sign:                                                    | The ID of the current policy step being escalated from.               |