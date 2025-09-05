# Facets

Indicates one value of a facet.

## Example Usage

```typescript
import { Facets } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Facets = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `count`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | The count of items in this facet.                                     |
| `facets`                                                              | [shared.FacetCategory](../../../sdk/models/shared/facetcategory.md)[] | :heavy_minus_sign:                                                    | The facet being referenced.                                           |