# AccessReviewSetScopeByResourceTypeRequest

The AccessReviewSetScopeByResourceTypeRequest message.

## Example Usage

```typescript
import { AccessReviewSetScopeByResourceTypeRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewSetScopeByResourceTypeRequest = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `resourceTypeSelections`                                                                              | [shared.ResourceTypeIdRef](../../../sdk/models/shared/resourcetypeidref.md)[]                         | :heavy_minus_sign:                                                                                    | The resource types to include in the campaign scope. Replaces all previously selected resource types. |
| `scopeV2`                                                                                             | [shared.AccessReviewScopeV2](../../../sdk/models/shared/accessreviewscopev2.md)                       | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |