# FacetCategory

The FacetCategory message.

This message contains a oneof named item. Only a single field of the following list may be set at a time:
  - value
  - range



## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `facetRangeItem`                                        | [FacetRangeItem](../../models/shared/facetrangeitem.md) | :heavy_minus_sign:                                      | The FacetRangeItem message.                             |
| `facetValueItem`                                        | [FacetValueItem](../../models/shared/facetvalueitem.md) | :heavy_minus_sign:                                      | The FacetValueItem message.                             |
| `displayName`                                           | *string*                                                | :heavy_minus_sign:                                      | The displayName field.                                  |
| `iconUrl`                                               | *string*                                                | :heavy_minus_sign:                                      | The iconUrl field.                                      |
| `param`                                                 | *string*                                                | :heavy_minus_sign:                                      | The param field.                                        |