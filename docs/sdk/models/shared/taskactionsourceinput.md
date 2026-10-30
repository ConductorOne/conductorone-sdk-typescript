# TaskActionSourceInput

The TaskActionSource message indicates what created an action task.

This message contains a oneof named origin. Only a single field of the following list may be set at a time:
  - review


## Example Usage

```typescript
import { TaskActionSourceInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionSourceInput = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `review`                                                                                        | [shared.TaskActionSourceReviewInput](../../../sdk/models/shared/taskactionsourcereviewinput.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |