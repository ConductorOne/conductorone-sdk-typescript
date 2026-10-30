# AccessReviewSetTemplateScopeByExcludedResourceTypeResponse

AccessReviewSetTemplateScopeByExcludedResourceTypeResponse contains the resulting excluded resource types and scope.

## Example Usage

```typescript
import { AccessReviewSetTemplateScopeByExcludedResourceTypeResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewSetTemplateScopeByExcludedResourceTypeResponse = {};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `excludedResourceTypes`                                                                                                     | [shared.AccessReviewTemplateExcludedResourceType](../../../sdk/models/shared/accessreviewtemplateexcludedresourcetype.md)[] | :heavy_minus_sign:                                                                                                          | The current resource types excluded from scope.                                                                             |
| `scope`                                                                                                                     | [shared.AccessReviewScopeV2](../../../sdk/models/shared/accessreviewscopev2.md)                                             | :heavy_minus_sign:                                                                                                          | N/A                                                                                                                         |