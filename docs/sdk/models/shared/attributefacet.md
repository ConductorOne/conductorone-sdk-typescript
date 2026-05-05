# AttributeFacet

AttributeFacet represents a filterable user profile attribute with its available values.

## Example Usage

```typescript
import { AttributeFacet } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AttributeFacet = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `attribute`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | The attribute field.                                                                        |
| `displayName`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | The displayName field.                                                                      |
| `values`                                                                                    | [shared.RoleMiningAttributeValue](../../../sdk/models/shared/roleminingattributevalue.md)[] | :heavy_minus_sign:                                                                          | The values field.                                                                           |