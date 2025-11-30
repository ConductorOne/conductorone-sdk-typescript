# AppGroupApproval

The AppGroupApproval object provides the configuration for setting a group as the approvers of an approval policy step.

## Example Usage

```typescript
import { AppGroupApproval } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppGroupApproval = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `allowSelfApproval`                                                                                 | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Configuration to allow self approval if the target user is a member of the group during this step.  |
| `appGroupId`                                                                                        | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The ID of the group specified for approval.                                                         |
| `appId`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The ID of the app that contains the group specified for approval.                                   |
| `fallback`                                                                                          | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Configuration to allow a fallback if the group is empty.                                            |
| `fallbackGroupIds`                                                                                  | [shared.AppEntitlementReference](../../../sdk/models/shared/appentitlementreference.md)[]           | :heavy_minus_sign:                                                                                  | Configuration to specify which groups to fallback to if fallback is enabled and the group is empty. |
| `fallbackUserIds`                                                                                   | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | Configuration to specific which users to fallback to if fallback is enabled and the group is empty. |
| `isGroupFallbackEnabled`                                                                            | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Configuration to enable fallback for group fallback.                                                |
| `requireDistinctApprovers`                                                                          | *boolean*                                                                                           | :heavy_minus_sign:                                                                                  | Configuration to require distinct approvers across approval steps of a rule.                        |