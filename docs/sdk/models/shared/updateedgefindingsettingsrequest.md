# UpdateEdgeFindingSettingsRequest

The UpdateEdgeFindingSettingsRequest message.

## Example Usage

```typescript
import { UpdateEdgeFindingSettingsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateEdgeFindingSettingsRequest = {};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `settings`                                                                                                                                             | [shared.EdgeFindingSettingsEntry](../../../sdk/models/shared/edgefindingsettingsentry.md)[]                                                            | :heavy_minus_sign:                                                                                                                                     | Applied as one atomic write together with subcategory_settings.<br/> Categories not listed keep their current state; a category listed twice<br/> is rejected. |
| `subcategorySettings`                                                                                                                                  | [shared.EdgeFindingSubcategorySettingsEntry](../../../sdk/models/shared/edgefindingsubcategorysettingsentry.md)[]                                      | :heavy_minus_sign:                                                                                                                                     | Same contract as settings, for AI usage subcategories.                                                                                                 |