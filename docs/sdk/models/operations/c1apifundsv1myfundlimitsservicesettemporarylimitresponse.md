# C1ApiFundsV1MyFundLimitsServiceSetTemporaryLimitResponse

## Example Usage

```typescript
import { C1ApiFundsV1MyFundLimitsServiceSetTemporaryLimitResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFundsV1MyFundLimitsServiceSetTemporaryLimitResponse = {
  contentType: "<value>",
  statusCode: 870679,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response content type for this operation                                                                                     |
| `statusCode`                                                                                                                      | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response status code for this operation                                                                                      |
| `rawResponse`                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                             | :heavy_check_mark:                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                           |
| `myFundLimitsServiceSetTemporaryLimitResponse`                                                                                    | [shared.MyFundLimitsServiceSetTemporaryLimitResponse](../../../sdk/models/shared/myfundlimitsservicesettemporarylimitresponse.md) | :heavy_minus_sign:                                                                                                                | Successful response                                                                                                               |