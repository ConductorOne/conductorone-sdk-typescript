# RateLimitUsage

RateLimitUsage is the live usage of one rate limit bucket. The X-RateLimit-* response headers report the limiter's view of the bucket that applied to a request.

## Example Usage

```typescript
import { RateLimitUsage } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RateLimitUsage = {};
```

## Fields

| Field                                                                                                                                                                               | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rateLimit`                                                                                                                                                                         | [shared.RateLimit](../../../sdk/models/shared/ratelimit.md)                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                  | N/A                                                                                                                                                                                 |
| `used`                                                                                                                                                                              | *number*                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                  | For WINDOW_PER_HOUR, the requests made in the last 60 minutes that counted against the limit; throttled requests do not count. For WINDOW_CONCURRENT, the requests in progress now. |