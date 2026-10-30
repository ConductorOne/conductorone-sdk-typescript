# GetEdgeFindingSettingsResponse

The GetEdgeFindingSettingsResponse message.

## Example Usage

```typescript
import { GetEdgeFindingSettingsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetEdgeFindingSettingsResponse = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `list`                                                                                                | [shared.EdgeFindingCategorySetting](../../../sdk/models/shared/edgefindingcategorysetting.md)[]       | :heavy_minus_sign:                                                                                    | One entry per Edge finding category, in EdgeFindingCategory declaration<br/> order.                   |
| `subcategories`                                                                                       | [shared.EdgeFindingSubcategorySetting](../../../sdk/models/shared/edgefindingsubcategorysetting.md)[] | :heavy_minus_sign:                                                                                    | One entry per AI usage subcategory, in EdgeFindingSubcategory<br/> declaration order.                 |