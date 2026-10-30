# ForecastRollup

ForecastRollup represents a single forecasted data point with uncertainty bounds.
 Note: field names are legacy (p10/p90); the actual quantile levels are p20/p50/p80.

## Example Usage

```typescript
import { ForecastRollup } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ForecastRollup = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `p10`                                                                                         | *number*                                                                                      | :heavy_minus_sign:                                                                            | The lower bound (p20) of the forecast. Field name is legacy.                                  |
| `p50`                                                                                         | *number*                                                                                      | :heavy_minus_sign:                                                                            | The median (p50) of the forecast.                                                             |
| `p90`                                                                                         | *number*                                                                                      | :heavy_minus_sign:                                                                            | The upper bound (p80) of the forecast. Field name is legacy.                                  |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |