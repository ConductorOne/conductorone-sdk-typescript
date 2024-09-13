# FacetCategory

The FacetCategory indicates a grouping of facets by type. For example, facets "OnePassword" and "Okta" would group under an "Apps" category.

This message contains a oneof named item. Only a single field of the following list may be set at a time:
  - value
  - range


## Example Usage

```typescript
import { FacetCategory } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FacetCategory = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `displayName`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | The display name of the category.                                     |
| `iconUrl`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | An icon for the category.                                             |
| `param`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | The param that is being set when checking a facet in this category.   |
| `facetRangeItem`                                                      | [shared.FacetRangeItem](../../../sdk/models/shared/facetrangeitem.md) | :heavy_minus_sign:                                                    | The FacetRangeItem message.                                           |
| `facetValueItem`                                                      | [shared.FacetValueItem](../../../sdk/models/shared/facetvalueitem.md) | :heavy_minus_sign:                                                    | The FacetValueItem message.                                           |