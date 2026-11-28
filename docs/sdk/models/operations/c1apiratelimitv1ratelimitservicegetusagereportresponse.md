# C1ApiRatelimitV1RateLimitServiceGetUsageReportResponse

## Example Usage

```typescript
import { C1ApiRatelimitV1RateLimitServiceGetUsageReportResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiRatelimitV1RateLimitServiceGetUsageReportResponse = {
  contentType: "<value>",
  statusCode: 642486,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `rateLimitServiceGetUsageReportResponse`                                                                              | [shared.RateLimitServiceGetUsageReportResponse](../../../sdk/models/shared/ratelimitservicegetusagereportresponse.md) | :heavy_minus_sign:                                                                                                    | Successful response                                                                                                   |