# TaskAuditReassignmentFallbackToAdmin

TaskAuditReassignmentFallbackToAdmin is used when no eligible reviewers are found
 from the policy configuration and the task falls back to system administrators
 without creating a new policy step. This prevents reassignment loops.

## Example Usage

```typescript
import { TaskAuditReassignmentFallbackToAdmin } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditReassignmentFallbackToAdmin = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `adminUserIds`                                                               | *string*[]                                                                   | :heavy_minus_sign:                                                           | The IDs of the system administrator users that the task is being assigned to |
| `adminUsers`                                                                 | [shared.User](../../../sdk/models/shared/user.md)[]                          | :heavy_minus_sign:                                                           | The system administrator users (populated for display)                       |