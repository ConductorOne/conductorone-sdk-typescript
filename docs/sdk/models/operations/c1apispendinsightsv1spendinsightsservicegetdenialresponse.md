# C1ApiSpendinsightsV1SpendInsightsServiceGetDenialResponse

## Example Usage

```typescript
import { C1ApiSpendinsightsV1SpendInsightsServiceGetDenialResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSpendinsightsV1SpendInsightsServiceGetDenialResponse = {
  contentType: "<value>",
  statusCode: 784218,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
| `getDenialResponse`                                                         | [shared.GetDenialResponse](../../../sdk/models/shared/getdenialresponse.md) | :heavy_minus_sign:                                                          | GetDenialResponse contains a denial episode and its first-refusal context.  |