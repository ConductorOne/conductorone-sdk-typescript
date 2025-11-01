# AppOwnerApproval

App owner approval provides the configuration for an approval step when the app owner is the target.

## Example Usage

```typescript
import { AppOwnerApproval } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppOwnerApproval = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `allowSelfApproval`                                                                                  | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Configuration that allows a user to self approve if they are an app owner during this approval step. |
| `requireDistinctApprovers`                                                                           | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Configuration to require distinct approvers across approval steps of a rule.                         |