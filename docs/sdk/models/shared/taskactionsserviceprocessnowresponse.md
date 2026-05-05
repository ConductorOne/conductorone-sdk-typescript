# TaskActionsServiceProcessNowResponse

The TaskActionsServiceProcessNowResponse returns the task view after triggering immediate processing.

## Example Usage

```typescript
import { TaskActionsServiceProcessNowResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceProcessNowResponse = {};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                          | [shared.TaskActionsServiceProcessNowResponseExpanded](../../../sdk/models/shared/taskactionsserviceprocessnowresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                  | List of serialized related objects.                                                                                                 |
| `taskView`                                                                                                                          | [shared.TaskView](../../../sdk/models/shared/taskview.md)                                                                           | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |