# UpdateEdgeFindingSettingsResponse

The UpdateEdgeFindingSettingsResponse message.

## Example Usage

```typescript
import { UpdateEdgeFindingSettingsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateEdgeFindingSettingsResponse = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `list`                                                                                                | [shared.EdgeFindingCategorySetting](../../../sdk/models/shared/edgefindingcategorysetting.md)[]       | :heavy_minus_sign:                                                                                    | Every category after the write, in the same shape GetEdgeFindingSettings<br/> returns.                |
| `subcategories`                                                                                       | [shared.EdgeFindingSubcategorySetting](../../../sdk/models/shared/edgefindingsubcategorysetting.md)[] | :heavy_minus_sign:                                                                                    | Every AI usage subcategory after the write.                                                           |