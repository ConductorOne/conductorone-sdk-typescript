# TBUsageAttributionModelRow

One provider-native served model within a PROVIDER attribution group.
 Blank model_name is distinct from a model literally named "Unknown".

## Example Usage

```typescript
import { TBUsageAttributionModelRow } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TBUsageAttributionModelRow = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `cacheReadTokens`                | *string*                         | :heavy_minus_sign:               | The cacheReadTokens field.       |
| `cacheWriteTokens`               | *string*                         | :heavy_minus_sign:               | The cacheWriteTokens field.      |
| `costNanoUsd`                    | *number*                         | :heavy_minus_sign:               | The costNanoUsd field.           |
| `inputTokens`                    | *string*                         | :heavy_minus_sign:               | The inputTokens field.           |
| `missingUsageCallCount`          | *string*                         | :heavy_minus_sign:               | The missingUsageCallCount field. |
| `modelName`                      | *string*                         | :heavy_minus_sign:               | The modelName field.             |
| `outputTokens`                   | *string*                         | :heavy_minus_sign:               | The outputTokens field.          |
| `requestCount`                   | *string*                         | :heavy_minus_sign:               | The requestCount field.          |
| `unpricedRequestCount`           | *string*                         | :heavy_minus_sign:               | The unpricedRequestCount field.  |