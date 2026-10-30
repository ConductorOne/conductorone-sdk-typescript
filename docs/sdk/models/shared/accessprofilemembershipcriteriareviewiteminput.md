# AccessProfileMembershipCriteriaReviewItemInput

The AccessProfileMembershipCriteriaReviewItem message.

This message contains a oneof named criterion. Only a single field of the following list may be set at a time:
  - membershipCel
  - membershipEntitlement


## Example Usage

```typescript
import { AccessProfileMembershipCriteriaReviewItemInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessProfileMembershipCriteriaReviewItemInput = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `membershipEntitlement`                                                     | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md) | :heavy_minus_sign:                                                          | N/A                                                                         |