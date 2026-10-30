# EdgeInferenceTierOption

EdgeInferenceTierOption is a C1 tier and the model it uses for the caller's tenant.

## Example Usage

```typescript
import { EdgeInferenceTierOption } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceTierOption = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `aliasRouteId`                                    | *string*                                          | :heavy_minus_sign:                                | Route id published as the model alias.            |
| `modelDisplayName`                                | *string*                                          | :heavy_minus_sign:                                | The modelDisplayName field.                       |
| `modelId`                                         | *string*                                          | :heavy_minus_sign:                                | Registry model id the tier uses.                  |
| `routeId`                                         | *string*                                          | :heavy_minus_sign:                                | Route id published for the tier, e.g. c1-fast.    |
| `tier`                                            | [shared.Tier](../../../sdk/models/shared/tier.md) | :heavy_minus_sign:                                | The tier field.                                   |