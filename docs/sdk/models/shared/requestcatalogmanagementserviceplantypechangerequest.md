# RequestCatalogManagementServicePlanTypeChangeRequest

Requests a side-effect-free plan for changing an access profile's type.

## Example Usage

```typescript
import { RequestCatalogManagementServicePlanTypeChangeRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestCatalogManagementServicePlanTypeChangeRequest = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `targetType`                                                  | [shared.TargetType](../../../sdk/models/shared/targettype.md) | :heavy_minus_sign:                                            | The type to preview: CATALOG, BUNDLE, or CATALOG_AND_BUNDLE.  |