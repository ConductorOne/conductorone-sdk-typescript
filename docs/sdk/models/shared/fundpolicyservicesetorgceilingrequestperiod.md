# FundPolicyServiceSetOrgCeilingRequestPeriod

Optional period override for the ceiling. Only valid together with limit.

## Example Usage

```typescript
import { FundPolicyServiceSetOrgCeilingRequestPeriod } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundPolicyServiceSetOrgCeilingRequestPeriod = "PERIOD_KIND_MONTHLY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PERIOD_KIND_UNSPECIFIED" | "PERIOD_KIND_DAILY" | "PERIOD_KIND_WEEKLY" | "PERIOD_KIND_MONTHLY" | "PERIOD_KIND_QUARTERLY" | "PERIOD_KIND_YEARLY" | Unrecognized<string>
```