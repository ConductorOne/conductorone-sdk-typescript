# TaskActionsServiceCommentRequest

The TaskActionsServiceCommentRequest object lets you create a new comment on a task.

## Example Usage

```typescript
import { TaskActionsServiceCommentRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionsServiceCommentRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `comment`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | The comment to be posted to the ticket                                |
| `expandMask`                                                          | [shared.TaskExpandMask](../../../sdk/models/shared/taskexpandmask.md) | :heavy_minus_sign:                                                    | N/A                                                                   |