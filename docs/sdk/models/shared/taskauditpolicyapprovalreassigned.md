# TaskAuditPolicyApprovalReassigned

The TaskAuditPolicyApprovalReassigned message.

## Example Usage

```typescript
import { TaskAuditPolicyApprovalReassigned } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditPolicyApprovalReassigned = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `newPolicyStepId`                                   | *string*                                            | :heavy_minus_sign:                                  | The newPolicyStepId field.                          |
| `newUsers`                                          | *string*[]                                          | :heavy_minus_sign:                                  | The newUsers field.                                 |
| `oldPolicyStepId`                                   | *string*                                            | :heavy_minus_sign:                                  | The oldPolicyStepId field.                          |
| `users`                                             | [shared.User](../../../sdk/models/shared/user.md)[] | :heavy_minus_sign:                                  | The users field.                                    |