# TaskActionSourceReview

The TaskActionSourceReview message tracks which access review decision created the action task.

## Example Usage

```typescript
import { TaskActionSourceReview } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionSourceReview = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accessReviewId`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | The ID of the access review associated with the action task.               |
| `certTicketId`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | The ID of the certify ticket that was denied and created this action task. |