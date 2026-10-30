# C1MetricCard

C1MetricCard is one aggregate stat: label, formatted value, optional delta
 and sparkline trend.

## Example Usage

```typescript
import { C1MetricCard } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1MetricCard = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `delta`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | The delta field.                                                         |
| `deltaSentiment`                                                         | [shared.DeltaSentiment](../../../sdk/models/shared/deltasentiment.md)    | :heavy_minus_sign:                                                       | The deltaSentiment field.                                                |
| `label`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | The label field.                                                         |
| `sparkline`                                                              | *number*[]                                                               | :heavy_minus_sign:                                                       | Optional trend values, oldest first. Bounds double as NaN/Inf rejection. |
| `value`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | The value field.                                                         |