# FindingRiskScore

The FindingRiskScore message.

## Example Usage

```typescript
import { FindingRiskScore } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FindingRiskScore = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `originalScore`                                                               | *number*                                                                      | :heavy_minus_sign:                                                            | The originalScore field.                                                      |
| `overrideByUserId`                                                            | *string*                                                                      | :heavy_minus_sign:                                                            | The overrideByUserId field.                                                   |
| `overrideScore`                                                               | *number*                                                                      | :heavy_minus_sign:                                                            | The overrideScore field.                                                      |
| `riskFactors`                                                                 | [shared.FindingRiskFactor](../../../sdk/models/shared/findingriskfactor.md)[] | :heavy_minus_sign:                                                            | The riskFactors field.                                                        |
| `score`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | The score field.                                                              |
| `systemScore`                                                                 | *number*                                                                      | :heavy_minus_sign:                                                            | The systemScore field.                                                        |