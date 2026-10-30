# TaskActionSource

The TaskActionSource message indicates what created an action task.

This message contains a oneof named origin. Only a single field of the following list may be set at a time:
  - review


## Example Usage

```typescript
import { TaskActionSource } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionSource = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `review`                                                                              | [shared.TaskActionSourceReview](../../../sdk/models/shared/taskactionsourcereview.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |