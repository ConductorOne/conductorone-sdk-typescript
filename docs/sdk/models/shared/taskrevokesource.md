# TaskRevokeSource

The TaskRevokeSource message indicates the source of the revoke task is one of expired, nonUsage, request, or review.

This message contains a oneof named origin. Only a single field of the following list may be set at a time:
  - review
  - request
  - expired
  - nonUsage


## Example Usage

```typescript
import { TaskRevokeSource } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskRevokeSource = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `expired`                                                                                 | [shared.TaskRevokeSourceExpired](../../../sdk/models/shared/taskrevokesourceexpired.md)   | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `nonUsage`                                                                                | [shared.TaskRevokeSourceNonUsage](../../../sdk/models/shared/taskrevokesourcenonusage.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `request`                                                                                 | [shared.TaskRevokeSourceRequest](../../../sdk/models/shared/taskrevokesourcerequest.md)   | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `review`                                                                                  | [shared.TaskRevokeSourceReview](../../../sdk/models/shared/taskrevokesourcereview.md)     | :heavy_minus_sign:                                                                        | N/A                                                                                       |