# TaskActionsServiceHardResetRequest

The TaskActionsServiceHardResetRequest object lets you reset a task and recalculate its policy.

## Example Usage

```typescript
import { TaskActionsServiceHardResetRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceHardResetRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `comment`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | The comment attached to the request.                                  |
| `expandMask`                                                          | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md) | :heavy_minus_sign:                                                    | N/A                                                                   |