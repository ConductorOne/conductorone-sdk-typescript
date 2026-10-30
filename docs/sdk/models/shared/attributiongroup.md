# AttributionGroup

AttributionGroup summarizes settled spend for one value of the requested
 attribution dimension. Missing values form their own group.

## Example Usage

```typescript
import { AttributionGroup } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AttributionGroup = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `billableTokens`                                                             | *number*                                                                     | :heavy_minus_sign:                                                           | Total billable tokens attributed to this group.                              |
| `blendedCostPerMillionTokensNano`                                            | *number*                                                                     | :heavy_minus_sign:                                                           | Blended settled cost per million billable tokens in this group.              |
| `cacheReadTokens`                                                            | *number*                                                                     | :heavy_minus_sign:                                                           | Input tokens served from cache for this group.                               |
| `cacheReadValueNano`                                                         | *number*                                                                     | :heavy_minus_sign:                                                           | Savings from cache reads compared with uncached input prices.                |
| `cacheWriteCostNano`                                                         | *number*                                                                     | :heavy_minus_sign:                                                           | Cost of writing tokens to cache.                                             |
| `cacheWriteTokens`                                                           | *number*                                                                     | :heavy_minus_sign:                                                           | Tokens written to cache for this group.                                      |
| `displayName`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | Display name recorded when the calls ran, when available.                    |
| `inputTokens`                                                                | *number*                                                                     | :heavy_minus_sign:                                                           | Input tokens attributed to this group.                                       |
| `key`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | Stable value for the requested dimension. Empty for the missing-value group. |
| `missing`                                                                    | *boolean*                                                                    | :heavy_minus_sign:                                                           | Whether this group represents calls missing the requested dimension.         |
| `outputTokens`                                                               | *number*                                                                     | :heavy_minus_sign:                                                           | Output tokens attributed to this group.                                      |
| `reasoningTokens`                                                            | *number*                                                                     | :heavy_minus_sign:                                                           | Reasoning tokens attributed to this group.                                   |
| `settledCalls`                                                               | *number*                                                                     | :heavy_minus_sign:                                                           | Number of settled calls in this group.                                       |
| `settledNano`                                                                | *number*                                                                     | :heavy_minus_sign:                                                           | Settled spend attributed to this group.                                      |