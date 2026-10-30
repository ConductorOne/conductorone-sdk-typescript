# AccessReviewSetCampaignScopeByExcludedResourceTypeResponse

AccessReviewSetCampaignScopeByExcludedResourceTypeResponse contains the resulting excluded resource types and scope.

## Example Usage

```typescript
import { AccessReviewSetCampaignScopeByExcludedResourceTypeResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewSetCampaignScopeByExcludedResourceTypeResponse = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `excludedResourceTypes`                                                                                     | [shared.AccessReviewExcludedResourceType](../../../sdk/models/shared/accessreviewexcludedresourcetype.md)[] | :heavy_minus_sign:                                                                                          | The current resource types excluded from scope.                                                             |
| `scopeV2`                                                                                                   | [shared.AccessReviewScopeV2](../../../sdk/models/shared/accessreviewscopev2.md)                             | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |