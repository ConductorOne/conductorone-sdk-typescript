# TaskActionsServiceDenyRequest

The TaskActionsServiceDenyRequest object lets you deny a task.

## Example Usage

```typescript
import { TaskActionsServiceDenyRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceDenyRequest = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `comment`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | The comment attached to the request.                                    |
| `expandMask`                                                            | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md)   | :heavy_minus_sign:                                                      | N/A                                                                     |
| `policyStepId`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | The ID of the currently policy step. This is the step you want to deny. |