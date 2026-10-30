# C1ApiFundsV1FundRuleServiceCreateResponse

## Example Usage

```typescript
import { C1ApiFundsV1FundRuleServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFundsV1FundRuleServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 10455,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `fundRuleServiceCreateResponse`                                                                     | [shared.FundRuleServiceCreateResponse](../../../sdk/models/shared/fundruleservicecreateresponse.md) | :heavy_minus_sign:                                                                                  | Successful response                                                                                 |