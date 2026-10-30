# MyEffectiveScopeFinancials

MyEffectiveScopeFinancials contains caller-owned budget amounts. It is
 present only for SUBJECT and SUBJECT_APP scopes that name the caller.

## Example Usage

```typescript
import { MyEffectiveScopeFinancials } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MyEffectiveScopeFinancials = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountInitialized`                                               | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether this budget account has recorded activity.                 |
| `hasRemainingNano`                                                 | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether remaining_nano is available for this scope.                |
| `lifetimeConsumedNano`                                             | *number*                                                           | :heavy_minus_sign:                                                 | Spend settled over the lifetime of the budget account.             |
| `limitNano`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | Effective spend limit. Zero when tracking is true.                 |
| `remainingNano`                                                    | *number*                                                           | :heavy_minus_sign:                                                 | Spend headroom after settled and reserved spend.                   |
| `reservedNano`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | Spend reserved by in-progress calls.                               |
| `tracking`                                                         | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether this scope records spend without enforcing a finite limit. |
| `windowCommittedNano`                                              | *number*                                                           | :heavy_minus_sign:                                                 | Settled plus reserved spend in the current budget period.          |
| `windowConsumedNano`                                               | *number*                                                           | :heavy_minus_sign:                                                 | Spend settled in the current budget period.                        |