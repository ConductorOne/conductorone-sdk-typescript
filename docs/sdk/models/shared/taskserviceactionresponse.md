# TaskServiceActionResponse

A generic response for task action endpoints, containing the updated task and the ID of the action that was created.

## Example Usage

```typescript
import { TaskServiceActionResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskServiceActionResponse = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                    | [shared.TaskServiceActionResponseExpanded](../../../sdk/models/shared/taskserviceactionresponseexpanded.md)[] | :heavy_minus_sign:                                                                                            | List of serialized related objects.                                                                           |
| `taskView`                                                                                                    | [shared.TaskView](../../../sdk/models/shared/taskview.md)                                                     | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `ticketActionId`                                                                                              | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The ID of the task action created by this request.                                                            |