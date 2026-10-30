# AccessReviewTemplateAddDeleteExcludedEntitlementsRequest

Incrementally adds and/or removes excluded entitlements for a supported access review
 template without replacing the entire set (contrast
 AccessReviewSetTemplateScopeAndExcludedEntitlementsRequest).

## Example Usage

```typescript
import { AccessReviewTemplateAddDeleteExcludedEntitlementsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewTemplateAddDeleteExcludedEntitlementsRequest = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `toAdd`                                                                                                             | [shared.AccessReviewExcludedEntitlementInput](../../../sdk/models/shared/accessreviewexcludedentitlementinput.md)[] | :heavy_minus_sign:                                                                                                  | The entitlements to add to the template's excluded set.                                                             |
| `toDelete`                                                                                                          | [shared.AccessReviewExcludedEntitlementInput](../../../sdk/models/shared/accessreviewexcludedentitlementinput.md)[] | :heavy_minus_sign:                                                                                                  | The entitlements to remove from the template's excluded set.                                                        |