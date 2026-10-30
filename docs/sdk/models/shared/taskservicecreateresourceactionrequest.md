# TaskServiceCreateResourceActionRequest

The TaskServiceCreateResourceActionRequest submits a request to execute a connector resource-create action, for example creating a group from a group template.

## Example Usage

```typescript
import { TaskServiceCreateResourceActionRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskServiceCreateResourceActionRequest = {
  actionId: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `actionId`                                                            | *string*                                                              | :heavy_check_mark:                                                    | The ID of the resource-create action to execute.                      |
| `expandMask`                                                          | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `formValues`                                                          | Record<string, *any*>                                                 | :heavy_minus_sign:                                                    | N/A                                                                   |