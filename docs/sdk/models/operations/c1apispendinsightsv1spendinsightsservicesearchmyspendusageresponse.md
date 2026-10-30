# C1ApiSpendinsightsV1SpendInsightsServiceSearchMySpendUsageResponse

## Example Usage

```typescript
import { C1ApiSpendinsightsV1SpendInsightsServiceSearchMySpendUsageResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSpendinsightsV1SpendInsightsServiceSearchMySpendUsageResponse =
  {
    contentType: "<value>",
    statusCode: 818211,
  };
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `searchMySpendUsageResponse`                                                                  | [shared.SearchMySpendUsageResponse](../../../sdk/models/shared/searchmyspendusageresponse.md) | :heavy_minus_sign:                                                                            | SearchMySpendUsageResponse contains one page of caller-only usage.                            |