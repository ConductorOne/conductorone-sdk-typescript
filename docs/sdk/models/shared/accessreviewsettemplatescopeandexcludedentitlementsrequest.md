# AccessReviewSetTemplateScopeAndExcludedEntitlementsRequest

AccessReviewSetTemplateScopeAndExcludedEntitlementsRequest replaces a supported template's scope and excluded entitlements.
 To mark the excluded entitlements as the active exclusion type, scope must set excluded_specific_resources.

## Example Usage

```typescript
import { AccessReviewSetTemplateScopeAndExcludedEntitlementsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewSetTemplateScopeAndExcludedEntitlementsRequest = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `excludedEntitlements`                                                                                              | [shared.AccessReviewExcludedEntitlementInput](../../../sdk/models/shared/accessreviewexcludedentitlementinput.md)[] | :heavy_minus_sign:                                                                                                  | The entitlements to exclude from scope. Replaces all previously excluded entitlements.                              |
| `scope`                                                                                                             | [shared.AccessReviewScopeV2](../../../sdk/models/shared/accessreviewscopev2.md)                                     | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |