# TaskServiceGetResponse

The TaskServiceGetResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array.

## Example Usage

```typescript
import { TaskServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskServiceGetResponse = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                              | [shared.TaskServiceGetResponseExpanded](../../../sdk/models/shared/taskservicegetresponseexpanded.md)[] | :heavy_minus_sign:                                                                                      | List of serialized related objects.                                                                     |
| `taskView`                                                                                              | [shared.TaskView](../../../sdk/models/shared/taskview.md)                                               | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |