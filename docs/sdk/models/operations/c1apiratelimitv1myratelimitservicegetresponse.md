# C1ApiRatelimitV1MyRateLimitServiceGetResponse

## Example Usage

```typescript
import { C1ApiRatelimitV1MyRateLimitServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiRatelimitV1MyRateLimitServiceGetResponse = {
  contentType: "<value>",
  statusCode: 954872,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `myRateLimitServiceGetResponse`                                                                     | [shared.MyRateLimitServiceGetResponse](../../../sdk/models/shared/myratelimitservicegetresponse.md) | :heavy_minus_sign:                                                                                  | Successful response                                                                                 |