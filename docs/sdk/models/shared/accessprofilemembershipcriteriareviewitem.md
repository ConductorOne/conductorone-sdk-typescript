# AccessProfileMembershipCriteriaReviewItem

The AccessProfileMembershipCriteriaReviewItem message.

This message contains a oneof named criterion. Only a single field of the following list may be set at a time:
  - membershipCel
  - membershipEntitlement


## Example Usage

```typescript
import { AccessProfileMembershipCriteriaReviewItem } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessProfileMembershipCriteriaReviewItem = {};
```

## Fields

| Field                                                                                                                                                                                                      | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `membershipCel`                                                                                                                                                                                            | *string*                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                         | The whole expression under review, without evaluation.<br/>This field is part of the `criterion` oneof.<br/>See the documentation for `c1.api.task.v1.AccessProfileMembershipCriteriaReviewItem` for more details. |
| `membershipEntitlement`                                                                                                                                                                                    | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        |