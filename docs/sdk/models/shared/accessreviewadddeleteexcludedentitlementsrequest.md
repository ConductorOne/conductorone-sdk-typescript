# AccessReviewAddDeleteExcludedEntitlementsRequest

Incrementally adds and/or removes excluded entitlements for a supported campaign scope without
 replacing the entire set (contrast AccessReviewSetCampaignScopeAndExcludedEntitlementsRequest).

## Example Usage

```typescript
import { AccessReviewAddDeleteExcludedEntitlementsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewAddDeleteExcludedEntitlementsRequest = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `toAdd`                                                                                                             | [shared.AccessReviewExcludedEntitlementInput](../../../sdk/models/shared/accessreviewexcludedentitlementinput.md)[] | :heavy_minus_sign:                                                                                                  | The entitlements to add to the campaign's excluded set.                                                             |
| `toDelete`                                                                                                          | [shared.AccessReviewExcludedEntitlementInput](../../../sdk/models/shared/accessreviewexcludedentitlementinput.md)[] | :heavy_minus_sign:                                                                                                  | The entitlements to remove from the campaign's excluded set.                                                        |