# TaskActionsServiceHardResetResponse

The TaskActionsServiceHardResetResponse returns the updated task after a hard reset.

## Example Usage

```typescript
import { TaskActionsServiceHardResetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceHardResetResponse = {};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                        | [shared.TaskActionsServiceHardResetResponseExpanded](../../../sdk/models/shared/taskactionsservicehardresetresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                | List of serialized related objects.                                                                                               |
| `taskView`                                                                                                                        | [shared.TaskView](../../../sdk/models/shared/taskview.md)                                                                         | :heavy_minus_sign:                                                                                                                | N/A                                                                                                                               |
| `ticketActionId`                                                                                                                  | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | The ID of the task reset action created by this request.                                                                          |