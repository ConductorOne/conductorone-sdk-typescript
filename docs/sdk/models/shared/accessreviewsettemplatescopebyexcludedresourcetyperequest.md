# AccessReviewSetTemplateScopeByExcludedResourceTypeRequest

AccessReviewSetTemplateScopeByExcludedResourceTypeRequest replaces a user-first template's scope and excluded resource types.
 To mark the excluded resource types as the active exclusion type, scope must set excluded_resource_type_selections.

## Example Usage

```typescript
import { AccessReviewSetTemplateScopeByExcludedResourceTypeRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewSetTemplateScopeByExcludedResourceTypeRequest = {};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `excludedResourceTypes`                                                                                               | [shared.AccessReviewExcludedResourceTypeInput](../../../sdk/models/shared/accessreviewexcludedresourcetypeinput.md)[] | :heavy_minus_sign:                                                                                                    | The resource types to exclude from scope. Replaces all previously excluded resource types.                            |
| `scope`                                                                                                               | [shared.AccessReviewScopeV2](../../../sdk/models/shared/accessreviewscopev2.md)                                       | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |