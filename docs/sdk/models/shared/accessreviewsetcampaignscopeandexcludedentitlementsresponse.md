# AccessReviewSetCampaignScopeAndExcludedEntitlementsResponse

AccessReviewSetCampaignScopeAndExcludedEntitlementsResponse contains the resulting excluded entitlements and scope.

## Example Usage

```typescript
import { AccessReviewSetCampaignScopeAndExcludedEntitlementsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewSetCampaignScopeAndExcludedEntitlementsResponse = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `excludedEntitlements`                                                                                    | [shared.AccessReviewExcludedEntitlement](../../../sdk/models/shared/accessreviewexcludedentitlement.md)[] | :heavy_minus_sign:                                                                                        | The current entitlements excluded from scope.                                                             |
| `scopeV2`                                                                                                 | [shared.AccessReviewScopeV2](../../../sdk/models/shared/accessreviewscopev2.md)                           | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |