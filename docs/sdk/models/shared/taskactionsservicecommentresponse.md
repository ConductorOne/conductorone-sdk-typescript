# TaskActionsServiceCommentResponse

Task actions service comment response returns the task view inluding the expanded array of items that are indicated by the expand mask on the request.

## Example Usage

```typescript
import { TaskActionsServiceCommentResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceCommentResponse = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                    | [shared.TaskActionsServiceCommentResponseExpanded](../../../sdk/models/shared/taskactionsservicecommentresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                            | List of serialized related objects.                                                                                           |
| `taskView`                                                                                                                    | [shared.TaskView](../../../sdk/models/shared/taskview.md)                                                                     | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |