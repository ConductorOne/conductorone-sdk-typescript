# FundsSpendLimit

SpendLimit distinguishes an amount, unlimited tracking and blocked supply.

This message contains a oneof named kind. Only a single field of the following list may be set at a time:
  - unlimited
  - amount
  - blocked


## Example Usage

```typescript
import { FundsSpendLimit } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundsSpendLimit = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `amount`                                                                                  | [shared.FundsSpendLimitAmount](../../../sdk/models/shared/fundsspendlimitamount.md)       | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `blocked`                                                                                 | [shared.FundsSpendLimitBlocked](../../../sdk/models/shared/fundsspendlimitblocked.md)     | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `unlimited`                                                                               | [shared.FundsSpendLimitUnlimited](../../../sdk/models/shared/fundsspendlimitunlimited.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |