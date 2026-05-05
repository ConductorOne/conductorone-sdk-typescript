# TaskActionsServiceUpdateGrantDurationRequest

The TaskActionsServiceUpdateGrantDurationRequest object lets you change the grant duration on a grant task.

## Example Usage

```typescript
import { TaskActionsServiceUpdateGrantDurationRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceUpdateGrantDurationRequest = {
  duration: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `duration`                                                            | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `expandMask`                                                          | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md) | :heavy_minus_sign:                                                    | N/A                                                                   |