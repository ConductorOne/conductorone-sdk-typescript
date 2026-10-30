# TraceAllocation

TraceAllocation records one scope's historical limit and its source.

## Example Usage

```typescript
import { TraceAllocation } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TraceAllocation = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `budgetKey`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | Stable identifier for the scope's budget account.                                   |
| `limit`                                                                             | [shared.ResolvedLimit](../../../sdk/models/shared/resolvedlimit.md)                 | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `period`                                                                            | [shared.TraceAllocationPeriod](../../../sdk/models/shared/traceallocationperiod.md) | :heavy_minus_sign:                                                                  | Length of the budget period.                                                        |
| `source`                                                                            | [shared.AuthorityRef](../../../sdk/models/shared/authorityref.md)                   | :heavy_minus_sign:                                                                  | N/A                                                                                 |