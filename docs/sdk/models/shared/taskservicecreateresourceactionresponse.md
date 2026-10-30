# TaskServiceCreateResourceActionResponse

The TaskServiceCreateResourceActionResponse returns the created action task with optional expanded related objects.

## Example Usage

```typescript
import { TaskServiceCreateResourceActionResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskServiceCreateResourceActionResponse = {};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                                | [shared.TaskServiceCreateResourceActionResponseExpanded](../../../sdk/models/shared/taskservicecreateresourceactionresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                        | List of serialized related objects.                                                                                                       |
| `taskView`                                                                                                                                | [shared.TaskView](../../../sdk/models/shared/taskview.md)                                                                                 | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |