# C1ApiFundsV1MyFundLimitsServiceClearTemporaryLimitResponse

## Example Usage

```typescript
import { C1ApiFundsV1MyFundLimitsServiceClearTemporaryLimitResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFundsV1MyFundLimitsServiceClearTemporaryLimitResponse = {
  contentType: "<value>",
  statusCode: 183524,
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                         | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response content type for this operation                                                                                         |
| `statusCode`                                                                                                                          | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response status code for this operation                                                                                          |
| `rawResponse`                                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                 | :heavy_check_mark:                                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                                               |
| `myFundLimitsServiceClearTemporaryLimitResponse`                                                                                      | [shared.MyFundLimitsServiceClearTemporaryLimitResponse](../../../sdk/models/shared/myfundlimitsservicecleartemporarylimitresponse.md) | :heavy_minus_sign:                                                                                                                    | Successful response                                                                                                                   |