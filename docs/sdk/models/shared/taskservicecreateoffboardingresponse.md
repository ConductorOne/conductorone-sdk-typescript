# TaskServiceCreateOffboardingResponse

The TaskServiceCreateOffboardingResponse returns the created offboarding task with optional expanded related objects.

## Example Usage

```typescript
import { TaskServiceCreateOffboardingResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskServiceCreateOffboardingResponse = {};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                          | [shared.TaskServiceCreateOffboardingResponseExpanded](../../../sdk/models/shared/taskservicecreateoffboardingresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                  | List of serialized related objects.                                                                                                 |
| `taskView`                                                                                                                          | [shared.TaskView](../../../sdk/models/shared/taskview.md)                                                                           | :heavy_minus_sign:                                                                                                                  | N/A                                                                                                                                 |