# RequestCatalogTypeChangeImpact

Stable machine-readable impact produced by access profile type planning.

## Example Usage

```typescript
import { RequestCatalogTypeChangeImpact } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestCatalogTypeChangeImpact = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `category`                                                                                                    | [shared.Category](../../../sdk/models/shared/category.md)                                                     | :heavy_minus_sign:                                                                                            | How the target type treats the current state.                                                                 |
| `code`                                                                                                        | [shared.RequestCatalogTypeChangeImpactCode](../../../sdk/models/shared/requestcatalogtypechangeimpactcode.md) | :heavy_minus_sign:                                                                                            | Stable reason identifier for rendering, diagnostics, and tests.                                               |
| `count`                                                                                                       | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Number of affected objects. Zero means the impact describes one setting.                                      |
| `countIsLowerBound`                                                                                           | *boolean*                                                                                                     | :heavy_minus_sign:                                                                                            | True when count reached the service safety bound and is a lower bound.                                        |
| `fieldPath`                                                                                                   | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Protobuf-style field path when the impact is caused by stored settings.                                       |
| `ref`                                                                                                         | [shared.RequestCatalogTypeChangeImpactRef](../../../sdk/models/shared/requestcatalogtypechangeimpactref.md)   | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |