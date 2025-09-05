# TaskAuditReassignedToDelegate

The TaskAuditReassignedToDelegate message.

## Example Usage

```typescript
import { TaskAuditReassignedToDelegate } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditReassignedToDelegate = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `delegatedAssigneeUser`                           | [shared.User](../../../sdk/models/shared/user.md) | :heavy_minus_sign:                                | N/A                                               |
| `delegatedAssigneeUserId`                         | *string*                                          | :heavy_minus_sign:                                | The delegatedAssigneeUserId field.                |
| `originalAssigneeUser`                            | [shared.User](../../../sdk/models/shared/user.md) | :heavy_minus_sign:                                | N/A                                               |
| `originalAssigneeUserId`                          | *string*                                          | :heavy_minus_sign:                                | The originalAssigneeUserId field.                 |