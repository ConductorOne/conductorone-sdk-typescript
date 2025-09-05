# TaskActionsServiceRestartRequest

The TaskActionsServiceRestartRequest object lets you restart a task.

## Example Usage

```typescript
import { TaskActionsServiceRestartRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceRestartRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `comment`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | The comment attached to the request.                                  |
| `expandMask`                                                          | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `policyStepId`                                                        | *string*                                                              | :heavy_minus_sign:                                                    | The ID of the policy step on the given task to restart.               |