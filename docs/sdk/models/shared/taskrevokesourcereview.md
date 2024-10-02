# TaskRevokeSourceReview

The TaskRevokeSourceReview message tracks which access review was the source of the specificed revoke ticket.

## Example Usage

```typescript
import { TaskRevokeSourceReview } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskRevokeSourceReview = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accessReviewId`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | The ID of the access review associated with the revoke task.               |
| `certTicketId`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | The ID of the certify ticket that was denied and created this revoke task. |