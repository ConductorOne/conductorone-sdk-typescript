# ExpressionApprovalInput

The ExpressionApproval message.

## Example Usage

```typescript
import { ExpressionApprovalInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExpressionApprovalInput = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `allowSelfApproval`                                                                                                              | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Configuration to allow self approval of if the user is specified and also the target of the ticket.                              |
| `expressions`                                                                                                                    | *string*[]                                                                                                                       | :heavy_minus_sign:                                                                                                               | Array of dynamic expressions to determine the approvers.  The first expression to return a non-empty list of users will be used. |
| `fallback`                                                                                                                       | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Configuration to allow a fallback if the expression does not return a valid list of users.                                       |
| `fallbackUserIds`                                                                                                                | *string*[]                                                                                                                       | :heavy_minus_sign:                                                                                                               | Configuration to specific which users to fallback to if and the expression does not return a valid list of users.                |
| `requireDistinctApprovers`                                                                                                       | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Configuration to require distinct approvers across approval steps of a rule.                                                     |