# TaskServiceCreateActionResponse

The TaskServiceCreateActionResponse returns the created action task with optional expanded related objects.

## Example Usage

```typescript
import { TaskServiceCreateActionResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskServiceCreateActionResponse = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                | [shared.TaskServiceCreateActionResponseExpanded](../../../sdk/models/shared/taskservicecreateactionresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                        | List of serialized related objects.                                                                                       |
| `taskView`                                                                                                                | [shared.TaskView](../../../sdk/models/shared/taskview.md)                                                                 | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |