# C1ApiSpendinsightsV1SpendInsightsServiceGetMySpendForecastResponse

## Example Usage

```typescript
import { C1ApiSpendinsightsV1SpendInsightsServiceGetMySpendForecastResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSpendinsightsV1SpendInsightsServiceGetMySpendForecastResponse =
  {
    contentType: "<value>",
    statusCode: 905315,
  };
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `getMetricForecastResponse`                                                                 | [shared.GetMetricForecastResponse](../../../sdk/models/shared/getmetricforecastresponse.md) | :heavy_minus_sign:                                                                          | GetMetricForecastResponse contains the forecast for the requested metric.                   |