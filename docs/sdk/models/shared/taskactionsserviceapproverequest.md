# TaskActionsServiceApproveRequest

The TaskActionsServiceApproveRequest object lets you approve a task.

## Example Usage

```typescript
import { TaskActionsServiceApproveRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceApproveRequest = {
  policyStepId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `comment`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                            | The comment attached to the request.                                                                                                                                                                                          |
| `taskExpandMask`                                                                                                                                                                                                              | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                            | The task expand mask is an array of strings that specifes the related objects the requester wishes to have returned when making a request where the expand mask is part of the input. Use '*' to view all possible responses. |
| `policyStepId`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                            | The ID of the policy step on the given task to approve.                                                                                                                                                                       |