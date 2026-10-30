# AccessReviewSetTemplateScopeAndExcludedEntitlementsResponse

AccessReviewSetTemplateScopeAndExcludedEntitlementsResponse contains the resulting excluded entitlements and scope.

## Example Usage

```typescript
import { AccessReviewSetTemplateScopeAndExcludedEntitlementsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewSetTemplateScopeAndExcludedEntitlementsResponse = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `excludedEntitlements`                                                                                                    | [shared.AccessReviewTemplateExcludedEntitlement](../../../sdk/models/shared/accessreviewtemplateexcludedentitlement.md)[] | :heavy_minus_sign:                                                                                                        | The current entitlements excluded from scope.                                                                             |
| `scope`                                                                                                                   | [shared.AccessReviewScopeV2](../../../sdk/models/shared/accessreviewscopev2.md)                                           | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |