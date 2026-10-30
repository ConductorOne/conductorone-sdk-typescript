# C1ChartTimeSeriesData

C1ChartTimeSeriesData is named series of (timestamp, value) points.

## Example Usage

```typescript
import { C1ChartTimeSeriesData } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1ChartTimeSeriesData = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `range`                                                                                       | [shared.C1ChartTimeRange](../../../sdk/models/shared/c1charttimerange.md)                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `series`                                                                                      | [shared.C1ChartSeries](../../../sdk/models/shared/c1chartseries.md)[]                         | :heavy_minus_sign:                                                                            | The series field.                                                                             |
| `style`                                                                                       | [shared.C1ChartTimeSeriesDataStyle](../../../sdk/models/shared/c1charttimeseriesdatastyle.md) | :heavy_minus_sign:                                                                            | The style field.                                                                              |