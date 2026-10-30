# EdgeFindingSubcategorySettingsEntry

EdgeFindingSubcategorySettingsEntry is a requested change to one
 subcategory.

## Example Usage

```typescript
import { EdgeFindingSubcategorySettingsEntry } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeFindingSubcategorySettingsEntry = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                             | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | Target state. Required: an omitted field must not read as false.                                                                      |
| `subcategory`                                                                                                                         | [shared.EdgeFindingSubcategorySettingsEntrySubcategory](../../../sdk/models/shared/edgefindingsubcategorysettingsentrysubcategory.md) | :heavy_minus_sign:                                                                                                                    | The subcategory field.                                                                                                                |