# C1ApiSpendinsightsV1SpendInsightsServiceGetOverviewResponse

## Example Usage

```typescript
import { C1ApiSpendinsightsV1SpendInsightsServiceGetOverviewResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSpendinsightsV1SpendInsightsServiceGetOverviewResponse = {
  contentType: "<value>",
  statusCode: 822492,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `getOverviewResponse`                                                                                     | [shared.GetOverviewResponse](../../../sdk/models/shared/getoverviewresponse.md)                           | :heavy_minus_sign:                                                                                        | GetOverviewResponse contains current budget state and spend activity for the<br/> requested reporting window. |