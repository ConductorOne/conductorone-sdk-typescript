# AccessReviewSetCampaignScopeAndExcludedEntitlementsRequest

AccessReviewSetCampaignScopeAndExcludedEntitlementsRequest replaces a supported campaign's scope and excluded entitlements.
 To mark the excluded entitlements as the active exclusion type, scope_v2 must set excluded_specific_resources.

## Example Usage

```typescript
import { AccessReviewSetCampaignScopeAndExcludedEntitlementsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewSetCampaignScopeAndExcludedEntitlementsRequest = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `excludedEntitlements`                                                                                              | [shared.AccessReviewExcludedEntitlementInput](../../../sdk/models/shared/accessreviewexcludedentitlementinput.md)[] | :heavy_minus_sign:                                                                                                  | The entitlements to exclude from scope. Replaces all previously excluded entitlements.                              |
| `scopeV2`                                                                                                           | [shared.AccessReviewScopeV2](../../../sdk/models/shared/accessreviewscopev2.md)                                     | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |