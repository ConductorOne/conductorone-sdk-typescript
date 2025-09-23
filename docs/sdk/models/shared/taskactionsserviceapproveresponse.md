# TaskActionsServiceApproveResponse

The TaskActionsServiceApproveResponse returns a task view with paths indicating the location of expanded items in the array.

## Example Usage

```typescript
import { TaskActionsServiceApproveResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceApproveResponse = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                    | [shared.TaskActionsServiceApproveResponseExpanded](../../../sdk/models/shared/taskactionsserviceapproveresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                            | List of serialized related objects.                                                                                           |
| `taskView`                                                                                                                    | [shared.TaskView](../../../sdk/models/shared/taskview.md)                                                                     | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `ticketActionId`                                                                                                              | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The ID of the ticket (task) approve action created by this request.                                                           |