# TaskAuditReassignedToDelegate

The TaskAuditReassignedToDelegate message.

## Example Usage

```typescript
import { TaskAuditReassignedToDelegate } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditReassignedToDelegate = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `user`                                                                                  | [shared.User](../../../sdk/models/shared/user.md)                                       | :heavy_minus_sign:                                                                      | The User object provides all of the details for an user, as well as some configuration. |
| `delegatedAssigneeUserId`                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | The delegatedAssigneeUserId field.                                                      |
| `user1`                                                                                 | [shared.User](../../../sdk/models/shared/user.md)                                       | :heavy_minus_sign:                                                                      | The User object provides all of the details for an user, as well as some configuration. |
| `originalAssigneeUserId`                                                                | *string*                                                                                | :heavy_minus_sign:                                                                      | The originalAssigneeUserId field.                                                       |