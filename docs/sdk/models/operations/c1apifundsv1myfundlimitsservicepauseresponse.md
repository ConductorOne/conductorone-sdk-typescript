# C1ApiFundsV1MyFundLimitsServicePauseResponse

## Example Usage

```typescript
import { C1ApiFundsV1MyFundLimitsServicePauseResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFundsV1MyFundLimitsServicePauseResponse = {
  contentType: "<value>",
  statusCode: 355876,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `myFundLimitsServicePauseResponse`                                                                        | [shared.MyFundLimitsServicePauseResponse](../../../sdk/models/shared/myfundlimitsservicepauseresponse.md) | :heavy_minus_sign:                                                                                        | Successful response                                                                                       |