# C1ApiSpendinsightsV1SpendInsightsServiceGetAttributionRollupsResponse

## Example Usage

```typescript
import { C1ApiSpendinsightsV1SpendInsightsServiceGetAttributionRollupsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiSpendinsightsV1SpendInsightsServiceGetAttributionRollupsResponse = {
    contentType: "<value>",
    statusCode: 997497,
  };
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `getAttributionRollupsResponse`                                                                     | [shared.GetAttributionRollupsResponse](../../../sdk/models/shared/getattributionrollupsresponse.md) | :heavy_minus_sign:                                                                                  | GetAttributionRollupsResponse contains one page of ranked attribution groups.                       |