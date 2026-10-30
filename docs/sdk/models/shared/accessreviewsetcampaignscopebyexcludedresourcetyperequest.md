# AccessReviewSetCampaignScopeByExcludedResourceTypeRequest

AccessReviewSetCampaignScopeByExcludedResourceTypeRequest replaces a user-first campaign's scope and excluded resource types.
 To mark the excluded resource types as the active exclusion type, scope_v2 must set excluded_resource_type_selections.

## Example Usage

```typescript
import { AccessReviewSetCampaignScopeByExcludedResourceTypeRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewSetCampaignScopeByExcludedResourceTypeRequest = {};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `excludedResourceTypes`                                                                                               | [shared.AccessReviewExcludedResourceTypeInput](../../../sdk/models/shared/accessreviewexcludedresourcetypeinput.md)[] | :heavy_minus_sign:                                                                                                    | The resource types to exclude from scope. Replaces all previously excluded resource types.                            |
| `scopeV2`                                                                                                             | [shared.AccessReviewScopeV2](../../../sdk/models/shared/accessreviewscopev2.md)                                       | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |