# TaskServiceCreateGrantResponse

The TaskServiceCreateGrantResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array.

## Example Usage

```typescript
import { TaskServiceCreateGrantResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskServiceCreateGrantResponse = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                              | [shared.TaskServiceCreateGrantResponseExpanded](../../../sdk/models/shared/taskservicecreategrantresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                      | List of serialized related objects.                                                                                     |
| `taskView`                                                                                                              | [shared.TaskView](../../../sdk/models/shared/taskview.md)                                                               | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |