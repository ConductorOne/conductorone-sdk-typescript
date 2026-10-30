# C1ApiFundsV1AppCapServiceSetLimitResponse

## Example Usage

```typescript
import { C1ApiFundsV1AppCapServiceSetLimitResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFundsV1AppCapServiceSetLimitResponse = {
  contentType: "<value>",
  statusCode: 516710,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `appCapServiceSetLimitResponse`                                                                     | [shared.AppCapServiceSetLimitResponse](../../../sdk/models/shared/appcapservicesetlimitresponse.md) | :heavy_minus_sign:                                                                                  | Successful response                                                                                 |