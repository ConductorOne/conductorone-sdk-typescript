# EdgeServiceGetInferenceUsageSummaryResponse

The EdgeServiceGetInferenceUsageSummaryResponse message.

## Example Usage

```typescript
import { EdgeServiceGetInferenceUsageSummaryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceGetInferenceUsageSummaryResponse = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `authRejectedCount`                                                                   | *string*                                                                              | :heavy_minus_sign:                                                                    | See TBUsageSummary.auth_rejected_count and auth_rejected_total.                       |
| `authRejectedTotal`                                                                   | *string*                                                                              | :heavy_minus_sign:                                                                    | The authRejectedTotal field.                                                          |
| `modelBreakdown`                                                                      | [shared.TBUsageModelBreakdown](../../../sdk/models/shared/tbusagemodelbreakdown.md)[] | :heavy_minus_sign:                                                                    | The modelBreakdown field.                                                             |
| `series`                                                                              | [shared.TBUsageSummaryBucket](../../../sdk/models/shared/tbusagesummarybucket.md)[]   | :heavy_minus_sign:                                                                    | The series field.                                                                     |
| `totalCacheReadTokens`                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | The totalCacheReadTokens field.                                                       |
| `totalCacheWriteTokens`                                                               | *string*                                                                              | :heavy_minus_sign:                                                                    | The totalCacheWriteTokens field.                                                      |
| `totalInputTokens`                                                                    | *string*                                                                              | :heavy_minus_sign:                                                                    | The totalInputTokens field.                                                           |
| `totalOutputTokens`                                                                   | *string*                                                                              | :heavy_minus_sign:                                                                    | The totalOutputTokens field.                                                          |
| `totalRequests`                                                                       | *string*                                                                              | :heavy_minus_sign:                                                                    | The totalRequests field.                                                              |