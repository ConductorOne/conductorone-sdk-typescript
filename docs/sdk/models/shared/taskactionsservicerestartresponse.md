# TaskActionsServiceRestartResponse

The TaskActionsServiceRestartResponse returns the updated task after restarting.

## Example Usage

```typescript
import { TaskActionsServiceRestartResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceRestartResponse = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                    | [shared.TaskActionsServiceRestartResponseExpanded](../../../sdk/models/shared/taskactionsservicerestartresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                            | List of serialized related objects.                                                                                           |
| `taskView`                                                                                                                    | [shared.TaskView](../../../sdk/models/shared/taskview.md)                                                                     | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `ticketActionId`                                                                                                              | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The ID of the task restart action created by this request.                                                                    |