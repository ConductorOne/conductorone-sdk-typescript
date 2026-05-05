# FindingRiskFactor

The FindingRiskFactor message.

## Example Usage

```typescript
import { FindingRiskFactor } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FindingRiskFactor = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `description`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | The description field.                                                                      |
| `name`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | The name field.                                                                             |
| `severity`                                                                                  | [shared.FindingRiskFactorSeverity](../../../sdk/models/shared/findingriskfactorseverity.md) | :heavy_minus_sign:                                                                          | The severity field.                                                                         |
| `weight`                                                                                    | *number*                                                                                    | :heavy_minus_sign:                                                                          | The weight field.                                                                           |