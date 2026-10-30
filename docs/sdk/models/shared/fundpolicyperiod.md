# FundPolicyPeriod

The root period every amount in the tenant is denominated in.

## Example Usage

```typescript
import { FundPolicyPeriod } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundPolicyPeriod = "PERIOD_KIND_DAILY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PERIOD_KIND_UNSPECIFIED" | "PERIOD_KIND_DAILY" | "PERIOD_KIND_WEEKLY" | "PERIOD_KIND_MONTHLY" | "PERIOD_KIND_QUARTERLY" | "PERIOD_KIND_YEARLY" | Unrecognized<string>
```