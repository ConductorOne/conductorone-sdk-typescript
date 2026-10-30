# ForecastPoint

ForecastPoint represents projected spend for one future UTC day.

## Example Usage

```typescript
import { ForecastPoint } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ForecastPoint = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `day`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `p20Nano`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | Low spend projection for the day.                                                             |
| `p50Nano`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | Median spend projection for the day.                                                          |
| `p80Nano`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | High spend projection for the day.                                                            |