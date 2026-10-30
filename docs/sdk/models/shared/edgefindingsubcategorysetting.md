# EdgeFindingSubcategorySetting

EdgeFindingSubcategorySetting is one AI usage subcategory's resolved switch.
 It only takes effect while EDGE_FINDING_CATEGORY_AI_USAGE is on.

## Example Usage

```typescript
import { EdgeFindingSubcategorySetting } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeFindingSubcategorySetting = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                 | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | Whether rules in this subcategory run when AI usage is on.                                                                |
| `subcategory`                                                                                                             | [shared.EdgeFindingSubcategorySettingSubcategory](../../../sdk/models/shared/edgefindingsubcategorysettingsubcategory.md) | :heavy_minus_sign:                                                                                                        | The subcategory field.                                                                                                    |