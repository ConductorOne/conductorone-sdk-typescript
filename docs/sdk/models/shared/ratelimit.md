# RateLimit

RateLimit is one limit applied to API requests.

## Example Usage

```typescript
import { RateLimit } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RateLimit = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                  | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The number of requests allowed: per hour for WINDOW_PER_HOUR, or at the same time for WINDOW_CONCURRENT. |
| `scope`                                                                                                  | [shared.RateLimitScope](../../../sdk/models/shared/ratelimitscope.md)                                    | :heavy_minus_sign:                                                                                       | Whose requests the limit counts.                                                                         |
| `window`                                                                                                 | [shared.Window](../../../sdk/models/shared/window.md)                                                    | :heavy_minus_sign:                                                                                       | How the limit counts requests.                                                                           |