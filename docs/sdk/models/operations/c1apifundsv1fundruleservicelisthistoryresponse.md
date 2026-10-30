# C1ApiFundsV1FundRuleServiceListHistoryResponse

## Example Usage

```typescript
import { C1ApiFundsV1FundRuleServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFundsV1FundRuleServiceListHistoryResponse = {
  contentType: "<value>",
  statusCode: 333240,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `fundRuleServiceListHistoryResponse`                                                                          | [shared.FundRuleServiceListHistoryResponse](../../../sdk/models/shared/fundruleservicelisthistoryresponse.md) | :heavy_minus_sign:                                                                                            | Successful response                                                                                           |