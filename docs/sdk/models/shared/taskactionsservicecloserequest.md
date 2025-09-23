# TaskActionsServiceCloseRequest

The TaskActionsServiceCloseRequest object lets you close or cancel a task.

## Example Usage

```typescript
import { TaskActionsServiceCloseRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceCloseRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `comment`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | The comment field.                                                    |
| `expandMask`                                                          | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md) | :heavy_minus_sign:                                                    | N/A                                                                   |