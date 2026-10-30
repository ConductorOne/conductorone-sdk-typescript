# TaskActionsServiceSkipStepRequest

The TaskActionsServiceSkipStepRequest object lets you skip a policy step in a task.

## Example Usage

```typescript
import { TaskActionsServiceSkipStepRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceSkipStepRequest = {
  policyStepId: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `comment`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | The comment attached to the request.                                  |
| `expandMask`                                                          | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `policyStepId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | The ID of the policy step to skip.                                    |