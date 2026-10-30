# C1ApiSpendinsightsV1SpendInsightsServiceGetMySpendStatusResponse

## Example Usage

```typescript
import { C1ApiSpendinsightsV1SpendInsightsServiceGetMySpendStatusResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSpendinsightsV1SpendInsightsServiceGetMySpendStatusResponse = {
  contentType: "<value>",
  statusCode: 326871,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `getMySpendStatusResponse`                                                                | [shared.GetMySpendStatusResponse](../../../sdk/models/shared/getmyspendstatusresponse.md) | :heavy_minus_sign:                                                                        | GetMySpendStatusResponse contains the caller's effective limits and optional denial.      |