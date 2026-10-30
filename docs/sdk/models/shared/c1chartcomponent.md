# C1ChartComponent

C1ChartComponent renders a chart from typed data. The data oneof is keyed by
 shape — each shape carries its own style enum, so an invalid combination
 (e.g. a pie chart with a time axis) is unrepresentable.

This message contains a oneof named data. Only a single field of the following list may be set at a time:
  - timeSeries
  - categorical


## Example Usage

```typescript
import { C1ChartComponent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1ChartComponent = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `artifactUrl`                                                                         | [shared.DynamicString](../../../sdk/models/shared/dynamicstring.md)                   | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `categorical`                                                                         | [shared.C1ChartCategoricalData](../../../sdk/models/shared/c1chartcategoricaldata.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `sources`                                                                             | [shared.C1ChartSource](../../../sdk/models/shared/c1chartsource.md)[]                 | :heavy_minus_sign:                                                                    | Provenance: the queries the producing function ran.                                   |
| `timeSeries`                                                                          | [shared.C1ChartTimeSeriesData](../../../sdk/models/shared/c1charttimeseriesdata.md)   | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `title`                                                                               | [shared.DynamicString](../../../sdk/models/shared/dynamicstring.md)                   | :heavy_minus_sign:                                                                    | N/A                                                                                   |