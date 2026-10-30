# TokenEconomics

TokenEconomics summarizes token usage and cost for settled calls.

## Example Usage

```typescript
import { TokenEconomics } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TokenEconomics = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `billableTokens`                                                  | *number*                                                          | :heavy_minus_sign:                                                | Total billable input, output, cache-read, and cache-write tokens. |
| `blendedCostPerMillionTokensNano`                                 | *number*                                                          | :heavy_minus_sign:                                                | Blended settled cost per million billable tokens.                 |
| `cacheReadTokens`                                                 | *number*                                                          | :heavy_minus_sign:                                                | Input tokens served from cache.                                   |
| `cacheReadValueNano`                                              | *number*                                                          | :heavy_minus_sign:                                                | Savings from cache reads compared with uncached input prices.     |
| `cacheWriteCostNano`                                              | *number*                                                          | :heavy_minus_sign:                                                | Cost of writing tokens to cache.                                  |
| `cacheWriteTokens`                                                | *number*                                                          | :heavy_minus_sign:                                                | Tokens written to cache.                                          |
| `inputTokens`                                                     | *number*                                                          | :heavy_minus_sign:                                                | Input tokens processed.                                           |
| `outputTokens`                                                    | *number*                                                          | :heavy_minus_sign:                                                | Output tokens generated.                                          |
| `reasoningTokens`                                                 | *number*                                                          | :heavy_minus_sign:                                                | Reasoning tokens generated.                                       |
| `settledCalls`                                                    | *number*                                                          | :heavy_minus_sign:                                                | Number of calls with settled spend.                               |