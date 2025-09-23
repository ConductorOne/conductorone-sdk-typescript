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

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `comment`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | The comment attached to the request.                                  |
| `expandMask`                                                          | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `policyStepId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | The ID of the policy step on the given task to approve.               |