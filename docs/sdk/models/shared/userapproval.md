# UserApproval

The user approval object describes the approval configuration of a policy step that needs to be approved by a specific list of users.

## Example Usage

```typescript
import { UserApproval } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserApproval = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `allowSelfApproval`                                                                                 | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Configuration to allow self approval of if the user is specified and also the target of the ticket. |
| `requireDistinctApprovers`                                                                          | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Configuration to require distinct approvers across approval steps of a rule.                        |
| `userIds`                                                                                           | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | Array of users configured for approval.                                                             |