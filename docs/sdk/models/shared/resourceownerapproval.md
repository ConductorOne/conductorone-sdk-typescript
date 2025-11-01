# ResourceOwnerApproval

The resource owner approval allows configuration of the approval step when the target approvers are the resource owners.

## Example Usage

```typescript
import { ResourceOwnerApproval } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ResourceOwnerApproval = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `allowSelfApproval`                                                                                                      | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Configuration to allow self approval if the target user is an resource owner during this step.                           |
| `fallback`                                                                                                               | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Configuration to allow a fallback if the resource owner cannot be identified.                                            |
| `fallbackUserIds`                                                                                                        | *string*[]                                                                                                               | :heavy_minus_sign:                                                                                                       | Configuration to specific which users to fallback to if fallback is enabled and the resource owner cannot be identified. |
| `requireDistinctApprovers`                                                                                               | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | Configuration to require distinct approvers across approval steps of a rule.                                             |