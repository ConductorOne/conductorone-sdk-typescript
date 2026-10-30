# GetMetricForecastResponse

GetMetricForecastResponse contains the forecast for the requested metric.

## Example Usage

```typescript
import { GetMetricForecastResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetMetricForecastResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `forecastPoints`                                                                              | [shared.ForecastRollup](../../../sdk/models/shared/forecastrollup.md)[]                       | :heavy_minus_sign:                                                                            | The forecasted data points (future points only).                                              |
| `historyDaysLoaded`                                                                           | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of historical days loaded as context for the model (includes hidden history).      |
| `modelName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The model identifier used for inference.                                                      |
| `observedThrough`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |