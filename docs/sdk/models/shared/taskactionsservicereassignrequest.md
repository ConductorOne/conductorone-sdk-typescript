# TaskActionsServiceReassignRequest

The TaskActionsServiceReassignRequest object lets you reassign a task's current policy step to different users.

## Example Usage

```typescript
import { TaskActionsServiceReassignRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceReassignRequest = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `comment`                                                                                               | *string*                                                                                                | :heavy_minus_sign:                                                                                      | An optional comment attached to the reassignment.                                                       |
| `expandMask`                                                                                            | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md)                                   | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `newStepUserIds`                                                                                        | *string*[]                                                                                              | :heavy_minus_sign:                                                                                      | The IDs of the users to reassign the current policy step to. Must be from the allowed reassignees list. |
| `policyStepId`                                                                                          | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The ID of the current policy step to reassign. Must match the task's active step.                       |