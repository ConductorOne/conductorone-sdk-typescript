# DisabledReasonCircuitBreaker

DisabledReasonCircuitBreaker carries the trip context when an automation
 has been auto-disabled by its rate cap. Returned on the parent Automation
 when read; not directly settable.

## Example Usage

```typescript
import { DisabledReasonCircuitBreaker } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DisabledReasonCircuitBreaker = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `observedCount`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | Observed execution count in the period at trip time.                                          |
| `period`                                                                                      | [shared.Period](../../../sdk/models/shared/period.md)                                         | :heavy_minus_sign:                                                                            | Snapshot of the period at trip time.                                                          |
| `threshold`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | Snapshot of the threshold at trip time.                                                       |
| `trippedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |