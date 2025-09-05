# TaskActionsServiceDenyResponse

The TaskActionsServiceDenyResponse returns a task view with paths indicating the location of expanded items in the array.

## Example Usage

```typescript
import { TaskActionsServiceDenyResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceDenyResponse = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                              | [shared.TaskActionsServiceDenyResponseExpanded](../../../sdk/models/shared/taskactionsservicedenyresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                      | List of serialized related objects.                                                                                     |
| `taskView`                                                                                                              | [shared.TaskView](../../../sdk/models/shared/taskview.md)                                                               | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `ticketActionId`                                                                                                        | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The ID of the ticket (task) deny action created by this request.                                                        |