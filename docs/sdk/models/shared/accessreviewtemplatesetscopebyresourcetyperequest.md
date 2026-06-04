# AccessReviewTemplateSetScopeByResourceTypeRequest

The AccessReviewTemplateSetScopeByResourceTypeRequest message.

## Example Usage

```typescript
import { AccessReviewTemplateSetScopeByResourceTypeRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewTemplateSetScopeByResourceTypeRequest = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `resourceTypeSelections`                                                                              | [shared.ResourceTypeIdRef](../../../sdk/models/shared/resourcetypeidref.md)[]                         | :heavy_minus_sign:                                                                                    | The resource types to include in the template scope. Replaces all previously selected resource types. |
| `scope`                                                                                               | [shared.AccessReviewScopeV2](../../../sdk/models/shared/accessreviewscopev2.md)                       | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |